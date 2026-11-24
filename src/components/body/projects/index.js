import React from "react";
import Separator from "../../common/separator";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./project-card";
import "./projects.css";
import AnimatedSection from "../../common/AnimatedSection";

function Projects() {
  return (
    <AnimatedSection className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div className="projects-list">
        {ProjectData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default Projects;