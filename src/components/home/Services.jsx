import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Monitor,
  Code2,
  Compass,
  Sparkles,
  PartyPopper,
  Store,
  Building2,
  Users,
  Heart,
} from 'lucide-react';

import './Services.css';

const services = [
  {
    number: '01',
    category: 'DESIGNING FOR PEOPLE',
    title: 'Human-Centred Digital Design',
    summary:
      'We create digital experiences that are intuitive, accessible and designed around the people who use them.',
    question: 'How should people experience your solution?',
    description:
      'Every successful digital experience begins with understanding people. We explore your audience, their needs and their expectations before shaping interfaces and experiences that feel natural to use.',
    outcome:
      'Thoughtful, accessible and engaging digital experiences that put people first.',
    capabilities: [
      'User research and requirements discovery',
      'Website and mobile app interface design',
      'User experience and interaction design',
      'Accessibility and inclusive design',
      'Prototyping and usability testing',
      'Responsive design and design systems',
    ],
    icon: Monitor,
    keywords: ['Understand', 'Design', 'Test'],
  },
  {
    number: '02',
    category: 'DIGITAL EXPERIENCES & CUSTOM CREATION',
    title: 'Interactive Digital Experiences',
    summary:
      'From cinematic digital invitations to bespoke online products, we create experiences that go beyond the ordinary.',
    question: 'What if your digital experience could feel unforgettable?',
    description:
      'Not every digital product needs to be a website or an application. We create customised digital experiences for celebrations, hospitality, brands and personal projects. Think interactive invitations, thoughtful event journeys, digital keepsakes and distinctive online experiences that make ordinary moments feel considered.',
    outcome:
      'Personalised digital experiences that express your vision, engage your audience and make an impression.',
    capabilities: [
      'Interactive digital invitations and event experiences',
      'Personalised RSVP journeys and event countdowns',
      'Digital seating charts and guest experiences',
      'Custom digital announcements and keepsakes',
      'Interactive product customisers and previews',
      'Dynamic digital lookbooks and bespoke components',
    ],
    icon: Sparkles,
    keywords: ['Imagine', 'Personalise', 'Experience'],
  },
  {
    number: '03',
    category: 'IDEA TO IMPLEMENTATION',
    title: 'Software & Systems Engineering',
    summary:
      'We turn ideas into working websites, applications and digital systems, from planning through to production.',
    question: 'How do we turn your idea into a working product?',
    description:
      'We guide software projects through the development lifecycle. From defining requirements and planning to development, testing, deployment and ongoing support, we take a structured approach to bringing digital solutions to life.',
    outcome:
      'Reliable digital products designed to perform well, protect information and grow alongside your organisation.',
    capabilities: [
      'Software requirements and project planning',
      'Website and web application development',
      'Mobile application development',
      'Software testing and quality assurance',
      'Deployment, maintenance and security',
      'System integration and performance improvements',
    ],
    icon: Code2,
    keywords: ['Plan', 'Develop', 'Deliver'],
  },
  {
    number: '04',
    category: 'STRATEGY & DIRECTION',
    title: 'Digital Strategy & Technology Advisory',
    summary:
      'We help individuals and organisations shape ideas, make informed technology decisions and find their next step.',
    question: 'What should you build, and where should you start?',
    description:
      'You may have an idea, a business challenge or an existing digital presence that no longer reflects your vision. We help you evaluate opportunities, understand your options and develop a practical direction before committing time and resources.',
    outcome:
      'A clearer vision, practical recommendations and a more confident path forward.',
    capabilities: [
      'Digital strategy and technology guidance',
      'Technology assessment and recommendations',
      'Software project planning and direction',
      'Digital transformation and rebranding guidance',
      'Application analytics and performance insights',
      'AI-supported analysis where it adds value',
    ],
    icon: Compass,
    keywords: ['Explore', 'Evaluate', 'Plan'],
  },
];

