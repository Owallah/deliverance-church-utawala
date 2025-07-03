import '../styles/Footer.css'
const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-text">Deliverane Church</span>
                <span className="logo-subtitle">Utawala</span>
              </div>
              <p className="footer-description">
                A community of believers committed to worship, fellowship, and serving God. 
                Join us as we grow together in faith and love.
              </p>
              <div className="footer-social">
                <a href="#" className="social-icon" aria-label="Facebook">📘</a>
                <a href="#" className="social-icon" aria-label="Instagram">📷</a>
                <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
                <a href="#" className="social-icon" aria-label="YouTube">📺</a>
              </div>
            </div>
  
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
                <li><a href="#sermons" onClick={() => scrollToSection('sermons')}>Sermons</a></li>
                <li><a href="#leadership" onClick={() => scrollToSection('leadership')}>Leadership</a></li>
                <li><a href="#school" onClick={() => scrollToSection('school')}>Church School</a></li>
                <li><a href="#giving" onClick={() => scrollToSection('giving')}>Giving</a></li>
              </ul>
            </div>
  
            <div className="footer-section">
              <h3>Service Times</h3>
              <div className="service-times">
                <div className="service-time">
                  <strong>Sunday First Service</strong>
                  <span>6:30 AM & 9:00 AM</span>
                </div>
                <div className="service-time">
                  <strong>Sunday Second Service</strong>
                  <span>9:30 AM & 12:00 PM</span>
                </div>
                <div className="service-time">
                  <strong>Tuesday Fellowship</strong>
                  <span>6:30 PM</span>
                </div>
                <div className="service-time">
                  <strong>Wednesday Anchored Service</strong>
                  <span>6:30 PM - 8:00 PM</span>
                </div>
                <div className="service-time">
                  <strong>Friday Ignite Service</strong>
                  <span>6:30 PM - 8:00 PM</span>
                </div>
              </div>
            </div>
  
            <div className="footer-section">
              <h3>Contact Info</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Address</strong>
                    <p>Utawala Shopping Center<br/>Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p>+254 700 123 456</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p>info@deliverancechurch.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p>&copy; {currentYear} Deliverane Church Utawala. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer