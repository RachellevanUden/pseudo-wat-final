import headerImage from '../assets/header-image.webp'
import '../styles/Header.css'

function Header() {
    return (
      <header className="hero-header">
        <img src={headerImage} alt="Decoratieve orange flow" className="header-bg" />
        <div className="header-text">
          <h1>Welkom bij 'Pseudo-wat?' <br/>Jouw gids voor Pseudomyxoma Peritonei</h1>
        </div>
      </header>
    )
  }

export default Header;