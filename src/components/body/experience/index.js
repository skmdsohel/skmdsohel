import React from "react";
import "./experience.css";
import Separator from "../../common/separator";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceData } from "../../data/experience";
import AnimatedSection from "../../common/AnimatedSection";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi2";

const Experience = () => {
  const items = [...ExperienceData].reverse();

  return (
    <AnimatedSection>
      <Separator />
      <label className="section-title">Experience</label>
      <div className="vertical-line-items">
        <VerticalTimeline lineColor="rgba(99, 102, 241, 0.4)">
          {items.map((experience) => (
            <VerticalTimelineElement
              key={experience.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(255, 255, 255, 0.04)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-card)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.04)",
              }}
              date={`${experience.dateJoining} - ${experience.dateEnd}`}
              dateClassName="timeline-date"
              iconStyle={
                experience.isWorkplace
                  ? {
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      color: "#fff",
                    }
                  : {
                      background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                      color: "#fff",
                    }
              }
              icon={
                experience.isWorkplace ? (
                  <HiBriefcase size={22} aria-hidden />
                ) : (
                  <HiAcademicCap size={22} aria-hidden />
                )
              }
            >
              <h2 className="vertical-timeline-element-title timeline-role">
                {experience.designation}
              </h2>
              <h4 className="timeline-company">{experience.company}</h4>
              <p className="timeline-skills">{experience.skills.join(" · ")}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </AnimatedSection>
  );
};

export default Experience;