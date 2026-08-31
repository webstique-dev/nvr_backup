import { motion, useReducedMotion, fadeUp, staggerContainer } from '../../animations/motion';
import OptimizedImage from '../Common/OptimizedImage';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="why-choose section section--surface" id="why-choose">
      <div className="why-choose__bg" aria-hidden="true">
        <div className="why-choose__glow" />
      </div>

      <div className="container why-choose__inner">
        {/* Left: Visual Illustration */}
        <motion.div
          className="why-choose__visual"
          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="why-choose__img-frame">
            <OptimizedImage
              src="https://res.cloudinary.com/rlokioxu/image/upload/v1788156078/Home2_acubp6.png"
              alt="Healthcare professional applying quality standards and accreditation training"
              className="why-choose__img"
              priority={false}
              widths={[400, 600, 800, 1000]}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 440px, 500px"
              width={500}
              height={400}
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="why-choose__content"
          variants={staggerContainer}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span className="eyebrow-light" variants={fadeUp} custom={0}>
            Why Choose Us
          </motion.span>

          <motion.h2 className="why-choose__heading" variants={fadeUp} custom={0.08}>
            Why Choose <span className="text-gradient-light">NVR Quality Solutions?</span>
          </motion.h2>

          <motion.div className="why-choose__body" variants={fadeUp} custom={0.16}>
            <p className="why-choose__lead">
              Healthcare quality demands more than classroom learning. It requires practical understanding and industry insight. You should have the ability to apply standards in real healthcare environments. Our training programs are designed for you to develop quality improvement skills across hospitals and healthcare institutions.
            </p>

            <div className="why-choose__highlight-box">
              <p className="why-choose__highlight-text">
                With a strong foundation in <strong>Hospital Quality Management</strong>, <strong>Quality Improvement in Healthcare</strong>, and <strong>Healthcare Accreditation Training</strong>, we focus on building professionals who feel prepared.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
