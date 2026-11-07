import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Monitor,
  Code2,
  Compass,
} from 'lucide-react';

import './Services.css';

const services = [
  {
    number: '01',
    category: 'DESIGNING FOR PEOPLE',
    title: 'Human-Centred Digital Design',
    summary:
      'We design digital experiences that are easy to understand, accessible and enjoyable to use.',
    question: 'How should people experience your solution?',
    description:
      'Before thinking about screens and features, we think about people. We take time to understand your users and design websites and applications around their needs, abilities and expectations.',
    outcome:
      'Digital experiences that feel intuitive, work across devices and make technology more accessible to everyone.',
    capabilities: [
      'Understanding user needs and requirements',
      'Website and mobile app interface design',
      'Accessibility and inclusive design',
      'Prototyping and usability testing',
    ],
    icon: Monitor,
    keywords: ['Understand', 'Design', 'Test'],
  },
  {
    number: '02',
    category: 'IDEA TO IMPLEMENTATION',
    title: 'Software & Systems Engineering',
    summary:
      'We turn ideas into working websites, applications and digital systems, from planning through to production.',
    question: 'How do we turn your idea into a working product?',
    description:
      'We guide software projects through the complete development process. From defining what needs to be built to writing code, testing, deployment and ongoing support, we take a structured approach to bringing your solution to life.',
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
    number: '03',
    category: 'STRATEGY & DIRECTION',
    title: 'Digital Strategy & Technology Advisory',
    summary:
      'We help organisations make sense of technology, shape their ideas and decide what to do next.',
    question: 'What should you build, and where should you start?',
    description:
      'You might have a business challenge, an idea for an application or simply know that your organisation needs a better digital approach. We help you evaluate your options, identify practical solutions and develop a clear direction before committing resources.',
    outcome:
      'A practical roadmap, more confident technology decisions and a clearer understanding of the opportunities ahead.',
    capabilities: [
      'Digital strategy and technology guidance',
      'Technology assessment and recommendations',
      'Software project planning and direction',
      'Application analytics and performance insights',
      'AI-supported analysis where it adds value',
    ],
    icon: Compass,
    keywords: ['Explore', 'Evaluate', 'Plan'],
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
    setExpandedService((current) => (
      current === index ? null : index
    ));
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* SECTION INTRODUCTION */}

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
              From the first conversation to the finished product,
              we bring together thoughtful design, software
              engineering and practical technology guidance
              to make ideas happen.
            </p>
          </div>
        </motion.div>

        {/* INTERACTION GUIDANCE */}

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
            Explore a service to see how we can help with your project.
          </span>
        </motion.div>

        {/* EXPANDABLE SERVICE SECTIONS */}

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
                className={`service-item ${isExpanded ? 'is-expanded' : ''}`}
                key={service.number}
                variants={sectionVariants}
                layout
                whileHover={{
                  y: -2,
                  transition: { duration: 0.25 },
                }}
              >
                {/* ALWAYS-VISIBLE SERVICE OVERVIEW */}

                <div className="service-overview">
                  <div className="service-overview-number">
                    {service.number}
                  </div>

                  <div className="service-overview-icon">
                    <motion.div
                      animate={
                        isExpanded
                          ? { rotate: [0, -8, 0], scale: [1, 1.08, 1] }
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
                      {isExpanded ? 'Close details' : 'Explore this service'}
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

                {/* DETAILS APPEAR UNDER THE SELECTED SERVICE */}

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
                            {service.capabilities.map((capability, i) => (
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
                            ))}
                          </ul>

                          <div className="service-process">
                            <span className="service-process-label">
                              OUR APPROACH
                            </span>

                            <div className="service-process-steps">
                              {service.keywords.map((keyword, stepIndex) => (
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
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="service-details-footer">
                          <span>
                            Have something in mind? Let's work through it.
                          </span>

                          <a href="#contact" className="animated-text-link">
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

        {/* SECTION FOOTER */}

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

          <a href="#contact" className="services-footer-link animated-text-link">
            Have a project in mind?
            <span className="animated-link-icon">
              <ArrowUpRight size={17} />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;