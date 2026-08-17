import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/Layout/PageBanner';
import SectionTitle from '../components/Common/SectionTitle';
import ContentPending from '../components/Common/ContentPending';
import CTABanner from '../components/Layout/CTABanner';
import SEO from '../components/Common/SEO';
import { seoConfig } from '../config/seoConfig';
import { generateCourseSchema, generateBreadcrumbSchema } from '../utils/structuredData';
import { trainingPrograms } from '../data/trainingPrograms';

const TrainingDetail = () => {
  const { slug } = useParams();
  const program = trainingPrograms.find((p) => p.slug === slug);

  if (!program) {
    return (
      <>
        <SEO title="Training Program Not Found | NVR Quality Solutions" noindex />
        <section className="section section--light">
          <div className="container" style={{ paddingTop: 160, textAlign: 'center' }}>
            <h1>Training program not found</h1>
            <p style={{ marginTop: 16 }}>
              <Link to="/training-programs">Back to Training Programs</Link>
            </p>
          </div>
        </section>
      </>
    );
  }

  const detailSeo = seoConfig.trainingDetails?.[slug] || {
    title: `${program.title} | Healthcare Training | NVR Quality Solutions`,
    description: `Master ${program.title} principles and practical implementation with NVR Quality Solutions training programs.`,
    keywords: [program.title, 'Healthcare Quality Training', 'Patient Safety Training'],
    canonical: `/training-programs/${slug}`,
  };

  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Training Programs', to: '/training-programs' },
    { label: program.title },
  ];

  return (
    <>
      <SEO
        {...detailSeo}
        structuredData={[
          generateCourseSchema({
            title: program.title,
            description: detailSeo.description,
            url: detailSeo.canonical,
          }),
          generateBreadcrumbSchema(breadcrumbItems),
        ]}
      />
      <PageBanner
        eyebrow="Training Program"
        title={program.title}
        breadcrumb={breadcrumbItems}
      />

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Overview" title="Program Overview" />
          <ContentPending label={`Overview for "${program.title}" not yet provided in source documents`} />
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Curriculum" title="Learning Areas" />
          <ContentPending label="Learning areas not yet provided in source documents" />
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Outcomes" title="Benefits" />
          <ContentPending label="Benefits not yet provided in source documents" />
        </div>
      </section>

      <CTABanner
        title={`Interested in ${program.title}?`}
        description="Reach out and our team will get back to you with enrollment details."
      />
    </>
  );
};

export default TrainingDetail;
