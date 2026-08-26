import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  isCloudinaryUrl,
  getOptimizedCloudinaryUrl,
  getCloudinarySrcSet,
} from '../../utils/cloudinary';
import './OptimizedImage.css';

/**
 * Clean & High-Performance Image Component:
 * - Direct responsive srcSet & sizes
 * - Smooth clean appearance (no blur or pixelated artifacts)
 * - Critical LCP preloading & fetchpriority="high"
 * - Native browser cache & React.memo support
 */
const OptimizedImage = React.memo(({
  src,
  alt = '',
  className = '',
  priority = false,
  widths = [400, 600, 800, 1200],
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px',
  aspectRatio,
  width,
  height,
  quality = 'auto:best',
  objectFit,
  style = {},
  ...rest
}) => {
  const isCloudinary = useMemo(() => isCloudinaryUrl(src), [src]);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  // Compute optimized URLs
  const optimizedSrc = useMemo(() => {
    if (!isCloudinary) return src;
    const maxWidth = widths && widths.length > 0 ? Math.max(...widths) : 1200;
    return getOptimizedCloudinaryUrl(src, { width: maxWidth, quality });
  }, [src, isCloudinary, widths, quality]);

  const srcSet = useMemo(() => {
    if (!isCloudinary || !widths || widths.length === 0) return undefined;
    return getCloudinarySrcSet(src, widths, { quality });
  }, [src, isCloudinary, widths, quality]);

  // Check if image is already cached/complete on mount
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [optimizedSrc]);

  // Dynamic link preload tag for high-priority LCP images
  useEffect(() => {
    if (!priority || !optimizedSrc) return;

    const existing = document.querySelector(`link[rel="preload"][href="${optimizedSrc}"]`);
    if (existing) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = optimizedSrc;
    if (srcSet) link.imageSrcSet = srcSet;
    if (sizes) link.imageSizes = sizes;
    link.fetchPriority = 'high';

    document.head.appendChild(link);

    return () => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, [priority, optimizedSrc, srcSet, sizes]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const imgStyle = useMemo(() => {
    const s = { ...style };
    if (aspectRatio) s.aspectRatio = aspectRatio;
    if (objectFit) s.objectFit = objectFit;
    return s;
  }, [style, aspectRatio, objectFit]);

  return (
    <img
      ref={imgRef}
      src={optimizedSrc}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      className={`opt-img ${isLoaded ? 'opt-img--loaded' : 'opt-img--loading'} ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      width={width}
      height={height}
      style={imgStyle}
      onLoad={handleLoad}
      {...rest}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;

