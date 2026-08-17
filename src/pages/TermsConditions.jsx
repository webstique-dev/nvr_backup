import PageBanner from '../components/Layout/PageBanner';
import ContentPending from '../components/Common/ContentPending';
import SEO from '../components/Common/SEO';
import { seoConfig } from '../config/seoConfig';
import { generateWebPageSchema } from '../utils/structuredData';

const TermsConditions = () => {
  return (
    <>
      <SEO
        {...seoConfig.termsConditions}
        structuredData={generateWebPageSchema({
          title: seoConfig.termsConditions.title,
          description: seoConfig.termsConditions.description,
          url: seoConfig.termsConditions.canonical,
        })}
      />
      <PageBanner
        eyebrow="Legal"
        title="Terms & Conditions"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Terms & Conditions' }]}
      />
      <section className="section section--light">
        <div className="container" style={{ maxWidth: 800 }}>
          <ContentPending label="Terms & Conditions content not yet provided in source documents. Legal text should be drafted or reviewed by qualified counsel before publishing." />
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