const audiences = [
  {
    number: '01',
    label: 'HOSPITALITY & EVENTS',
    title: 'For those who bring people together.',
    description:
      'Hotels, venues, event planners, wedding professionals and hospitality brands looking to elevate the guest experience.',
    examples: [
      'Personalised digital invitations',
      'Interactive RSVP experiences',
      'Digital seating arrangements',
      'Guest information and event journeys',
    ],
    icon: PartyPopper,
  },
  {
    number: '02',
    label: 'INDIVIDUALS & HOSTS',
    title: 'For moments worth making memorable.',
    description:
      'Individuals planning weddings, birthdays, celebrations and intimate gatherings who want something more personal than a standard invitation.',
    examples: [
      'Custom digital invitations',
      'Event countdowns and announcements',
      'Personalised celebration websites',
      'Digital keepsakes and experiences',
    ],
    icon: Heart,
  },
  {
    number: '03',
    label: 'BUSINESS OWNERS & ENTREPRENEURS',
    title: 'For ideas ready to reach the world.',
    description:
      'Startups, independent businesses and entrepreneurs who want to establish themselves online, connect with customers and grow beyond their immediate surroundings.',
    examples: [
      'Business websites and online presence',
      'Digital storefronts and product showcases',
      'Custom business tools and applications',
      'Interactive experiences for customers',
    ],
    icon: Store,
  },
  {
    number: '04',
    label: 'COMPANIES & ORGANISATIONS',
    title: 'For businesses ready for a new chapter.',
    description:
      'Established businesses and organisations looking to modernise their digital presence, reposition their brand or make their systems work better.',
    examples: [
      'Website redesign and digital rebranding',
      'Modernising existing digital platforms',
      'Custom software and system development',
      'Technology strategy and digital improvements',
    ],
    icon: Building2,
  },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const detailsVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Services() {
  const [expandedService, setExpandedService] = useState(0);

  const toggleService = (index) => {
    setExpandedService((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* SERVICES INTRODUCTION */}

        <motion.div
          className="services-header"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="services-eyebrow">
            <span className="services-eyebrow-line" />
            <span>WHAT WE DO</span>
            <span className="services-eyebrow-divider">/</span>
            <span>OUR EXPERTISE</span>
          </div>

          <div className="services-heading-row">
            <h2 className="services-heading">
              Technology with
              <br />
              <span>purpose.</span> Built for people.
            </h2>

            <p className="services-intro">
              From digital invitations to complex software systems,
              we bring together design, human understanding and
              technology to create experiences that matter.
            </p>
          </div>

          <div className="services-philosophy">
            <span>OUR PHILOSOPHY</span>

            <div className="philosophy-words">
              <span>DESIGN-LED</span>
              <span className="philosophy-symbol">+</span>
              <span>HUMAN-CENTRED</span>
              <span className="philosophy-symbol">+</span>
              <span>DIGITALLY ENGINEERED</span>
            </div>
          </div>
        </motion.div>

        {/* SERVICE INSTRUCTIONS */}

        <motion.div
          className="services-instruction"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="services-instruction-left">
            <span className="instruction-indicator" />
            <p>HOW WE CAN HELP</p>
          </div>

          <span className="services-instruction-text">
            Explore a service to discover what we can create together.
          </span>
        </motion.div>

        {/* SERVICE ACCORDION */}

        <motion.div
          className="services-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.13,
              },
            },
          }}
        >
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            const isExpanded = expandedService === index;

            return (
              <motion.article
                className={`service-item ${
                  isExpanded ? 'is-expanded' : ''
                }`}
                key={service.number}
                variants={sectionVariants}
                layout
                whileHover={{
                  y: -2,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="service-overview">
                  <div className="service-overview-number">
                    {service.number}
                  </div>

                  <div className="service-overview-icon">
                    <motion.div
                      animate={
                        isExpanded
                          ? {
                              rotate: [0, -8, 0],
                              scale: [1, 1.08, 1],
                            }
                          : { rotate: 0, scale: 1 }
                      }
                      transition={{ duration: 0.45 }}
                    >
                      <ServiceIcon size={24} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  <div className="service-overview-content">
                    <span className="service-category">
                      {service.category}
                    </span>

                    <h3 className="service-title">
                      {service.title}
                    </h3>

                    <p className="service-summary">
                      {service.summary}
                    </p>
                  </div>

                  <motion.button
                    className="service-toggle"
                    type="button"
                    onClick={() => toggleService(index)}
                    aria-expanded={isExpanded}
                    aria-controls={`service-details-${index}`}
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>
                      {isExpanded
                        ? 'Close details'
                        : 'Explore this service'}
                    </span>

                    <motion.span
                      className="service-toggle-icon"
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                      }}
                    >
                      <ArrowDown size={17} />
                    </motion.span>
                  </motion.button>
                </div>

                {/* SERVICE DETAILS */}

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      className="service-details"
                      id={`service-details-${index}`}
                      key="details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: { duration: 0.3 },
                      }}
                    >
                      <motion.div
                        className="service-details-inner"
                        variants={detailsVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <div className="service-details-main">
                          <span className="service-details-label">
                            THE IDEA
                          </span>

                          <h4>{service.question}</h4>

                          <p className="service-details-description">
                            {service.description}
                          </p>

                          <div className="service-outcome">
                            <span className="service-outcome-icon">
                              <Check size={15} />
                            </span>

                            <div>
                              <span className="service-outcome-label">
                                THE RESULT
                              </span>

                              <p>{service.outcome}</p>
                            </div>
                          </div>
                        </div>

                        <div className="service-details-side">
                          <span className="service-details-label">
                            WHAT WE DO
                          </span>

                          <ul className="service-capabilities">
                            {service.capabilities.map(
                              (capability, i) => (
                                <motion.li
                                  key={capability}
                                  initial={{ opacity: 0, x: 12 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.35,
                                    delay: 0.12 + i * 0.06,
                                  }}
                                >
                                  <span className="capability-marker" />
                                  {capability}
                                </motion.li>
                              )
                            )}
                          </ul>

                          <div className="service-process">
                            <span className="service-process-label">
                              OUR APPROACH
                            </span>

                            <div className="service-process-steps">
                              {service.keywords.map(
                                (keyword, stepIndex) => (
                                  <motion.div
                                    className="service-process-step"
                                    key={keyword}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: 0.2 + stepIndex * 0.1,
                                    }}
                                  >
                                    <span className="process-number">
                                      0{stepIndex + 1}
                                    </span>
                                    <span>{keyword}</span>
                                  </motion.div>
                                )
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="service-details-footer">
                          <span>
                            Have something in mind? Let's work through it.
                          </span>

                          <a
                            href="#contact"
                            className="animated-text-link"
                          >
                            Discuss your project
                            <span className="animated-link-icon">
                              <ArrowUpRight size={17} />
                            </span>
                          </a>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </motion.div>

        {/* SERVICES FOOTER */}

        <motion.div
          className="services-footer"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="services-footer-message">
            <span className="services-footer-mark">M&CO.</span>

            <p>
              We don't just build technology.
              <span> We make it work for people.</span>
            </p>
          </div>

          <a
            href="#contact"
            className="services-footer-link animated-text-link"
          >
            Have a project in mind?
            <span className="animated-link-icon">
              <ArrowUpRight size={17} />
            </span>
          </a>
        </motion.div>

        {/* WHO WE CREATE FOR */}

        <motion.section
          className="audience-section"
          id="who-we-work-with"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="audience-header">
            <div className="services-eyebrow">
              <span className="services-eyebrow-line" />
              <span>WHO WE CREATE FOR</span>
              <span className="services-eyebrow-divider">/</span>
              <span>YOUR WORLD, OUR WORK</span>
            </div>

            <div className="audience-heading-row">
              <h2 className="audience-heading">
                Different people.
                <br />
                <span>Different ideas.</span>
                <br />
                One thoughtful approach.
              </h2>

              <p className="audience-intro">
                Technology should meet people where they are.
                Whether you're building a business, planning a
                celebration or reimagining an organisation,
                we create with your goals and your audience in mind.
              </p>
            </div>
          </div>

          <div className="audience-grid">
            {audiences.map((audience, index) => {
              const AudienceIcon = audience.icon;

              return (
                <motion.article
                  className="audience-card"
                  key={audience.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.25 },
                  }}
                >
                  <div className="audience-card-top">
                    <span className="audience-number">
                      {audience.number}
                    </span>

                    <span className="audience-icon">
                      <AudienceIcon size={22} strokeWidth={1.5} />
                    </span>
                  </div>

                  <span className="audience-label">
                    {audience.label}
                  </span>

                  <h3>{audience.title}</h3>

                  <p className="audience-description">
                    {audience.description}
                  </p>

                  <div className="audience-examples">
                    {audience.examples.map((example) => (
                      <div
                        className="audience-example"
                        key={example}
                      >
                        <span className="audience-example-marker" />
                        {example}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="audience-card-link animated-text-link"
                  >
                    Let's create something
                    <span className="animated-link-icon">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </motion.article>
              );
            })}
          </div>

          <div className="audience-bottom">
            <div className="audience-bottom-copy">
              <Users size={20} strokeWidth={1.5} />

              <p>
                Don't see yourself here?
                <span> That's not a limitation.</span>
              </p>
            </div>

            <a
              href="#contact"
              className="audience-bottom-link"
            >
              Tell us what you're imagining
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.section>

      </div>
    </section>
  );
}

export default Services;