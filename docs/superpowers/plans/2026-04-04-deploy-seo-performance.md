# Deploy, SEO & Image Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deploy Fingust to Vercel, add complete SEO (sitemap, robots, OG image, structured data), and convert all static images from JPG to WebP.

**Architecture:** Three independent workstreams — (1) image conversion with reference updates, (2) SEO file creation and metadata enhancement, (3) Vercel deployment with env var sync. Image conversion and SEO can run in parallel; deployment depends on both completing.

**Tech Stack:** Next.js 16.2.2, Tailwind CSS 4, Sanity CMS, Vercel, sharp (for image conversion)

---

## File Structure

**New files:**
- `app/sitemap.ts` — dynamic sitemap generation
- `app/robots.ts` — crawl directives
- `app/opengraph-image.png` — default OG image (generated via image-gen skill)
- `scripts/convert-images.mjs` — one-time JPG-to-WebP conversion script

**Modified files:**
- `app/layout.tsx` — add expanded metadata with OG defaults + JSON-LD
- `app/page.tsx` — add metadata export, update .jpg refs to .webp
- `app/o-podjetju/page.tsx` — update .jpg refs to .webp
- `app/izdelki/page.tsx` — update .jpg refs to .webp
- `app/kakovost/page.tsx` — update .jpg refs to .webp, add Metadata type
- `app/kontakt/page.tsx` — update .jpg refs to .webp
- `app/poslovalnice/page.tsx` — update .jpg refs to .webp
- `app/priznanja/page.tsx` — update .jpg refs to .webp

---

### Task 1: Convert all JPG images to WebP

**Files:**
- Create: `scripts/convert-images.mjs`
- Modify: all files in `public/images/` (20 JPG files)

- [ ] **Step 1: Install sharp as a dev dependency**

```bash
npm install --save-dev sharp
```

- [ ] **Step 2: Create the conversion script**

Create `scripts/convert-images.mjs`:

```javascript
import sharp from "sharp";
import { readdir, unlink } from "node:fs/promises";
import { join } from "node:path";

const dir = join(import.meta.dirname, "..", "public", "images");
const files = (await readdir(dir)).filter((f) => f.endsWith(".jpg"));

console.log(`Converting ${files.length} JPG files to WebP...\n`);

for (const file of files) {
  const input = join(dir, file);
  const output = join(dir, file.replace(".jpg", ".webp"));
  const info = await sharp(input).webp({ quality: 82 }).toFile(output);
  console.log(`  ${file} -> ${file.replace(".jpg", ".webp")} (${info.size} bytes)`);
}

console.log("\nRemoving original JPG files...");
for (const file of files) {
  await unlink(join(dir, file));
}

console.log("Done.");
```

- [ ] **Step 3: Run the conversion script**

```bash
node scripts/convert-images.mjs
```

Expected: 20 files converted, originals deleted. Verify with:

```bash
ls public/images/
```

Should show only `.webp` files (plus `hero-bg.webp`).

- [ ] **Step 4: Remove the conversion script and sharp dev dependency**

```bash
rm scripts/convert-images.mjs
npm uninstall sharp
rmdir scripts 2>/dev/null || true
```

- [ ] **Step 5: Commit**

```bash
git add public/images/ package.json package-lock.json
git commit -m "perf: convert all JPG images to WebP format"
```

---

### Task 2: Update all image references from .jpg to .webp

**Files:**
- Modify: `app/page.tsx` (lines 23, 29, 35, 174, 342)
- Modify: `app/o-podjetju/page.tsx` (lines 66, 185, 213)
- Modify: `app/izdelki/page.tsx` (line 37)
- Modify: `app/kakovost/page.tsx` (lines 41, 274)
- Modify: `app/kontakt/page.tsx` (line 86)
- Modify: `app/poslovalnice/page.tsx` (line 101)
- Modify: `app/priznanja/page.tsx` (lines 66, 340)

- [ ] **Step 1: Bulk replace .jpg with .webp across all page files**

In every file listed above, replace all occurrences of `.jpg"` with `.webp"`. The specific replacements:

