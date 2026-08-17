import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/Layout/PageBanner';
import SectionTitle from '../components/Common/SectionTitle';
import ContentPending from '../components/Common/ContentPending';
import CTABanner from '../components/Layout/CTABanner';
import SEO from '../components/Common/SEO';
import { seoConfig } from '../config/seoConfig';
import { generateServiceSchema, generateBreadcrumbSchema } from '../utils/structuredData';
import { services } from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <SEO title="Service Not Found | NVR Quality Solutions" noindex />
        <section className="section section--light">
          <div className="container" style={{ paddingTop: 160, textAlign: 'center' }}>
            <h1>Service not found</h1>
            <p style={{ marginTop: 16 }}>
              <Link to="/services">Back to Services</Link>
            </p>
          </div>
        </section>
      </>
    );
  }

  const detailSeo = seoConfig.serviceDetails?.[slug] || {
    title: `${service.name} | Healthcare Quality Services | NVR Quality Solutions`,
    description: `Learn about our ${service.name} consultancy and training services for healthcare organizations.`,
    keywords: [service.name, 'Healthcare Quality Consultancy', 'Hospital Accreditation'],
    canonical: `/services/${slug}`,
  };

  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: service.name },
  ];

  return (
    <>
      <SEO
        {...detailSeo}
        structuredData={[
          generateServiceSchema({
            name: service.name,
            description: detailSeo.description,
            url: detailSeo.canonical,
          }),
          generateBreadcrumbSchema(breadcrumbItems),
        ]}
      />
      <PageBanner
        eyebrow="Service"
        title={service.name}
        breadcrumb={breadcrumbItems}
      />

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Overview" title="Description" />
          <ContentPending label={`Description for "${service.name}" not yet provided in source documents`} />
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Benefits" title="Why this matters" />
          <ContentPending label="Benefits not yet provided in source documents" />
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Features" title="What's included" />
          <ContentPending label="Features not yet provided in source documents" />
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Process" title="How it works" />
          <ContentPending label="Process steps not yet provided in source documents" />
        </div>
      </section>

      <CTABanner
        title={`Interested in ${service.name}?`}
        description="Reach out and our team will get back to you."
      />
    </>
  );
};

export default ServiceDetail;
