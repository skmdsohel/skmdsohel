import React from "react";
import "./skill-card.css";
import { motion } from "framer-motion";

function SkillCard({ skill, index }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      whileHover={{
        y: -6,
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <div className="skill-icon">{skill.icon}</div>
      <label className="skill-name">{skill.name}</label>
    </motion.div>
  );
}

export default SkillCard;