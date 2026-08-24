"use client";

import { useEffect, useState } from "react";
import PixCopyButton from "./PixCopyButton";

const weddingDate = new Date("2026-11-07T16:00:00-03:00");
const CAMICADO_URL = "https://www.camicado.com.br/lista/convidado/brenoepaula";
const RSVP_FORM_URL = "https://script.google.com/macros/s/AKfycbxat0kjMDmL9NZz8hXlUaz6EZRPAr6YM60AAlzqLW9r3spqFos0iVnhLQ-T3PgP571dbw/exec";
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
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);
  const [rsvpOpen, setRsvpOpen] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setTimeLeft(getTimeLeft()));
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (!rsvpOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setRsvpOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [rsvpOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav" aria-label="Navegação principal">
          <button className="monogram" onClick={() => scrollTo("inicio")} aria-label="Ir ao início">
            <img src="/pb.png" alt="" aria-hidden="true" />
          </button>
          <div className="nav-links">
            <button onClick={() => scrollTo("nossa-historia")}>Nossa história</button>
            <button onClick={() => scrollTo("o-grande-dia")}>O grande dia</button>
            <button onClick={() => scrollTo("presentes")}>Presentes</button>
          </div>
        </nav>

        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Breno <span>&amp;</span> Paula</h1>
          <div className="gold-line" />
          <p className="date">07 · 11 · 2026</p>
          <p className="hero-message">O nosso para sempre começa aqui.</p>
          <button className="outline-button" onClick={() => scrollTo("o-grande-dia")}>Descubra nossa história <span>↓</span></button>
        </div>
      </section>

      <section className="intro story-section" id="nossa-historia">
        <p className="eyebrow dark">A nossa história</p>
        <h2>Do encontro ao <em>sim</em></h2>
        <p className="lead">Entre tantos caminhos possíveis, o amor nos trouxe até aqui. E agora, com o coração cheio de alegria, queremos celebrar este novo capítulo ao lado das pessoas que amamos.</p>

        <div className="story-editorial">
          <article className="story-panel story-panel-one">
            <img src="/images/historia-principal.jpg" alt="Silhueta de Paula e Breno diante das janelas" />
            <div className="story-panel-shade" />
            <div className="story-panel-copy">
              <span className="chapter">Capítulo um</span>
              <h3>Quando dois caminhos se tornam um</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </article>

          <article className="story-panel story-panel-two">
            <img src="/images/historia-horizonte.jpg" alt="Paula e Breno contemplando juntos a paisagem" />
            <div className="story-panel-shade" />
            <div className="story-panel-copy">
              <span className="story-number">02</span>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </article>

          <article className="story-panel story-panel-three">
            <img src="/images/historia-pb.jpg" alt="Paula e Breno abraçados vistos de cima" />
            <div className="story-panel-shade" />
            <div className="story-panel-copy">
              <span className="story-number">03</span>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </article>

          <article className="story-panel story-panel-four">
            <img src="/images/historia-retrato.jpg" alt="Paula e Breno dançando sob a luz do sol" />
            <div className="story-panel-shade" />
            <div className="story-panel-copy">
              <span className="story-number">04</span>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className="signature">Paula &amp; Breno</div>
            </div>
          </article>
        </div>
      </section>

      <section className="countdown" id="o-grande-dia">
        <div className="countdown-inner">
          <div className="rings" aria-hidden="true">◯<span>◯</span></div>
          <p className="eyebrow dark">Contagem regressiva</p>
          <h2>Para o nosso grande dia</h2>
          <div className="counter" aria-label="Tempo restante para o casamento">
            {Object.entries(timeLeft ?? { dias: null, horas: null, minutos: null, segundos: null }).map(([label, value]) => (
              <div className="time-unit" key={label}>
                <strong>{value === null ? "--" : String(value).padStart(2, "0")}</strong>
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
            <span className="rsvp-label">RSVP</span>
            <span className="rsvp-heart" aria-hidden="true">♡</span>
            <strong>Queremos você com a gente</strong>
            <p>Conte para nós se poderá estar presente nesse dia tão especial.</p>
            <button className="rsvp-button" type="button" onClick={() => setRsvpOpen(true)}>
              <span>Confirmar presença</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <div className="details-photo"><img src="/images/casal-2.jpg" alt="Paula e Breno dançando vistos de cima" /></div>
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

      <footer>
        <div className="footer-mark"><img src="/pb.png" alt="Monograma de Paula e Breno" /></div>
        <p>Com amor, Paula e Breno</p>
        <small>7 de novembro de 2026 · Fortaleza, Ceará</small>
      </footer>

      {rsvpOpen && (
        <div className="rsvp-modal" role="dialog" aria-modal="true" aria-label="Confirmar presença">
          <button className="rsvp-backdrop" type="button" onClick={() => setRsvpOpen(false)} aria-label="Fechar confirmação de presença" />
          <div className="rsvp-modal-panel">
            <button className="rsvp-close" type="button" onClick={() => setRsvpOpen(false)} aria-label="Fechar">×</button>
            <iframe src={RSVP_FORM_URL} title="Formulário de confirmação de presença" />
          </div>
        </div>
      )}
    </main>
  );
}
