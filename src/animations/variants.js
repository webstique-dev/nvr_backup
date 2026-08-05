export const easePremium = [0.16, 1, 0.3, 1];

export const motionTransition = {
  micro: { duration: 0.18, ease: easePremium },
  hover: { duration: 0.28, ease: easePremium },
  section: { duration: 0.75, ease: easePremium },
  hero: { duration: 0.95, ease: easePremium },
  page: { duration: 0.7, ease: easePremium },
};

export const pageTransition = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...motionTransition.page,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.55,
      ease: easePremium,
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.65, ease: easePremium, delay },
  }),
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.65, ease: easePremium, delay },
  }),
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut', delay },
  }),
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut', delay },
  }),
};

export const fadeDown = {
  hidden: {
    opacity: 0,
    y: -24,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easePremium, delay },
  }),
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easePremium, delay },
  }),
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -28,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: easePremium, delay },
  }),
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: easePremium, delay },
  }),
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 28,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: easePremium, delay },
  }),
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: easePremium, delay },
  }),
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: easePremium, delay },
  }),
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: easePremium, delay },
  }),
};

export const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: easePremium, delay },
  }),
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: easePremium, delay },
  }),
};

export const float = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};

export const rotateInfinite = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 24,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easePremium, delay },
  }),
};

export const hoverTap = {
  hover: { scale: 1.03, transition: motionTransition.hover },
  tap: { scale: 0.97, transition: { duration: 0.12, ease: easePremium } },
};
