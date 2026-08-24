import type { Metadata } from "next";
import { Great_Vibes, Lora, Montserrat, Pinyon_Script } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const greatVibes = Great_Vibes({
  variable: "--font-romantic",
  subsets: ["latin"],
  weight: "400",
});

const pinyon = Pinyon_Script({
  variable: "--font-invitation-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Breno & Paula | 07.11.2026",
  description: "Celebre conosco o casamento de Breno e Paula, em 7 de novembro de 2026.",
  openGraph: {
    title: "Breno & Paula | 07.11.2026",
    description: "O nosso para sempre começa aqui.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Breno & Paula — 07 de novembro de 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breno & Paula | 07.11.2026",
    description: "O nosso para sempre começa aqui.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${lora.variable} ${montserrat.variable} ${greatVibes.variable} ${pinyon.variable}`}>{children}</body>
    </html>
  );
}
