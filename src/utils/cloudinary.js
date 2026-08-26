/**
 * Cloudinary Image URL Builder & Optimization Utilities
 */

const CLOUDINARY_REGEX = /^https:\/\/res\.cloudinary\.com\/([^/]+)\/image\/upload\/(.*)$/;

/**
 * Checks if a given URL is a Cloudinary delivery URL.
 * @param {string} url
 * @returns {boolean}
 */
export const isCloudinaryUrl = (url) => {
  if (typeof url !== 'string') return false;
  return CLOUDINARY_REGEX.test(url);
};

/**
 * Parses a Cloudinary URL to extract base upload path and clean public ID with version.
 * Strips any existing transformation segments.
 *
 * @param {string} url
 * @returns {{ base: string, publicId: string } | null}
 */
export const parseCloudinaryUrl = (url) => {
  if (!isCloudinaryUrl(url)) return null;

  const match = url.match(CLOUDINARY_REGEX);
  if (!match) return null;

  const cloudName = match[1];
  const rest = match[2];
  const base = `https://res.cloudinary.com/${cloudName}/image/upload/`;

  // Check if segments contain transformations (e.g., f_auto, w_1200, etc.)
  // Cloudinary public IDs might start with a version like `v1787754198/...` or directly `<filename>`
  const segments = rest.split('/');
  let publicIdStartIndex = 0;

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    // A version segment starts with 'v' followed by digits (e.g. v1787754198)
    if (/^v\d+$/.test(seg)) {
      publicIdStartIndex = i;
      break;
    }
    // If it's not a known transformation format (e.g., doesn't contain '_' or standard params),
    // it could be part of the public ID folder path
    const isTransform = /^(f_|q_|w_|h_|c_|e_|dpr_|b_|r_|o_|a_|fl_|g_|,)/.test(seg) || seg.includes(',');
    if (!isTransform) {
      publicIdStartIndex = i;
      break;
    }
  }

  const publicId = segments.slice(publicIdStartIndex).join('/');
  return { base, publicId };
};

/**
 * Builds an optimized Cloudinary delivery URL with transformation parameters.
 *
 * @param {string} url Original Cloudinary URL
 * @param {object} options
 * @param {number} [options.width] Max width in pixels (e.g. 400, 800, 1200)
 * @param {number} [options.height] Max height in pixels
 * @param {string} [options.quality='auto:best'] Quality mode ('auto', 'auto:best', 'auto:good', 'auto:eco', or number)
 * @param {string} [options.format='auto'] Output format ('auto' gives AVIF/WebP)
 * @param {string} [options.crop='limit'] Crop mode ('limit', 'scale', 'fill', etc.)
 * @param {number} [options.blur] Blur amount (e.g. 200 for LQIP)
 * @returns {string}
 */
export const getOptimizedCloudinaryUrl = (url, options = {}) => {
  if (!isCloudinaryUrl(url)) return url;

  const parsed = parseCloudinaryUrl(url);
  if (!parsed) return url;

  const {
    width,
    height,
    quality = 'auto:best',
    format = 'auto',
    crop = 'limit',
    blur,
  } = options;

  const transforms = [];

  if (format) transforms.push(`f_${format}`);
  if (quality) transforms.push(`q_${quality}`);
  if (crop) transforms.push(`c_${crop}`);
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (blur) transforms.push(`e_blur:${blur}`);

  const transformStr = transforms.length > 0 ? `${transforms.join(',')}/` : '';
  return `${parsed.base}${transformStr}${parsed.publicId}`;
};

/**
 * Generates a responsive srcSet string for Cloudinary images across standard screen widths.
 *
 * @param {string} url Original Cloudinary URL
 * @param {number[]} [widths=[400, 600, 800, 1200]] Array of widths in pixels
 * @param {object} [options] Additional transformation options
 * @returns {string}
 */
export const getCloudinarySrcSet = (url, widths = [400, 600, 800, 1200], options = {}) => {
  if (!isCloudinaryUrl(url)) return '';

  return widths
    .map((w) => `${getOptimizedCloudinaryUrl(url, { ...options, width: w })} ${w}w`)
    .join(', ');
};

/**
 * Generates an ultra-lightweight (~270 bytes) blurred LQIP placeholder URL.
 *
 * @param {string} url Original Cloudinary URL
 * @returns {string}
 */
export const getCloudinaryLQIP = (url) => {
  if (!isCloudinaryUrl(url)) return '';
  return getOptimizedCloudinaryUrl(url, {
    width: 50,
    quality: 'auto:eco',
    blur: 200,
    crop: 'limit',
    format: 'auto',
  });
};
