import React from "react";
import "./project-card.css";
import { motion } from "framer-motion";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";

function ProjectCard({ project, index }) {
  const reverse = index % 2 === 1;

  return (
    <motion.div
      className={`project-card ${reverse ? "project-card--reverse" : ""}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a
              className="project-link"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="link-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <HiOutlineGlobeAlt aria-hidden />
                Demo
              </motion.div>
            </a>
          )}
          {project.github && (
            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="link-button link-button--github"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaGithub aria-hidden />
                GitHub
              </motion.div>
            </a>
          )}
        </div>
        <p className="project-about">{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <motion.div
        className="project-photo-wrap"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img alt={project.title} src={project.image} className="project-photo" />
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;