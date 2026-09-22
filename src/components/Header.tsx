import { useState } from 'react'
import { Icon, Logo } from './Icons'

interface HeaderProps {
  onAssessmentClick: () => void
}

export function Header({ onAssessmentClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#como-funciona">Como funciona</a>
          <a href="#situacoes">Situações</a>
          <a href="#faq">Perguntas frequentes</a>
          <a href="#etica">Garantias &amp; ética</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <div className="header-actions">
          <div className="language" aria-label="Idioma"><strong>PT</strong><span aria-label="Inglês, disponível em breve" aria-disabled="true">EN</span></div>
          <button className="button button-small desktop-cta" type="button" onClick={onAssessmentClick}>Ver se tenho direito</button>
          <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((open) => !open)}>
            <span className="sr-only">{menuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <a href="#como-funciona" onClick={closeMenu}>Como funciona</a>
          <a href="#situacoes" onClick={closeMenu}>Situações</a>
          <a href="#faq" onClick={closeMenu}>Perguntas frequentes</a>
          <a href="#etica" onClick={closeMenu}>Garantias &amp; ética</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <button className="button" type="button" onClick={() => { closeMenu(); onAssessmentClick() }}>Ver se tenho direito</button>
        </div>
      )}
    </header>
  )
}
