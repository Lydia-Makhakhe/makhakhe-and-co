
import {
  ArrowUpRight,
  Network,
  Code2,
  Mail,
  Camera,
  Globe,
  BriefcaseBusiness,
  FileText,
  MessageCircle,
  Copy,
  Lightbulb,
  HeartHandshake,
  Palette,
  Target,
} from 'lucide-react';

import './About.css';

const profile = {
  name: 'Tleleng Makhakhe',
  role: 'Software Engineer',
  location: 'Lesotho',
  portrait: '/images/profile/my portrait.jpeg',
  email: '',
  linkedin: '',
  github: '',
  cv: '/documents/Tleleng-Makhakhe-CV.pdf',
  website: '',
  instagram: '',
  whatsapp: '',
  projects: '#work',
};

const profileLinks = [
  {
    label: 'LinkedIn',
    description: 'Professional network',
    href: profile.linkedin,
    icon: Network,
  },
  {
    label: 'GitHub',
    description: 'Code and repositories',
    href: profile.github,
    icon: Code2,
  },
  {
    label: 'Curriculum Vitae',
    description: 'Experience and qualifications',
    href: profile.cv,
    icon: FileText,
  },
  {
    label: 'Email',
    description: 'Get in touch directly',
    href: profile.email ? `mailto:${profile.email}` : '',
    icon: Mail,
  },
  {
    label: 'Projects',
    description: 'Selected work and explorations',
    href: profile.projects,
    icon: BriefcaseBusiness,
  },
  {
    label: 'Personal Website',
    description: 'My digital space',
    href: profile.website,
    icon: Globe,
  },
  {
    label: 'Instagram',
    description: 'Creative side and interests',
    href: profile.instagram,
    icon: Camera,
  },
  {
    label: 'WhatsApp',
    description: 'Start a conversation',
    href: profile.whatsapp
      ? `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`
      : '',
    icon: MessageCircle,
  },
];

const projects = [
  {
    number: '01',
    category: 'MOBILE APPLICATION',
    title: 'GreenVision Lesotho',
    description:
      'Exploring accessible digital approaches to climate literacy and sustainable action.',
    status: 'Research & Development',
    code: 'GV / 001',
  },
  {
    number: '02',
    category: 'WEB DEVELOPMENT',
    title: 'MGP Investments',
    description:
      'A corporate digital experience focused on property development and investment.',
    status: 'Website Development',
    code: 'MGP / 002',
  },
  {
    number: '03',
    category: 'ENTREPRENEURSHIP',
    title: 'Mmaraka',
    description:
      'Exploring a digital marketplace that connects businesses and customers in Lesotho.',
    status: 'Concept Development',
    code: 'MM / 003',
  },
];

const qualities = [
  {
    title: 'Creative thinking',
    description: 'Bringing imagination and fresh perspectives to ideas.',
    icon: Palette,
  },
  {
    title: 'Technical craft',
    description: 'Turning complex problems into thoughtful digital solutions.',
    icon: Lightbulb,
  },
  {
    title: 'Human-centred',
    description: 'Keeping people, context and real needs at the heart of design.',
    icon: HeartHandshake,
  },
  {
    title: 'Results-driven',
    description: 'Moving from ideas to purposeful, practical outcomes.',
    icon: Target,
  },
];

