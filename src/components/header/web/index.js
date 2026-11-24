import React from "react";
import "./web.css";
import { motion } from "framer-motion";
import {
  HiBriefcase,
  HiPencilSquare,
  HiComputerDesktop,
  HiAcademicCap,
  HiUser,
} from "react-icons/hi2";

const navItems = [
  { href: "#experience", label: "Experience", Icon: HiBriefcase },
  { href: "#projects", label: "Projects", Icon: HiPencilSquare },
  { href: "#skills", label: "Skills", Icon: HiComputerDesktop },
  { href: "#work", label: "Certificates", Icon: HiAcademicCap },
  { href: "#contact", label: "Contact", Icon: HiUser },
];

function Web() {
  return (
    <nav className="web" aria-label="Main">
      {navItems.map((item, index) => (
        <motion.div
          key={item.href}
          className="web-option"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * index, duration: 0.4 }}
        >
          <a href={item.href}>
            <item.Icon className="option-icon" aria-hidden />
            <span>{item.label}</span>
          </a>
        </motion.div>
      ))}
    </nav>
  );
}

export default Web;