import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import { SanityLive } from "@/lib/sanity.live";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDraftMode = (await draftMode()).isEnabled;

  return (
    <html
      lang="sl"
      className={`${outfit.variable} ${playfairDisplay.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased selection:bg-brand-burgundy selection:text-white">
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
        {children}
        {isDraftMode && <VisualEditing />}
        <SanityLive />
        <Analytics />
      </body>
    </html>
  );
}
