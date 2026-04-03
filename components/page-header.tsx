import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";

export default function PageHeader({
  title,
  subtitle,
  imageSrc,
}: {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}) {
  return (
    <header className="relative pt-32 pb-24 md:pb-32 px-6 md:px-12 bg-brand-charcoal text-brand-cream overflow-hidden">
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/50 via-brand-charcoal/70 to-brand-charcoal" />
        </div>
      )}
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <ScrollReveal>
          {subtitle && (
            <p className="text-brand-sand tracking-[0.3em] uppercase text-xs mb-6 font-medium">
              {subtitle}
            </p>
          )}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95]">
            {title}
          </h1>
        </ScrollReveal>
      </div>
    </header>
  );
}
