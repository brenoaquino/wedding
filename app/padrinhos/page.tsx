import type { Metadata } from "next";
import Link from "next/link";
import styles from "./padrinhos.module.css";

export const metadata: Metadata = {
  title: "Padrinhos e madrinhas | Paula & Breno",
  description: "Orientações com carinho para os nossos padrinhos e madrinhas: chegada, local e trajes para o nosso grande dia.",
  robots: { index: false, follow: false },
};

export default function PadrinhosPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <img className={styles.heroPhoto} src="/images/historia-horizonte.jpg" alt="Paula e Breno contemplando juntos a paisagem" />
        <div className={styles.shade} />
        <nav className={styles.nav} aria-label="Navegação">
          <Link className={styles.monogram} href="/" aria-label="Página principal de Paula e Breno"><img src="/pb.png" alt="" /></Link>
          <Link className={styles.back} href="/">← Nosso casamento</Link>
        </nav>
        <div className={styles.heroCopy}>
          <p className="eyebrow">Ao nosso lado, no nosso grande dia</p>
          <h1>Padrinhos <span>&amp;</span><br />madrinhas</h1>
          <div className="gold-line" />
          <p className={styles.subtitle}>Um lugar especial no altar e na nossa história.</p>
          <p className={styles.date}>07 · 11 · 2026</p>
        </div>
      </header>

      <nav className={styles.guideNav} aria-label="Nesta página">
        <span>Os detalhes do nosso dia</span>
        <a href="#chegada">01 <span>Chegada</span></a>
        <a href="#trajes">02 <span>Trajes</span></a>
        <a href="#mensagem">03 <span>Com carinho</span></a>
      </nav>
      <section id="orientacoes" className={styles.letter} aria-labelledby="welcome-title">
        <p className="eyebrow dark">Com carinho, para vocês</p>
        <h2 id="welcome-title">Orientações para os nossos<br /><em>padrinhos e madrinhas</em></h2>
        <div className={styles.letterBody}>
          <p className={styles.salutation}>Queridos padrinhos e madrinhas,</p>
          <p>Estamos muito felizes por compartilhar esse momento tão especial com vocês! Preparamos algumas orientações para ajudá-los na escolha dos trajes, para que todos se sintam lindos, elegantes e confortáveis.</p>
        </div>
      </section>

      <section id="chegada" className={styles.arrival} aria-labelledby="arrival-title">
        <div>
          <p className="eyebrow dark">01 / Nosso encontro</p>
          <h2 id="arrival-title">Um pouco antes<br /><em>do nosso sim.</em></h2>
          <p>Pedimos que todos cheguem à Casa Montenegro às 15h30, para que estejam acomodados e prontos para a cerimônia.</p>
        </div>
        <div className={styles.location}>
          <span>Horário de chegada</span>
          <div className={styles.arrivalTime}>15<span>h</span>30</div>
          <strong>Casa Montenegro</strong>
          <p>7 de novembro de 2026</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Casa+Montenegro%2C+Av.+Presidente+Costa+e+Silva%2C+3601%2C+Fortaleza%2C+CE" target="_blank" rel="noopener noreferrer">Como chegar <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section id="trajes" className={styles.attire} aria-labelledby="attire-title">
        <p className="eyebrow dark">02 / O que vestir</p>
        <h2 id="attire-title">Traje: <em>passeio completo</em></h2>
        <p className={styles.attireIntro}>Para o nosso casamento, sugerimos o traje passeio completo.</p>
        <div className={styles.cards}>
          <article className={styles.card}>
            <svg className={styles.attireIcon} viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M29 10v14l11 9 11-9V10M29 24l-6 12 9 14-17 39q25 9 50 0L48 50l9-14-6-12M32 50h16M35 13q5 6 10 0" /></svg>
            <span className={styles.cardNumber}>Madrinhas</span>
            <h3>Para as madrinhas</h3>
            <p className={styles.cardLead}>A cor que faz você se sentir bonita.</p>
            <ul>
              <li>Não definimos uma cor específica! Fiquem à vontade para escolher a cor com a qual mais se identificam e se sentem bonitas.</li>
              <li>Pedimos apenas que <strong>evitem vestidos brancos e pretos.</strong></li>
              <li>Recomendamos evitar modelos excessivamente sensuais.</li>
            </ul>
          </article>
          <article className={styles.card}>
            <svg className={styles.attireIcon} viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="m29 14-15 9-5 61 15 2 4-37v41h24V49l4 37 15-2-5-61-15-9M29 14l11 41 11-41M29 14l-5 18 10 4-5 6 11 13 11-13-5-6 10-4-5-18M35 16l5 6 5-6M40 22l-4 16 4 8 4-8-4-16M51 54h9M40 62v22" /></svg>
            <span className={styles.cardNumber}>Padrinhos</span>
            <h3>Para os padrinhos</h3>
            <p className={styles.cardLead}>Elegância para celebrar com a gente.</p>
            <ul>
              <li><strong>Não são permitidos ternos azuis, em qualquer tonalidade.</strong></li>
              <li>Recomendamos <strong>terno completo cinza com camisa social branca</strong>, gravata e sapato social, em uma composição elegante e alinhada à ocasião.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="mensagem" className={styles.closing} aria-label="Uma mensagem dos noivos">
        <p className="eyebrow dark">03 / De coração</p>
        <h2>O mais especial é ter<br /><em>vocês conosco.</em></h2>
        <p>Acima de tudo, queremos que vocês se sintam bem e aproveitem cada instante conosco!</p>
        <p>Agradecemos por todo o carinho e por fazerem parte da nossa história. Mal podemos esperar para celebrar esse dia ao lado de vocês!</p>
        <p className={styles.withLove}>Com carinho,</p>
        <div className="signature">Paula e Breno</div>
      </section>
      <footer>
        <div className="footer-mark"><img src="/pb.png" alt="Monograma de Paula e Breno" /></div>
        <p>Com amor, Paula e Breno</p>
        <small>7 de novembro de 2026 · Fortaleza, Ceará</small>
      </footer>
    </main>
  );
}
