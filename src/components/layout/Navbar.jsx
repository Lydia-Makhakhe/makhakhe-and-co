
import { useState } from 'react';

import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import {
  ArrowUpRight,
  Menu,
  X,
  Sun,
  Moon,
} from 'lucide-react';

import { useThemeLanguage } from '../../context/useThemeLanguage';

import './Navbar.css';

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'About', href: '#about' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { toggleTheme, isDark } = useThemeLanguage();

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

        {/* Desktop actions */}

        <div className="navbar-actions">

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            type="button"
          >
            {isDark ? (
              <Sun size={17} />
            ) : (
              <Moon size={17} />
            )}
          </button>

          <a
            href="#contact"
            className="navbar-contact"
          >
            <span>Start a project</span>
            <ArrowUpRight size={16} />
          </a>

        </div>

        {/* Mobile menu button */}

        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          type="button"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

      </div>

      {/* Mobile navigation */}

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <div className="mobile-menu-links">
              {navigationLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="mobile-menu-link"
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="mobile-menu-bottom">

              <a
                href="#contact"
                className="mobile-menu-contact"
                onClick={closeMenu}
              >
                <span>Start a project</span>
                <ArrowUpRight size={17} />
              </a>

              <button
                className="mobile-theme-toggle"
                onClick={toggleTheme}
                type="button"
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                {isDark ? (
                  <Sun size={17} />
                ) : (
                  <Moon size={17} />
                )}

                <span>
                  {isDark ? 'Light mode' : 'Dark mode'}
                </span>
              </button>

            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
