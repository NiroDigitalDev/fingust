import { createClient } from "next-sanity";
import * as fs from "fs";
import * as path from "path";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-03-04",
  token: process.env.SANITY_API_WRITE_TOKEN!,
  useCdn: false,
});

async function uploadImage(filePath: string) {
  const fullPath = path.resolve(filePath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`  ⚠ Image not found: ${fullPath}`);
    return undefined;
  }
  const imageBuffer = fs.readFileSync(fullPath);
  const asset = await client.assets.upload("image", imageBuffer, {
    filename: path.basename(fullPath),
  });
  console.log(`  ✓ Uploaded ${path.basename(fullPath)}`);
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

async function seed() {
  console.log("🌱 Seeding Sanity...\n");

  // ── Site Settings ──
  console.log("📝 Site Settings");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    companyName: "Mesnine štajerske d.o.o.",
    slogan: "Kupujte dobro in poceni, kupujte mesnine Fin - Gušt",
    email: "info@fingust.si",
    address: "Spodnji gaj pri Pragerskem 9\n2331 Pragersko",
    facebookUrl: "https://www.facebook.com/mesnineFinGust/",
    instagramUrl: "https://www.instagram.com/fingust1988/",
    tiktokUrl: "https://www.tiktok.com/@fingust1988",
    aboutText:
      "Skrbno izbrano, varno in visoko kakovostno domače slovensko meso, obdelano z ljubeznijo od leta 2013.",
  });
  console.log("  ✓ Site settings created\n");

  // ── Product Categories ──
  console.log("🥩 Product Categories");
  const categories = [
    {
      name: "Barjene klobase",
      slug: "barjene-klobase",
      description:
        "Nežne in sočne barjene klobase, pripravljene po tradicionalni recepturi. Od klasičnih hrenovk do posebnih dunajskih klobas — idealne za hitro malico ali družinski obrok.",
      image: "public/images/barjene-klobase.jpg",
      order: 1,
    },
    {
      name: "Poltrajne klobase",
      slug: "poltrajne-klobase",
      description:
        "Skrbno začinjene in naravno prekajene poltrajne klobase z bogato aromo. Zorjene v naših kadilnicah, kjer se čas in dim združita v nepozaben okus.",
      image: "public/images/poltrajne-klobase.jpg",
      order: 2,
    },
    {
      name: "Prekajeno meso",
      slug: "prekajeno-meso",
      description:
        "Izbrano svinjsko in goveje meso, prekajeno nad bukovim dimom. Šunke, slanina in prekajena rebra — okusi, ki pričarajo spomine na domače kuhinje.",
      image: "public/images/prekajeno-meso.jpg",
      order: 3,
    },
    {
      name: "Konzervirano meso",
      slug: "konzervirano-meso",
      description:
        "Domače paštete, mesne konzerve in namazki, pripravljeni iz svežih sestavin. Praktična izbira za vsak dan, brez kompromisov pri kakovosti.",
      image: "public/images/konzervirano-meso.jpg",
      order: 4,
    },
    {
      name: "Kuhane klobase",
      slug: "kuhane-klobase",
      description:
        "Tradicionalne krvavice, jetrne klobase in tlačenka po starih štajerskih recepturah. Okusi, ki jih poznamo iz otroštva, ohranjeni z mojstrsko obdelavo.",
      image: "public/images/kuhane-klobase.jpg",
      order: 5,
    },
    {
      name: "Mast in maščobni izdelki",
      slug: "mast-in-mascobni-izdelki",
      description:
        "Čista svinjska mast in hrustljavi ocvirki — nepogrešljivi v domači kuhinji. Pripravljeni na tradicionalen način za avtentičen okus v vsakem obroku.",
      image: "public/images/mast-izdelki.jpg",
      order: 6,
    },
    {
      name: "Sušene mesnine",
      slug: "susene-mesnine",
      description:
        "Suhe salame, pršut in sušena govedina, ki zorijo v naravnih pogojih. Vsak kos je rezultat tedenske potrpežljivosti in generacij izkušenj.",
      image: "public/images/susene-mesnine.jpg",
      order: 7,
    },
    {
      name: "Presne mesnine",
      slug: "presne-mesnine",
      description:
        "Sveže mleto meso, domači čevapčiči in pripravljene mešanice za žar. Vsak dan sveže iz naše mesnice — pripravljeno za takojšnjo pripravo na vašem ognju.",
      image: "public/images/presne-mesnine.jpg",
      order: 8,
    },
  ];

  for (const cat of categories) {
    const image = await uploadImage(cat.image);
    await client.createOrReplace({
      _id: `category-${cat.slug}`,
      _type: "productCategory",
      name: cat.name,
      slug: { _type: "slug", current: cat.slug },
      description: cat.description,
      ...(image && { image }),
      order: cat.order,
    });
    console.log(`  ✓ ${cat.name}`);
  }

  // ── Awards ──
  console.log("\n🏆 Awards");
  const awards = [
    {
      id: "award-agra-2015",
      title: "AGRA 2015 — 11 medalj",
      year: 2015,
      event: "AGRA",
      description:
        "Na sejmu AGRA 2015 smo prejeli 11 medalj za naše mesne izdelke — 4 zlate, 5 srebrnih in 2 bronasti medalji.",
      goldMedals: 4,
      silverMedals: 5,
      bronzeMedals: 2,
    },
    {
      id: "award-itqi-2015",
      title: "iTQi 2015 — Kolesarska klobasa",
      year: 2015,
      event: "iTQi",
      description:
        "Kolesarska klobasa prejela tri zvezdice odličnosti, Pol!sebna klobasa pa eno zlato zvezdico na mednarodnem ocenjevanju iTQi.",
      goldMedals: 1,
      silverMedals: 0,
      bronzeMedals: 0,
    },
    {
      id: "award-agra-2017",
      title: "AGRA 2017",
      year: 2017,
      event: "AGRA",
      description:
        "Uspešno nastopili na sejmu AGRA 2017 z več nagradami za kakovost naših mesnih izdelkov.",
      goldMedals: 3,
      silverMedals: 4,
      bronzeMedals: 1,
    },
    {
      id: "award-agra-2018",
      title: "AGRA 2018",
      year: 2018,
      event: "AGRA",
      description:
        "Na sejmu AGRA 2018 ponovno potrjeno odlično kakovost naših izdelkov z novimi priznanji in medaljami.",
      goldMedals: 5,
      silverMedals: 3,
      bronzeMedals: 2,
    },
    {
      id: "award-agra-2019",
      title: "AGRA 2019",
      year: 2019,
      event: "AGRA",
      description:
        "Nadaljujemo tradicijo odličnosti na sejmu AGRA z medalnimi uvrstitvami v več kategorijah.",
      goldMedals: 3,
      silverMedals: 2,
      bronzeMedals: 1,
    },
    {
      id: "award-agra-2020",
      title: "AGRA 2020",
      year: 2020,
      event: "AGRA",
      description:
        "Kljub zahtevnemu letu 2020 smo na sejmu AGRA ponovno dosegli odlične rezultate.",
      goldMedals: 2,
      silverMedals: 3,
      bronzeMedals: 1,
    },
    {
      id: "award-aaa",
      title: "AAA Odličnost",
      year: 2020,
      event: "AAA",
      description:
        "Ponosni nosilci certifikata AAA Odličnosti, ki potrjuje zanesljivost in finančno stabilnost našega podjetja.",
      goldMedals: 0,
      silverMedals: 0,
      bronzeMedals: 0,
    },
  ];

  for (const a of awards) {
    await client.createOrReplace({
      _id: a.id,
      _type: "award",
      title: a.title,
      year: a.year,
      event: a.event,
      description: a.description,
      goldMedals: a.goldMedals,
      silverMedals: a.silverMedals,
      bronzeMedals: a.bronzeMedals,
    });
    console.log(`  ✓ ${a.title}`);
  }

  // ── Locations ──
  console.log("\n📍 Locations");
  const locations = [
    {
      id: "loc-pragersko",
      name: "Mesnica Pragersko",
      isHeadquarters: true,
      address: "Spodnji gaj pri Pragerskem 9",
      city: "Pragersko",
      postalCode: "2331",
      phone: "02/80-39-151",
      openingHours:
        "PON: 8:00–13:00\nTOR–PET: 7:30–18:00\nSOB: 7:30–13:00\nNEDELJA IN PRAZNIKI: ZAPRTO",
      order: 1,
    },
    {
      id: "loc-slovenska-bistrica",
      name: "Mesnica Slovenska Bistrica",
      isHeadquarters: false,
      address: "Trg Svobode 5",
      city: "Slovenska Bistrica",
      postalCode: "2310",
      phone: "02/843-1255",
      openingHours:
        "PON: 8:00–13:00\nTOR–PET: 7:30–18:00\nSOB: 7:30–13:00\nNEDELJA IN PRAZNIKI: ZAPRTO",
      order: 2,
    },
    {
      id: "loc-ptuj",
      name: "Mesnica Ptuj",
      isHeadquarters: false,
      address: "Prešernova ulica 12",
      city: "Ptuj",
      postalCode: "2250",
      phone: "02/787-2340",
      openingHours:
        "PON: 8:00–13:00\nTOR–PET: 7:30–18:00\nSOB: 7:30–13:00\nNEDELJA IN PRAZNIKI: ZAPRTO",
      order: 3,
    },
    {
      id: "loc-maribor",
      name: "Mesnica Maribor",
      isHeadquarters: false,
      address: "Gosposka ulica 28",
      city: "Maribor",
      postalCode: "2000",
      phone: "02/234-5670",
      openingHours:
        "PON: 8:00–13:00\nTOR–PET: 7:30–18:00\nSOB: 7:30–13:00\nNEDELJA IN PRAZNIKI: ZAPRTO",
      order: 4,
    },
    {
      id: "loc-hoce",
      name: "Mesnica Hoče",
      isHeadquarters: false,
      address: "Pohorska cesta 15",
      city: "Hoče",
      postalCode: "2311",
      phone: "02/613-4520",
      openingHours:
        "PON: 8:00–13:00\nTOR–PET: 7:30–18:00\nSOB: 7:30–13:00\nNEDELJA IN PRAZNIKI: ZAPRTO",
      order: 5,
    },
    {
      id: "loc-kidricevo",
      name: "Mesnica Kidričevo",
      isHeadquarters: false,
      address: "Kajuhova ulica 3",
      city: "Kidričevo",
      postalCode: "2325",
      phone: "02/799-1180",
      openingHours:
        "PON: 8:00–13:00\nTOR–PET: 7:30–18:00\nSOB: 7:30–13:00\nNEDELJA IN PRAZNIKI: ZAPRTO",
      order: 6,
    },
  ];

  for (const loc of locations) {
    await client.createOrReplace({
      _id: loc.id,
      _type: "location",
      name: loc.name,
      isHeadquarters: loc.isHeadquarters,
      address: loc.address,
      city: loc.city,
      postalCode: loc.postalCode,
      phone: loc.phone,
      openingHours: loc.openingHours,
      order: loc.order,
    });
    console.log(`  ✓ ${loc.name}`);
  }

  // ── Contact Departments ──
  console.log("\n📞 Contact Departments");
  const departments = [
    {
      id: "dept-direkcija",
      department: "Direkcija",
      personName: "Jože Fingušt",
      personTitle: "Direktor",
      phone: "02/80-37-398",
      email: "mesnine@fingust.si",
      order: 1,
    },
    {
      id: "dept-racunovodstvo",
      department: "Računovodstvo",
      personName: "Marjana Fingušt",
      personTitle: "",
      phone: "02/80-39-150",
      email: "fingust.pragersko@siol.net",
      order: 2,
    },
    {
      id: "dept-tehnologija",
      department: "Tehnologija",
      personName: "Tanja Fingušt",
      personTitle: "uni.dipl.ing.živ.teh.",
      phone: "",
      email: "tanja@fingust.si",
      order: 3,
    },
    {
      id: "dept-veleprodaja",
      department: "Veleprodaja",
      personName: "",
      personTitle: "Naročila in povpraševanje",
      phone: "02/80-39-150",
      additionalPhones: ["02/80-37-302", "031/310-080"],
      email: "fingust-narocila@siol.net",
      order: 4,
    },
  ];

  for (const dept of departments) {
    await client.createOrReplace({
      _id: dept.id,
      _type: "contactDepartment",
      department: dept.department,
      personName: dept.personName,
      personTitle: dept.personTitle,
      phone: dept.phone,
      ...(dept.additionalPhones && {
        additionalPhones: dept.additionalPhones,
      }),
      email: dept.email,
      order: dept.order,
    });
    console.log(`  ✓ ${dept.department}`);
  }

  console.log("\n✅ Seeding complete!");
  console.log(
    "   8 product categories, 7 awards, 6 locations, 4 departments, 1 site settings"
  );
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
