import React from "react";
import "./footer.css";
import { motion } from "framer-motion";
import { HiCodeBracket } from "react-icons/hi2";

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <HiCodeBracket className="footer-icon" aria-hidden />
      <span>
        Crafted with care by <strong>mdsohel</strong>
      </span>
    </motion.footer>
  );
}

export default Footer;