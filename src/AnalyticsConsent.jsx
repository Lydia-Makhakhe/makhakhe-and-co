
import { useState } from 'react';

import {
  getAnalyticsConsent,
  initialiseAnalytics,
  trackPageView,
} from './analytics';

import './AnalyticsConsent.css';

function AnalyticsConsent() {
  const [visible, setVisible] = useState(
    getAnalyticsConsent() === null
  );

  const saveChoice = (choice) => {
    localStorage.setItem('makhakhe_analytics_consent', choice);

    if (choice === 'granted') {
      initialiseAnalytics();
      trackPageView();
    }

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="analytics-consent"
      role="dialog"
      aria-modal="false"
      aria-labelledby="analytics-consent-title"
    >
      <div className="analytics-consent-content">
        <div className="analytics-consent-copy">
          <span className="analytics-consent-eyebrow">
            YOUR PRIVACY MATTERS
          </span>

          <h2 id="analytics-consent-title">
            Help us make this experience better.
          </h2>

          <p>
            We use optional analytics to understand how visitors
            interact with our website, identify usability issues
            and improve the experience. You can accept or decline
            this tracking.
          </p>
        </div>

        <div className="analytics-consent-actions">
          <button
            type="button"
            className="analytics-consent-accept"
            onClick={() => saveChoice('granted')}
          >
            Accept analytics
          </button>

          <button
            type="button"
            className="analytics-consent-decline"
            onClick={() => saveChoice('denied')}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsConsent;