**`app/page.tsx`** — 5 occurrences:
- Line 23: `"/images/sveze-meso.jpg"` -> `"/images/sveze-meso.webp"`
- Line 29: `"/images/suhomesnato.jpg"` -> `"/images/suhomesnato.webp"`
- Line 35: `"/images/zar-program.jpg"` -> `"/images/zar-program.webp"`
- Line 174: `"/images/sveze-meso.jpg"` -> `"/images/sveze-meso.webp"`
- Line 342: `"/images/butcher-portrait.jpg"` -> `"/images/butcher-portrait.webp"`

**`app/o-podjetju/page.tsx`** — 3 occurrences:
- Line 66: `"/images/podjetje-zgodovina.jpg"` -> `"/images/podjetje-zgodovina.webp"`
- Line 185: `"/images/podjetje-team.jpg"` -> `"/images/podjetje-team.webp"`
- Line 213: `"/images/podjetje-dostava.jpg"` -> `"/images/podjetje-dostava.webp"`

**`app/izdelki/page.tsx`** — 1 occurrence:
- Line 37: `"/images/sveze-meso.jpg"` -> `"/images/sveze-meso.webp"`

**`app/kakovost/page.tsx`** — 2 occurrences:
- Line 41: `"/images/kakovost-facility.jpg"` -> `"/images/kakovost-facility.webp"`
- Line 274: `"/images/kakovost-inspection.jpg"` -> `"/images/kakovost-inspection.webp"`

**`app/kontakt/page.tsx`** — 1 occurrence:
- Line 86: `"/images/butcher-portrait.jpg"` -> `"/images/butcher-portrait.webp"`

**`app/poslovalnice/page.tsx`** — 1 occurrence:
- Line 101: `"/images/poslovalnica-storefront.jpg"` -> `"/images/poslovalnica-storefront.webp"`

**`app/priznanja/page.tsx`** — 2 occurrences:
- Line 66: `"/images/priznanja-medals.jpg"` -> `"/images/priznanja-medals.webp"`
- Line 340: `"/images/priznanja-agra.jpg"` -> `"/images/priznanja-agra.webp"`

- [ ] **Step 2: Verify no .jpg references remain**

```bash
grep -r '\.jpg' app/ components/ --include="*.tsx" --include="*.ts"
```

Expected: No matches (Sanity CDN images use dynamic URLs, not `.jpg` literals).

- [ ] **Step 3: Test the build compiles**

```bash
npm run build
```

Expected: Build succeeds with no missing image errors.

- [ ] **Step 4: Commit**

```bash
git add app/
git commit -m "perf: update all image references from .jpg to .webp"
```

---

### Task 3: Add homepage metadata export

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Add metadata export to homepage**

Add after the imports (before line 11) in `app/page.tsx`:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mesnice Fingušt — Sveže domače meso in suhomesnate specialitete",
  description:
    "Mesnice Fingušt - Mesnine štajerske d.o.o. Nudimo sveže domače meso, suhomesnate izdelke in žar program z garancijo kakovosti. 6 mesnic po Štajerski.",
};
```

Note: `Metadata` type import — check if `next` already exports it in the Next.js 16 version by reading `node_modules/next/dist/docs/` if unsure.

- [ ] **Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "seo: add metadata export to homepage"
```

---

### Task 4: Create sitemap.ts

**Files:**
- Create: `app/sitemap.ts`

- [ ] **Step 1: Create the sitemap file**

Check Next.js 16 sitemap API first:
```bash
find node_modules/next/dist/docs -name "*sitemap*" 2>/dev/null | head -5
```

If no docs found, use the standard App Router sitemap convention. Create `app/sitemap.ts`:

```typescript
import type { MetadataRoute } from "next";

const BASE_URL = "https://fingust.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/izdelki",
    "/kakovost",
    "/o-podjetju",
    "/poslovalnice",
    "/priznanja",
    "/kontakt",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
```

- [ ] **Step 2: Verify sitemap generates**

```bash
npm run build
```

Check that `.next/server/app/sitemap.xml` or equivalent is generated.

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts
git commit -m "seo: add dynamic sitemap.ts"
```

---

### Task 5: Create robots.ts

**Files:**
- Create: `app/robots.ts`

- [ ] **Step 1: Create the robots file**

Create `app/robots.ts`:

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/api/"],
      },
    ],
    sitemap: "https://fingust.vercel.app/sitemap.xml",
  };
}
```

- [ ] **Step 2: Commit**

```bash
git add app/robots.ts
git commit -m "seo: add robots.ts with crawl directives"
```

---

