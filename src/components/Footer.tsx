import "../styles/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
              The Apostolic Church Of Choice transforming & empowering mankind
              in Africa and beyond.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon">
                <span>
                  <FacebookIcon />
                </span>
              </a>
              <a href="#" className="social-icon">
                <span>
                  <InstagramIcon />
                </span>
              </a>
              <a href="#" className="social-icon">
                <span>
                  <FaTiktok />
                </span>
              </a>
              <a href="#" className="social-icon">
                <span>
                  <YouTubeIcon />
                </span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={() => scrollToSection("home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#sermons" onClick={() => scrollToSection("sermons")}>
                  Sermons
                </a>
              </li>
              <li>
                <a
                  href="#leadership"
                  onClick={() => scrollToSection("leadership")}
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="#departments"
                  onClick={() => scrollToSection("departments")}
                >
                  Departments
                </a>
              </li>
              <li>
                <a
                  href="#dominion-center"
                  onClick={() => scrollToSection("school")}
                >
                  Dominion Center
                </a>
              </li>
              <li>
                <a href="#giving" onClick={() => scrollToSection("giving")}>
                  Giving
                </a>
              </li>
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
                  <p>
                    300m from ACK St. Monica,
                    <br />
                    Utawala, Nairobi
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+254 755 637 745</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>info@dcutawala.org</p>
                  <p>utawaladc@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>
              &copy; {currentYear} Deliverance Church Utawala. All rights
              reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
