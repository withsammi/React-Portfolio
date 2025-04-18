export const centerVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
     
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.8 },
  },
};






