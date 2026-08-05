import { motion, fadeUp } from '../../animations/motion';
import './SectionTitle.css';

/**
 * Reusable section heading block.
 * eyebrow: small label above the heading (e.g. "OUR EXPERTISE")
 * title: main heading text (string or JSX for partial gradient emphasis)
 * description: optional supporting paragraph
 * align: 'left' | 'center'
 */
const SectionTitle = ({ eyebrow, title, description, align = 'left', className = '' }) => {
  return (
    <motion.div
      className={`section-title section-title--${align} ${className}`.trim()}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title__heading">{title}</h2>
      {description && <p className="section-title__description">{description}</p>}
    </motion.div>
  );
};

export default SectionTitle;
