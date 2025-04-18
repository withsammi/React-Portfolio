export const centerVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: index ? 0.2 + index * 0.1 : 0.2, // Add staggered delay based on index if provided
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.8 },
  },
};

export const projectCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: 0.3 + index * 0.1,
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.5 },
  },
};

export const loadingVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: [0.8, 1.2, 1],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.3 },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
