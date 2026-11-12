
import { ArrowUpRight, ArrowUp } from 'lucide-react';

import './Footer.css';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'About Us', href: '#about' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">

      {/* Transition from Services into the Footer */}
      <div className="services-transition footer-transition" aria-hidden="true">
        <span className="services-transition-line" />
        <span className="services-transition-light" />
      </div>

      <div className="footer-container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand-section">
            <a href="#home" className="footer-brand">
              <span className="footer-brand-name">
                MAKHAKHE <span>& CO.</span>
              </span>

              <span className="footer-brand-subtitle">
                DIGITAL ENGINEERING
              </span>
            </a>

            <p className="footer-description">
              We bring ideas to life through thoughtful engineering,
              purposeful design, and digital solutions built to move
              businesses forward.
            </p>

            <div className="footer-location">
              <span className="footer-location-dot" />
              <span>Lesotho · Working beyond borders</span>
            </div>
          </div>

          {/* Navigation and enquiry */}
          <div className="footer-navigation">

            <div className="footer-link-group">
              <h3>Explore</h3>

              <ul>
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Have something in mind?</h3>

              <p>
                Let's explore what we can build together.
              </p>

              <a href="#services" className="footer-contact-link">
                Explore our services
                <ArrowUpRight size={16} strokeWidth={1.7} />
              </a>
            </div>

          </div>
        </div>

        {/* Closing statement */}
        <div className="footer-statement">
          <p>
            Ideas deserve to be <span>engineered.</span>
          </p>

          <span className="footer-statement-decoration">
            M&C
          </span>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            © {currentYear} Makhakhe & Co. All rights reserved.
          </p>

          <p className="footer-bottom-note">
            Built with intention.
          </p>

          <a
            href="#home"
            className="footer-back-to-top"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={15} strokeWidth={1.7} />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
