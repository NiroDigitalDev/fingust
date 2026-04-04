import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import ScrollReveal from "@/components/scroll-reveal";
import ContactForm from "@/components/contact-form";
import ParallaxBg from "@/components/parallax-bg";
import Footer from "@/components/footer";
import { sanityFetch } from "@/lib/sanity.live";
import { homePageQuery, siteSettingsQuery } from "@/lib/sanity.queries";
import type { HomePage, SiteSettings } from "@/lib/sanity.types";

export const metadata: Metadata = {
  title: "Sveže domače meso in suhomesnate specialitete",
  description:
    "Mesnice Fingušt - Mesnine štajerske d.o.o. Nudimo sveže domače meso, suhomesnate izdelke in žar program z garancijo kakovosti. 6 mesnic po Štajerski.",
};

const awards = [
  "AAA Odličnost",
  "Agra 2018 Nagrade",
  "Eko Meso Certifikat",
  "Sklad za razvoj podeželja",
];

const defaultProducts = [
  {
    title: "Sveže meso",
    description:
      "Vrhunsko lokalno meso, pridelano na naraven način. Naša govedina, svinjina in perutnina so skrbno izbrane za popoln okus na vaši mizi.",
    imageUrl: "/images/sveze-meso.webp",
  },
  {
    title: "Suhomesnato",
    description:
      "Nagrajene salame, klobase in pršuti, ki zorijo z navdihom narave. Ustvarjeno po starih družinskih recepturah za trenutke, ki se jih spominjamo.",
    imageUrl: "/images/suhomesnato.webp",
  },
  {
    title: "Žar Program",
    description:
      "Specialitete, zasnovane za ogenj. Od sočnih čevapčičev do skrbno mariniranih kosov za vrhunske kulinarične dogodke na prostem.",
    imageUrl: "/images/zar-program.webp",
  },
];

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
  );
}

