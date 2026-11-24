import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
import AnimatedSection from "../../common/AnimatedSection";
import { motion } from "framer-motion";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

function Contact() {
  return (
    <AnimatedSection className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <HiChatBubbleLeftRight className="contact-icon" aria-hidden />
          <p>
            Want to get in touch? Reach out on any of the platforms below — I&apos;d
            love to hear from you.
          </p>
          <SocialContact />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

export default Contact;