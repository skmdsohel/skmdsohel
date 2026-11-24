import React from "react";
import "./certificate.css";
import Separator from "../../common/separator";
import { WorkData } from "../../data/certificates";
import CertificateCard from "./certificate-card";
import AnimatedSection from "../../common/AnimatedSection";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi2";

function Certificate() {
  const count = WorkData.length;

  return (
    <AnimatedSection className="certificates-section">
      <Separator />
      <div className="certificates-header">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <label className="section-title">Certificates</label>
          <p className="certificates-intro">
            Industry credentials in cloud, JavaScript, and full-stack development.
          </p>
        </motion.div>
        <motion.div
          className="certificates-count"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        >
          <HiAcademicCap aria-hidden />
          <span>{count} earned</span>
        </motion.div>
      </div>

      <motion.div
        className="certificates-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {WorkData.map((item, index) => (
          <CertificateCard key={item.id} item={item} index={index} />
        ))}
      </motion.div>
    </AnimatedSection>
  );
}

export default Certificate;