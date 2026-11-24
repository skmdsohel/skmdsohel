import React from "react";
import "./mobile.css";
import { motion } from "framer-motion";
import {
  HiBriefcase,
  HiPencilSquare,
  HiComputerDesktop,
  HiAcademicCap,
  HiUser,
  HiXMark,
} from "react-icons/hi2";

const navItems = [
  { href: "#experience", label: "Experience", Icon: HiBriefcase },
  { href: "#projects", label: "Projects", Icon: HiPencilSquare },
  { href: "#skills", label: "Skills", Icon: HiComputerDesktop },
  { href: "#work", label: "Certificates", Icon: HiAcademicCap },
  { href: "#contact", label: "Contact", Icon: HiUser },
];

function Mobile({ isOpen, setIsOpen }) {
  const close = () => setIsOpen(false);

  return (
  <>
    <motion.div
      className="mobile-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
      aria-hidden
    />
    <motion.div
      className="mobile"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 28, stiffness: 320 }}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <button
        type="button"
        className="close-icon"
        onClick={close}
        aria-label="Close menu"
      >
        <HiXMark />
      </button>
      <div className="mobile-options">
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            className="mobile-option"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.06 * index }}
          >
            <a href={item.href} onClick={close}>
              <item.Icon className="option-icon" aria-hidden />
              {item.label}
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </>
  );
}

export default Mobile;