import React, { useRef } from "react";
import "./certificate-card.css";
import { motion, useInView } from "framer-motion";
import { HiArrowTopRightOnSquare, HiDocumentText } from "react-icons/hi2";
import { CertificateBrandIcon } from "./CertificateBrandIcon";

const ease = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.97, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease },
  },
};

function CertificateCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isPdf =
    typeof item.certificate === "string" &&
    (item.certificate.endsWith(".pdf") || item.certificate.includes(".pdf"));

  const badgeLabel = item.featured
    ? "Featured"
    : item.badge || "Verified";

  return (
    <motion.a
      ref={ref}
      href={item.certificate}
      target="_blank"
      rel="noreferrer"
      className={`cert-card ${item.featured ? "cert-card--featured" : ""}`}
      style={{ "--cert-accent": item.accent || "#6366f1" }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <div className="cert-card__shine" aria-hidden />
      <motion.div
        className="cert-card__icon-wrap"
        initial={{ scale: 0.8, rotate: -8 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 16,
          delay: 0.08 + index * 0.06,
        }}
      >
        <CertificateBrandIcon
          brand={item.brand}
          accent={item.accent}
          logo={item.companyLogo}
        />
      </motion.div>

      <div className="cert-card__body">
        <span className="cert-card__issuer">{item.company}</span>
        <h3 className="cert-card__title">{item.course}</h3>
        <p className="cert-card__desc">{item.work}</p>
        <motion.span
          className="cert-card__cta"
          initial={{ opacity: 0, x: -8 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.25 + index * 0.08 }}
        >
          {isPdf ? (
            <>
              <HiDocumentText aria-hidden />
              View PDF
            </>
          ) : (
            <>
              <HiArrowTopRightOnSquare aria-hidden />
              Verify credential
            </>
          )}
        </motion.span>
      </div>

      <motion.span
        className={`cert-card__badge ${item.featured ? "" : "cert-card__badge--verified"}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.35, type: "spring" }}
      >
        {badgeLabel}
      </motion.span>
    </motion.a>
  );
}

export default CertificateCard;