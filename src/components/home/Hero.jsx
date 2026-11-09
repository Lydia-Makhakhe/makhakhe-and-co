
import { motion } from 'framer-motion';

import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Monitor,
  Smartphone,
  Layers3,
  Check,
  Globe,
  Terminal,
  Zap,
} from 'lucide-react';

import './Hero.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const codeLines = [
  {
    number: '01',
    content: (
      <>
        <span className="code-purple">import</span>{' '}
        <span className="code-blue">React</span>{' '}
        <span className="code-purple">from</span>{' '}
        <span className="code-green">'react'</span>;
      </>
    ),
  },
  { number: '02', content: '' },
  {
    number: '03',
    content: (
      <>
        <span className="code-purple">function</span>{' '}
        <span className="code-yellow">Website</span>() {'{'}
      </>
    ),
  },
  {
    number: '04',
    content: (
      <>
        <span className="code-purple">return</span> (
      </>
    ),
  },
  {
    number: '05',
    content: (
      <>
        <span className="code-pink">{'<main'}</span>{' '}
        <span className="code-blue">className</span>=
        <span className="code-green">"experience"</span>
        <span className="code-pink">{'>'}</span>
      </>
    ),
  },
  {
    number: '06',
    content: <span className="code-pink">{'<Navbar />'}</span>,
  },
  {
    number: '07',
    content: <span className="code-pink">{'<Hero />'}</span>,
  },
  {
    number: '08',
    content: <span className="code-pink">{'<Services />'}</span>,
  },
  {
    number: '09',
    content: <span className="code-pink">{'<Footer />'}</span>,
  },
  {
    number: '10',
    content: <span className="code-pink">{'</main>'}</span>,
  },
  { number: '11', content: ');' },
  { number: '12', content: '}' },
];

