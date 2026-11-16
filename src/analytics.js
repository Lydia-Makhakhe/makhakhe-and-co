
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const CLARITY_ID = import.meta.env.VITE_CLARITY_PROJECT_ID;

const CONSENT_KEY = 'makhakhe_analytics_consent';

let analyticsInitialised = false;

export function getAnalyticsConsent() {
  return localStorage.getItem(CONSENT_KEY);
}

export function hasAnalyticsConsent() {
  return getAnalyticsConsent() === 'granted';
}

function loadGoogleAnalytics() {
  if (!GA_ID || window.gtag) return;

  window.dataLayer = window.dataLayer || [];

  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  const script = document.createElement('script');

  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

  document.head.appendChild(script);

  window.gtag('js', new Date());

  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  window.gtag('config', GA_ID, {
    send_page_view: false,
  });
}

function loadMicrosoftClarity() {
  if (!CLARITY_ID || window.clarity) return;

  window.clarity = function () {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };

  const script = document.createElement('script');

  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;

  document.head.appendChild(script);

  window.clarity('consentv2', {
    ad_Storage: 'denied',
    analytics_Storage: 'granted',
  });
}

export function initialiseAnalytics() {
  if (analyticsInitialised || !hasAnalyticsConsent()) return;

  analyticsInitialised = true;

  loadGoogleAnalytics();
  loadMicrosoftClarity();
}

export function trackPageView() {
  if (!hasAnalyticsConsent()) return;

  initialiseAnalytics();

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname + window.location.search,
    });
  }
}

export function trackEvent(eventName, parameters = {}) {
  if (!hasAnalyticsConsent()) return;

  initialiseAnalytics();

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }

  if (typeof window.clarity === 'function') {
    window.clarity('event', eventName);
  }
}
