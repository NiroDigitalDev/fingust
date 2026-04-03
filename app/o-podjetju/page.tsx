import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import PageHeader from "@/components/page-header";
import ScrollReveal from "@/components/scroll-reveal";
import Footer from "@/components/footer";
import { sanityFetch } from "@/lib/sanity.live";
import { aboutPageQuery } from "@/lib/sanity.queries";
import type { AboutPage } from "@/lib/sanity.types";
import PortableText from "@/components/portable-text";

export const metadata: Metadata = {
  title: "O podjetju | Mesnice Fingušt",
  description:
    "Družinsko podjetje z več kot 35-letno tradicijo mesarstva.",
};

const fallbackMilestones = [
  {
    year: "1988",
    title: "Prva mesnica",
    description:
      "Družina Fingušt odpre svojo prvo mesnico na Štajerskem. Začne se zgodba o kakovosti in predanosti mesarski obrti.",
  },
  {
    year: "1996",
    title: "Razširitev proizvodnje",
    description:
      "Z rastočim povpraševanjem investiramo v lasten proizvodni obrat in razširimo ponudbo mesnih izdelkov.",
  },
  {
    year: "2013",
    title: "Ustanovitev d.o.o.",
    description:
      "Podjetje se formalizira kot Mesnine štajerske d.o.o. in vzpostavi sodobne poslovne standarde.",
  },
  {
    year: "2018",
    title: "Modernizacija objektov",
    description:
      "Uspešna rekonstrukcija proizvodnih objektov z najsodobnejšo tehnološko opremo za zagotavljanje najvišjih standardov.",
  },
];

const fallbackStats = [
  { value: "35+", label: "zaposlenih" },
  { value: "6", label: "mesnic" },
  { value: "1988", label: "ustanovljeno" },
  { value: "500+", label: "dnevnih odjemalcev" },
];

