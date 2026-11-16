
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

import { Link } from 'react-router-dom';

import { useThemeLanguage } from '../../context/useThemeLanguage';

import './Navbar.css';

const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/#services' },
  { label: 'Our Work', to: '/about#work' },
  { label: 'About', to: '/about' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { toggleTheme, isDark } = useThemeLanguage();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Brand */}

        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Makhakhe and Co. home"
        >
          <span className="brand-name">
            MAKHAKHE <span className="brand-amp">&</span> CO.
          </span>

          <span className="brand-subtitle">
            SOFTWARE & SYSTEMS DEVELOPMENT
          </span>
        </Link>

        {/* Desktop navigation */}

        <nav
          className="navbar-links"
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="navbar-link"
            >
              {link.label}
            </Link>
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

          <Link
            to="/#contact"
            className="navbar-contact"
          >
            <span>Start a project</span>
            <ArrowUpRight size={16} />
          </Link>

        </div>

        {/* Mobile actions: theme toggle + menu */}

        <div className="navbar-mobile-actions">

          <button
            className="mobile-theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            type="button"
          >
            {isDark ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

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
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.to}
                    className="mobile-menu-link"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mobile-menu-bottom">

              <Link
                to="/#contact"
                className="mobile-menu-contact"
                onClick={closeMenu}
              >
                <span>Start a project</span>
                <ArrowUpRight size={17} />
              </Link>

            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
