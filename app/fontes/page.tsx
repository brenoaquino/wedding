import {
  Allura,
  Bodoni_Moda,
  Cormorant_Garamond,
  Great_Vibes,
  Inter,
  Lato,
  Libre_Baskerville,
  Lora,
  Montserrat,
  Parisienne,
  Pinyon_Script,
  Source_Sans_3,
} from "next/font/google";
import Link from "next/link";
import "./fontes.css";

const pinyon = Pinyon_Script({ subsets: ["latin"], weight: "400" });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const allura = Allura({ subsets: ["latin"], weight: "400" });
const parisienne = Parisienne({ subsets: ["latin"], weight: "400" });
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"] });

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["300", "400", "500"] });
const lora = Lora({ subsets: ["latin"], weight: ["400", "500"] });
const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

const heroFonts = [
  { name: "Pinyon Script", style: "Caligrafia clássica · atual", className: pinyon.className },
  { name: "Great Vibes", style: "Romântica e fluida", className: greatVibes.className },
  { name: "Allura", style: "Leve e delicada", className: allura.className },
  { name: "Parisienne", style: "Elegante e descontraída", className: parisienne.className },
  { name: "Bodoni Moda", style: "Editorial e sofisticada", className: bodoni.className },
  { name: "Cormorant Garamond", style: "Clássica e atemporal", className: cormorant.className },
];

const bodyFonts = [
  { name: "Montserrat", style: "Geométrica · atual", className: montserrat.className },
  { name: "Inter", style: "Limpa e contemporânea", className: inter.className },
  { name: "Lato", style: "Acolhedora e legível", className: lato.className },
  { name: "Source Sans 3", style: "Neutra e refinada", className: sourceSans.className },
  { name: "Lora", style: "Serifada e calorosa", className: lora.className },
  { name: "Libre Baskerville", style: "Tradicional e editorial", className: libre.className },
];

export default function FontesPage() {
  return (
    <main className="font-lab">
      <header className="font-lab-header">
        <Link href="/">← Voltar ao site</Link>
        <img src="/pb.png" alt="Monograma de Paula e Breno" />
        <p>Guia tipográfico</p>
        <h1>Escolha as fontes do nosso site</h1>
        <p className="font-lab-intro">Compare as opções no mesmo tamanho e contexto. Depois, basta indicar o nome da fonte escolhida para cada uso.</p>
      </header>

      <section className="font-section">
        <div className="font-section-heading">
          <span>01</span>
          <div>
            <p>Para os nomes no hero</p>
            <h2>Fontes de destaque</h2>
          </div>
        </div>

        <div className="hero-font-grid">
          {heroFonts.map((font) => (
            <article className="hero-font-card" key={font.name}>
              <div className="font-meta">
                <strong>{font.name}</strong>
                <span>{font.style}</span>
              </div>
              <p className={font.className}>Breno <em>&amp;</em> Paula</p>
              <small>07 · 11 · 2026</small>
            </article>
          ))}
        </div>
      </section>

      <section className="font-section body-font-section">
        <div className="font-section-heading">
          <span>02</span>
          <div>
            <p>Para os textos do site</p>
            <h2>Fontes de leitura</h2>
          </div>
        </div>

        <div className="body-font-grid">
          {bodyFonts.map((font) => (
            <article className="body-font-card" key={font.name}>
              <div className="font-meta">
                <strong>{font.name}</strong>
                <span>{font.style}</span>
              </div>
              <div className={font.className}>
                <h3>Um dia para guardar no coração</h3>
                <p>Entre tantos caminhos possíveis, o amor nos trouxe até aqui. Queremos celebrar este novo capítulo ao lado das pessoas que amamos.</p>
                <small>Sábado, 7 de novembro de 2026 · Fortaleza, Ceará</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="font-lab-footer">
        <p>Anote uma opção para o hero e outra para o texto.</p>
        <Link href="/">Voltar para Breno &amp; Paula →</Link>
      </footer>
    </main>
  );
}
