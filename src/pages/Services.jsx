import { motion, fadeUp } from '../animations/motion';
import {
  LuChartBar,
  LuShieldCheck,
  LuMedal,
  LuGlobe,
  LuAward,
  LuBookOpen,
  LuBriefcase,
  LuCheck,
  LuArrowRight,
  LuTarget,
  LuCircleCheckBig,
  LuStethoscope,
  LuBuilding2,
  LuSettings,
  LuClipboardCheck,
  LuTrendingUp,
  LuUsers,
} from 'react-icons/lu';
import CTABanner from '../components/Layout/CTABanner';
import OptimizedImage from '../components/Common/OptimizedImage';
import SEO from '../components/Common/SEO';
import { seoConfig } from '../config/seoConfig';
import { generateServiceSchema, generateWebPageSchema } from '../utils/structuredData';
import './Services.css';
import './About.css';

/* ─── What We Do items ────────────────────────────────────── */
const whatWeDoItems = [
  { id: 'hqt', icon: LuStethoscope, label: 'Healthcare Quality Training' },
  { id: 'pst', icon: LuShieldCheck, label: 'Patient Safety Training' },
  { id: 'hat', icon: LuMedal, label: 'Healthcare Accreditation Training' },
  { id: 'hqm', icon: LuBuilding2, label: 'Hospital Quality Management' },
  { id: 'qis', icon: LuSettings, label: 'Quality implementation support' },
  { id: 'arc', icon: LuClipboardCheck, label: 'Accreditation readiness consultancy' },
  { id: 'hpi', icon: LuTrendingUp, label: 'Healthcare process improvement' },
  { id: 'pdp', icon: LuUsers, label: 'Train-the-Trainer Programs' },
  { id: 'pdp', icon: LuUsers, label: 'Pharmacy Audits' },
  { id: 'pdp', icon: LuUsers, label: 'Mock Drill Preparations' },
];

/* ─── Training service cards ─────────────────────────── */
// const trainingServices = [
//   {
//     id: 'healthcare-quality-training',
//     slug: 'healthcare-quality-training',
//     icon: LuChartBar,
//     number: '01',
//     title: 'Healthcare Quality Training',
//     body: [
//       'Our Healthcare Quality Training programs equip students and healthcare professionals. Every student leaves us with the knowledge and skills needed to understand healthcare quality systems, regulatory expectations, and quality improvement methodologies.',
//       'Participants gain exposure to industry best practices, documentation processes, quality frameworks, and implementation strategies. They can then contribute confidently to quality initiatives within hospitals and healthcare institutions.',
//     ],
//   },
//   {
//     id: 'patient-safety-training',
//     slug: 'patient-safety-training',
//     icon: LuShieldCheck,
//     number: '02',
//     title: 'Patient Safety Training',
//     body: [
//       'Our Patient Safety Training programs focus on developing a culture of safety by helping participants understand risk management. They also learn incident reporting, quality improvement, and preventive strategies that improve outcomes.',
//     ],
//   },
//   {
//     id: 'nabh-training',
//     slug: 'nabh-training',
//     icon: LuMedal,
//     number: '03',
//     title: 'NABH Training',
//     body: [
//       'Our NABH Training programs explore the principles, documentation requirements, quality indicators, and implementation processes associated with the National Accreditation Board for Hospitals & Healthcare Providers (NABH).',
//     ],
//   },
//   {
//     id: 'jci-training',
//     slug: 'jci-training',
//     icon: LuGlobe,
//     number: '04',
//     title: 'JCI Training',
//     body: [
//       'Our JCI Training programs introduce participants to internationally recognized healthcare quality and patient safety standards. Training includes quality management principles, patient-centered standards, documentation, and implementation practices that support organizational excellence.',
//     ],
//   },
//   {
//     id: 'caam-hp-training',
//     slug: 'caam-hp-training',
//     icon: LuAward,
//     number: '05',
//     title: 'CAAM-HP Training',
//     body: [
//       'Our CAAM-HP Training programs dissect the framework, requirements, and quality principles associated with CAAM-HP standards. The curriculum is designed to improve awareness and prepare participants for quality-focused roles.',
//     ],
//   },
// ];

