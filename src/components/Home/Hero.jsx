import { motion, useReducedMotion, fadeUp } from '../../animations/motion';
import { LuCircleCheckBig } from 'react-icons/lu';
import Button from '../Common/Button';
import './Hero.css';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero section--dark">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        {/* Left Content */}
        <div className="hero__content">
          <motion.span
            className="eyebrow"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            custom={0.05}
          >
            Healthcare Quality Training &amp; Consultancy
          </motion.span>

          <motion.h1
            className="hero__heading"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            custom={0.12}
          >
            Building Safer Healthcare Through{' '}
            <span className="text-gradient">Quality Excellence</span>
          </motion.h1>

          <motion.p
            className="hero__description"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            custom={0.2}
          >
            At NVR Quality Solutions, we provide expert-led Healthcare Quality Training, Patient
            Safety Training, and professional consultancy. Every student that leaves us has the
            knowledge and practical skills needed to implement globally recognized quality standards.
          </motion.p>

          <motion.div
            className="hero__actions"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            custom={0.28}
          >
            <Button as="link" to="/training-programs" variant="primary">
              Explore Trainings
            </Button>
            <Button as="link" to="/contact" variant="secondary">
              Talk to Our Experts
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="hero__trust"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            custom={0.36}
          >
            <div className="hero__trust-item">
              {/* Replace the src paths with the actual locations of your image files */}
              <img
                src="https://res.cloudinary.com/rlokioxu/image/upload/v1787050320/NABH_logo_eswfaz.png"
                alt="NABH Accreditation Logo"
                className="hero__trust-logo"
              />
              {/* <span className="hero__trust-label">Services</span> */}
            </div>

            <div className="hero__trust-divider" aria-hidden="true" />

            <div className="hero__trust-item">
              <img
                src="https://res.cloudinary.com/rlokioxu/image/upload/v1787049467/jci-logo_a9m6ad.svg"
                alt="JCI Accreditation Logo"
                className="hero__trust-logo"
              />
              {/* <span className="hero__trust-label">Services</span> */}
            </div>

            <div className="hero__trust-divider" aria-hidden="true" />

            <div className="hero__trust-item">
              <img
                src="https://res.cloudinary.com/rlokioxu/image/upload/v1787050320/Caam-hp-logo_c8qkmc.png"
                alt="CAAM-HP Accreditation Logo"
                className="hero__trust-logo"
              />
              {/* <span className="hero__trust-label">Services</span> */}
            </div>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div
          className="hero__visual"
          initial={shouldReduceMotion ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 48, scale: 0.96 }}
          animate={shouldReduceMotion ? { opacity: 1, x: 0, scale: 1 } : { opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
        >
          <div className="hero__img-frame">
            <img
              src="/hero-illustration.png"
              alt="Healthcare professionals reviewing quality standards and accreditation documents"
              className="hero__img"
              loading="eager"
            />
            <div className="hero__img-tag glass">
              <LuCircleCheckBig className="hero__tag-icon" aria-hidden="true" />
              <span>Accreditation Excellence</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
