import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mesnice Fingušt",
  description:
    "Mesnice Fingušt - Mesnine štajerske d.o.o. Nudimo sveže domače meso, suhomesnate izdelke in žar program z garancijo kakovosti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sl"
      className={`${outfit.variable} ${playfairDisplay.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased selection:bg-brand-burgundy selection:text-white">
        {children}
      </body>
    </html>
  );
}
