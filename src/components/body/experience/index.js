import React from "react";
import "./experience.css";
import Separator from "../../common/separator";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceData } from "../../data/experience";
import AnimatedSection from "../../common/AnimatedSection";
import ExperienceTimelineItem from "./ExperienceTimelineItem";
import { motion } from "framer-motion";

const Experience = () => {
  const items = [...ExperienceData].reverse();

  return (
    <AnimatedSection className="experience-section">
      <Separator />
      <motion.label
        className="section-title"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.label>
      <div className="vertical-line-items">
        <VerticalTimeline
          lineColor="rgba(99, 102, 241, 0.4)"
          animate
          layout
        >
          {items.map((experience, index) => (
            <ExperienceTimelineItem
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </AnimatedSection>
  );
};

export default Experience;