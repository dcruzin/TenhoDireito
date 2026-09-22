import { Icon, Logo } from './Icons'

const faqs = [
  ['A avaliação é gratuita?', 'Sim. A avaliação preliminar desta plataforma é gratuita e não te obriga a pedir uma análise profissional.'],
  ['Isto substitui uma consulta com um advogado?', 'Não. O resultado é informativo e baseado apenas nas respostas dadas. Uma análise jurídica exige a apreciação do caso concreto por um profissional habilitado.'],
  ['Quanto tempo demora?', 'A maioria das pessoas consegue concluir as perguntas em cerca de dois minutos. Casos com mais detalhes podem demorar um pouco mais.'],
  ['O resultado é garantido?', 'Não. A avaliação identifica sinais que podem merecer atenção, mas não confirma nem garante um direito, um valor ou um resultado jurídico.'],
  ['O que acontece aos meus dados?', 'Nesta versão de demonstração, os dados do formulário não são enviados. Antes do lançamento, a política de privacidade explicará a finalidade, conservação e eventual partilha de dados.'],
  ['Tenho de avançar com um advogado?', 'Não. A decisão é sempre tua. Pedir informação ou preparar um pedido não te obriga a contratar um advogado.'],
  ['Posso usar o serviço se ainda estiver empregado?', 'Sim. Algumas situações podem ser avaliadas enquanto o contrato continua em vigor. Evita usar um dispositivo da empresa se isso te causar desconforto.'],
]

export function TrustSignals() {
  return (
    <ul className="trust-row" aria-label="Características da avaliação">
      <li><Icon name="check" size={16} /><span>Avaliação gratuita</span></li>
      <li><Icon name="timer" size={16} /><span>Cerca de 2 minutos</span></li>
      <li><Icon name="lock" size={16} /><span>Dados confidenciais</span></li>
      <li><Icon name="heart" size={16} /><span>Sem compromisso</span></li>
    </ul>
  )
}

export function HowItWorks() {
  return (
    <section className="content-section how-section" id="como-funciona" aria-labelledby="how-title">
      <div className="section-heading">
        <span className="eyebrow">SIMPLES E TRANSPARENTE</span>
        <h2 id="how-title">Perceber o próximo passo não devia ser complicado</h2>
        <p>Começa com informação clara e decide com calma o que queres fazer a seguir.</p>
      </div>
      <ol className="steps-grid">
        <li><span className="step-number">01</span><span className="step-icon"><Icon name="document" /></span><h3>Conta-nos o que aconteceu</h3><p>Escolhe a situação e responde a perguntas curtas, sem linguagem jurídica difícil.</p></li>
        <li><span className="step-number">02</span><span className="step-icon"><Icon name="info" /></span><h3>Recebe uma avaliação preliminar</h3><p>Vê os pontos que podem merecer atenção e o que ainda precisa de ser confirmado.</p></li>
        <li><span className="step-number">03</span><span className="step-icon"><Icon name="user" /></span><h3>Se fizer sentido, pede análise profissional</h3><p>Decide se queres preparar o teu caso para revisão por um advogado independente.</p></li>
      </ol>
    </section>
  )
}

export function LawyerSection() {
  return (
    <section className="content-section lawyer-section" id="sobre" aria-labelledby="lawyer-title">
      <div className="lawyer-copy">
        <span className="eyebrow">REVISÃO HUMANA, QUANDO NECESSÁRIA</span>
        <h2 id="lawyer-title">Análise por profissionais qualificados</h2>
        <p>Quando o serviço estiver operacional, casos potencialmente relevantes poderão ser revistos por um advogado independente. Saberás sempre antes de os teus dados serem partilhados.</p>
        <ul>
          <li><Icon name="check" size={17} /> O advogado e os respetivos dados profissionais serão identificados</li>
          <li><Icon name="check" size={17} /> A partilha de dados dependerá do teu consentimento</li>
          <li><Icon name="check" size={17} /> A decisão de avançar continuará a ser tua</li>
        </ul>
      </div>
      <div className="lawyer-placeholder" aria-label="Área reservada a perfis verificados">
        <div className="placeholder-label">CONTEÚDO EM PREPARAÇÃO</div>
        <div className="profile-placeholder">
          <span className="profile-avatar"><Icon name="user" size={28} /></span>
          <div><strong>Perfil profissional por adicionar</strong><span>Nome e cédula serão publicados após verificação.</span></div>
        </div>
        <div className="profile-placeholder">
          <span className="profile-avatar"><Icon name="user" size={28} /></span>
          <div><strong>Perfil profissional por adicionar</strong><span>Áreas de prática e contactos por confirmar.</span></div>
        </div>
        <p>Não são apresentados nomes, classificações ou resultados fictícios.</p>
      </div>
    </section>
  )
}

export function EthicsSection() {
  return (
    <section className="ethics-section" id="etica" aria-labelledby="ethics-title">
      <div className="content-section">
        <div className="section-heading compact">
          <span className="eyebrow">GARANTIAS &amp; ÉTICA</span>
          <h2 id="ethics-title">Clareza antes de qualquer decisão</h2>
        </div>
        <div className="ethics-grid">
          <article><Icon name="info" /><h3>Sem promessas</h3><p>Nunca tratamos uma estimativa como certeza nem garantimos um resultado.</p></article>
          <article><Icon name="lock" /><h3>Controlo dos teus dados</h3><p>Explicamos quando e porquê os dados podem ser partilhados e pedimos consentimento.</p></article>
          <article><Icon name="shield" /><h3>Informação, não aconselhamento</h3><p>A avaliação automática ajuda a organizar o caso, mas não substitui apoio jurídico.</p></article>
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  return (
    <section className="content-section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="faq-heading"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2 id="faq-title">O essencial, sem letras pequenas</h2><p>Se a tua pergunta não estiver aqui, poderás contactar-nos quando o serviço estiver disponível.</p></div>
      <div className="faq-list">
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}<span aria-hidden="true">+</span></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer" id="privacidade">
      <div className="footer-grid">
        <div className="footer-brand"><Logo /><p>Ajudamos a organizar informação sobre situações laborais em Portugal, com linguagem clara e sem promessas.</p></div>
        <div><h3>Plataforma</h3><a href="#como-funciona">Como funciona</a><a href="#situacoes">Situações</a><a href="#faq">Perguntas frequentes</a></div>
        <div><h3>Informação</h3><a href="#etica">Garantias &amp; ética</a><a href="#privacidade">Privacidade <small>(brevemente)</small></a><a href="#termos">Termos <small>(brevemente)</small></a></div>
        <div><h3>Contacto</h3><span>Canal de apoio a disponibilizar</span><span>Portugal</span></div>
      </div>
      <div className="footer-disclaimer" id="termos">
        <p><strong>Nota importante:</strong> O TenhoDireito fornece uma avaliação preliminar de caráter informativo com base nas respostas inseridas. Os resultados automáticos não constituem aconselhamento jurídico, não confirmam a existência de um direito e não garantem qualquer compensação.</p>
        <span>© {new Date().getFullYear()} TenhoDireito</span>
      </div>
    </footer>
  )
}
