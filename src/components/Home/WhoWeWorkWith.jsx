import { motion, useReducedMotion, fadeUp, staggerContainer } from '../../animations/motion';
import {
  LuGraduationCap,
  LuStethoscope,
  LuBuilding2,
  LuUsers,
  LuClipboardCheck,
  LuChartBarBig,
  LuCheck,
} from 'react-icons/lu';
import './WhoWeWorkWith.css';

const audiences = [
  {
    id: 'career-aspiring-students',
    icon: LuGraduationCap,
    label: 'Students aspiring to build careers in healthcare quality',
  },
  {
    id: 'healthcare-professionals',
    icon: LuStethoscope,
    label: 'Healthcare professionals seeking specialized quality knowledge',
  },
  {
    id: 'hospital-administrators',
    icon: LuBuilding2,
    label: 'Hospital administrators and quality teams',
  },
  {
    id: 'clinical-non-clinical-staff',
    icon: LuUsers,
    label: 'Clinical and non-clinical staff',
  },
  {
    id: 'accreditation-organizations',
    icon: LuClipboardCheck,
    label: 'Healthcare organizations pursuing accreditation',
  },
  {
    id: 'quality-management-professionals',
    icon: LuChartBarBig,
    label: 'Professionals interested in Quality Management Training and healthcare compliance',
  },
];

const WhoWeWorkWith = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="who-work section section--surface">
      <div className="container">
        <motion.div
          className="who-work__content"
          variants={staggerContainer}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="who-work__header" variants={fadeUp}>
            <span className="eyebrow-light">Who We Work With</span>
            <h2 className="who-work__heading">
              Our programs are {' '}
              <span className="text-gradient-light">designed for</span>
            </h2>
          </motion.div>

          <div className="who-work__grid">
            {audiences.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  id={`audience-${item.id}`}
                  className="who-work__card"
                  variants={fadeUp}
                  whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.25 } }}
                >
                  <span className="who-work__card-icon-wrap" aria-hidden="true">
                    <Icon className="who-work__card-icon" />
                  </span>
                  <p className="who-work__card-label">{item.label}</p>
                  {/* <div className="who-work__card-check" aria-hidden="true">
                    <LuCheck className="who-work__check-icon" />
                  </div> */}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
