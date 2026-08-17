import { useEffect } from 'react';
import { seoConfig } from '../../config/seoConfig';

/**
 * Reusable SEO Component for NVR Quality Solutions
 * Dynamically manages document title, meta tags, canonical link, Open Graph, Twitter cards, and JSON-LD structured data.
 */
const SEO = ({
  title,
  description,
  keywords = [],
  canonical,
  image,
  type = 'website',
  noindex = false,
  structuredData = null,
}) => {
  const metaTitle = title || seoConfig.home.title;
  const metaDescription = description || seoConfig.home.description;
  const metaKeywords = Array.isArray(keywords) && keywords.length > 0
    ? keywords.join(', ')
    : seoConfig.home.keywords.join(', ');
  
  const pageCanonical = canonical
    ? `${seoConfig.domain}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : seoConfig.domain;

  const metaImage = image || seoConfig.defaultImage;
  const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow';

  useEffect(() => {
    // 1. Update Document Title
    document.title = metaTitle;

    // Helper function to update or create meta tags
    const setMetaTag = (selector, attribute, attributeValue, content) => {
      let element = document.querySelector(`meta[${selector}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(selector, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function to update or create link tags
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', 'description', metaDescription);
    setMetaTag('name', 'keywords', 'keywords', metaKeywords);
    setMetaTag('name', 'robots', 'robots', robotsContent);

    // 3. Canonical URL
    setLinkTag('canonical', pageCanonical);

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', 'og:title', metaTitle);
    setMetaTag('property', 'og:description', 'og:description', metaDescription);
    setMetaTag('property', 'og:image', 'og:image', metaImage);
    setMetaTag('property', 'og:url', 'og:url', pageCanonical);
    setMetaTag('property', 'og:type', 'og:type', type);
    setMetaTag('property', 'og:site_name', 'og:site_name', seoConfig.siteName);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', 'twitter:title', metaTitle);
    setMetaTag('name', 'twitter:description', 'twitter:description', metaDescription);
    setMetaTag('name', 'twitter:image', 'twitter:image', metaImage);

    // 6. JSON-LD Structured Data Injection
    if (structuredData) {
      let scriptElement = document.getElementById('seo-json-ld');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = 'seo-json-ld';
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData, null, 2);
    } else {
      const scriptElement = document.getElementById('seo-json-ld');
      if (scriptElement) {
        scriptElement.remove();
      }
    }
  }, [metaTitle, metaDescription, metaKeywords, pageCanonical, metaImage, type, robotsContent, structuredData]);

  return null;
};

export default SEO;
