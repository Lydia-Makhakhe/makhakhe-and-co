
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import {
  ArrowUpRight,
  Building2,
  Check,
  Code2,
  Compass,
  Heart,
  Monitor,
  PartyPopper,
  Sparkles,
  Store,
} from 'lucide-react';

import './Services.css';

const services = [
  {
    number: '01',
    category: 'DESIGN & EXPERIENCE',
    title: 'Human-Centred Digital Design',
    shortTitle: 'Digital Design',
    description:
      'We design digital experiences around real people. From the first impression to the smallest interaction, every detail has a purpose.',
    outcome:
      'Clear, intuitive digital experiences that are easy to understand and enjoyable to use.',
    capabilities: [
      'User interface (UI) design',
      'User experience (UX) design',
      'Responsive web design',
      'Digital identity and visual direction',
    ],
    icon: Monitor,
    keywords: ['Intuitive', 'Accessible', 'Purposeful'],
  },
  {
    number: '02',
    category: 'INTERACTIVE SOLUTIONS',
    title: 'Interactive Digital Experiences',
    shortTitle: 'Digital Experiences',
    description:
      'We bring ideas to life through engaging websites, applications and interactive platforms that help people connect, explore and get things done.',
    outcome:
      'Engaging digital platforms that make interactions simpler and more meaningful.',
    capabilities: [
      'Website design and development',
      'Interactive web applications',
      'E-commerce experiences',
      'Digital platform development',
    ],
    icon: Sparkles,
    keywords: ['Engaging', 'Responsive', 'Connected'],
  },
  {
    number: '03',
    category: 'ENGINEERING & DEVELOPMENT',
    title: 'Software & Systems Engineering',
    shortTitle: 'Software Engineering',
    description:
      'We engineer reliable software and connected systems that solve practical problems. Our approach brings together thoughtful architecture, dependable development and continuous improvement.',
    outcome:
      'Scalable, maintainable software built to support real operational needs.',
    capabilities: [
      'Custom software development',
      'Backend and API development',
      'Systems integration',
      'Testing, optimisation and maintenance',
    ],
    icon: Code2,
    keywords: ['Reliable', 'Scalable', 'Built to last'],
  },
  {
    number: '04',
    category: 'STRATEGY & ADVISORY',
    title: 'Digital Strategy & Technology Advisory',
    shortTitle: 'Technology Advisory',
    description:
      'We help individuals and organisations make informed technology decisions, identify opportunities and turn digital ambitions into practical plans.',
    outcome:
      'A clearer technology direction, with practical steps to move forward.',
    capabilities: [
      'Digital transformation guidance',
      'Technology assessment',
      'Solution planning and roadmapping',
      'Technical consultation',
    ],
    icon: Compass,
    keywords: ['Strategic', 'Practical', 'Forward-thinking'],
  },
];

const audiences = [
  {
    title: 'Hospitality & Events',
    description:
      'Digital experiences that help hospitality and event businesses present their offerings and connect with their audiences.',
    examples: 'Hotels, venues, restaurants and event organisers',
    icon: PartyPopper,
  },
  {
    title: 'Individuals & Hosts',
    description:
      'Thoughtful digital solutions for personal projects, independent professionals and people bringing new ideas to life.',
    examples: 'Personal brands, portfolios and independent projects',
    icon: Heart,
  },
  {
    title: 'Business Owners & Entrepreneurs',
    description:
      'Practical technology that helps businesses establish their digital presence, improve processes and grow with confidence.',
    examples: 'Startups, small businesses and growing ventures',
    icon: Store,
  },
  {
    title: 'Companies & Organisations',
    description:
      'Purposeful software, systems and digital strategy for organisations with more complex operational needs.',
    examples: 'Established companies, institutions and teams',
    icon: Building2,
  },
];

const revealTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

