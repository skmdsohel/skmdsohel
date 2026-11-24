import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import developerLight from "../../../assets/coding.svg";
import ResumePdf from "../../../assets/sohel_resume.pdf";
import { motion } from "framer-motion";
import { HiArrowDownTray, HiSparkles } from "react-icons/hi2";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function About() {
  return (
    <div className="about">
      <motion.div
        className="about-top"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="about-info">
          <motion.span variants={item} className="about-greeting">
            <HiSparkles className="greeting-icon" aria-hidden />
            Hello there — I am
          </motion.span>
          <motion.div variants={item}>
            <span className="info-name">Mohammad Sohel</span>
          </motion.div>
          <motion.p variants={item} className="about-tagline">
            I build software, automate infrastructure, and engineer systems that scale.

            A software engineer with 5+ years of experience across full-stack development, cloud infrastructure, DevOps, and reliability engineering. I enjoy connecting the dots between code, infrastructure, and automation to build efficient, resilient, and scalable systems.

            From crafting web applications and APIs to orchestrating containers, automating deployments, and solving production challenges — I turn complex engineering problems into practical solutions.
          </motion.p>
          <motion.div variants={item}>
            <a
              href={ResumePdf}
              download="sohel_resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                type="button"
                className="button-resume"
                whileHover={{ scale: 1.03, boxShadow: "0 0 32px rgba(99, 102, 241, 0.45)" }}
                whileTap={{ scale: 0.98 }}
              >
                <HiArrowDownTray aria-hidden />
                Download Resume
              </motion.button>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="about-photo"
          variants={item}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="photo-glow" />
          <img alt="Developer illustration" src={developerLight} className="picture" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <SocialContact />
      </motion.div>
    </div>
  );
}

export default About;