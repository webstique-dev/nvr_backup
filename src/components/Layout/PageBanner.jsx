import { motion, useReducedMotion } from '../../animations/motion';
import { usePreloader } from '../../context/PreloaderContext';
import './PageBanner.css';

/**
 * Standard inner-page hero/banner.
 * breadcrumb: array of { label, to } — last item renders as current page
 */
const PageBanner = ({ eyebrow, title, description, breadcrumb = [] }) => {
  const shouldReduceMotion = useReducedMotion();
  const { isPreloading } = usePreloader();
  const isReady = !isPreloading;

  return (
    <section className="page-banner section--dark">
      <div className="container">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={
            shouldReduceMotion || isReady
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
        >
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="page-banner__title">{title}</h1>
          {description && <p className="page-banner__description">{description}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;
