import Image from "next/image";
import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollReveal from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Izdelki | Mesnice Fingušt",
  description:
    "Naša ponudba mesnih izdelkov — od svežega mesa do suhomesnatih specialitet.",
};

const categories = [
  {
    name: "Barjene klobase",
    image: "/images/barjene-klobase.jpg",
    description:
      "Nežne in sočne barjene klobase, pripravljene po tradicionalni recepturi. Od klasičnih hrenovk do posebnih dunajskih klobas — idealne za hitro malico ali družinski obrok.",
  },
  {
    name: "Poltrajne klobase",
    image: "/images/poltrajne-klobase.jpg",
    description:
      "Skrbno začinjene in naravno prekajene poltrajne klobase z bogato aromo. Zorjene v naših kadilnicah, kjer se čas in dim združita v nepozaben okus.",
  },
  {
    name: "Prekajeno meso",
    image: "/images/prekajeno-meso.jpg",
    description:
      "Izbrano svinjsko in goveje meso, prekajeno nad bukovim dimom. Šunke, slanina in prekajena rebra — okusi, ki pričarajo spomine na domače kuhinje.",
  },
  {
    name: "Konzervirano meso",
    image: "/images/konzervirano-meso.jpg",
    description:
      "Domače paštete, mesne konzerve in namazki, pripravljeni iz svežih sestavin. Praktična izbira za vsak dan, brez kompromisov pri kakovosti.",
  },
  {
    name: "Kuhane klobase",
    image: "/images/kuhane-klobase.jpg",
    description:
      "Tradicionalne krvavice, jetrne klobase in tlačenka po starih štajerskih recepturah. Okusi, ki jih poznamo iz otroštva, ohranjeni z mojstrsko obdelavo.",
  },
  {
    name: "Mast in maščobni izdelki",
    image: "/images/mast-izdelki.jpg",
    description:
      "Čista svinjska mast in hrustljavi ocvirki — nepogrešljivi v domači kuhinji. Pripravljeni na tradicionalen način za avtentičen okus v vsakem obroku.",
  },
  {
    name: "Sušene mesnine",
    image: "/images/susene-mesnine.jpg",
    description:
      "Suhe salame, pršut in sušena govedina, ki zorijo v naravnih pogojih. Vsak kos je rezultat tedenske potrpežljivosti in generacij izkušenj.",
  },
  {
    name: "Presne mesnine",
    image: "/images/presne-mesnine.jpg",
    description:
      "Sveže mleto meso, domači čevapčiči in pripravljene mešanice za žar. Vsak dan sveže iz naše mesnice — pripravljeno za takojšnjo pripravo na vašem ognju.",
  },
];

const revealTypes = [
  "reveal-left",
  "reveal-right",
  "reveal-scale",
  "reveal-left",
  "reveal-right",
  "reveal-scale",
  "reveal-left",
  "reveal-right",
] as const;

export default function IzdelkiPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        title="Naši Izdelki."
        subtitle="Mesnine štajerske d.o.o."
        imageSrc="/images/sveze-meso.jpg"
      />

      {/* ── Slogan Bar ── */}
      <section className="bg-brand-burgundy text-brand-cream py-5 border-y border-brand-charcoal">
        <div className="text-center">
          <p className="text-sm tracking-[0.2em] uppercase font-medium italic font-serif">
            Kupujte dobro in poceni, kupujte mesnine Fin&nbsp;-&nbsp;Gušt
          </p>
        </div>
      </section>

      {/* ── Product Categories Grid ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <ScrollReveal className="mb-16 md:mb-24">
          <p className="text-brand-burgundy tracking-[0.2em] uppercase text-xs mb-4 font-bold">
            Kolekcija
          </p>
          <h2 className="text-4xl md:text-6xl font-serif">
            Ponudba<span className="italic text-brand-burgundy">.</span>
          </h2>
          <p className="mt-6 text-brand-charcoal/60 font-light text-lg max-w-2xl">
            Od svežih mesnih pripravkov do skrbno zorjenih suhomesnatih
            specialitet — naša ponudba pokriva celoten spekter kakovostnih
            mesnih izdelkov.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {categories.map((category, index) => (
            <ScrollReveal
              key={category.name}
              type={revealTypes[index]}
              delay={index % 2 === 0 ? 0 : 150}
            >
              <a href="#kontakt" className="group block">
                <div className="overflow-hidden rounded-sm mb-6">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/10 transition-colors duration-500" />
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif mb-3 group-hover:text-brand-burgundy transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-brand-charcoal/60 font-light leading-relaxed text-sm md:text-base max-w-lg">
                      {category.description}
                    </p>
                  </div>
                  <span className="shrink-0 mt-2 w-8 h-8 rounded-full border border-brand-charcoal/20 flex items-center justify-center group-hover:border-brand-burgundy group-hover:bg-brand-burgundy group-hover:text-brand-cream transition-all duration-300">
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-brand-charcoal text-brand-cream py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-brand-sand tracking-[0.3em] uppercase text-xs mb-6 font-medium">
              Povpraševanje
            </p>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">
              Vas zanima <span className="italic">več</span>?
            </h2>
            <p className="text-brand-cream/60 font-light text-lg max-w-xl mx-auto mb-10">
              Obiščite našo poslovalnico ali nam pišite za podrobnejše
              informacije o naših izdelkih in cenah.
            </p>
            <a
              href="/kontakt"
              className="inline-block border border-brand-cream/30 hover:border-brand-cream hover:bg-brand-cream hover:text-brand-charcoal px-10 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300"
            >
              Stopite v stik
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
