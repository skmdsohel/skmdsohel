import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Separator from "../../common/separator/index";
import "./skills.css";
import { SkillsData } from "../../data/skills";
import SkillCard from "./skill-card";
import AnimatedSection from "../../common/AnimatedSection";
import { HiChevronDown, HiMagnifyingGlass } from "react-icons/hi2";

function SkillsSection({ group, index }) {
  return (
    <motion.details
      className="skills-section"
      style={{ "--category-accent": group.accent || "#6366f1" }}
      open={index < 3}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.35) }}
    >
      <summary className="skills-section-summary">
        <header className="skills-section-header">
          <span className="skills-section-dot" aria-hidden />
          <h3 className="skills-section-title">{group.type}</h3>
          <span className="skills-section-count">{group.list.length}</span>
          <HiChevronDown className="skills-section-chevron" aria-hidden />
        </header>
      </summary>
      <div className="skills-list">
        {group.list.map((skill, skillIndex) => (
          <SkillCard
            key={`${group.type}-${skill.id}-${skillIndex}`}
            skill={skill}
            index={skillIndex}
            categoryAccent={group.accent}
          />
        ))}
      </div>
    </motion.details>
  );
}

function Skills() {
  const [query, setQuery] = useState("");
  const total = SkillsData.reduce((n, g) => n + g.list.length, 0);

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SkillsData;
    return SkillsData.map((group) => ({
      ...group,
      list: group.list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) || s.id.replace(/-/g, " ").includes(q)
      ),
    })).filter((group) => group.list.length > 0);
  }, [query]);

  return (
    <AnimatedSection className="skills">
      <Separator />
      <label className="section-title">Technical Skills</label>
      <p className="skills-intro">
        Full-stack, cloud, SRE, and platform engineering — <strong>{total}</strong>{" "}
        skills across {SkillsData.length} domains from application delivery to
        homelab infrastructure.
      </p>
      <div className="skills-search-wrap">
        <HiMagnifyingGlass className="skills-search-icon" aria-hidden />
        <input
          type="search"
          className="skills-search"
          placeholder="Filter skills (e.g. Kubernetes, Terraform, React)…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Filter skills"
        />
      </div>
      <div className="skills-container">
        {filteredGroups.length === 0 ? (
          <p className="skills-empty">No skills match &ldquo;{query}&rdquo;.</p>
        ) : (
          filteredGroups.map((group, index) => (
            <SkillsSection key={group.type} group={group} index={index} />
          ))
        )}
      </div>
    </AnimatedSection>
  );
}

export default Skills;