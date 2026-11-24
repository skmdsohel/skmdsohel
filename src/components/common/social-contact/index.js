import React from "react";
import { SocialData } from "../../data/social";
import "./social-contact.css";
import { motion } from "framer-motion";

function SocialContact() {
  return (
    <div className="social-contact">
      {SocialData.map((item, index) => (
        <motion.a
          key={item.platform}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="social-link"
          aria-label={item.platform}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          whileHover={{ y: -4, scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="social-icon-div" style={{ "--brand": item.color }}>
            <item.Icon className="social-icon" aria-hidden />
          </div>
        </motion.a>
      ))}
    </div>
  );
}

export default SocialContact;