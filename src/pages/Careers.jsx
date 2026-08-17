import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, fadeUp, staggerContainer } from '../animations/motion';
import {
  LuBriefcase,
  LuGraduationCap,
  LuUsers,
  LuAward,
  LuMapPin,
  LuClock,
  LuArrowRight,
  LuCircleCheckBig,
  LuSend,
  LuBuilding2,
  LuShieldCheck,
  LuMail,
  LuX,
} from 'react-icons/lu';
import Button from '../components/Common/Button';
import CTABanner from '../components/Layout/CTABanner';
import SectionTitle from '../components/Common/SectionTitle';
import './Careers.css';

/* ─── Careers Benefits ──────────────────────────────── */
const BENEFITS = [
  {
    id: 'growth',
    icon: LuGraduationCap,
    title: 'Continuous Growth',
    description: 'Access advanced healthcare quality training, workshops, and accreditation certification support.',
  },
  {
    id: 'impact',
    icon: LuAward,
    title: 'Meaningful Impact',
    description: 'Empower healthcare professionals and institutions to improve patient safety and clinical standards.',
  },
  {
    id: 'culture',
    icon: LuUsers,
    title: 'Collaborative Environment',
    description: 'Work alongside experienced healthcare quality consultants, auditors, and clinical educators.',
  },
  {
    id: 'flexibility',
    icon: LuBriefcase,
    title: 'Flexible Roles',
    description: 'Opportunities across full-time consultancy, part-time training instruction, and hybrid setups.',
  },
];

/* ─── Open Positions (Dummy Data) ───────────────────── */
const JOB_POSITIONS = [
  {
    id: 'quality-consultant',
    title: 'Healthcare Quality Consultant',
    department: 'Consultancy Services',
    location: 'Amaravathi / Hybrid',
    type: 'Full-Time',
    experience: '3-5+ Years Experience',
    summary:
      'Lead hospital quality assessments, design documentation frameworks, and guide healthcare facilities through NABH and international accreditation readiness.',
    responsibilities: [
      'Conduct gap analyses and mock audits for partner hospitals.',
      'Develop SOPs, quality indicators, and risk management protocols.',
      'Train internal quality committees and clinical department heads.',
    ],
    tags: ['NABH', 'Quality Assurance', 'Auditing', 'Consultancy'],
  },
  {
    id: 'ipc-trainer',
    title: 'Infection Prevention & Control Trainer (IPCN / IPCO)',
    department: 'Training Programs',
    location: 'Amaravathi / On-Site',
    type: 'Full-Time / Part-Time',
    experience: '2-4+ Years Experience',
    summary:
      'Deliver practical IPCN and IPCO training courses to nurses, doctors, and allied healthcare staff to strengthen infection surveillance and safety.',
    responsibilities: [
      'Conduct interactive training sessions on standard & transmission-based precautions.',
      'Evaluate clinical participant learning and practical demonstration.',
      'Update course materials in alignment with current infection control guidelines.',
    ],
    tags: ['IPCN', 'IPCO', 'Infection Control', 'Training'],
  },
  {
    id: 'compliance-specialist',
    title: 'Quality Documentation & Compliance Specialist',
    department: 'Operations',
    location: 'Amaravathi, Andhra Pradesh',
    type: 'Full-Time',
    experience: '1-3 Years Experience',
    summary:
      'Assist senior consultants in drafting, auditing, and maintaining structured healthcare quality documentation and compliance records.',
    responsibilities: [
      'Review and format clinical policies, manuals, and compliance checklists.',
      'Organize audit reports and maintain centralized quality document repositories.',
      'Coordinate with hospital administrators for audit documentation prep.',
    ],
    tags: ['Documentation', 'Compliance', 'SOPs', 'Hospital Quality'],
  },
  {
    id: 'accreditation-coordinator',
    title: 'Healthcare Accreditation Coordinator',
    department: 'Client Services',
    location: 'Amaravathi / Remote',
    type: 'Full-Time',
    experience: '1-2 Years Experience',
    summary:
      'Serve as the primary liaison between healthcare client teams and NVR Quality Solution consultants during training schedules and audit visits.',
    responsibilities: [
      'Schedule consultancy visits, mock audits, and training webinars.',
      'Track project milestones and deliverable timelines for client hospitals.',
      'Manage client feedback and coordinate post-training support.',
    ],
    tags: ['Coordination', 'Accreditation', 'Client Support'],
  },
];

