import { motion, fadeUp } from '../animations/motion';
import {
  LuPhone,
  LuMail,
  LuMapPin,
  LuClock,
  LuCheck,
  LuCircleCheckBig,
  LuHeadphones,
  LuShieldCheck,
  LuMessageSquare,
  LuArrowUpRight,
} from 'react-icons/lu';
import InquiryForm from '../components/Contact/InquiryForm';
import FAQAccordion from '../components/Common/FAQAccordion';
import SectionTitle from '../components/Common/SectionTitle';
import SEO from '../components/Common/SEO';
import { seoConfig } from '../config/seoConfig';
import { generateWebPageSchema } from '../utils/structuredData';
import './Contact.css';

/* ─── Contact Info Items ────────────────────────────── */
const contactDetails = [
  {
    id: 'phone',
    icon: LuPhone,
    tag: 'Direct Line',
    title: 'Phone Support',
    detail: '+91 8466040046',
    href: 'tel:+918466040046',
    actionLabel: 'Call Us Directly',
    support: 'Speak directly with our healthcare quality advisory team.',
  },
  {
    id: 'email',
    icon: LuMail,
    tag: 'Fast Response',
    title: 'Email Inquiry',
    detail: 'nvrqualitysolutions@gmail.com',
    href: 'mailto:nvrqualitysolutions@gmail.com',
    actionLabel: 'Send an Email',
    support: 'We respond to all email inquiries promptly.',
  },
  {
    id: 'address',
    icon: LuMapPin,
    tag: 'Head Office',
    title: 'Office Address',
    detail: 'Thadepalli, Amaravathi, Andhra Pradesh',
    href: 'https://maps.google.com/?q=Thadepalli,+Amaravathi,+Andhra+Pradesh',
    external: true,
    actionLabel: 'View Location Map',
    support: 'Amaravathi, Andhra Pradesh, India.',
  },
  {
    id: 'hours',
    icon: LuClock,
    tag: '7 Days Active',
    title: 'Working Hours',
    detail: '9:00 AM – 9:00 PM',
    support: 'Available 7 days a week, 12 hours a day (9:00 AM – 9:00 PM) to assist you.',
    actionLabel: 'Open 7 Days a Week',
  },
];

/* ─── How Can We Help Items ─────────────────────────── */
const helpItems = [
  { id: 'h1', label: 'Information about upcoming training programs' },
  { id: 'h2', label: 'Course enrollment guidance' },
  { id: 'h3', label: 'Healthcare quality consultancy inquiries' },
  { id: 'h4', label: 'Patient safety and accreditation training' },
  { id: 'h5', label: 'Corporate and hospital training programs' },
  { id: 'h6', label: 'General questions about our services' },
];

/* ─── Contact FAQs ──────────────────────────────────── */
const contactFaqs = [
  {
    question: 'Do you provide certifications?',
    answer:
      'No. NVR Quality Solutions is a training and consultancy firm. We prepare individuals and healthcare organizations for recognized standards such as NABH, JCI, and CAAM-HP, but we do not issue certifications.',
  },
  {
    question: 'Can hospitals request customized training programs?',
    answer:
      'Yes. We work with healthcare organizations to deliver customized training and consultancy based on their quality improvement goals, operational requirements, and accreditation readiness.',
  },
  {
    question: 'How soon can I expect a response?',
    answer:
      'Our team aims to respond to all inquiries during our working hours (9:00 AM – 9:00 PM, 7 days a week). Give us a call for immediate assistance during operational hours.',
  },
];

