import React, { useRef } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion, useInView } from "framer-motion";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi2";

const ease = [0.22, 1, 0.36, 1];

const block = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease },
  },
};

const line = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease },
  },
};

const tag = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease },
  },
};

function ExperienceTimelineItem({ experience, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px -60px 0px" });

  const content = (
    <motion.div
      ref={ref}
      className="timeline-motion-root"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.07, delayChildren: 0.08 },
        },
      }}
    >
      <motion.h2 className="vertical-timeline-element-title timeline-role" variants={block}>
        {experience.designation}
      </motion.h2>
      <motion.h4 className="timeline-company" variants={block}>
        {experience.company}
      </motion.h4>
      {experience.location && (
        <motion.p className="timeline-location" variants={block}>
          {experience.location}
        </motion.p>
      )}

      {experience.highlights?.length > 0 ? (
        <motion.ul
          className="timeline-highlights"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
            hidden: {},
          }}
        >
          {experience.highlights.map((item) => (
            <motion.li key={item.slice(0, 52)} variants={line}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <motion.p className="timeline-skills" variants={block}>
          {experience.skills.join(" · ")}
        </motion.p>
      )}

      {experience.highlights?.length > 0 && experience.skills?.length > 0 && (
        <motion.div
          className="timeline-tags"
          variants={{
            visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {experience.skills.map((skill) => (
            <motion.span key={skill} className="timeline-tag" variants={tag}>
              {skill}
            </motion.span>
          ))}
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--work timeline-entry timeline-entry--${index}`}
      animate
      intersectionObserverProps={{
        root: null,
        rootMargin: "0px 0px -70px 0px",
        threshold: 0.15,
      }}
      contentStyle={{
        background: "rgba(255, 255, 255, 0.04)",
        color: "var(--text-primary)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--shadow-card)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.04)",
      }}
      date={`${experience.dateJoining} – ${experience.dateEnd}`}
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
        <motion.span
          className="timeline-icon-wrap"
          initial={{ scale: 0, rotate: -45 }}
          animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.05 }}
        >
          {experience.isWorkplace ? (
            <HiBriefcase size={22} aria-hidden />
          ) : (
            <HiAcademicCap size={22} aria-hidden />
          )}
        </motion.span>
      }
    >
      {content}
    </VerticalTimelineElement>
  );
}

export default ExperienceTimelineItem;