
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
  hasAnalyticsConsent,
  initialiseAnalytics,
  trackPageView,
} from './analytics';

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!hasAnalyticsConsent()) return;

    initialiseAnalytics();
    trackPageView();
  }, [location.pathname, location.search]);

  return null;
}

export default AnalyticsTracker;
