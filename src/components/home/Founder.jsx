import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useThemeLanguage } from '../../context/ThemeLanguageContext';

import './Founder.css';

function Founder() {
  const { t } = useThemeLanguage();

  return (
    <section className="founder-section" id="founder">
      <div className="founder-container">

        <motion.div
          className="founder-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">
            {t('founderEyebrow')}
          </span>

          <h2>{t('founderTitle')}</h2>
        </motion.div>

        <div className="founder-grid">

          <motion.div
            className="founder-image-wrap"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Replace this with your own founder portrait */}
            <div className="founder-image-placeholder">
              <span>YOUR PORTRAIT</span>
              <span className="founder-image-number">01 / FOUNDER</span>
            </div>

            <div className="founder-location">
              <MapPin size={14} />
              <span>LESOTHO · SOUTHERN AFRICA</span>
            </div>
          </motion.div>

          <motion.div
            className="founder-content"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="founder-name-label">
              FOUNDER & DIGITAL ENGINEER
            </span>

            <h3>
              Technology should work for people,
              not the other way around.
            </h3>

            <p className="founder-intro">
              {t('founderIntro')}
            </p>

            <p>
              I work across software engineering, digital design
              and technology strategy, bringing ideas from early
              conversations through planning, design and development.
            </p>

            <p>
              As a founder from Lesotho, I want Makhakhe & Co. to
              reflect the creativity, capability and perspective
              that exists here, while building digital experiences
              that can connect with people beyond our borders.
            </p>

            <div className="founder-vision">
              <span>THE VISION</span>
              <p>{t('founderVision')}</p>
            </div>

            <Link to="/project" className="founder-link">
              {t('founderButton')}
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Founder;