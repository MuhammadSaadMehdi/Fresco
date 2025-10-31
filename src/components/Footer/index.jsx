import React from 'react';
import './footer.css';
import bgImage from '../../assets/HeroImage.jpg'
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Reservation", path: "/reservation" }
  ];

  const contactInfo = [
    { icon: "📞", text: "+123-456-1010" },
    { icon: "📧", text: "info@fresco.com" },
    { icon: "📍", text: "123 Italian Street, Food City, FC 12345" },
    { icon: "🕒", text: "Mon-Sat: 9AM-1PM | Sat-Sun: 9AM-4AM" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "fab fa-facebook-f", url: "#" },
    { name: "Instagram", icon: "fab fa-instagram", url: "#" },
    { name: "Twitter", icon: "fab fa-youtube", url: "#" },
    { name: "Yelp", icon: "fab fa-tiktok", url: "#" }
  ];

  return (
    <footer className="footer">
      {/* Main Footer Section */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            
            {/* Brand Column */}
            <div className="footer-column">
              <div className="footer-logo">
                <img 
                  src={bgImage}
                  alt="Fresco Italian Restaurant" 
                />
              </div>
              <p className="footer-description">
                Authentic Italian cuisine crafted with passion since 1978. 
                Experience the taste of Italy with our locally sourced ingredients 
                and traditional recipes.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-column">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.path} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="footer-column">
              <h3 className="footer-title">Contact Info</h3>
              <div className="contact-info">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <span className="contact-icon">{item.icon}</span>
                    <span className="contact-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="footer-column">
              <h3 className="footer-title">Newsletter</h3>
              <p className="newsletter-text">
                Subscribe to get updates on new dishes and special offers!
              </p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Fresco Italian Restaurant. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <div 
        className="footer-bg"
        style={{
          backgroundImage: `url('https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/01/Prepare-dish-image.jpg')`
        }}
      ></div>
    </footer>
  );
};

export default Footer;