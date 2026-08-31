import { motion, useReducedMotion, fadeUp, staggerContainer } from '../../animations/motion';
import OptimizedImage from '../Common/OptimizedImage';
import './LearningSection.css';

const LearningSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="learning section section--light" id="learning">
      <div className="learning__bg" aria-hidden="true">
        <div className="learning__glow" />
      </div>
      <div className="container learning__inner">
        {/* Left: Content */}
        <motion.div
          className="learning__content"
          variants={staggerContainer}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="learning__heading"
            variants={fadeUp}
            custom={0.08}
          >
            Preparing Tomorrow&apos;s{' '}
            <span className="text-gradient-light">Leaders in Healthcare Quality</span>
          </motion.h2>

          <motion.h3
            className="learning__subheading"
            variants={fadeUp}
            custom={0.16}
          >
            Learning That Goes Beyond Theory
          </motion.h3>

          <motion.div className="learning__body" variants={fadeUp} custom={0.24}>
            <p className="learning__paragraph">
              Participants gain exposure to healthcare scenarios, quality frameworks, patient safety concepts, documentation practices, and implementation strategies that can be applied within healthcare organizations.
            </p>

            <div className="learning__callout-box">
              <p className="learning__callout-text">
                Our objective is not simply to teach standards. It is to help learners understand how quality systems function in day-to-day healthcare operations.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Illustration */}
        <motion.div
          className="learning__visual"
          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div className="learning__img-wrap">
            <OptimizedImage
              src="https://res.cloudinary.com/rlokioxu/image/upload/v1788156080/Home3_i5wac1.png"
              alt="Healthcare quality education — professionals mastering quality standards and patient safety"
              className="learning__img"
              priority={false}
              widths={[400, 600, 800, 1000]}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 440px, 500px"
              width={500}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningSection;