### Task 6: Generate OG image and enhance root layout metadata

**Files:**
- Create: `app/opengraph-image.png` (via image-gen skill)
- Modify: `app/layout.tsx`

- [ ] **Step 1: Generate OG image**

Use the image-gen skill to generate a 1200x630 OG image with:
- Background: burgundy (#661414) to charcoal (#1A1918) gradient
- Text: "Mesnice Fingušt" in a serif font (Playfair Display style)
- Subtitle: "Sveže domače meso in suhomesnate specialitete"
- Style: elegant, minimal, matching brand identity
- Save to: `app/opengraph-image.png`

- [ ] **Step 2: Enhance root layout metadata**

Update `app/layout.tsx` metadata (lines 21-25) to:

```typescript
export const metadata: Metadata = {
  title: {
    default: "Mesnice Fingušt",
    template: "%s | Mesnice Fingušt",
  },
  description:
    "Mesnice Fingušt - Mesnine štajerske d.o.o. Nudimo sveže domače meso, suhomesnate izdelke in žar program z garancijo kakovosti.",
  metadataBase: new URL("https://fingust.vercel.app"),
  openGraph: {
    type: "website",
    locale: "sl_SI",
    siteName: "Mesnice Fingušt",
  },
};
```

Note: When using `title.template`, update all page-level metadata to use just the page-specific part (e.g. `"Izdelki"` instead of `"Izdelki | Mesnice Fingušt"`), since the template appends `| Mesnice Fingušt` automatically. Pages to update:
- `app/izdelki/page.tsx`: `"Izdelki"`
- `app/o-podjetju/page.tsx`: `"O podjetju"`
- `app/kakovost/page.tsx`: `"Kakovost"`
- `app/kontakt/page.tsx`: `"Kontakt"`
- `app/poslovalnice/page.tsx`: `"Poslovalnice"`
- `app/priznanja/page.tsx`: `"Priznanja in nagrade"`

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx app/opengraph-image.png app/izdelki/page.tsx app/o-podjetju/page.tsx app/kakovost/page.tsx app/kontakt/page.tsx app/poslovalnice/page.tsx app/priznanja/page.tsx
git commit -m "seo: add OG image and enhance root layout metadata with title template"
```

---

### Task 7: Add JSON-LD structured data

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Add JSON-LD LocalBusiness script to layout**

In `app/layout.tsx`, add inside `<head>` (or as a `<script>` in `<body>`) a JSON-LD block. Since Next.js App Router handles `<head>` via metadata, add the script tag inside the `<body>`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Mesnice Fingušt - Mesnine štajerske d.o.o.",
      description:
        "Sveže domače meso, suhomesnati izdelki in žar program z garancijo kakovosti.",
      url: "https://fingust.vercel.app",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Spodnji gaj pri Pragerskem 9",
        addressLocality: "Pragersko",
        postalCode: "2331",
        addressCountry: "SI",
      },
      email: "info@fingust.si",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 35 },
      foundingDate: "1988",
    }),
  }}
/>
```

Place this right before `{children}` in the body.

- [ ] **Step 2: Verify build succeeds**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "seo: add JSON-LD LocalBusiness structured data"
```

---

### Task 8: Deploy to Vercel

**Files:** None (deployment only)

- [ ] **Step 1: Ensure env vars are synced to Vercel**

```bash
vercel env ls
```

Verify these are present: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_READ_TOKEN`, `SANITY_API_WRITE_TOKEN`, `SANITY_REVALIDATE_SECRET`.

If any are missing, add them:
```bash
vercel env add VARIABLE_NAME
```

Or pull from local:
```bash
vercel env pull
```

- [ ] **Step 2: Deploy to production**

```bash
vercel --prod
```

Expected: Deployment succeeds, live at `https://fingust.vercel.app`.

- [ ] **Step 3: Verify deployment**

Check these URLs work:
- `https://fingust.vercel.app` — homepage loads
- `https://fingust.vercel.app/studio` — Sanity Studio accessible
- `https://fingust.vercel.app/sitemap.xml` — sitemap renders
- `https://fingust.vercel.app/robots.txt` — robots.txt renders
- `https://fingust.vercel.app/opengraph-image.png` — OG image loads

- [ ] **Step 4: Commit any deployment artifacts if needed**

Usually nothing to commit after deploy, but verify:
```bash
git status
```
