import { motion, useReducedMotion, fadeUp, staggerContainer } from '../../animations/motion';
import {
  LuChartBar,
  LuShieldCheck,
  LuMedal,
  LuHandshake,
} from 'react-icons/lu';
import './OurExpertise.css';

const expertiseCards = [
  {
    id: 'healthcare-quality-training',
    icon: LuChartBar,
    number: '01',
    title: 'Healthcare Quality Training',
    description:
      'Gain a complete understanding of healthcare quality principles, compliance needs, and improvement practices used across modern healthcare organizations.',
  },
  {
    id: 'patient-safety-training',
    icon: LuShieldCheck,
    number: '02',
    title: 'Patient Safety Training',
    description:
      'Develop the knowledge and approach required to improve patient safety, reduce risks, strengthen reporting systems, and support a culture of safe healthcare delivery.',
  },
  {
    id: 'healthcare-accreditation-training',
    icon: LuMedal,
    number: '03',
    title: 'Healthcare Accreditation Training',
    description:
      'Learn the frameworks, processes, documentation, and implementation strategies behind internationally recognized accreditation standards, including NABH Training, JCI Training, and CAAM-HP awareness programs.',
  },
  {
    id: 'healthcare-quality-consultancy',
    icon: LuHandshake,
    number: '04',
    title: 'Healthcare Quality Consultancy',
    description:
      'We partner with healthcare organizations by providing expert Healthcare Quality Consultant services. We help institutions strengthen quality systems, improve operational processes, and prepare for accreditation assessments through structured implementation support.',
  },
];

const OurExpertise = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="expertise section section--light">
      <div className="expertise__bg" aria-hidden="true">
        <div className="expertise__glow" />
      </div>
      <div className="container">
        <motion.div
          className="expertise__content"
          variants={staggerContainer}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="expertise__header" variants={fadeUp}>
            <span className="eyebrow-light">Our Expertise</span>
            <h2 className="expertise__heading">
              Learn the Skills That{' '}
              <span className="expertise__heading-highlight">Safer Healthcare Demands</span>
            </h2>
          </motion.div>

          <div className="expertise__grid">
            {expertiseCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.id}
                  id={`expertise-card-${card.id}`}
                  className="expertise__card"
                  variants={fadeUp}
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.01 }}
                >
                  <div className="expertise__card-header">
                    <span className="expertise__card-number" aria-hidden="true">
                      {card.number}
                    </span>
                    <span className="expertise__card-icon" aria-hidden="true">
                      <Icon className="expertise__card-icon-svg" />
                    </span>
                  </div>
                  <h3 className="expertise__card-title">{card.title}</h3>
                  <p className="expertise__card-description">{card.description}</p>
                  <div className="expertise__card-accent" aria-hidden="true" />
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurExpertise;
