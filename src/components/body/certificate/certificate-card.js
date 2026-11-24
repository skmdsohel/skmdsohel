import React from "react";
import "./certificate-card.css";
import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

function CertificateCard({ item, index }) {
  return (
    <motion.a
      className="work-card"
      href={item.certificate}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4, borderColor: "rgba(99, 102, 241, 0.5)" }}
    >
      <img alt={item.company} src={item.companyLogo} className="work-logo" />
      <div className="work-info">
        <label className="company-name">{item.course}</label>
        <div className="work-dates">
          <label>{item.company}</label>
        </div>
        <div className="work-desc">
          <p>{shortText(item.work, 75)}</p>
        </div>
      </div>
      <HiArrowTopRightOnSquare className="work-card-arrow" aria-hidden />
    </motion.a>
  );
}

function shortText(text, count) {
  return text.slice(0, count) + (text.length > count ? "..." : "");
}

export default CertificateCard;