const components = [
  { name: 'Navbar', icon: Layers3 },
  { name: 'Hero', icon: Code2 },
  { name: 'Services', icon: Monitor },
  { name: 'Responsive', icon: Smartphone },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background-glow" />
      <div className="hero-background-grid" />

      <div className="hero-container">

        {/* Hero content */}

        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hero-eyebrow"
            variants={itemVariants}
          >
            <span className="hero-eyebrow-line" />
            <span>DIGITAL SYSTEMS & TECHNOLOGY</span>
            <span className="hero-eyebrow-divider">/</span>
            <span className="hero-eyebrow-location">
              LESOTHO
            </span>
          </motion.div>

          <motion.h1
            className="hero-heading"
            variants={itemVariants}
          >
            THINK IN
            <br />
            SYSTEMS.
            <br />
            <span className="hero-heading-accent">
              BUILD WITH PURPOSE.
            </span>
          </motion.h1>

          <motion.p
            className="hero-description"
            variants={itemVariants}
          >
            We design digital experiences, engineer intelligent
            systems and provide technology insight that helps individuals &
            organisations move from ideas to implementation.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={itemVariants}
          >
            <a
              href="#work"
              className="hero-button-primary"
            >
              Explore our work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="hero-button-secondary"
            >
              Start a conversation
            </a>
          </motion.div>

          <motion.div
            className="hero-trust-note"
            variants={itemVariants}
          >
            <span className="hero-trust-dot" />

            <span>
              DIGITAL DESIGN / SYSTEMS / TECHNOLOGY CONSULTANCY
            </span>
          </motion.div>
        </motion.div>

        {/* Animated website development workspace */}

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-visual-label">
            <span>01 / DIGITAL ENGINEERING</span>
            <span>LIVE PREVIEW</span>
          </div>

          <div className="builder-scene">

            {/* Floating development labels */}

            <motion.div
              className="builder-floating-note note-top"
              animate={{
                y: [0, -9, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="floating-note-icon">
                <Zap size={13} />
              </span>

              <span>Engineering ideas</span>
            </motion.div>

            <motion.div
              className="builder-floating-note note-bottom"
              animate={{
                y: [0, 8, 0],
                rotate: [0, -1, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            >
              <span className="floating-note-indicator" />
              <span>Systems in motion</span>
            </motion.div>

            {/* Main development workspace */}

            <div className="builder-window">

              {/* Browser header */}

              <div className="builder-topbar">
                <div className="builder-browser-controls">
                  <span className="builder-dot dot-red" />
                  <span className="builder-dot dot-yellow" />
                  <span className="builder-dot dot-green" />
                </div>

                <div className="builder-address">
                  <span className="builder-lock">●</span>
                  makhakhe.co / preview
                </div>

                <motion.div
                  className="builder-topbar-icon"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Globe size={14} />
                </motion.div>
              </div>

              {/* Workspace tabs */}

              <div className="builder-tabs">
                <div className="builder-tab active">
                  <Code2 size={13} />
                  <span>App.jsx</span>
                  <span className="builder-tab-close">×</span>
                </div>

                <div className="builder-tab">
                  <span>Hero.css</span>
                </div>

                <div className="builder-tab">
                  <span>index.html</span>
                </div>
              </div>

              {/* Code editor and website preview */}

              <div className="builder-content">

                {/* Code editor */}

                <div className="builder-code-panel">
                  <div className="builder-panel-heading">
                    <Terminal size={13} />
                    <span>CODE EDITOR</span>
                    <span className="editor-active-dot" />
                  </div>

                  <div className="builder-code">
                    {codeLines.map((line, index) => (
                      <motion.div
                        className={`builder-code-line ${
                          index === 6 ? 'highlighted-line' : ''
                        }`}
                        key={line.number}
                        style={{
                          '--line-index': index,
                        }}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.7 + index * 0.07,
                          duration: 0.3,
                        }}
                      >
                        <span className="code-line-number">
                          {line.number}
                        </span>

                        <span className="code-line-content">
                          {line.content}

                          {index === 6 && (
                            <span className="typing-cursor" />
                          )}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="builder-code-footer">
                    <span>JSX</span>
                    <span>UTF-8</span>
                  </div>
                </div>

                {/* Live website preview */}

                <div className="builder-preview">
                  <div className="builder-panel-heading">
                    <Monitor size={13} />
                    <span>LIVE PREVIEW</span>
                    <span className="preview-live-dot" />
                  </div>

                  <motion.div
                    className="preview-site"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1,
                      duration: 0.8,
                      ease: 'easeOut',
                    }}
                  >
                    <div className="preview-navbar">
                      <span className="preview-logo">
                        STUDIO<span>.</span>
                      </span>

                      <div className="preview-menu">
                        <span>HOME</span>
                        <span>ABOUT</span>
                        <span>WORK</span>
                      </div>

                      <span className="preview-menu-icon">☰</span>
                    </div>

                    <div className="preview-hero">
                      <span className="preview-eyebrow">
                        DESIGN / DEVELOPMENT
                      </span>

                      <motion.h3
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.7 }}
                      >
                        Ideas into
                        <br />
                        <span>interfaces.</span>
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7, duration: 0.7 }}
                      >
                        Thoughtful design.
                        <br />
                        Powerful technology.
                      </motion.p>

                      <motion.div
                        className="preview-button"
                        whileHover={{ scale: 1.05 }}
                        animate={{
                          boxShadow: [
                            '0 0 0 rgba(139, 32, 40, 0)',
                            '0 4px 16px rgba(139, 32, 40, 0.25)',
                            '0 0 0 rgba(139, 32, 40, 0)',
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      >
                        EXPLORE MORE
                        <ArrowUpRight size={11} />
                      </motion.div>

                      <motion.div
                        className="preview-decoration"
                        animate={{
                          y: [0, -7, 0],
                          rotate: [12, 17, 12],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <div className="preview-decoration-shape" />

                        <motion.div
                          className="preview-decoration-circle"
                          animate={{
                            scale: [1, 1.12, 1],
                            rotate: [0, 90, 180],
                          }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      </motion.div>
                    </div>

                    <div className="preview-footer">
                      <span>BUILT WITH PURPOSE.</span>
                      <span>01 — 04</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Component architecture */}

              <div className="builder-components">
                <div className="builder-components-heading">
                  <span>BUILDING BLOCKS</span>
                  <span>4 COMPONENTS</span>
                </div>

                <div className="builder-component-list">
                  {components.map((component, index) => {
                    const ComponentIcon = component.icon;

                    return (
                      <motion.div
                        className="builder-component"
                        key={component.name}
                        style={{
                          '--component-index': index,
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 1.2 + index * 0.15,
                          duration: 0.5,
                        }}
                      >
                        <ComponentIcon size={13} />
                        <span>{component.name}</span>

                        <motion.span
                          className="component-check"
                          animate={{
                            scale: [1, 1.25, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.45,
                          }}
                        >
                          <Check size={12} />
                        </motion.span>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="component-progress-track">
                  <motion.div
                    className="component-progress-fill"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{
                      duration: 2,
                      delay: 1.5,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </div>

              {/* Workspace status bar */}

              <div className="builder-statusbar">
                <div className="builder-status-left">
                  <motion.span
                    className="status-indicator"
                    animate={{
                      opacity: [1, 0.4, 1],
                      scale: [1, 0.85, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />

                  <span>All components connected</span>
                </div>

                <div className="builder-status-right">
                  <span>REACT</span>
                  <span>VITE</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual-caption">
            <span>DESIGNED. ENGINEERED. IMPLEMENTED.</span>
            <span>EST. 2026</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}

      <motion.a
        href="#services"
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span>SCROLL TO EXPLORE</span>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.a>

      <div className="hero-side-label">
        DIGITAL DESIGN / SYSTEMS / CONSULTANCY
      </div>
    </section>
  );
}

export default Hero;
