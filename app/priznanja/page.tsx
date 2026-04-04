import Image from "next/image";
import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollReveal from "@/components/scroll-reveal";
import { sanityFetch } from "@/lib/sanity.live";
import { awardsQuery } from "@/lib/sanity.queries";
import type { Award } from "@/lib/sanity.types";

export const metadata: Metadata = {
  title: "Priznanja in nagrade",
  description: "Naša priznanja in nagrade za kakovost mesnih izdelkov.",
};

function MedalIcon({ type }: { type: "gold" | "silver" | "bronze" }) {
  const colors = {
    gold: "from-amber-300 to-amber-600",
    silver: "from-zinc-300 to-zinc-500",
    bronze: "from-orange-400 to-orange-700",
  };
  return (
    <span
      className={`inline-block w-3 h-3 rounded-full bg-gradient-to-br ${colors[type]} shadow-sm`}
    />
  );
}

function StarIcon() {
  return (
    <svg
      className="w-5 h-5 text-amber-400 inline-block"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function formatMedals(gold: number, silver: number, bronze: number): string {
  const parts: string[] = [];
  if (gold > 0) parts.push(`${gold} zlat${gold === 1 ? "a" : gold === 2 ? "i" : gold < 5 ? "e" : "ih"}`);
  if (silver > 0) parts.push(`${silver} srebrn${silver === 1 ? "a" : silver === 2 ? "i" : silver < 5 ? "e" : "ih"}`);
  if (bronze > 0) parts.push(`${bronze} bronast${bronze === 1 ? "a" : bronze === 2 ? "i" : bronze < 5 ? "e" : "ih"}`);
  return parts.join(", ");
}

export default async function PriznanjaPage() {
  const { data: awards } = (await sanityFetch({ query: awardsQuery })) as { data: Award[] };

  const totalMedals = awards.reduce(
    (sum, a) => sum + (a.goldMedals || 0) + (a.silverMedals || 0) + (a.bronzeMedals || 0),
    0,
  );
  const agraAwards = awards.filter((a) => a.event === "AGRA");
  const otherAwards = awards.filter((a) => a.event !== "AGRA");

  return (
    <>
      <Navbar />

      <PageHeader
        title="Priznanja in nagrade."
        subtitle="Dokazana odličnost"
        imageSrc="/images/priznanja-medals.webp"
      />

      {/* ── Stats Bar ── */}
      <section className="bg-brand-burgundy text-brand-cream py-8">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollReveal delay={0}>
              <p className="text-4xl md:text-5xl font-serif font-bold">
                {totalMedals}
              </p>
              <p className="text-xs tracking-[0.2em] uppercase mt-2 text-brand-sand/80">
                Skupno medalj
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-4xl md:text-5xl font-serif font-bold">{agraAwards.length}</p>
              <p className="text-xs tracking-[0.2em] uppercase mt-2 text-brand-sand/80">
                Let AGRA
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-4xl md:text-5xl font-serif font-bold">3</p>
              <p className="text-xs tracking-[0.2em] uppercase mt-2 text-brand-sand/80">
                iTQi zvezdice
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-4xl md:text-5xl font-serif font-bold">AAA</p>
              <p className="text-xs tracking-[0.2em] uppercase mt-2 text-brand-sand/80">
                Certifikat odličnosti
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Featured Awards: iTQi & AAA ── */}
      <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <ScrollReveal className="mb-20">
          <p className="text-brand-burgundy tracking-[0.2em] uppercase text-xs mb-4 font-bold">
            Najvišja priznanja
          </p>
          <h2 className="text-5xl md:text-7xl font-serif">
            Mednarodno <span className="italic text-brand-burgundy">priznani</span>.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* iTQi Awards */}
          <ScrollReveal type="reveal-left" className="lg:col-span-7">
            <div className="bg-brand-charcoal text-brand-cream p-10 md:p-16 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-burgundy/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <p className="text-xs tracking-[0.3em] uppercase text-brand-sand mb-6 font-medium">
                  International Taste Quality Institute
                </p>
                <h3 className="text-3xl md:text-4xl font-serif mb-10">
                  iTQi Superior Taste Award
                </h3>

                <div className="space-y-8">
                  <div className="border-l-2 border-brand-burgundy pl-6">
                    <h4 className="text-xl font-serif mb-2">
                      Kolesarska klobasa
                    </h4>
                    <div className="flex items-center gap-1 mb-3">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <span className="text-sm text-brand-sand/70 ml-2">
                        3 zvezdice odličnosti
                      </span>
                    </div>
                    <p className="text-sm font-light text-brand-cream/60 leading-relaxed">
                      Najvišje možno priznanje mednarodne komisije za okus.
                      Ocenjeno s strani 200+ chekov in sommelierjev iz 15 držav.
                      Izjemna harmonija okusov in teksture.
                    </p>
                  </div>

                  <div className="border-l-2 border-amber-500 pl-6">
                    <h4 className="text-xl font-serif mb-2">
                      Pol!sebna klobasa
                    </h4>
                    <div className="flex items-center gap-1 mb-3">
                      <StarIcon />
                      <span className="text-sm text-brand-sand/70 ml-2">
                        1 zlata zvezdica
                      </span>
                    </div>
                    <p className="text-sm font-light text-brand-cream/60 leading-relaxed">
                      Zlata zvezdica za izjemen okus. Priznanje, ki ga podeli
                      mednarodni inštitut s sedežem v Bruslju, za vrhunsko
                      kakovost izdelka.
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.itqi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-10 text-xs tracking-[0.2em] uppercase font-bold text-brand-sand hover-underline-animation pb-1"
                >
                  www.itqi.com
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* AAA Certificate */}
          <ScrollReveal
            type="reveal-right"
            className="lg:col-span-5"
            delay={200}
          >
            <div className="bg-brand-cream border border-brand-sand/50 p-10 md:p-14 rounded-sm h-full flex flex-col justify-between">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-brand-burgundy mb-6 font-bold">
                  Bonitetna odličnost
                </p>
                <h3 className="text-6xl md:text-8xl font-serif font-bold text-brand-charcoal mb-4">
                  AAA
                </h3>
                <h4 className="text-2xl font-serif text-brand-charcoal/80 mb-6">
                  Certifikat odličnosti
                </h4>
                <p className="text-brand-charcoal/60 font-light leading-relaxed mb-6">
                  Certifikat AAA Odličnost potrjuje, da je podjetje Mesnine
                  štajerske d.o.o. finančno stabilno, zanesljivo in poslovno
                  odlično. Ocena temelji na celoviti analizi poslovanja, ki
                  vključuje finančno stabilnost, plačilno disciplino in tržni
                  položaj podjetja.
                </p>
                <p className="text-brand-charcoal/60 font-light leading-relaxed">
                  To priznanje prejme le{" "}
                  <span className="font-medium text-brand-charcoal">
                    4,4 % vseh podjetij
                  </span>{" "}
                  v Sloveniji, kar nas uvršča med najbolj zaupanja vredna podjetja
                  v državi.
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-brand-sand/40">
                <p className="text-xs tracking-[0.15em] uppercase text-brand-charcoal/40 font-medium">
                  Verificirano &bull; Mesnine štajerske d.o.o.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── AGRA Timeline ── */}
      <section className="py-32 bg-brand-charcoal text-brand-cream relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <ScrollReveal className="mb-24">
            <p className="text-brand-sand tracking-[0.2em] uppercase text-xs mb-4 font-bold">
              Sejem AGRA Gornja Radgona
            </p>
            <h2 className="text-5xl md:text-7xl font-serif">
              Naša <span className="italic">časovnica</span>.
            </h2>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-brand-cream/15" />

            <div className="space-y-24">
              {agraAwards.map((item, index) => {
                const isLeft = index % 2 === 0;
                const gold = item.goldMedals || 0;
                const silver = item.silverMedals || 0;
                const bronze = item.bronzeMedals || 0;
                const total = gold + silver + bronze;
                const yearStr = String(item.year);

                return (
                  <ScrollReveal
                    key={item._id}
                    type={isLeft ? "reveal-left" : "reveal-right"}
                    delay={index * 100}
                  >
                    <div
                      className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                        isLeft ? "" : "md:direction-rtl"
                      }`}
                    >
                      {/* Year badge — centered on line */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-burgundy rounded-full flex items-center justify-center z-10 shadow-lg shadow-brand-burgundy/30">
                        <span className="text-xs font-bold tracking-wider">
                          {yearStr.slice(2)}
                        </span>
                      </div>

                      {/* Content block */}
                      <div
                        className={`pl-20 md:pl-0 ${
                          isLeft
                            ? "md:pr-20 md:text-right"
                            : "md:col-start-2 md:pl-20"
                        }`}
                        style={{ direction: "ltr" }}
                      >
                        <p className="text-7xl md:text-9xl font-serif font-bold text-brand-cream/5 leading-none mb-2">
                          {yearStr}
                        </p>
                        <h3 className="text-2xl font-serif mb-3 -mt-10 md:-mt-14 relative z-10">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                          <div
                            className={`flex items-center gap-2 ${
                              isLeft ? "md:justify-end md:w-full" : ""
                            }`}
                          >
                            {gold > 0 && <MedalIcon type="gold" />}
                            {silver > 0 && <MedalIcon type="silver" />}
                            {bronze > 0 && <MedalIcon type="bronze" />}
                            <span className="text-sm text-brand-sand/70 ml-1">
                              {formatMedals(gold, silver, bronze)}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm font-light text-brand-cream/50 leading-relaxed max-w-md">
                          {item.description}
                        </p>
                        <p className="text-xs tracking-[0.15em] uppercase text-brand-burgundy font-bold mt-4">
                          {total} {total === 1 ? "medalja" : total < 5 ? "medalje" : "medalj"} skupaj
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Total medals summary */}
          <ScrollReveal delay={600} className="mt-32 text-center">
            <p className="text-brand-sand/50 text-xs tracking-[0.3em] uppercase mb-4">
              Skupno doseženih
            </p>
            <p className="text-8xl md:text-[12rem] font-serif font-bold leading-none text-brand-cream/10">
              {totalMedals}
            </p>
            <p className="text-2xl font-serif italic text-brand-sand -mt-6 md:-mt-12 relative z-10">
              medalj za kakovost
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── AGRA Featured Image ── */}
      <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-brand-burgundy tracking-[0.2em] uppercase text-xs mb-4 font-bold">
            Na sejmu
          </p>
          <h2 className="text-4xl md:text-5xl font-serif">
            Sejem AGRA Gornja Radgona
          </h2>
          <p className="text-brand-charcoal/60 font-light mt-6 max-w-2xl mx-auto leading-relaxed">
            Že od leta 2015 redno nastopamo na najpomembnejšem slovenskem
            kmetijsko-živilskem sejmu, kjer naši izdelki dosegajo vrhunske
            rezultate pri ocenjevanju kakovosti.
          </p>
        </ScrollReveal>
        <ScrollReveal type="reveal-scale" delay={150}>
          <div className="max-w-4xl mx-auto aspect-[3/4] overflow-hidden relative rounded-sm">
            <Image
              src="/images/priznanja-agra.webp"
              alt="Sejem AGRA — razstava mesnih izdelkov"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ── Closing CTA ── */}
      <section className="bg-brand-charcoal text-brand-cream py-24 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-brand-sand tracking-[0.2em] uppercase text-xs mb-6 font-medium">
              Prepričajte se sami
            </p>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-3xl mx-auto leading-tight">
              Okus, ki ga prepoznajo{" "}
              <span className="italic text-brand-burgundy">strokovnjaki</span>.
            </h2>
            <a
              href="/poslovalnice"
              className="inline-block border border-brand-cream/30 hover:border-brand-cream hover:bg-brand-cream hover:text-brand-charcoal px-10 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300"
            >
              Obiščite nas
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
