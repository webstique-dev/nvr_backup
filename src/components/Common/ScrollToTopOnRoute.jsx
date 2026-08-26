import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Handles smooth scrolling to hash anchors (e.g. #send-message)
 * with robust retry support to wait for page transitions (AnimatePresence),
 * or resets scroll position to top on normal route changes.
 */
const ScrollToTopOnRoute = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      let attempts = 0;
      const maxAttempts = 35; // 35 * 40ms = 1400ms (covers exit + enter animation)

      const performScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 90;
          const rect = element.getBoundingClientRect();
          const targetY = rect.top + window.scrollY - navHeight;

          window.scrollTo({
            top: targetY > 0 ? targetY : 0,
            behavior: 'smooth',
          });
          return true;
        }
        return false;
      };

      // Try immediately first (for same-page anchor clicks)
      if (!performScroll()) {
        const interval = setInterval(() => {
          attempts++;
          if (performScroll() || attempts >= maxAttempts) {
            clearInterval(interval);
          }
        }, 40);

        return () => clearInterval(interval);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTopOnRoute;