export default async function OPodjetjuPage() {
  const { data: page } = (await sanityFetch({ query: aboutPageQuery })) as {
    data: AboutPage | null;
  };

  const milestones = page?.milestones ?? fallbackMilestones;
  const stats = page?.stats ?? fallbackStats;
  return (
    <>
      <Navbar />

      <PageHeader
        title={page?.heroTitle ?? "Naša zgodba."}
        subtitle={page?.heroSubtitle ?? "Od leta 1988"}
        imageSrc="/images/podjetje-zgodovina.jpg"
      />

      {/* ── History / Timeline ── */}
      <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <ScrollReveal className="mb-20">
          <p className="text-brand-burgundy tracking-[0.2em] uppercase text-xs mb-4 font-bold">
            Naša pot
          </p>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            Družinska <span className="italic text-brand-burgundy">tradicija</span>,
            <br />
            ki traja.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <ScrollReveal type="reveal-left" className="lg:col-span-5" delay={100}>
            {page?.introText ? (
              <PortableText
                value={page.introText}
                className="text-lg md:text-xl font-light text-brand-charcoal/70 leading-relaxed border-l-2 border-brand-burgundy pl-8"
              />
            ) : (
              <p className="text-lg md:text-xl font-light text-brand-charcoal/70 leading-relaxed border-l-2 border-brand-burgundy pl-8">
                Naša zgodba se je začela leta 1988, ko je družina Fingušt odprla
                svojo prvo mesnico. Iz skromnih začetkov smo zrasli v
                sodobno podjetje s šestimi lastnimi mesnicami, proizvodnim obratom
                in več kot 35 predanimi zaposlenimi.
              </p>
            )}
          </ScrollReveal>

          <div className="lg:col-span-6 lg:col-start-7 space-y-0">
            {milestones.map((milestone, i) => (
              <ScrollReveal
                key={(milestone as { _key?: string })._key ?? i}
                type="reveal-right"
                delay={i * 150}
              >
                <div className="grid grid-cols-[auto_1fr] gap-8 group">
                  {/* Timeline line + dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-brand-burgundy shrink-0 mt-2 group-hover:scale-150 transition-transform duration-300" />
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-brand-sand/60" />
                    )}
                  </div>

                  <div className="pb-12">
                    <span className="text-xs tracking-[0.3em] uppercase font-bold text-brand-burgundy">
                      {milestone.year}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif mt-1 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-brand-charcoal/60 font-light leading-relaxed max-w-md">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Danes (Today) ── */}
      <section className="py-32 bg-brand-charcoal text-brand-cream relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <ScrollReveal>
                <p className="text-brand-sand tracking-[0.2em] uppercase text-xs mb-4 font-bold">
                  Danes
                </p>
                <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
                  Sodobno <br />
                  <span className="italic text-brand-burgundy">podjetje</span>.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg font-light text-brand-cream/70 leading-relaxed mb-8 max-w-lg">
                  Danes v podjetju zaposlujemo približno 35 delavcev, ki z
                  najsodobnejšo tehnologijo skrbijo za kakovost in varnost
                  naših izdelkov. Proizvodnja je pod stalnim nadzorom
                  veterinarskih služb, v vseh fazah pa izvajamo kontrole po
                  standardih HACCP in IFS.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={350}>
                <div className="grid grid-cols-2 gap-8 border-t border-brand-cream/15 pt-8">
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-brand-sand mb-3">
                      Ponudba
                    </h4>
                    <p className="font-light text-brand-cream/60 text-sm leading-relaxed">
                      Različne vrste svežega in pripravljenega mesa,
                      polpripravljenih jedi ter širok nabor kakovostnih
                      mesnih izdelkov.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-brand-sand mb-3">
                      Standardi
                    </h4>
                    <p className="font-light text-brand-cream/60 text-sm leading-relaxed">
                      HACCP in IFS certifikati. Stalen veterinarski nadzor
                      v vseh fazah proizvodnje.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 relative">
              <ScrollReveal type="reveal-scale" delay={200}>
                <div className="aspect-[3/4] overflow-hidden relative rounded-sm">
                  <Image
                    src="/images/podjetje-team.jpg"
                    alt="Ekipa v proizvodnem obratu"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal type="reveal-rotate" delay={600}>
                <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-brand-burgundy rounded-full flex items-center justify-center p-4 text-center shadow-2xl">
                  <p className="font-serif text-sm italic leading-tight text-brand-cream">
                    6 lastnih <br />
                    mesnic po <br />
                    Sloveniji
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Distribution ── */}
      <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <ScrollReveal type="reveal-left" className="lg:col-span-6" delay={100}>
            <div className="aspect-[4/3] overflow-hidden relative rounded-sm">
              <Image
                src="/images/podjetje-dostava.jpg"
                alt="Dostava mesnih izdelkov"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </ScrollReveal>

          <div className="lg:col-span-5 lg:col-start-8">
            <ScrollReveal type="reveal-right">
              <p className="text-brand-burgundy tracking-[0.2em] uppercase text-xs mb-4 font-bold">
                Distribucija
              </p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                Po celotni <br />
                <span className="italic text-brand-burgundy">Sloveniji</span>.
              </h2>
            </ScrollReveal>
            <ScrollReveal type="reveal-right" delay={200}>
              <p className="text-lg font-light text-brand-charcoal/70 leading-relaxed mb-8">
                Dnevno oskrbujemo na stotine odjemalcev po celotni Sloveniji
                &mdash; od trgovskih verig in javnih zavodov do restavracij,
                gostiln in hotelov. Stremimo k prilagodljivosti in vrhunski
                kakovosti, da zadovoljimo tudi najzahtevnejše stranke.
              </p>
            </ScrollReveal>
            <ScrollReveal type="reveal-right" delay={350}>
              <div className="space-y-4 border-t border-brand-charcoal/15 pt-8">
                {[
                  "Trgovske verige",
                  "Restavracije in hoteli",
                  "Javne kuhinje in zavodi",
                  "Lastne mesnice",
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center space-x-4 text-brand-charcoal/70"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-burgundy rounded-full shrink-0" />
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-24 md:py-32 bg-brand-cream">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <ScrollReveal className="text-center mb-16">
            <p className="text-brand-burgundy tracking-[0.2em] uppercase text-xs mb-4 font-bold">
              Fingušt v številkah
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <ScrollReveal key={(stat as { _key?: string })._key ?? i} type="reveal-scale" delay={i * 120}>
                <div className="text-center">
                  <span className="block text-5xl md:text-7xl lg:text-8xl font-serif text-brand-charcoal leading-none mb-3">
                    {stat.value}
                  </span>
                  <span className="text-xs tracking-[0.2em] uppercase font-bold text-brand-charcoal/50">
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-brand-charcoal text-brand-cream">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">
              Želite izvedeti <span className="italic text-brand-burgundy">več</span>?
            </h2>
            <p className="text-brand-cream/60 font-light text-lg max-w-lg mx-auto mb-10">
              Obiščite nas v eni izmed naših šestih mesnic ali pa nas
              kontaktirajte za sodelovanje.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/poslovalnice"
                className="inline-block border border-brand-cream/30 hover:border-brand-cream px-8 py-3 rounded-full text-xs tracking-widest uppercase transition-all hover:bg-brand-cream hover:text-brand-charcoal"
              >
                Poslovalnice
              </a>
              <a
                href="/kontakt"
                className="inline-block bg-brand-burgundy hover:bg-brand-burgundy/80 px-8 py-3 rounded-full text-xs tracking-widest uppercase transition-all"
              >
                Kontakt
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
