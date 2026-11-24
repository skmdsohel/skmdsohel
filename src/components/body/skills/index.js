import React from "react";
import { motion } from "framer-motion";
import Separator from "../../common/separator/index";
import "./skills.css";
import { SkillsData } from "../../data/skills";
import SkillCard from "./skill-card";
import AnimatedSection from "../../common/AnimatedSection";

function SkillsSection({ group, index }) {
  return (
    <motion.div
      className="skills-section"
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <label className="skills-section-title">{group.type}</label>
      <div className="skills-list">
        {group.list.map((skill, skillIndex) => (
          <SkillCard key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <AnimatedSection className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {SkillsData.map((group, index) => (
          <SkillsSection key={group.type} group={group} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default Skills;