function About() {
  const availableLinks = profileLinks.filter((link) => link.href);

  const copyEmail = async () => {
    if (!profile.email) return;

    try {
      await navigator.clipboard.writeText(profile.email);
      alert('Email address copied.');
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="about-section" id="about">
      <div className="about-background-grid" aria-hidden="true" />
      <div className="about-background-glow" aria-hidden="true" />

      <div className="about-container">
        {/* PAGE INTRODUCTION */}
        <div className="about-heading">
          <div className="about-eyebrow">
            <span className="about-eyebrow-line" />
            <span>PERSONAL DIGITAL PROFILE</span>
          </div>

          <div className="about-heading-content">
            <h2>
              Beyond the
              <span> interface.</span>
            </h2>

            <p>
              The person, perspectives and ideas behind the work.
            </p>
          </div>
        </div>

        {/* IDENTITY EXPERIENCE */}
        <div className="identity-layout">
          {/* DIGITAL IDENTITY CARD */}
          <div className="identity-card">
            <div className="identity-card-glare" aria-hidden="true" />

            <div className="identity-card-top">
              <div className="identity-brand">
                <span className="identity-brand-dot" />
                MAKHAKHE & CO.
              </div>

              <span className="identity-card-mark">
                DIGITAL ENGINEERING
              </span>
            </div>

            <div className="identity-visual">
              <div className="identity-visual-grid" />
              <div className="identity-visual-glow" />

              <div className="identity-orbit identity-orbit-one" />
              <div className="identity-orbit identity-orbit-two" />
              <div className="identity-orbit identity-orbit-three" />

              <div className="identity-orbit-point" />

              <div className="identity-crosshair identity-crosshair-one" />
              <div className="identity-crosshair identity-crosshair-two" />

              <div className="identity-monogram">TM</div>

              <img
                src={profile.portrait}
                alt="Portrait of Tleleng Makhakhe"
                className="identity-portrait"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />

              <div className="identity-portrait-shine" />
              <div className="identity-scan-line" />
            </div>

            <div className="identity-details">
              <div className="identity-name-block">
                <span className="identity-label">HELLO, I'M</span>
                <h3>{profile.name}</h3>
              </div>

              <div className="identity-meta">
                <div>
                  <span className="identity-label">PROFESSION</span>
                  <p>{profile.role}</p>
                </div>

                <div>
                  <span className="identity-label">BASED IN</span>
                  <p className="identity-location">
                    <span className="lesotho-flag" role="img" aria-label="Lesotho flag">
                      🇱🇸
                    </span>
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="identity-card-bottom">
              <span>TECHNOLOGY · CREATIVITY · PURPOSE</span>
              <span className="identity-card-symbol">M&CO.</span>
            </div>
          </div>

          {/* INTRODUCTION */}
          <div className="identity-introduction">
            <div className="introduction-topline">
              <span className="about-small-label">A LITTLE ABOUT ME</span>
            </div>

            <h3>
              Engineering with purpose.
              <span> Creating with perspective.</span>
            </h3>

            <p>
              I'm a Software Engineer who enjoys working where technology,
              creativity and human experience meet. I like exploring how
              thoughtful design and solid engineering can turn complex ideas
              into digital experiences that feel intuitive, useful and
              meaningful.
            </p>

            <p>
              I approach problems with curiosity, think beyond the obvious
              solution and pay attention to the people who will use what I
              create. From shaping an idea to building and refining the
              finished experience, I value both the craft behind the work
              and the difference it makes in practice.
            </p>

            <p>
              For me, good technology is not simply about making something
              work. It is about making it work well, for the right reasons,
              and with a result that matters.
            </p>

            <div className="identity-qualities">
              {qualities.map((quality) => {
                const Icon = quality.icon;

                return (
                  <div className="identity-quality" key={quality.title}>
                    <div className="quality-icon">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>

                    <div className="quality-copy">
                      <h4>{quality.title}</h4>
                      <p>{quality.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {profile.email && (
              <button
                className="about-copy-email"
                onClick={copyEmail}
                type="button"
              >
                <Copy size={15} />
                Copy email address
              </button>
            )}

            <div className="introduction-decoration" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        {/* DIGITAL CONNECTIONS */}
        <div className="profile-links-section">
          <div className="about-subheading">
            <div>
              <span className="about-small-label">DIGITAL CONNECTIONS</span>
              <h3>Find me elsewhere.</h3>
            </div>

            <span className="about-section-index">CONNECT / 002</span>
          </div>

          <div className="profile-links-heading">
            <span>AVAILABLE CHANNELS</span>
            <span>{String(availableLinks.length).padStart(2, '0')} ENTRIES</span>
          </div>

          <div className="profile-links-grid">
            {availableLinks.map((link) => {
              const Icon = link.icon;
              const isInternal = link.href.startsWith('#');
              const isEmail = link.href.startsWith('mailto:');
              const isCV = link.label === 'Curriculum Vitae';

              return (
                <a
                  href={link.href}
                  key={link.label}
                  className="profile-link-card"
                  target={
                    isInternal || isEmail || isCV ? undefined : '_blank'
                  }
                  rel={
                    isInternal || isEmail || isCV
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  download={isCV ? true : undefined}
                >
                  <div className="profile-link-icon">
                    <Icon size={19} strokeWidth={1.6} />
                  </div>

                  <div className="profile-link-information">
                    <h4>{link.label}</h4>
                    <p>{link.description}</p>
                  </div>

                  <div className="profile-link-action">
                    <ArrowUpRight size={17} strokeWidth={1.6} />
                  </div>
                </a>
              );
            })}
          </div>

          {availableLinks.length === 0 && (
            <p className="profile-links-placeholder">
              Your digital directory will appear here once your profile links
              have been configured.
            </p>
          )}
        </div>

        {/* SELECTED WORK */}
        <div className="about-work-section" id="work">
          <div className="about-subheading">
            <div>
              <span className="about-small-label">SELECTED EXPLORATIONS</span>
              <h3>Ideas in progress.</h3>
            </div>

            <span className="about-section-index">WORK / 003</span>
          </div>

          <div className="about-work-intro">
            <p>
              A growing collection of projects, experiments and ideas shaped
              by curiosity.
            </p>

            <span>PROJECT DIRECTORY</span>
          </div>

          <div className="about-project-grid">
            {projects.map((project) => (
              <article className="about-project-card" key={project.number}>
                <div className="project-card-top">
                  <span className="project-code">{project.code}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-visual" aria-hidden="true">
                  <div className="project-visual-grid" />

                  <div className="project-visual-symbol">
                    {project.number === '01' && (
                      <Globe size={43} strokeWidth={0.8} />
                    )}

                    {project.number === '02' && (
                      <BriefcaseBusiness size={43} strokeWidth={0.8} />
                    )}

                    {project.number === '03' && (
                      <Network size={43} strokeWidth={0.8} />
                    )}
                  </div>

                  <span className="project-visual-index">
                    {project.number}
                  </span>
                </div>

                <div className="project-card-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>

                <div className="about-project-bottom">
                  <span>{project.status}</span>
                  <span className="project-status-dot" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="about-contact">
          <div className="contact-decoration" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="about-contact-content">
            <span className="about-small-label">THE NEXT CONNECTION</span>

            <h3>
              Let's make
              <span> something meaningful.</span>
            </h3>

            <p>
              Have an idea, an opportunity or a project worth exploring?
              Let's connect.
            </p>
          </div>

          <a
            href={profile.email ? `mailto:${profile.email}` : '#contact'}
            className="about-contact-link"
          >
            Get in touch
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="about-page-footer">
          <span>MAKHAKHE & CO.</span>
          <span>LESOTHO · SOUTHERN AFRICA</span>
        </div>
      </div>
    </section>
  );
}

export default About;