export default async function Home() {
  const { data: page } = (await sanityFetch({ query: homePageQuery })) as {
    data: HomePage | null;
  };
  const { data: settings } = (await sanityFetch({
    query: siteSettingsQuery,
  })) as { data: SiteSettings | null };

  const heroTitle = page?.heroTitle ?? "Čista";
  const heroTitleAccent = page?.heroTitleAccent ?? "tradicija.";
  const heroSubtitle =
    page?.heroSubtitle ??
    "Skrbno izbrano, varno in visoko kakovostno domače slovensko meso, obdelano z ljubeznijo od leta 2013.";
  const companyName = settings?.companyName ?? "Mesnine štajerske d.o.o.";
  const heroImageUrl =
    page?.heroImageUrl ??
    "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=2000&q=80";

  const products =
    page?.featuredProducts && page.featuredProducts.length > 0
      ? page.featuredProducts
      : defaultProducts;

  const aboutTitle = page?.aboutTitle ?? "Ponosni na našo";
  const aboutText =
    settings?.aboutText ??
    "";

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <header className="relative min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12 bg-brand-charcoal text-brand-cream overflow-hidden">
        <ParallaxBg>
          <Image
            src={heroImageUrl}
            alt="Butchery Art"
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/30 via-transparent to-brand-charcoal" />
        </ParallaxBg>

        <div className="relative z-10 w-full max-w-screen-2xl mx-auto flex flex-col justify-end h-full mt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <ScrollReveal>
                <p className="text-brand-sand tracking-[0.3em] uppercase text-xs mb-6 font-medium">
                  {companyName}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] font-serif mb-4">
                  {heroTitle}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] font-serif mb-4 italic text-brand-burgundy">
                  {heroTitleAccent}
                </h1>
              </ScrollReveal>
            </div>
            <ScrollReveal
              type="reveal-left"
              className="md:col-span-4 pb-4 md:pb-8"
              delay={500}
            >
              <p className="text-lg md:text-xl font-light text-brand-sand/80 max-w-md border-l border-brand-burgundy pl-6">
                {heroSubtitle}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* ── Marquee Awards Bar ── */}
      <section className="bg-brand-burgundy text-brand-cream py-5 border-y border-brand-charcoal relative z-20 overflow-hidden">
        <div className="marquee-wrapper">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="animate-marquee flex space-x-12 items-center px-6"
              aria-hidden={i === 1 ? true : undefined}
            >
              {awards.map((award) => (
                <span
                  key={`${i}-${award}`}
                  className="text-sm tracking-[0.2em] uppercase whitespace-nowrap flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-sand rounded-full mr-4" />
                  {award}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Products ── */}
      <section
        id="izdelki"
        className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto"
      >
        <ScrollReveal className="mb-24">
          <p className="text-brand-burgundy tracking-[0.2em] uppercase text-xs mb-4 font-bold">
            Kolekcija
          </p>
          <h2 className="text-5xl md:text-7xl font-serif">Naši Izdelki.</h2>
        </ScrollReveal>

        <div className="space-y-32">
          {products.map((product, index) => {
            const number = String(index + 1).padStart(2, "0");
            const imageSrc =
              product.imageUrl ?? defaultProducts[index]?.imageUrl ?? "/images/sveze-meso.webp";

            // Product layout 1 — text left, image right
            if (index % 3 === 0) {
              return (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
                >
                  <ScrollReveal
                    type="reveal-left"
                    className="md:col-span-5 md:col-start-2 order-2 md:order-1"
                  >
                    <span className="text-6xl font-serif text-brand-sand block mb-4 italic">
                      {number}
                    </span>
                    <h3 className="text-4xl font-serif mb-6">
                      {product.title}
                    </h3>
                    <p className="text-brand-charcoal/70 font-light text-lg mb-8 leading-relaxed max-w-md">
                      {product.description}
                    </p>
                    <a
                      href="#kontakt"
                      className="group inline-flex items-center whitespace-nowrap text-xs tracking-[0.2em] uppercase font-bold hover-underline-animation pb-1"
                    >
                      Odkrijte več
                      <ArrowIcon />
                    </a>
                  </ScrollReveal>
                  <ScrollReveal
                    type="reveal-right"
                    className="md:col-span-6 order-1 md:order-2"
                    delay={200}
                  >
                    <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden relative rounded-sm">
                      <Image
                        src={imageSrc}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-1000"
                      />
                    </div>
                  </ScrollReveal>
                </div>
              );
            }

            // Product layout 2 — image left, text right
            if (index % 3 === 1) {
              return (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
                >
                  <ScrollReveal
                    type="reveal-left"
                    className="md:col-span-6"
                    delay={100}
                  >
                    <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden relative rounded-sm">
                      <Image
                        src={imageSrc}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-1000"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal
                    type="reveal-right"
                    className="md:col-span-5 md:col-start-8"
                    delay={300}
                  >
                    <span className="text-6xl font-serif text-brand-sand block mb-4 italic">
                      {number}
                    </span>
                    <h3 className="text-4xl font-serif mb-6">
                      {product.title}
                    </h3>
                    <p className="text-brand-charcoal/70 font-light text-lg mb-8 leading-relaxed max-w-md">
                      {product.description}
                    </p>
                    <a
                      href="#kontakt"
                      className="group inline-flex items-center whitespace-nowrap text-xs tracking-[0.2em] uppercase font-bold hover-underline-animation pb-1"
                    >
                      Odkrijte več
                      <ArrowIcon />
                    </a>
                  </ScrollReveal>
                </div>
              );
            }

            // Product layout 3 — center feature
            return (
              <div key={index}>
                <ScrollReveal className="text-center mb-12">
                  <span className="text-6xl font-serif text-brand-sand block mb-4 italic">
                    {number}
                  </span>
                  <h3 className="text-4xl font-serif mb-4">{product.title}</h3>
                  <p className="text-brand-charcoal/70 font-light text-lg max-w-xl mx-auto">
                    {product.description}
                  </p>
                </ScrollReveal>
                <ScrollReveal type="reveal-scale" delay={150}>
                  <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden max-w-6xl mx-auto relative rounded-sm">
                    <Image
                      src={imageSrc}
                      alt={product.title}
                      fill
                      sizes="100vw"
                      className="object-cover hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── About / Quality ── */}
      <section
        id="kakovost"
        className="py-32 bg-brand-charcoal text-brand-cream relative overflow-hidden"
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-12">
                  {aboutTitle} <br />
                  <span className="italic text-brand-burgundy">kakovost</span>.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-brand-cream/20 pt-12">
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-brand-sand mb-4">
                      Inovacija
                    </h4>
                    <p className="font-light text-brand-cream/70 leading-relaxed text-sm">
                      {aboutText ||
                        "Z uspešno rekonstrukcijo objektov in nabavo posodobljene tehnološke opreme zagotavljamo najvišje standarde varnosti in higiene."}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-brand-sand mb-4">
                      Priznanja
                    </h4>
                    <p className="font-light text-brand-cream/70 leading-relaxed text-sm">
                      Konstantno prisotni in nagrajeni na sejmu AGRA. Ponosni
                      nosilci certifikata AAA Odličnosti.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 relative mt-12 lg:mt-0">
              <ScrollReveal type="reveal-right">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <Image
                    src={page?.aboutImageUrl ?? "/images/butcher-portrait.webp"}
                    alt="Butcher portrait"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover grayscale"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal type="reveal-rotate" delay={600}>
                <div className="absolute -bottom-4 left-2 md:-bottom-8 md:-left-8 w-32 h-32 md:w-40 md:h-40 bg-brand-burgundy rounded-full flex items-center justify-center p-4 text-center shadow-2xl">
                  <p className="font-serif text-sm italic leading-tight">
                    Evropa <br />
                    investira v <br />
                    podeželje.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Locations & Contact ── */}
      <section
        id="poslovalnice"
        className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <ScrollReveal type="reveal-left">
            <p className="text-brand-burgundy tracking-[0.2em] uppercase text-xs mb-4 font-bold">
              Obiščite nas
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">
              Poslovalnica
            </h2>
            <div className="border-t border-brand-charcoal/20 pt-8 pb-8">
              <h3 className="text-2xl font-serif mb-2">Glavna Mesnica</h3>
              <p className="text-brand-charcoal/70 font-light leading-relaxed">
                Mesnine štajerske d.o.o.
                <br />
                Spodnji gaj pri Pragerskem 9
                <br />
                2331 Pragersko
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-xs tracking-[0.2em] uppercase font-bold hover-underline-animation pb-1"
              >
                Prikaži na zemljevidu
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal type="reveal-right" delay={200}>
            <div id="kontakt">
              <p className="text-brand-burgundy tracking-[0.2em] uppercase text-xs mb-4 font-bold">
                Stopite v stik
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-12">
                Povpraševanje
              </h2>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
