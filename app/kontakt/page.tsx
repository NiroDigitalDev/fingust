import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import PageHeader from "@/components/page-header";
import ScrollReveal from "@/components/scroll-reveal";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import { sanityFetch } from "@/lib/sanity.live";
import { contactDepartmentsQuery } from "@/lib/sanity.queries";
import type { ContactDepartment } from "@/lib/sanity.types";

export const metadata: Metadata = {
  title: "Kontakt | Mesnice Fingušt",
  description:
    "Stopite v stik z nami — kontaktni podatki in obrazec za povpraševanje.",
};

function PhoneIcon() {
  return (
    <svg
      className="w-4 h-4 shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      className="w-4 h-4 shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      className="w-5 h-5 shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

export default async function KontaktPage() {
  const { data: departments } = (await sanityFetch({ query: contactDepartmentsQuery })) as { data: ContactDepartment[] };

  return (
    <>
      <Navbar />

      <PageHeader
        title="Stopite v stik."
        subtitle="Kontakt"
        imageSrc="/images/butcher-portrait.jpg"
      />

      <section className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28">
          {/* ── Left Column: Contact Details ── */}
          <div>
            <ScrollReveal>
              <p className="text-brand-burgundy tracking-[0.2em] uppercase text-xs mb-4 font-bold">
                Oddelki
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-16">
                Kontaktni podatki.
              </h2>
            </ScrollReveal>

            <div className="space-y-0">
              {departments.map((dept, i) => (
                <ScrollReveal key={dept._id} delay={i * 100}>
                  <div className="border-t border-brand-charcoal/15 py-8">
                    <p className="text-xs tracking-[0.2em] uppercase font-bold text-brand-charcoal/50 mb-3">
                      {dept.department}
                    </p>
                    {dept.personName && (
                      <p className="font-serif text-lg mb-4">
                        {dept.personName}
                        {dept.personTitle && (
                          <span className="text-brand-charcoal/50 text-sm font-sans">, {dept.personTitle}</span>
                        )}
                      </p>
                    )}

                    <div className="space-y-2">
                      {/* Primary phone */}
                      {dept.phone && (
                        <div className="flex items-start gap-3 text-sm text-brand-charcoal/70">
                          <PhoneIcon />
                          <a
                            href={`tel:${dept.phone.replace(/\//g, "").replace(/-/g, "")}`}
                            className="hover:text-brand-burgundy transition-colors"
                          >
                            {dept.phone}
                          </a>
                        </div>
                      )}

                      {/* Additional phones */}
                      {dept.additionalPhones?.map((phone: string) => (
                        <div
                          key={phone}
                          className="flex items-start gap-3 text-sm text-brand-charcoal/70"
                        >
                          <PhoneIcon />
                          <a
                            href={`tel:${phone.replace(/\//g, "").replace(/-/g, "")}`}
                            className="hover:text-brand-burgundy transition-colors"
                          >
                            {phone}
                          </a>
                        </div>
                      ))}

                      {/* Email */}
                      {dept.email && (
                        <div className="flex items-start gap-3 text-sm text-brand-charcoal/70">
                          <EmailIcon />
                          <a
                            href={`mailto:${dept.email}`}
                            className="hover:text-brand-burgundy transition-colors"
                          >
                            {dept.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* ── Address ── */}
            <ScrollReveal delay={500}>
              <div className="border-t border-brand-charcoal/15 pt-10 mt-2">
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-brand-charcoal/50 mb-3">
                  Sedež podjetja
                </p>
                <div className="flex items-start gap-3">
                  <MapPinIcon />
                  <div>
                    <p className="font-serif text-lg leading-relaxed">
                      Mesnine štajerske d.o.o.
                      <br />
                      Spodnji gaj pri Pragerskem 9
                      <br />
                      2331 Pragersko
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Spodnji+gaj+pri+Pragerskem+9+2331+Pragersko+Slovenia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-xs tracking-[0.2em] uppercase font-bold hover-underline-animation pb-1"
                    >
                      Prikaži na zemljevidu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-6 text-sm text-brand-charcoal/70">
                  <EmailIcon />
                  <a
                    href="mailto:info@fingust.si"
                    className="hover:text-brand-burgundy transition-colors"
                  >
                    info@fingust.si
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right Column: Contact Form ── */}
          <div>
            <ScrollReveal type="reveal-right">
              <p className="text-brand-burgundy tracking-[0.2em] uppercase text-xs mb-4 font-bold">
                Obrazec
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-16">
                Pošljite nam sporočilo.
              </h2>
            </ScrollReveal>

            <ScrollReveal type="reveal-right" delay={200}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