/* ─── Component ────────────────────────────────────── */
const Contact = () => {
  return (
    <>
      <SEO
        {...seoConfig.contact}
        structuredData={generateWebPageSchema({
          title: seoConfig.contact.title,
          description: seoConfig.contact.description,
          url: seoConfig.contact.canonical,
        })}
      />
      {/* ═══════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════ */}
      <section className="cnt-hero">
        <div className="cnt-hero__bg" aria-hidden="true">
          <div className="cnt-hero__glow cnt-hero__glow--1" />
          <div className="cnt-hero__glow cnt-hero__glow--2" />
          <div className="cnt-hero__grid" />
        </div>

        <div className="container cnt-hero__inner">
          {/* Content */}
          <div className="cnt-hero__content">
            <motion.span
              className="eyebrow"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.05}
            >
              Contact Us
            </motion.span>

            <motion.h1
              className="cnt-hero__heading"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.12}
            >
              Let&apos;s Start the{' '}
              <span className="text-gradient">Conversation</span>
            </motion.h1>

            <motion.p
              className="cnt-hero__para"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.2}
            >
              Whatever the nature of your query, our team is here to help. Reach out with your
              questions, and we&apos;ll guide you toward the right solution based on your learning or
              organizational needs.
            </motion.p>
          </div>

          {/* Visual */}
          <motion.div
            className="cnt-hero__visual"
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          >
            <div className="cnt-hero__img-frame">
              <img
                src="/contact-hero-illustration.png"
                alt="Support team ready to assist with healthcare quality inquiries"
                className="cnt-hero__img"
                loading="eager"
              />
              <div className="cnt-hero__img-tag glass">
                <LuHeadphones className="cnt-hero__tag-icon" aria-hidden="true" />
                <span>Working Hours: 9:00 AM – 9:00 PM (7 Days)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. CONTACT DETAILS
      ════════════════════════════════════════════════ */}
      <section className="section section--surface cnt-details">
        <div className="container">
          <motion.div
            className="cnt-section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow-light">Reach Out</span>
            <h2 className="cnt-section-heading">Contact Details</h2>
          </motion.div>

          <div className="cnt-details__cards">
            {contactDetails.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  id={`cnt-detail-${item.id}`}
                  className="cnt-info-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.22 } }}
                >
                  <div className="cnt-info-card__header">
                    <div className="cnt-info-card__icon-wrap" aria-hidden="true">
                      <Icon className="cnt-info-card__icon" />
                    </div>
                    {item.tag && <span className="cnt-info-card__badge">{item.tag}</span>}
                  </div>

                  <div className="cnt-info-card__content">
                    <h3 className="cnt-info-card__title">{item.title}</h3>
                    <p className="cnt-info-card__detail">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="cnt-info-card__main-link"
                          {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                        >
                          {item.detail}
                        </a>
                      ) : (
                        item.detail
                      )}
                    </p>
                    {item.support && (
                      <p className="cnt-info-card__support">{item.support}</p>
                    )}
                  </div>

                  {item.actionLabel && (
                    <div className="cnt-info-card__footer">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="cnt-info-card__action-link"
                          {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                        >
                          <span>{item.actionLabel}</span>
                          <LuArrowUpRight className="cnt-info-card__arrow-icon" aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="cnt-info-card__action-static">
                          <span>{item.actionLabel}</span>
                        </span>
                      )}
                    </div>
                  )}

                  <div className="cnt-info-card__accent" aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. HOW CAN WE HELP?
      ════════════════════════════════════════════════ */}
      <section className="section section--light cnt-help">
        <div className="cnt-help__bg" aria-hidden="true">
          <div className="cnt-help__glow" />
        </div>
        <div className="container">
          <motion.div
            className="cnt-section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow-light">Our Support</span>
            <h2 className="cnt-section-heading">
              How Can We Help?
            </h2>
            <p className="cnt-form-sub">
              Our team can assist you with
            </p>
          </motion.div>

          <div className="cnt-help__grid">
            {helpItems.map((item, i) => (
              <motion.div
                key={item.id}
                id={`help-${item.id}`}
                className="cnt-help__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
              >
                <div className="cnt-help__card-check" aria-hidden="true">
                  <LuCheck className="cnt-help__check-icon" />
                </div>
                <p className="cnt-help__card-label">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. SEND US A MESSAGE
      ════════════════════════════════════════════════ */}
      <section className="section section--light cnt-form-section" id="send-message">
        <div className="container">
          <motion.div
            className="cnt-form-container"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="cnt-form-header">
              <h2 className="cnt-section-heading">Send Us a Message</h2>
              <p className="cnt-form-sub">
                Complete the contact form, and a member of our team will get back to you as soon as possible.
              </p>
            </div>

            <div className="cnt-form-card">
              <InquiryForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. FREQUENTLY ASKED QUESTIONS
      ════════════════════════════════════════════════ */}
      <section className="section section--surface cnt-faq">
        <div className="container">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our healthcare quality training and consultancy services."
            align="center"
          />
          <div className="home-faq-wrap">
            <FAQAccordion items={contactFaqs} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
