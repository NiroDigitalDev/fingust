import Image from "next/image";
import Navbar from "@/components/navbar";
import PageHeader from "@/components/page-header";
import ScrollReveal from "@/components/scroll-reveal";
import Footer from "@/components/footer";

export const metadata = {
  title: "Kakovost | Mesnice Fingušt",
  description:
    "Zagotavljamo najvišje standarde varnosti in kakovosti z IFS in HACCP certifikati.",
};

const certificates = [
  "2012/13",
  "2014/15",
  "2015/16",
  "2016/17",
  "2017/18",
  "2018/19",
  "2019/20",
];

export default function KakovostPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        title="Kakovost brez kompromisov."
        subtitle="Standardi odličnosti"
        imageSrc="/images/kakovost-facility.jpg"
      />

      {/* ── Intro ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <ScrollReveal className="lg:col-span-7">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif leading-snug text-brand-charcoal">
              Pri Finguštu verjamemo, da je kakovost obljuba &mdash; ne le
              beseda. Vsak kos mesa, vsak izdelek, ki zapusti naše obrate, nosi
              pečat doslednega nadzora, preverjenega izvora in neomajne
              predanosti tradiciji.
            </p>
          </ScrollReveal>
          <ScrollReveal
            type="reveal-left"
            className="lg:col-span-4 lg:col-start-9"
            delay={300}
          >
            <div className="border-l-2 border-brand-burgundy pl-6">
              <p className="text-brand-charcoal/70 font-light leading-relaxed">
                Naš sistem zagotavljanja kakovosti temelji na mednarodno
                priznanih standardih HACCP in IFS, ki skupaj tvorita celovit
                okvir za varno, sledljivo in vrhunsko proizvodnjo mesa ter mesnih
                izdelkov.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── HACCP & IFS Two-Column ── */}
      <section className="py-24 md:py-32 bg-brand-charcoal text-brand-cream">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="text-brand-sand tracking-[0.3em] uppercase text-xs mb-6 font-medium">
              Temelji naše kakovosti
            </p>
            <h2 className="text-4xl md:text-6xl font-serif mb-16 leading-tight">
              Dva stebra <span className="italic text-brand-burgundy">varnosti</span>.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* HACCP */}
            <ScrollReveal type="reveal-left" delay={100}>
              <div className="border-t border-brand-cream/20 pt-10">
                <span className="text-6xl font-serif text-brand-sand/30 block mb-4 italic">
                  01
                </span>
                <h3 className="text-3xl md:text-4xl font-serif mb-6">
                  HACCP sistem
                </h3>
                <p className="text-brand-cream/70 font-light leading-relaxed mb-6">
                  HACCP (Hazard Analysis and Critical Control Points) je
                  sistematičen preventivni pristop k varnosti živil, ki
                  identificira in nadzoruje biološke, kemijske in fizikalne
                  nevarnosti v celotnem proizvodnem procesu.
                </p>
                <p className="text-brand-cream/70 font-light leading-relaxed mb-6">
                  V naših obratih smo HACCP sistem vzpostavili od samega začetka.
                  Vsaka faza &mdash; od sprejema surovin, preko predelave in
                  zorenja, do pakiranja &mdash; je nadzorovana z natančno
                  določenimi kritičnimi kontrolnimi točkami.
                </p>
                <p className="text-brand-cream/70 font-light leading-relaxed">
                  To pomeni, da morebitna tveganja prepoznamo in odpravimo,
                  preden bi lahko vplivala na končni izdelek. Za naše kupce to
                  pomeni popolno varnost vsakega grižljaja.
                </p>
              </div>
            </ScrollReveal>

            {/* IFS */}
            <ScrollReveal type="reveal-right" delay={250}>
              <div className="border-t border-brand-cream/20 pt-10">
                <span className="text-6xl font-serif text-brand-sand/30 block mb-4 italic">
                  02
                </span>
                <h3 className="text-3xl md:text-4xl font-serif mb-6">
                  IFS standard
                </h3>
                <p className="text-brand-cream/70 font-light leading-relaxed mb-6">
                  IFS Food (International Featured Standards) je mednarodno
                  priznan standard za presojo kakovosti in varnosti živilskih
                  proizvajalcev. Certificiranje IFS na višji ravni pomeni, da
                  naši procesi presegajo osnovna zakonska pričakovanja.
                </p>
                <p className="text-brand-cream/70 font-light leading-relaxed mb-6">
                  Presoja zajema vse &mdash; od higiene prostorov, usposobljenosti
                  zaposlenih in upravljanja alergeniov, do sledljivosti surovin in
                  učinkovitosti korektivnih ukrepov. Vsako leto se podvržemo
                  neodvisni zunanji presoji.
                </p>
                <p className="text-brand-cream/70 font-light leading-relaxed">
                  Certifikat IFS na višji ravni je dokaz, da naša proizvodnja
                  dosega standarde, ki jih zahtevajo največje evropske
                  maloprodajne verige.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── IFS Certificates Grid ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <ScrollReveal>
          <p className="text-brand-burgundy tracking-[0.2em] uppercase text-xs mb-4 font-bold">
            Dokazana odličnost
          </p>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            Letni IFS certifikati.
          </h2>
          <p className="text-brand-charcoal/70 font-light text-lg max-w-2xl mb-16 leading-relaxed">
            Vsako leto uspešno opravimo neodvisno IFS presojo na višji ravni.
            Spodaj so navedena leta, v katerih smo prejeli certifikat &mdash;
            neprekinjeno dokazilo naše zaveze h kakovosti.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {certificates.map((cert, i) => (
            <ScrollReveal key={cert} type="reveal-scale" delay={i * 80}>
              <div className="bg-brand-charcoal text-brand-cream rounded-sm p-6 md:p-8 text-center group hover:bg-brand-burgundy transition-colors duration-500">
                <p className="text-xs tracking-[0.2em] uppercase text-brand-sand group-hover:text-brand-cream/80 mb-3 transition-colors duration-500">
                  IFS
                </p>
                <p className="text-2xl md:text-3xl font-serif">{cert}</p>
                <div className="mt-4 w-8 h-[1px] bg-brand-cream/20 group-hover:bg-brand-cream/40 mx-auto transition-colors duration-500" />
                <p className="text-xs text-brand-cream/50 group-hover:text-brand-cream/70 mt-3 tracking-wide transition-colors duration-500">
                  Višja raven
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Veterinary Supervision & Traceability ── */}
      <section className="py-24 md:py-32 bg-brand-cream">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <ScrollReveal type="reveal-left" className="lg:col-span-6">
              <p className="text-brand-burgundy tracking-[0.2em] uppercase text-xs mb-4 font-bold">
                Popolna sledljivost
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Od kmetije do
                <br />
                <span className="italic text-brand-burgundy">vaše mize</span>.
              </h2>
              <p className="text-brand-charcoal/70 font-light text-lg leading-relaxed mb-6">
                Veterinarski nadzor je prisoten v vseh fazah naše proizvodnje.
                Usposobljeni veterinarji redno pregledujejo surovine, spremljajo
                proizvodne procese in potrjujejo, da vsak izdelek izpolnjuje
                najstrožje zdravstvene zahteve.
              </p>
              <p className="text-brand-charcoal/70 font-light text-lg leading-relaxed mb-8">
                Notranje kontrole, ki sledijo načelom HACCP sistema in IFS
                standarda, zagotavljajo varnost, kakovost in sledljivost mesa
                ter mesnih izdelkov. Vsak kos mesa je sledljiv od kmetije izvora
                do prodajne police &mdash; brez izjem.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-brand-charcoal/10 pt-8">
                <div>
                  <p className="text-3xl font-serif text-brand-burgundy mb-1">
                    100%
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-brand-charcoal/50 font-medium">
                    Sledljivost
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-brand-burgundy mb-1">
                    24/7
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-brand-charcoal/50 font-medium">
                    Nadzor temperature
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-brand-burgundy mb-1">
                    0
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-brand-charcoal/50 font-medium">
                    Kompromisov
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal
              type="reveal-right"
              className="lg:col-span-5 lg:col-start-8"
              delay={200}
            >
              <div className="aspect-[3/4] overflow-hidden relative rounded-sm">
                <Image
                  src="/images/kakovost-inspection.jpg"
                  alt="Kontrola kakovosti mesnih izdelkov"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
