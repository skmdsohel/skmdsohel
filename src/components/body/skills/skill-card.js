import React from "react";
import "./skill-card.css";
import { motion } from "framer-motion";
import { SkillIcon, getSkillColor } from "../../data/skillIcons";

function SkillCard({ skill, index, categoryAccent }) {
  const accent = getSkillColor(skill.id, categoryAccent);

  return (
    <motion.div
      className="skill-card"
      style={{ "--skill-accent": accent }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.02, 0.35), duration: 0.3 }}
      whileHover={{
        y: -4,
        scale: 1.04,
        transition: { duration: 0.2 },
      }}
    >
      <div className="skill-icon">
        <SkillIcon id={skill.id} fallbackColor={categoryAccent} />
      </div>
      <span className="skill-name">{skill.name}</span>
    </motion.div>
  );
}

export default SkillCard;