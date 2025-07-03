import { useEffect, useState } from "react";
import '../styles/Header.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Deliverane Church</span>
            <span className="logo-subtitle">Utawala</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#sermons" onClick={() => scrollToSection('sermons')}>Sermons</a></li>
              <li><a href="#leadership" onClick={() => scrollToSection('leadership')}>Leadership</a></li>
              <li><a href="#school" onClick={() => scrollToSection('school')}>Church School</a></li>
              <li><a href="#giving" onClick={() => scrollToSection('giving')}>Giving</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </nav>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header