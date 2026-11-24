import React, { useEffect, useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web/index";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={`sticky-header-wrap ${scrolled ? "sticky-header--scrolled" : ""}`}>
      <div className="header">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#about" className="logo-link" aria-label="Home">
            <img
              src={require("../../assets/logo/logoSohel.png")}
              alt="MD Sohel"
              className="logo-img"
            />
            <span className="logo-text">mdsohel</span>
          </a>
        </motion.div>
        <div className="menu">
          <div className="web-menu">
            <Web />
          </div>
          <div className="mobile-menu">
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <span className={`menu-toggle-icon ${isOpen ? "open" : ""}`} />
            </button>
            <AnimatePresence>
              {isOpen && (
                <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;