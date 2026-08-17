import PageBanner from '../components/Layout/PageBanner';
import FAQAccordion from '../components/Common/FAQAccordion';
import CTABanner from '../components/Layout/CTABanner';
import SEO from '../components/Common/SEO';
import { seoConfig } from '../config/seoConfig';
import { generateWebPageSchema } from '../utils/structuredData';
import { faqs } from '../data/faqs';

const FAQ = () => {
  return (
    <>
      <SEO
        {...seoConfig.faq}
        structuredData={generateWebPageSchema({
          title: seoConfig.faq.title,
          description: seoConfig.faq.description,
          url: seoConfig.faq.canonical,
        })}
      />
      <PageBanner
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]}
      />

      <section className="section section--light">
        <div className="container">
          <div className="home-faq-wrap">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Still have questions?"
        description="Reach out and our team will be happy to help."
      />
    </>
  );
};

export default FAQ;
