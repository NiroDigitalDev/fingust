"use client";

import { useRef, type FormEvent } from "react";

export default function ContactForm() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaInput = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Vaše sporočilo je bilo uspešno poslano.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="relative">
        <input
          type="text"
          id="name"
          required
          className="w-full bg-transparent border-b border-brand-charcoal/30 focus:border-brand-charcoal py-3 px-0 text-brand-charcoal placeholder-transparent peer outline-none transition-colors"
          placeholder="Ime in priimek"
        />
        <label
          htmlFor="name"
          className="absolute left-0 -top-3.5 text-xs tracking-widest uppercase text-brand-charcoal/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-charcoal/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-charcoal"
        >
          Ime in priimek
        </label>
      </div>
      <div className="relative">
        <input
          type="email"
          id="email"
          required
          className="w-full bg-transparent border-b border-brand-charcoal/30 focus:border-brand-charcoal py-3 px-0 text-brand-charcoal placeholder-transparent peer outline-none transition-colors"
          placeholder="E-pošta"
        />
        <label
          htmlFor="email"
          className="absolute left-0 -top-3.5 text-xs tracking-widest uppercase text-brand-charcoal/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-charcoal/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-charcoal"
        >
          E-pošta
        </label>
      </div>
      <div className="relative">
        <textarea
          ref={textareaRef}
          id="message"
          rows={1}
          required
          className="w-full bg-transparent border-b border-brand-charcoal/30 focus:border-brand-charcoal py-3 px-0 text-brand-charcoal placeholder-transparent peer outline-none transition-colors resize-none overflow-hidden"
          placeholder="Sporočilo"
          onInput={handleTextareaInput}
        />
        <label
          htmlFor="message"
          className="absolute left-0 -top-3.5 text-xs tracking-widest uppercase text-brand-charcoal/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-charcoal/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-charcoal"
        >
          Sporočilo
        </label>
      </div>
      <button
        type="submit"
        className="bg-brand-charcoal text-brand-cream px-10 py-4 text-xs tracking-[0.2em] uppercase font-bold hover:bg-brand-burgundy transition-colors duration-300"
      >
        Pošlji sporočilo
      </button>
    </form>
  );
}
