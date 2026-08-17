/**
 * Reusable JSON-LD Structured Data Generators for NVR Quality Solutions
 */

export const SITE_DOMAIN = 'https://nvrqualitysolutions.com';
export const SITE_NAME = 'NVR Quality Solutions';
export const SITE_LOGO = 'https://res.cloudinary.com/rlokioxu/image/upload/v1786013954/nvr-logo_vadrpc.png';
export const BRAND_DISCLAIMER =
  'NVR Quality Solutions provides training and consultancy in preparation for healthcare quality standards such as NABH, JCI, and CAAM-HP. NVR Quality Solutions does NOT award these certifications.';

/**
 * Organization Schema
 */
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_DOMAIN,
  logo: SITE_LOGO,
  description:
    'NVR Quality Solutions provides expert-led Healthcare Quality Training, Patient Safety Training, and accreditation consultancy for NABH, JCI, and CAAM-HP standards.',
  disclaimer: BRAND_DISCLAIMER,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8466040046',
    contactType: 'customer service',
    email: 'nvrqualitysolutions@gmail.com',
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Thadepalli, Amaravathi',
    addressRegion: 'Andhra Pradesh',
    addressCountry: 'India',
  },
  sameAs: [],
});

/**
 * WebSite Schema
 */
export const generateWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_DOMAIN,
  description:
    'Healthcare Quality Training, Patient Safety Training, and Accreditation Consultancy for Healthcare Organizations.',
});

/**
 * WebPage Schema
 */
export const generateWebPageSchema = ({ title, description, url }) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description: description,
  url: `${SITE_DOMAIN}${url}`,
  isPartOf: {
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_DOMAIN,
  },
});

/**
 * BreadcrumbList Schema
 */
export const generateBreadcrumbSchema = (breadcrumbs = []) => {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.to ? `${SITE_DOMAIN}${item.to}` : `${SITE_DOMAIN}`,
    })),
  };
};

/**
 * Course Schema (for training pages)
 */
export const generateCourseSchema = ({ title, description, url }) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: title,
  description: description,
  url: `${SITE_DOMAIN}${url}`,
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
    sameAs: SITE_DOMAIN,
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'Blended',
    courseWorkload: 'Flexible',
  },
});

/**
 * Service Schema (for consultancy pages)
 */
export const generateServiceSchema = ({ name, description, url }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: name,
  name: name,
  description: description,
  url: `${SITE_DOMAIN}${url}`,
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_DOMAIN,
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
});
