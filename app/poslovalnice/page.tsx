import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import PageHeader from "@/components/page-header";
import ScrollReveal from "@/components/scroll-reveal";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Poslovalnice | Mesnice Fingušt",
  description: "Šest mesnic v Štajerski regiji — obiščite nas.",
};

const locations = [
  {
    name: "Mesnica Pragersko",
    badge: "Sedež podjetja",
    address: "Spodnji gaj pri Pragerskem 9",
    city: "2331 Pragersko",
    phone: "02/80-39-151",
    hours: {
      mon: "8:00 — 13:00",
      tueFri: "7:30 — 18:00",
      sat: "7:30 — 13:00",
    },
  },
  {
    name: "Mesnica Slovenska Bistrica",
    address: "Trg Svobode 5",
    city: "2310 Slovenska Bistrica",
    phone: "02/843-1255",
    hours: {
      mon: "8:00 — 13:00",
      tueFri: "7:30 — 18:00",
      sat: "7:30 — 13:00",
    },
  },
  {
    name: "Mesnica Ptuj",
    address: "Prešernova ulica 12",
    city: "2250 Ptuj",
    phone: "02/787-2340",
    hours: {
      mon: "8:00 — 13:00",
      tueFri: "7:30 — 18:00",
      sat: "7:30 — 13:00",
    },
  },
  {
    name: "Mesnica Maribor",
    address: "Gosposka ulica 28",
    city: "2000 Maribor",
    phone: "02/234-5670",
    hours: {
      mon: "8:00 — 13:00",
      tueFri: "7:30 — 18:00",
      sat: "7:30 — 13:00",
    },
  },
  {
    name: "Mesnica Hoče",
    address: "Pohorska cesta 15",
    city: "2311 Hoče",
    phone: "02/613-4520",
    hours: {
      mon: "8:00 — 13:00",
      tueFri: "7:30 — 18:00",
      sat: "7:30 — 13:00",
    },
  },
  {
    name: "Mesnica Kidričevo",
    address: "Kajuhova ulica 3",
    city: "2325 Kidričevo",
    phone: "02/799-1180",
    hours: {
      mon: "8:00 — 13:00",
      tueFri: "7:30 — 18:00",
      sat: "7:30 — 13:00",
    },
  },
];

function MapIcon() {
  return (
    <svg
      className="w-4 h-4 mr-2 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-4 h-4 mr-2 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="w-4 h-4 mr-2 shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

type AnimationType =
  | "reveal"
  | "reveal-scale"
  | "reveal-left"
  | "reveal-right"
  | "reveal-rotate";

const cardAnimations: AnimationType[] = [
  "reveal-left",
  "reveal-right",
  "reveal-left",
  "reveal-right",
  "reveal-left",
  "reveal-right",
];

export default function PoslovalnicePage() {
  return (
    <>
      <Navbar />

      <PageHeader
        title="Naše poslovalnice."
        subtitle="6 mesnic v Štajerski"
        imageSrc="/images/poslovalnica-storefront.jpg"
      />

      {/* ── Intro ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <ScrollReveal className="max-w-3xl">
          <p className="text-brand-burgundy tracking-[0.2em] uppercase text-xs mb-4 font-bold">
            Po vsej Štajerski
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Vedno blizu <span className="italic text-brand-burgundy">vas</span>.
          </h2>
          <p className="text-brand-charcoal/70 font-light text-lg leading-relaxed">
            S šestimi mesnicami po Štajerski regiji smo vedno v vaši bližini.
            Vsaka naša poslovalnica ponuja celoten izbor svežega mesa,
            suhomesnatih izdelkov in specialitet za žar — vse pripravljeno po
            naših tradicionalnih recepturah z enako skrbnostjo in kakovostjo.
          </p>
        </ScrollReveal>
      </section>

      {/* ── Location cards ── */}
      <section className="pb-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <ScrollReveal
              key={location.name}
              type={cardAnimations[index]}
              delay={index * 100}
            >
              <div
                className={`relative border border-brand-charcoal/10 rounded-sm p-8 md:p-10 h-full transition-colors duration-300 hover:border-brand-charcoal/25 ${
                  location.badge ? "bg-brand-charcoal text-brand-cream" : ""
                }`}
              >
                {location.badge && (
                  <span className="absolute top-6 right-6 md:top-8 md:right-8 bg-brand-burgundy text-brand-cream text-[10px] tracking-[0.2em] uppercase font-bold px-4 py-1.5 rounded-full">
                    {location.badge}
                  </span>
                )}

                <h3 className="text-2xl font-serif mb-6 pr-28">
                  {location.name}
                </h3>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start">
                    <MapIcon />
                    <p
                      className={`text-sm font-light leading-relaxed ${
                        location.badge
                          ? "text-brand-cream/70"
                          : "text-brand-charcoal/70"
                      }`}
                    >
                      {location.address}
                      <br />
                      {location.city}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center">
                    <PhoneIcon />
                    <a
                      href={`tel:${location.phone.replace(/[/-]/g, "")}`}
                      className={`text-sm font-light transition-colors ${
                        location.badge
                          ? "text-brand-cream/70 hover:text-brand-cream"
                          : "text-brand-charcoal/70 hover:text-brand-charcoal"
                      }`}
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <ClockIcon />
                    <div
                      className={`text-sm font-light leading-relaxed ${
                        location.badge
                          ? "text-brand-cream/70"
                          : "text-brand-charcoal/70"
                      }`}
                    >
                      <p>
                        <span className="font-medium">Pon:</span>{" "}
                        {location.hours.mon}
                      </p>
                      <p>
                        <span className="font-medium">Tor — Pet:</span>{" "}
                        {location.hours.tueFri}
                      </p>
                      <p>
                        <span className="font-medium">Sob:</span>{" "}
                        {location.hours.sat}
                      </p>
                      <p>
                        <span className="font-medium">Ned & prazniki:</span>{" "}
                        Zaprto
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Maps link */}
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(
                    `${location.address}, ${location.city}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center mt-8 text-xs tracking-[0.2em] uppercase font-bold hover-underline-animation pb-1 ${
                    location.badge ? "text-brand-cream" : ""
                  }`}
                >
                  Prikaži na zemljevidu
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
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-brand-charcoal text-brand-cream py-24 md:py-32 px-6 md:px-12">
        <ScrollReveal type="reveal-scale" className="text-center max-w-3xl mx-auto">
          <p className="text-brand-sand tracking-[0.3em] uppercase text-xs mb-6 font-medium">
            Celotna ponudba
          </p>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Vsi naši izdelki so na voljo v{" "}
            <span className="italic text-brand-burgundy">vseh</span>{" "}
            poslovalnicah.
          </h2>
          <p className="text-brand-cream/60 font-light text-lg leading-relaxed mb-10">
            Ne glede na to, katero mesnico obiščete, vas povsod čaka enaka
            kakovost, svežina in prijazna postrežba.
          </p>
          <a
            href="/kontakt"
            className="inline-block border border-brand-cream/30 hover:border-brand-cream px-10 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300"
          >
            Stopite v stik
          </a>
        </ScrollReveal>
      </section>

      <Footer />
    </>
  );
}
