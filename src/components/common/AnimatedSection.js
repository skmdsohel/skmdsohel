import React from "react";
import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function AnimatedSection({ children, className, delay = 0, variants }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants || defaultVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;