"use client";

import { useEffect, useState } from "react";
import PixCopyButton from "./PixCopyButton";

const weddingDate = new Date("2026-11-07T16:00:00-03:00");
const CAMICADO_URL = "https://www.camicado.com.br/lista/convidado/brenoepaula";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Casa+Montenegro%2C+Av.+Presidente+Costa+e+Silva%2C+3601%2C+Fortaleza%2C+CE";
const WAZE_URL = "https://www.waze.com/ul?q=Casa%20Montenegro%2C%20Av.%20Presidente%20Costa%20e%20Silva%2C%203601%2C%20Fortaleza%2C%20CE&navigate=yes";

function getTimeLeft() {
  const distance = Math.max(0, weddingDate.getTime() - Date.now());
  return {
    dias: Math.floor(distance / 86_400_000),
    horas: Math.floor((distance / 3_600_000) % 24),
    minutos: Math.floor((distance / 60_000) % 60),
    segundos: Math.floor((distance / 1_000) % 60),
  };
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav" aria-label="Navegação principal">
          <button className="monogram" onClick={() => scrollTo("inicio")} aria-label="Ir ao início">B <span>♥</span> P</button>
          <div className="nav-links">
            <button onClick={() => scrollTo("nossa-historia")}>Nossa história</button>
            <button onClick={() => scrollTo("o-grande-dia")}>O grande dia</button>
            <button onClick={() => scrollTo("galeria")}>Galeria</button>
            <button onClick={() => scrollTo("presentes")}>Presentes</button>
          </div>
        </nav>

        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Vamos nos casar</p>
          <h1>Breno <span>&amp;</span> Paula</h1>
          <div className="gold-line" />
          <p className="date">07 · 11 · 2026</p>
          <p className="hero-message">O nosso para sempre começa aqui.</p>
          <button className="outline-button" onClick={() => scrollTo("o-grande-dia")}>Descubra nossa história <span>↓</span></button>
        </div>
      </section>

      <section className="intro" id="nossa-historia">
        <p className="eyebrow dark">A nossa história</p>
        <h2>Do encontro ao <em>sim</em></h2>
        <p className="lead">Entre tantos caminhos possíveis, o amor nos trouxe até aqui. E agora, com o coração cheio de alegria, queremos celebrar este novo capítulo ao lado das pessoas que amamos.</p>

        <div className="story-grid">
          <div className="story-photo photo-one">
            <img src="/images/casal-1.jpg" alt="Casal em um momento romântico ao ar livre" />
            <span className="photo-tag">O começo de tudo</span>
          </div>
          <div className="story-copy">
            <span className="chapter">Capítulo um</span>
            <h3>Quando dois caminhos se tornam um</h3>
            <p>Uma história feita de encontros, conversas que não queríamos que terminassem, viagens, planos e incontáveis motivos para sorrir.</p>
            <p>Descobrimos que o amor mora nos detalhes — no cuidado diário, nas risadas inesperadas e na certeza tranquila de ter encontrado um lar um no outro.</p>
            <div className="signature">Breno &amp; Paula</div>
          </div>
        </div>
      </section>

      <section className="countdown" id="o-grande-dia">
        <div className="countdown-inner">
          <div className="rings" aria-hidden="true">◯<span>◯</span></div>
          <p className="eyebrow dark">Contagem regressiva</p>
          <h2>Para o nosso grande dia</h2>
          <div className="counter" aria-label="Tempo restante para o casamento">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div className="time-unit" key={label}>
                <strong>{String(value).padStart(2, "0")}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <p className="wedding-time">Sábado, 7 de novembro de 2026 · às 16h</p>
          <p className="timezone">Horário de Brasília</p>
        </div>
      </section>

      <section className="details">
        <div className="details-copy">
          <p className="eyebrow dark">Reserve esta data</p>
          <h2>Um dia para guardar no coração</h2>
          <p>Estamos preparando cada detalhe com muito carinho para viver esta celebração ao lado de vocês.</p>
          <div className="detail-row"><span>♡</span><div><strong>Cerimônia &amp; Recepção</strong><p>Casa Montenegro</p></div></div>
          <div className="detail-row"><span>⌖</span><div><strong>Casa Montenegro</strong><p>Av. Presidente Costa e Silva, 3601 · Mondubim, Fortaleza — CE</p></div></div>
          <div className="map-links" aria-label="Rotas para a Casa Montenegro">
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">Abrir no Google Maps <span>↗</span></a>
            <a href={WAZE_URL} target="_blank" rel="noopener noreferrer">Abrir no Waze <span>↗</span></a>
          </div>
          <div className="rsvp-cta">
            <span className="rsvp-heart" aria-hidden="true">♡</span>
            <div>
              <strong>Você celebra com a gente?</strong>
              <p>Sua confirmação vai nos ajudar a preparar tudo com muito carinho.</p>
            </div>
            <button className="rsvp-button" type="button" disabled>
              Confirmar minha presença
              <small>Disponível em breve</small>
            </button>
          </div>
        </div>
        <div className="details-photo"><img src="/images/casal-2.jpg" alt="Casal celebrando junto ao pôr do sol" /></div>
      </section>

      <section className="gift-options home-gifts" id="presentes">
        <p className="eyebrow dark">Lista de presentes</p>
        <h2>O melhor presente é ter você conosco</h2>
        <p className="gift-options-intro">A sua presença é o que realmente importa. Para quem desejar nos presentear, reunimos algumas opções com muito carinho.</p>

        <div className="gift-option-grid">
          <article className="gift-option-card">
            <div className="brand-logo camicado-logo" aria-label="Camicado">camicado</div>
            <h3>Lista na Camicado</h3>
            <p>Nossa seleção para o começo da vida a dois está disponível no ambiente seguro da Camicado.</p>
            <a className="gift-option-action" href={CAMICADO_URL} target="_blank" rel="noopener noreferrer">Ver lista <span>↗</span></a>
          </article>

          <article className="gift-option-card is-placeholder">
            <div className="brand-logo amazon-logo" aria-label="Amazon">amazon<span>⌣</span></div>
            <h3>Lista na Amazon</h3>
            <p>Também estamos preparando uma segunda opção para facilitar a escolha de quem preferir.</p>
            <span className="gift-option-disabled">Em breve</span>
          </article>

          <article className="gift-option-card pix-card">
            <img className="pix-logo" src="/pix-logo.svg" alt="Pix" />
            <h3>Um carinho via Pix</h3>
            <p>Se fizer mais sentido para você, deixamos também a opção de contribuir livremente para os nossos novos planos — sem qualquer obrigação.</p>
            <PixCopyButton />
          </article>
        </div>
      </section>

      <section className="gallery" id="galeria">
        <p className="eyebrow dark">Nossos momentos</p>
        <h2>Uma história contada em imagens</h2>
        <div className="gallery-grid">
          <figure className="gallery-tall"><img src="/images/casal-hero.jpg" alt="Casal abraçado em um campo" /></figure>
          <figure><img src="/images/casal-3.jpg" alt="Detalhe romântico de um casal de mãos dadas" /></figure>
          <blockquote>“O amor não se vê com os olhos, mas com o coração.”<span>— William Shakespeare</span></blockquote>
        </div>
      </section>

      <footer>
        <div className="footer-mark">B <span>♥</span> P</div>
        <p>Com amor, Paula e Breno</p>
        <small>7 de novembro de 2026 · Fortaleza, Ceará</small>
      </footer>
    </main>
  );
}
