import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-03-04",
  token: process.env.SANITY_API_WRITE_TOKEN!,
  useCdn: false,
});

function block(text: string) {
  return {
    _type: "block",
    _key: Math.random().toString(36).slice(2, 10),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: "s1", text, marks: [] }],
  };
}

function heading(text: string, style: string = "h3") {
  return {
    _type: "block",
    _key: Math.random().toString(36).slice(2, 10),
    style,
    markDefs: [],
    children: [{ _type: "span", _key: "s1", text, marks: [] }],
  };
}

async function seed() {
  console.log("🌱 Seeding page singletons...\n");

  // ── Home Page ──
  console.log("🏠 Home Page");
  await client.createOrReplace({
    _id: "homePage",
    _type: "homePage",
    heroTitle: "Čista",
    heroTitleAccent: "tradicija.",
    heroSubtitle:
      "Skrbno izbrano, varno in visoko kakovostno domače slovensko meso, obdelano z ljubeznijo od leta 2013.",
    featuredProducts: [
      {
        _key: "fp1",
        title: "Sveže meso",
        description:
          "Vrhunsko lokalno meso, pridelano na naraven način. Naša govedina, svinjina in perutnina so skrbno izbrane za popoln okus na vaši mizi.",
      },
      {
        _key: "fp2",
        title: "Suhomesnato",
        description:
          "Nagrajene salame, klobase in pršuti, ki zorijo z navdihom narave. Ustvarjeno po starih družinskih recepturah za trenutke, ki se jih spominjamo.",
      },
      {
        _key: "fp3",
        title: "Žar Program",
        description:
          "Specialitete, zasnovane za ogenj. Od sočnih čevapčičev do skrbno mariniranih kosov za vrhunske kulinarične dogodke na prostem.",
      },
    ],
    aboutTitle: "Ponosni na našo kakovost.",
    aboutText: [
      block(
        "Z uspešno rekonstrukcijo objektov in nabavo posodobljene tehnološke opreme zagotavljamo najvišje standarde varnosti in higiene."
      ),
      block(
        "Konstantno prisotni in nagrajeni na sejmu AGRA. Ponosni nosilci certifikata AAA Odličnosti."
      ),
    ],
  });
  console.log("  ✓ Home page created\n");

  // ── About Page ──
  console.log("📖 About Page");
  await client.createOrReplace({
    _id: "aboutPage",
    _type: "aboutPage",
    heroTitle: "Naša zgodba.",
    heroSubtitle: "Od leta 1988",
    introText: [
      block(
        "Začetki družinskega podjetja Fingušt segajo v leto 1988, ko smo začeli poslovati s prvo mesnico. Danes podjetje sestavlja proizvodnja mesa in mesnih izdelkov ter šest lastnih mesnic."
      ),
      block(
        "Zaposluje okoli 35 delavcev, ki delajo v proizvodnji s sodobno tehnologijo. Proizvodnjo in predelavo mesa redno nadzirajo pristojne veterinarske službe."
      ),
      block(
        "V vseh fazah proizvodnje izvajamo notranji nadzor po načelih sistema HACCP in IFS standardu, kar pomeni, da zagotavljamo varnost in kakovost proizvodnje, hkrati pa zagotavljamo sledljivost mesa in mesnih izdelkov."
      ),
    ],
    milestones: [
      {
        _key: "m1",
        year: "1988",
        title: "Prva mesnica",
        description:
          "Družina Fingušt odpre prvo mesnico in postavi temelje podjetja.",
      },
      {
        _key: "m2",
        year: "1996",
        title: "Razširitev proizvodnje",
        description:
          "Odprtje lastne proizvodnje mesnih izdelkov z modernizirano opremo.",
      },
      {
        _key: "m3",
        year: "2013",
        title: "Mesnine štajerske d.o.o.",
        description:
          "Formalna ustanovitev podjetja Mesnine štajerske d.o.o. in širitev na šest poslovalnic.",
      },
      {
        _key: "m4",
        year: "2018",
        title: "Modernizacija",
        description:
          "Rekonstrukcija objektov in nabava posodobljene tehnološke opreme za najvišje standarde.",
      },
    ],
    stats: [
      { _key: "s1", value: "35+", label: "Zaposlenih" },
      { _key: "s2", value: "6", label: "Mesnic" },
      { _key: "s3", value: "1988", label: "Ustanovljeno" },
      { _key: "s4", value: "500+", label: "Dnevnih odjemalcev" },
    ],
  });
  console.log("  ✓ About page created\n");

  // ── Quality Page ──
  console.log("✅ Quality Page");
  await client.createOrReplace({
    _id: "qualityPage",
    _type: "qualityPage",
    heroTitle: "Kakovost brez kompromisov.",
    heroSubtitle: "Standardi odličnosti",
    introText: [
      block(
        "Kakovost naših izdelkov ni naključje — je rezultat doslednega nadzora, certificiranih procesov in predanosti, ki sega v vsako fazo proizvodnje."
      ),
      block(
        "Z vspostavljenim HACCP sistemom in IFS standardom (višji nivo) zagotavljamo, da vsak izdelek izpolnjuje najvišje zahteve varnosti in kakovosti."
      ),
    ],
    haccpTitle: "HACCP sistem",
    haccpDescription: [
      heading("Analiza tveganj in kritične kontrolne točke", "h4"),
      block(
        "HACCP (Hazard Analysis and Critical Control Points) je mednarodno priznan sistem za zagotavljanje varnosti živil. Naš sistem identificira, ocenjuje in nadzira tveganja v celotnem procesu — od sprejema surovin do končnega izdelka."
      ),
      block(
        "Z doslednim izvajanjem HACCP načel zagotavljamo, da so vsi naši izdelki varni za uživanje in pripravljeni v skladu z najstrožjimi higienskimi standardi."
      ),
    ],
    ifsTitle: "IFS standard",
    ifsDescription: [
      heading("Mednarodni standard za varnost živil — višji nivo", "h4"),
      block(
        "IFS (International Featured Standards) Food je globalni standard za revizijo kakovosti in varnosti živil. Naše podjetje je certificirano na višjem nivoju, kar potrjuje odličnost naših procesov."
      ),
      block(
        "Certificiranje redno obnavljamo — vsako leto pristojni revizorji preverijo skladnost naše proizvodnje z zahtevami standarda."
      ),
    ],
    certificates: [
      { _key: "c1", period: "2012/13", name: "IFS certifikat" },
      { _key: "c2", period: "2014/15", name: "IFS certifikat" },
      { _key: "c3", period: "2015/16", name: "IFS certifikat" },
      { _key: "c4", period: "2016/17", name: "IFS certifikat" },
      { _key: "c5", period: "2017/18", name: "IFS certifikat" },
      { _key: "c6", period: "2018/19", name: "IFS certifikat" },
      { _key: "c7", period: "2019/20", name: "IFS certifikat" },
    ],
    traceabilityText: [
      heading("Popolna sledljivost", "h3"),
      block(
        "Zagotavljamo 100% sledljivost vseh naših izdelkov — od kmetije do vaše mize. Vsaka šarža mesa in mesnih izdelkov je dokumentirana in sledljiva skozi vse faze predelave."
      ),
      block(
        "Pristojne veterinarske službe redno nadzirajo vse faze naše proizvodnje, kar zagotavlja dodatno varnost in zaupanje v naše izdelke."
      ),
    ],
  });
  console.log("  ✓ Quality page created\n");

  console.log("✅ All page singletons seeded!");
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
