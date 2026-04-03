import Link from "next/link";
import ScrollReveal from "@/components/scroll-reveal";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream pt-24 pb-8 px-6 md:px-12 overflow-hidden relative">
      <ScrollReveal>
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start mb-24 relative z-10 border-b border-brand-cream/10 pb-16">
          <div className="max-w-sm mb-12 md:mb-0">
            <p className="font-serif italic text-2xl mb-6">
              Tradicija in kakovost odličnega mesa.
            </p>
            <a
              href="mailto:info@fingust.si"
              className="text-xl hover:text-brand-burgundy transition-colors"
            >
              info@fingust.si
            </a>
          </div>

          <div className="flex space-x-10 md:space-x-16">
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-brand-sand mb-6">
                Navigacija
              </h4>
              <ul className="space-y-4 font-light text-sm">
                <li>
                  <Link
                    href="/izdelki"
                    className="hover:text-brand-burgundy transition-colors"
                  >
                    Izdelki
                  </Link>
                </li>
                <li>
                  <Link
                    href="/o-podjetju"
                    className="hover:text-brand-burgundy transition-colors"
                  >
                    O podjetju
                  </Link>
                </li>
                <li>
                  <Link
                    href="/poslovalnice"
                    className="hover:text-brand-burgundy transition-colors"
                  >
                    Poslovalnice
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    className="hover:text-brand-burgundy transition-colors"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-brand-sand mb-6">
                Družbena omrežja
              </h4>
              <ul className="space-y-4 font-light text-sm">
                <li>
                  <a
                    href="https://www.facebook.com/mesnineFinGust/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-burgundy transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/fingust1988/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-burgundy transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@fingust1988"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-burgundy transition-colors"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="w-full flex justify-center items-center mb-8 select-none overflow-hidden">
        <h2 className="text-[15vw] leading-none font-serif font-black tracking-tighter opacity-10">
          FINGUŠT.
        </h2>
      </div>

      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-brand-cream/40 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Mesnine štajerske d.o.o.</p>
        <p className="mt-4 md:mt-0">Vse pravice pridržane.</p>
      </div>
    </footer>
  );
}
