
import { useState } from 'react';

import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import {
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react';

import './Navbar.css';

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'About', href: '#about' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Brand */}

        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Makhakhe and Co. home"
        >
          <span className="brand-name">
            MAKHAKHE <span className="brand-amp">&</span> CO.
          </span>

          <span className="brand-subtitle">
            DIGITAL ENGINEERING
          </span>
        </a>

        {/* Desktop navigation */}

        <nav
          className="navbar-links"
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact button */}

        <a
          href="#contact"
          className="navbar-contact"
        >
          <span>Start a project</span>
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile menu button */}

        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navigationLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 }}
              >
                {link.label}
              </motion.a>
            ))}

            <a
              href="#contact"
              className="mobile-menu-contact"
              onClick={closeMenu}
            >
              Start a project
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