// const trainingServices = [
//   {
//     id: 'ipcn-training',
//     slug: 'ipcn-training',
//     icon: LuShieldCheck,
//     number: '01',
//     title: 'IPCN Training',
//     body: [
//       'Our IPCN Training programs equip healthcare professionals with the knowledge and practical skills required to strengthen infection prevention and control practices across healthcare settings.',
//     ],
//   },
//   {
//     id: 'ipco-training',
//     slug: 'ipco-training',
//     icon: LuShieldCheck,
//     number: '02',
//     title: 'IPCO Training',
//     body: [
//       'Our IPCO Training programs focus on developing practical expertise in planning, implementing, monitoring, and improving infection prevention and control systems within healthcare organizations.',
//     ],
//   },
//   {
//     id: 'patient-safety-training',
//     slug: 'patient-safety-training',
//     icon: LuShieldCheck,
//     number: '03',
//     title: 'Patient Safety Training',
//     body: [
//       'Our Patient Safety Training programs focus on developing a strong culture of safety by helping participants understand risk management, incident reporting, quality improvement, and preventive strategies that improve patient outcomes.',
//     ],
//   },
//   {
//     id: 'healthcare-quality-training',
//     slug: 'healthcare-quality-training',
//     icon: LuChartBar,
//     number: '04',
//     title: 'Healthcare Quality Training',
//     body: [
//       'Our Healthcare Quality Training programs equip students and healthcare professionals with the knowledge and skills needed to understand healthcare quality systems, regulatory expectations, and quality improvement methodologies.',
//       'Participants gain exposure to industry best practices, documentation processes, quality frameworks, performance indicators, and implementation strategies.',
//     ],
//   },
//   {
//     id: 'nabh-training',
//     slug: 'nabh-training',
//     icon: LuMedal,
//     number: '05',
//     title: 'NABH Training',
//     body: [
//       'Our NABH Training programs explore the principles, documentation requirements, quality indicators, and implementation processes associated with the National Accreditation Board for Hospitals & Healthcare Providers (NABH).',
//       'The program helps participants understand accreditation requirements and prepare healthcare organizations for effective implementation and continuous quality improvement.',
//     ],
//   },
//   // {
//   //   id: 'jci-training',
//   //   slug: 'jci-training',
//   //   icon: LuGlobe,
//   //   number: '06',
//   //   title: 'JCI Training',
//   //   body: [
//   //     'Our JCI Training programs introduce participants to internationally recognized healthcare quality and patient safety standards. Training includes quality management principles, patient-centered standards, documentation, and implementation practices that support organizational excellence.',
//   //   ],
//   // },
//   // {
//   //   id: 'caam-hp-training',
//   //   slug: 'caam-hp-training',
//   //   icon: LuAward,
//   //   number: '07',
//   //   title: 'CAAM-HP Training',
//   //   body: [
//   //     'Our CAAM-HP Training programs explore the framework, requirements, and quality principles associated with CAAM-HP standards. The curriculum is designed to improve awareness and prepare participants for quality-focused roles.',
//   //   ],
//   // },
// ];

const trainingServices = [
  {
    id: 'ipcm-training',
    slug: 'ipcm-training',
    icon: LuShieldCheck,
    number: '01',
    title: 'IPCM Training',
    body: [
      'Gather practical knowledge of infection prevention and control practices essential for maintaining safe healthcare environments. The program helps participants understand infection risks, preventive measures, and the systems used to reduce healthcare associated infections.',
    ],
  },
  {
    id: 'ipco-training',
    slug: 'ipco-training',
    icon: LuShieldCheck,
    number: '02',
    title: 'IPCO Training',
    body: [
      'Understand infection prevention and control systems and their application across healthcare settings. The program focuses on strengthening infection control practices, monitoring compliance, and supporting a culture of safety within healthcare organizations.',
    ],
  },
  {
    id: 'healthcare-quality-training',
    slug: 'healthcare-quality-training',
    icon: LuChartBar,
    number: '03',
    title: 'Healthcare Quality Training',
    body: [
      'Build a strong understanding of the principles that drive quality in healthcare.',
    ],
  },
  {
    id: 'patient-safety-training',
    slug: 'patient-safety-training',
    icon: LuShieldCheck,
    number: '04',
    title: 'Patient Safety Training',
    body: [
      'This program explores the systems, processes, and practices that help reduce risk, improve patient outcomes, and create safer healthcare environments.',
    ],
  },
  {
    id: 'nabh-training',
    slug: 'nabh-training',
    icon: LuMedal,
    number: '05',
    title: 'NABH Training',
    body: [
      'Our NABH Training programs help participants understand NABH as a practical tool for organizing healthcare services, strengthening safety, and ensuring that important processes and responsibilities are not overlooked. The training is designed for healthcare professionals, students, and management teams who want to use NABH standards to build structured, consistent, and safer healthcare systems.',
    ],
  },
];

