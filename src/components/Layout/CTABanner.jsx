import { motion, useReducedMotion, fadeUp } from '../../animations/motion';
import Button from '../Common/Button';
import './CTABanner.css';

const CTABanner = ({
  eyebrow = 'Get Started',
  title,
  description,
  primaryLabel = 'Contact Us',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="cta-banner">
      <div className="container">
        <motion.div
          className="cta-banner__inner"
          variants={fadeUp}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="cta-banner__content">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2 className="cta-banner__title">{title}</h2>
            {description && <p className="cta-banner__description">{description}</p>}
          </div>
          <div className="cta-banner__actions">
            <Button as="link" to={primaryTo} variant="dark" id="cta-primary-btn">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryTo && (
              <Button as="link" to={secondaryTo} variant="secondary" id="cta-secondary-btn">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