function Services() {
  const [activeService, setActiveService] = useState(0);

  const selectedService = services[activeService];
  const SelectedIcon = selectedService.icon;

  return (
    <section className="services-section" id="services">
      <div className="services-transition" aria-hidden="true">
        <span className="services-transition-line" />
        <span className="services-transition-light" />
      </div>

      <div className="services-container">
        {/* SECTION INTRODUCTION */}
        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={revealTransition}
        >
          <div className="services-eyebrow">
            <span className="services-eyebrow-line" />
            <span>WHAT WE DO</span>
          </div>

          <div className="services-heading-content">
            <h2>
              Technology with purpose.
              <span> Built for people.</span>
            </h2>

            <p>
              We combine design, engineering and strategic thinking to
              create digital solutions that serve real needs.
            </p>
          </div>
        </motion.div>

        {/* INTERACTIVE SERVICE EXPLORER */}
        <motion.div
          className="service-explorer"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ ...revealTransition, delay: 0.1 }}
        >
          <div className="service-selector">
            <div className="service-selector-heading">
              <span className="service-selector-label">
                EXPLORE OUR SERVICES
              </span>

              <span className="service-selector-count">
                04 SERVICES
              </span>
            </div>

            <div
              className="service-options"
              role="tablist"
              aria-label="Our services"
            >
              {services.map((service, index) => {
                const ServiceIcon = service.icon;
                const isActive = activeService === index;

                return (
                  <button
                    key={service.number}
                    type="button"
                    role="tab"
                    id={`service-tab-${index}`}
                    aria-selected={isActive}
                    aria-controls="service-display"
                    className={`service-option ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveService(index)}
                  >
                    <span className="service-option-top">
                      <span className="service-option-number">
                        {service.number}
                      </span>

                      <ServiceIcon
                        className="service-option-icon"
                        size={19}
                        strokeWidth={1.6}
                      />
                    </span>

                    <span className="service-option-bottom">
                      <span className="service-option-title">
                        {service.shortTitle}
                      </span>

                      <span className="service-option-action">
                        {isActive ? 'EXPLORING' : 'EXPLORE'}
                        <ArrowUpRight size={14} />
                      </span>
                    </span>

                    <span className="service-option-indicator" />
                  </button>
                );
              })}
            </div>

            <div className="service-selector-footer">
              <span className="service-selector-dot" />
              <span>Select a service to discover what we do</span>
            </div>
          </div>

          {/* SERVICE INFORMATION */}
          <div
            className="service-display"
            id="service-display"
            role="tabpanel"
            aria-labelledby={`service-tab-${activeService}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.number}
                className="service-display-content"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div className="service-display-top">
                  <span className="service-display-category">
                    {selectedService.category}
                  </span>

                  <span className="service-display-number">
                    {selectedService.number} / 04
                  </span>
                </div>

                <div className="service-display-icon">
                  <SelectedIcon size={27} strokeWidth={1.5} />
                </div>

                <h3>{selectedService.title}</h3>

                <p className="service-display-description">
                  {selectedService.description}
                </p>

                <div className="service-display-divider" />

                <div className="service-display-details">
                  <div className="service-capabilities">
                    <span className="service-detail-label">
                      WHAT WE OFFER
                    </span>

                    <ul>
                      {selectedService.capabilities.map((capability) => (
                        <li key={capability}>
                          <Check size={15} />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-outcome">
                    <span className="service-detail-label">
                      THE OUTCOME
                    </span>

                    <p>{selectedService.outcome}</p>
                  </div>
                </div>

                <div className="service-keywords">
                  {selectedService.keywords.map((keyword) => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>

                <a className="service-display-cta" href="#contact">
                  <span>Discuss a project</span>
                  <ArrowUpRight size={17} />
                </a>
              </motion.div>
            </AnimatePresence>

            <div className="service-display-decoration" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </motion.div>

        {/* WHO WE WORK WITH */}
        <motion.div
          className="services-audience"
          id="who-we-serve"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={revealTransition}
        >
          <div className="audience-heading">
            <div className="audience-heading-main">
              <div className="services-eyebrow">
                <span className="services-eyebrow-line" />
                <span>WHO WE WORK WITH</span>
              </div>

              <h3>
                Good ideas come from
                <span> everywhere.</span>
              </h3>
            </div>

            <p>
              We work with people at different stages, from individuals
              with an idea to organisations looking for their next
              technology partner.
            </p>
          </div>

          <div className="audience-grid">
            {audiences.map((audience, index) => {
              const AudienceIcon = audience.icon;

              return (
                <article
                  className={`audience-card audience-card-${index + 1}`}
                  key={audience.title}
                >
                  <div className="audience-card-top">
                    <div className="audience-icon-wrap">
                      <AudienceIcon size={24} strokeWidth={1.6} />
                    </div>
                  </div>

                  <div className="audience-card-content">
                    <span className="audience-card-kicker">
                      WHO WE SUPPORT
                    </span>

                    <h4>{audience.title}</h4>

                    <p>{audience.description}</p>
                  </div>

                  <div className="audience-card-bottom">
                    <div className="audience-card-examples">
                      <span className="audience-examples-label">
                        A FEW EXAMPLES
                      </span>

                      <span className="audience-examples-text">
                        {audience.examples}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* COMPACT BOTTOM CTA */}
          <div className="services-bottom-cta">
            <div className="services-bottom-cta-content">
              <span className="services-bottom-cta-label">
                HAVE SOMETHING IN MIND?
              </span>

              <p>
                Let's explore what we can build together.
              </p>
            </div>

            <a href="#contact">
              <span>Start a conversation</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
