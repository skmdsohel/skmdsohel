import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import HeroIllustration from "./HeroIllustration";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import {
  AboutBootBar,
  BioSkeleton,
  useAboutBootSequence,
} from "./AboutBootSequence";

const FOCUS_AREAS = [
  "Full-stack",
  "Cloud",
  "DevOps",
  "SRE",
  "Automation",
];

const ease = [0.22, 1, 0.36, 1];

function reveal(delay = 0) {
  return {
    hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.65, ease, delay },
    },
  };
}

function About() {
  const { progress, statusLine, contentReady, bootDone } = useAboutBootSequence();

  return (
    <div className="about">
      <AboutBootBar
        progress={progress}
        statusLine={statusLine}
        bootDone={bootDone}
      />

      <div className="about-top">
        <motion.div className="about-info">
          <motion.span
            className="about-greeting"
            initial="hidden"
            animate={contentReady ? "visible" : "hidden"}
            variants={reveal(0)}
          >
            <HiSparkles className="greeting-icon" aria-hidden />
            Hello there — I am
          </motion.span>

          <motion.h1
            className="info-name"
            initial="hidden"
            animate={contentReady ? "visible" : "hidden"}
            variants={reveal(0.08)}
          >
            Mohammad Sohel
          </motion.h1>

          <motion.h2
            className="about-headline"
            initial="hidden"
            animate={contentReady ? "visible" : "hidden"}
            variants={reveal(0.16)}
          >
            I build software, automate infrastructure, and engineer systems that{" "}
            <motion.span
              className="about-headline-accent"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={
                contentReady
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.92 }
              }
              transition={{ delay: 0.55, duration: 0.5, ease }}
            >
              scale
            </motion.span>
            <span className="about-headline-cursor" aria-hidden />
            .
          </motion.h2>

          <motion.div
            className="about-pills"
            aria-label="Focus areas"
            initial="hidden"
            animate={contentReady ? "visible" : "hidden"}
            variants={reveal(0.24)}
          >
            {FOCUS_AREAS.map((label, i) => (
              <motion.span
                key={label}
                className="about-pill"
                initial={{ opacity: 0, x: -12 }}
                animate={
                  contentReady
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -12 }
                }
                transition={{ delay: 0.42 + i * 0.07, duration: 0.45, ease }}
              >
                {label}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="about-copy about-copy--animated-bar"
            initial="hidden"
            animate={contentReady ? "visible" : "hidden"}
            variants={reveal(0.32)}
          >
            <motion.div
              className="about-copy-bar-fill"
              initial={{ scaleY: 0 }}
              animate={contentReady ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease }}
              aria-hidden
            />
            <div className="about-copy-glow" aria-hidden />
            <BioSkeleton visible={contentReady && !bootDone} />

            <motion.div
              className="about-copy-inner"
              initial={{ opacity: 0 }}
              animate={{ opacity: bootDone ? 1 : contentReady ? 0.4 : 0 }}
              transition={{ duration: 0.45 }}
            >
              <p className="about-lead">
                A software engineer with{" "}
                <span className="about-highlight about-highlight--experience">
                  5+ years
                </span>{" "}
                of experience across{" "}
                <span className="about-highlight">full-stack development</span>,{" "}
                <span className="about-highlight">cloud infrastructure</span>,{" "}
                <span className="about-highlight">DevOps</span>, and{" "}
                <span className="about-highlight">reliability engineering</span>.
                I enjoy connecting the dots between code, infrastructure, and
                automation to build efficient, resilient, and scalable systems.
              </p>
              <p className="about-body">
                From crafting web applications and APIs to orchestrating
                containers, automating deployments, and solving production
                challenges — I turn complex engineering problems into{" "}
                <span className="about-inline-accent">practical solutions</span>.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-photo"
          initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
          animate={
            contentReady
              ? { opacity: 1, scale: 1, filter: "blur(0px)" }
              : { opacity: 0, scale: 0.92, filter: "blur(12px)" }
          }
          transition={{ delay: 0.2, duration: 0.75, ease }}
        >
          <HeroIllustration bootProgress={progress} contentReady={contentReady} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={
          bootDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
        }
        transition={{ duration: 0.5, ease }}
      >
        <SocialContact />
      </motion.div>
    </div>
  );
}

export default About;