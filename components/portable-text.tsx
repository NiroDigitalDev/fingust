import { PortableText as PortableTextReact } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const components = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl md:text-4xl font-serif mb-6 mt-12 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl font-serif mb-4 mt-8">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-xl font-serif mb-3 mt-6">{children}</h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-brand-charcoal/70 font-light text-lg leading-relaxed mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-2 border-brand-burgundy pl-6 italic font-serif text-xl text-brand-charcoal/80 my-8">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold text-brand-charcoal">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-brand-charcoal/70 font-light text-lg">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-brand-charcoal/70 font-light text-lg">
        {children}
      </ol>
    ),
  },
};

export default function PortableText({
  value,
  className = "",
}: {
  value: PortableTextBlock[];
  className?: string;
}) {
  if (!value) return null;
  return (
    <div className={className}>
      <PortableTextReact value={value} components={components} />
    </div>
  );
}
