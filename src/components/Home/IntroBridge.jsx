import { motion, useReducedMotion } from '../../animations/motion';
import './IntroBridge.css';

const IntroBridge = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="intro-bridge section section--surface" id="intro-bridge">
      <div className="intro-bridge__bg" aria-hidden="true">
        <div className="intro-bridge__glow" />
      </div>

      <div className="container">
        <motion.div
          className="intro-bridge__card"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="intro-bridge__content">
            <p className="intro-bridge__lead">
              Are you a student looking to build a rewarding career? Or a healthcare organization preparing for accreditation? Whatever your goal, our programs are designed to bridge the gap between theory and real-world practice.
            </p>

            <div className="intro-bridge__highlight-box">
              <p className="intro-bridge__highlight-text">
                Gain internationally recognized standards such as <strong>NABH</strong>, <strong>JCI</strong>, and <strong>CAAM-HP</strong> through structured training and expert guidance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroBridge;
