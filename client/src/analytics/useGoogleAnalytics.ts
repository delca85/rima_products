import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import analytics from './analytics';

const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    analytics.init();
  }, []);

  useEffect(() => {
    analytics.sendPageview(location.pathname);
  }, [location]);
};

export default useGoogleAnalytics;
