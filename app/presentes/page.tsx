import type { Metadata } from "next";

const CAMICADO_URL = "https://www.camicado.com.br/lista/convidado/brenoepaula";

export const metadata: Metadata = {
  title: "Lista de Presentes | Breno & Paula",
  description: "Conheça a lista de presentes de casamento de Breno e Paula.",
};

const suggestions = [
  {
    number: "01",
    title: "Para a nossa cozinha",
    text: "Peças para receber, cozinhar e transformar encontros simples em boas memórias.",
  },
  {
    number: "02",
    title: "Para o nosso lar",
    text: "Detalhes escolhidos com carinho para deixar cada cantinho com a nossa história.",
  },
  {
    number: "03",
    title: "Para celebrar a vida",
    text: "Itens para brindar, compartilhar e viver muitos momentos especiais lado a lado.",
  },
];

export default function Presentes() {
  return (
    <main className="gifts-page">
      <header className="gifts-nav">
        <a className="monogram gifts-monogram" href="/" aria-label="Voltar para a página inicial">B <span>♥</span> P</a>
        <a className="back-home" href="/">← Voltar ao início</a>
      </header>

      <section className="gifts-hero">
        <div className="gifts-hero-photo" role="img" aria-label="Casal em um momento romântico" />
        <div className="gifts-hero-copy">
          <div className="rings" aria-hidden="true">◯<span>◯</span></div>
          <p className="eyebrow dark">Lista de presentes</p>
          <h1>O melhor presente é ter você conosco</h1>
          <p>Mas, se quiser nos presentear, preparamos uma seleção especial para o início da nossa vida a dois.</p>
          <a className="gift-primary-button" href={CAMICADO_URL} target="_blank" rel="noopener noreferrer">
            Ver lista na Camicado <span>↗</span>
          </a>
          <small>Você será direcionado ao ambiente seguro da Camicado.</small>
        </div>
      </section>

      <section className="gift-intro">
        <p className="eyebrow dark">Escolhidos com carinho</p>
        <h2>Um pedacinho da nossa <em>nova história</em></h2>
        <p className="lead">Cada item da lista foi pensado para construir o nosso lar e acompanhar os pequenos e grandes momentos que viveremos juntos.</p>

        <div className="gift-cards">
          {suggestions.map((item) => (
            <article className="gift-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={CAMICADO_URL} target="_blank" rel="noopener noreferrer" aria-label={`${item.title} — abrir lista na Camicado`}>Explorar a lista →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="gift-how">
        <div>
          <p className="eyebrow dark">Como funciona</p>
          <h2>Simples, seguro e com todo carinho</h2>
        </div>
        <ol>
          <li><span>1</span><p><strong>Acesse nossa lista</strong>O botão abre a página oficial de Breno e Paula na Camicado.</p></li>
          <li><span>2</span><p><strong>Escolha um presente</strong>Veja os itens disponíveis e escolha aquele que mais combina com você.</p></li>
          <li><span>3</span><p><strong>Finalize com segurança</strong>A compra e o pagamento acontecem diretamente no ambiente da Camicado.</p></li>
        </ol>
      </section>

      <section className="gift-final">
        <p>Com carinho,</p>
        <h2>Breno &amp; Paula</h2>
        <p>Obrigada por fazer parte deste momento tão especial.</p>
        <a className="gift-primary-button" href={CAMICADO_URL} target="_blank" rel="noopener noreferrer">Ir para a lista de presentes <span>↗</span></a>
      </section>

      <footer>
        <div className="footer-mark">B <span>♥</span> P</div>
        <p>7 de novembro de 2026</p>
        <small>Fortaleza, Ceará</small>
      </footer>
    </main>
  );
}