/* ─── Consultancy list items ─────────────────────────── */
const consultancyItems = [
  { id: 'c1', label: 'Assess existing quality systems' },
  { id: 'c2', label: 'Identify compliance gaps' },
  { id: 'c3', label: 'Develop implementation strategies' },
  { id: 'c4', label: 'Improve documentation practices' },
  { id: 'c5', label: 'Prepare for accreditation assessments' },
  { id: 'c6', label: 'Build sustainable quality processes' },
];

/* ─── Why Choose list items ──────────────────────────── */
const whyItems = [
  { id: 'w1', label: 'Industry-focused learning' },
  { id: 'w2', label: 'Practical implementation strategies' },
  { id: 'w3', label: 'Experienced trainers and consultants' },
  { id: 'w4', label: 'Real-world healthcare applications' },
  { id: 'w5', label: 'Structured guidance for accreditation readiness' },
  { id: 'w6', label: 'Continuous professional development' },
];

/* ─── Component ──────────────────────────────────────── */
const Services = () => {
  return (
    <>
      <SEO
        {...seoConfig.services}
        structuredData={[
          generateWebPageSchema({
            title: seoConfig.services.title,
            description: seoConfig.services.description,
            url: seoConfig.services.canonical,
          }),
          generateServiceSchema({
            name: 'Healthcare Quality Consultancy',
            description: seoConfig.services.description,
            url: seoConfig.services.canonical,
          }),
        ]}
      />
      {/* ═══════════════════════════════════════════════
          1. HERO / PAGE BANNER
      ════════════════════════════════════════════════ */}
      <section className="svc-hero section--dark">
        <div className="svc-hero__bg" aria-hidden="true">
          <div className="svc-hero__glow svc-hero__glow--1" />
          <div className="svc-hero__glow svc-hero__glow--2" />
          <div className="svc-hero__grid" />
        </div>

        <div className="container svc-hero__inner">
          {/* Content */}
          <div className="svc-hero__content">
            <motion.span
              className="eyebrow"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.05}
            >
              Our Services
            </motion.span>

            <motion.h1
              className="svc-hero__heading"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.12}
            >
              Lasting Solutions for{' '}
              <span className="text-gradient">Accreditation Readiness</span>
            </motion.h1>

            <motion.p
              className="svc-hero__para"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.2}
            >
              We provide specialized training and consultancy services that help healthcare
              professionals build successful careers. We also enable healthcare organizations
              to strengthen quality systems.
            </motion.p>

            <motion.p
              className="svc-hero__para"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.28}
            >
              Our programs are designed to simplify healthcare standards, promote patient safety,
              and support quality improvement. We ensure this through practical, industry-focused
              learning and implementation guidance.
            </motion.p>
          </div>

          {/* Illustration */}
          <motion.div
            className="svc-hero__visual"
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          >
            <div className="svc-hero__img-frame">
              <OptimizedImage
                src="https://res.cloudinary.com/rlokioxu/image/upload/v1787754199/ServicesBanner_tzghzg.png"
                alt="Healthcare quality training and consultancy services overview"
                className="svc-hero__img"
                priority={true}
                widths={[400, 600, 800, 1200]}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 520px"
                width={520}
                height={420}
              />
              {/* <div className="svc-hero__img-tag glass">
                <LuCircleCheckBig className="svc-hero__tag-icon" aria-hidden="true" />
                <span>Accreditation Ready</span>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. WHAT WE DO
      ════════════════════════════════════════════════ */}
      <section className="section section--dark about-wwd">
        <div className="about-wwd__bg" aria-hidden="true">
          <div className="about-wwd__glow" />
        </div>
        <div className="container">
          <motion.div
            className="about-wwd__header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">Our Services</span>
            <h2 className="about-wwd__heading">What We Do</h2>
            <p className="about-wwd__intro">
              NVR Quality Solutions offers a range of training and consultancy services focused
              on healthcare quality and patient safety.
            </p>
            <p className="about-wwd__sub-label">Our expertise includes:</p>
          </motion.div>

          <div className="about-wwd__grid">
            {whatWeDoItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  id={`wwd-${item.id}`}
                  className="about-wwd__card glass"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                >
                  <div className="about-wwd__card-icon" aria-hidden="true">
                    <Icon className="about-wwd__card-icon-svg" />
                  </div>
                  <p className="about-wwd__card-label">{item.label}</p>
                  <div className="about-wwd__card-accent" aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>

          <motion.p
            className="about-wwd__closing"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Every program is designed to provide practical, industry-relevant knowledge. Ones
            that participants can confidently apply in real healthcare settings.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. TRAINING SERVICES
      ════════════════════════════════════════════════ */}
      <section className="section section--light svc-training">
        <div className="container">
          <motion.div
            className="svc-section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow-light">Training Programs</span>
            <h2 className="svc-section-heading">Our Training Services</h2>
          </motion.div>

          <div className="svc-training__grid">
            {trainingServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.article
                  key={svc.id}
                  id={`svc-${svc.id}`}
                  className="svc-card"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                >
                  <div className="svc-card__header">
                    <div className="svc-card__icon-wrap" aria-hidden="true">
                      <Icon className="svc-card__icon" />
                    </div>
                    <span className="svc-card__number" aria-hidden="true">{svc.number}</span>
                  </div>

                  <div className="svc-card__body">
                    <h3 className="svc-card__title">{svc.title}</h3>
                    {svc.body.map((para, j) => (
                      <p key={j} className="svc-card__para">{para}</p>
                    ))}
                  </div>

                  <div className="svc-card__accent" aria-hidden="true" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. ACCREDITATION CONSULTANCY
      ════════════════════════════════════════════════ */}
      <section className="section section--surface svc-consult" id="accreditation-consultancy">
        <div className="svc-consult__bg" aria-hidden="true">
          <div className="svc-consult__glow" />
        </div>
        <div className="container svc-consult__inner">
          {/* Left: Content */}
          <motion.div
            className="svc-consult__content"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow-light">Consultancy</span>
            <h2 className="svc-consult__heading">
              Healthcare Accreditation <span className="text-gradient-light">Consultancy</span>
            </h2>

            <p className="svc-consult__intro">
              Preparing for accreditation requires a well-designed quality management system
              supported by effective implementation. Our Healthcare Accreditation Training and
              consultancy services help healthcare organizations:
            </p>

            <div className="svc-consult__checklist">
              {consultancyItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  id={`consult-${item.id}`}
                  className="svc-consult__check-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                >
                  <div className="svc-consult__check-icon-wrap" aria-hidden="true">
                    <LuCheck className="svc-consult__check-icon" />
                  </div>
                  <span className="svc-consult__check-label">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="svc-consult__callout-box">
              <p className="svc-consult__callout-text">
                Our consultants work alongside healthcare teams to strengthen organizational
                readiness.
              </p>
            </div>
          </motion.div>

          {/* Right: Visual Illustration */}
          <motion.div
            className="svc-consult__visual"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className="svc-consult__img-frame">
              <OptimizedImage
                src="https://res.cloudinary.com/rlokioxu/image/upload/v1787754198/Services2_ygqss7.png"
                alt="Healthcare Accreditation Consultancy"
                className="svc-consult__img"
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

      {/* ═══════════════════════════════════════════════
          4. WHY CHOOSE NVR
      ════════════════════════════════════════════════ */}
      <section className="section section--light svc-why">
        <div className="container">
          <motion.div
            className="svc-section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow-light">Why Choose Us</span>
            <h2 className="svc-section-heading">Why Choose NVR Quality Solutions?</h2>
          </motion.div>

          <div className="svc-why__inner">
            {/* Paragraphs */}
            <motion.div
              className="svc-why__text"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            >
              <p className="svc-why__para">
                Healthcare quality is always changing, and professionals need practical knowledge
                that extends beyond textbooks. They need to always know and handle whatever is
                happening in the world right now. This is why our approach combines:
              </p>
            </motion.div>

            {/* Why items grid */}
            <div className="svc-why__grid">
              {whyItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  id={`why-${item.id}`}
                  className="svc-why__item"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  whileHover={{ y: -3, transition: { duration: 0.22 } }}
                >
                  <div className="svc-why__item-dot" aria-hidden="true">
                    <LuCheck className="svc-why__check-icon" />
                  </div>
                  <span className="svc-why__item-label">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. CTA BANNER
      ════════════════════════════════════════════════ */}
      <CTABanner
        eyebrow="Get Started"
        title="Ready to Build Your Healthcare Quality Career?"
        description=""
        primaryLabel="Explore Our Training Programs"
        primaryTo="/training-programs"
        secondaryLabel="Contact Our Team"
        secondaryTo="/contact#send-message"
      />
    </>
  );
};

export default Services;