const Careers = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedJob, setSelectedJob] = useState(null);

  const openApplyModal = (job) => {
    setSelectedJob(job);
  };

  const closeApplyModal = () => {
    setSelectedJob(null);
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════ */}
      <section className="car-hero section--dark">
        <div className="car-hero__bg" aria-hidden="true">
          <div className="car-hero__glow car-hero__glow--1" />
          <div className="car-hero__glow car-hero__glow--2" />
          <div className="car-hero__grid" />
        </div>

        <div className="container car-hero__inner">
          {/* Content (Left) */}
          <div className="car-hero__content">
            <motion.span
              className="eyebrow"
              variants={fadeUp}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              custom={0.05}
            >
              Careers at NVR Quality Solutions
            </motion.span>

            <motion.h1
              className="car-hero__heading"
              variants={fadeUp}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              custom={0.12}
            >
              Join Our Team of <span className="text-gradient">Healthcare Quality Experts</span>
            </motion.h1>

            <motion.p
              className="car-hero__para"
              variants={fadeUp}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              custom={0.2}
            >
              We are passionate about elevating healthcare quality, patient safety, and accreditation standards. Build a rewarding career surrounded by industry practitioners and healthcare leaders.
            </motion.p>

            <motion.div
              className="car-hero__actions"
              variants={fadeUp}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              custom={0.28}
            >
              <Button as="a" href="#open-positions" variant="primary">
                View Open Positions
              </Button>
              <Button as="link" to="/contact" variant="secondary">
                Get in Touch
              </Button>
            </motion.div>
          </div>

          {/* Visual (Right) */}
          <motion.div
            className="car-hero__visual"
            initial={shouldReduceMotion ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 48, scale: 0.96 }}
            animate={shouldReduceMotion ? { opacity: 1, x: 0, scale: 1 } : { opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          >
            <div className="car-hero__img-frame">
              <img
                src="/why-choose-illustration.png"
                alt="Healthcare quality professionals collaborating on training and accreditation"
                className="car-hero__img"
                loading="eager"
              />
              <div className="car-hero__img-tag glass">
                <LuShieldCheck className="car-hero__tag-icon" aria-hidden="true" />
                <span>Empowering Healthcare Leaders</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. WHY JOIN US SECTION
      ════════════════════════════════════════════════ */}
      <section className="section section--surface car-why">
        <div className="container">
          <SectionTitle
            eyebrow="Why NVR Quality Solutions"
            title="Why Build Your Career With Us"
            description="Experience a supportive environment where your expertise directly shapes safer healthcare delivery."
            align="center"
          />

          <motion.div
            className="car-why__grid"
            variants={staggerContainer}
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.id} className="car-why__card" variants={fadeUp}>
                  <div className="car-why__icon-wrap">
                    <Icon className="car-why__icon" />
                  </div>
                  <h3 className="car-why__card-title">{b.title}</h3>
                  <p className="car-why__card-desc">{b.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. OPEN POSITIONS SECTION
      ════════════════════════════════════════════════ */}
      <section id="open-positions" className="section section--light car-positions">
        <div className="container">
          <SectionTitle
            eyebrow="Current Opportunities"
            title="Explore Open Positions"
            description="Find a role that aligns with your healthcare quality background and passion for excellence."
            align="center"
          />

          <div className="car-positions__list">
            {JOB_POSITIONS.map((job) => (
              <div key={job.id} className="car-job-card">
                <div className="car-job-card__header">
                  <div>
                    <span className="car-job-card__dept">{job.department}</span>
                    <h3 className="car-job-card__title">{job.title}</h3>
                  </div>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={() => openApplyModal(job)}
                  >
                    Apply Now
                  </Button>
                </div>

                <div className="car-job-card__meta">
                  <span className="car-job-card__meta-item">
                    <LuMapPin className="car-job-card__meta-icon" />
                    {job.location}
                  </span>
                  <span className="car-job-card__meta-item">
                    <LuClock className="car-job-card__meta-icon" />
                    {job.type}
                  </span>
                  <span className="car-job-card__meta-item">
                    <LuBriefcase className="car-job-card__meta-icon" />
                    {job.experience}
                  </span>
                </div>

                <p className="car-job-card__summary">{job.summary}</p>

                <div className="car-job-card__footer">
                  <div className="car-job-card__tags">
                    {job.tags.map((tag) => (
                      <span key={tag} className="car-job-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="car-job-card__details-btn"
                    onClick={() => openApplyModal(job)}
                  >
                    View Details &amp; Apply
                    <LuArrowRight className="car-job-card__arrow-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. CTA BANNER
      ════════════════════════════════════════════════ */}
      <CTABanner
        eyebrow="Don't See a Matching Role?"
        title="Send Us Your Resume"
        description="We are constantly expanding our consultant network and trainer roster. Send your CV and cover letter directly to our team, and we will get in touch when a suitable opportunity opens up."
        primaryLabel="Email Your CV"
        primaryTo="mailto:nvrqualitysolutions@gmail.com?subject=Career%20Inquiry%20-%20NVR%20Quality%20Solutions"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />

      {/* ═══════════════════════════════════════════════
          5. APPLICATION MODAL
      ════════════════════════════════════════════════ */}
      {selectedJob && (
        <div className="car-modal-overlay" onClick={closeApplyModal}>
          <div
            className="car-modal glass"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              type="button"
              className="car-modal__close"
              onClick={closeApplyModal}
              aria-label="Close modal"
            >
              <LuX />
            </button>

            <div className="car-modal__header">
              <span className="eyebrow">{selectedJob.department}</span>
              <h2 id="modal-title" className="car-modal__title">
                {selectedJob.title}
              </h2>
              <div className="car-job-card__meta">
                <span className="car-job-card__meta-item">
                  <LuMapPin className="car-job-card__meta-icon" />
                  {selectedJob.location}
                </span>
                <span className="car-job-card__meta-item">
                  <LuClock className="car-job-card__meta-icon" />
                  {selectedJob.type}
                </span>
              </div>
            </div>

            <div className="car-modal__body">
              <h4>Role Overview</h4>
              <p>{selectedJob.summary}</p>

              <h4>Key Responsibilities</h4>
              <ul className="car-modal__list">
                {selectedJob.responsibilities.map((resp, idx) => (
                  <li key={idx}>
                    <LuCircleCheckBig className="car-modal__check-icon" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="car-modal__apply-box">
                <h4>How to Apply</h4>
                <p>
                  To apply for this position, please send your updated Resume / CV to{' '}
                  <strong>nvrqualitysolutions@gmail.com</strong> with the subject line:{' '}
                  <em>&quot;Application: {selectedJob.title}&quot;</em>.
                </p>
                <div className="car-modal__actions">
                  <a
                    href={`mailto:nvrqualitysolutions@gmail.com?subject=${encodeURIComponent(
                      `Application: ${selectedJob.title}`
                    )}`}
                    className="btn btn--primary"
                  >
                    <LuMail className="btn__icon-left" />
                    Email Application
                  </a>
                  <Button type="button" variant="secondary" onClick={closeApplyModal}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Careers;
