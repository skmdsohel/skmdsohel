import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./hero-illustration.css";

const TYPED_LABEL = "< scale />";

function HeroIllustration({ bootProgress = 100, contentReady = true }) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!contentReady) {
      setTyped("");
      return undefined;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(TYPED_LABEL.slice(0, i));
      if (i >= TYPED_LABEL.length) clearInterval(id);
    }, 65);
    return () => clearInterval(id);
  }, [contentReady]);

  const loading = bootProgress < 100;

  return (
    <div className="hero-illustration" role="img" aria-label="Engineer building scalable systems">
      <div className="hero-illustration__aura" aria-hidden />
      <motion.div
        className={`hero-illustration__card ${loading ? "hero-illustration__card--loading" : ""}`}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {loading && (
          <div className="hero-illustration__loader" aria-hidden>
            <div
              className="hero-illustration__loader-ring"
              style={{ "--boot": `${bootProgress}%` }}
            />
          </div>
        )}
        <svg
          className="hero-illustration__svg"
          viewBox="0 0 420 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hero-screen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="hero-accent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
            <linearGradient id="hero-desk" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#312e81" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.5" />
            </linearGradient>
            <filter id="hero-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Platform */}
          <ellipse cx="210" cy="348" rx="160" ry="14" fill="#6366f1" fillOpacity="0.12" />

          {/* Desk */}
          <path
            d="M72 268h276v12c0 6-4 10-10 10H82c-6 0-10-4-10-10v-12z"
            fill="url(#hero-desk)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          <rect x="100" y="278" width="10" height="58" rx="2" fill="#4338ca" fillOpacity="0.6" />
          <rect x="310" y="278" width="10" height="58" rx="2" fill="#4338ca" fillOpacity="0.6" />

          {/* Monitor */}
          <rect
            x="118"
            y="92"
            width="184"
            height="128"
            rx="12"
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
          />
          <rect x="128" y="102" width="164" height="100" rx="8" fill="url(#hero-screen)" />
          <rect
            className="hero-code-line hero-code-line--1"
            x="142"
            y="118"
            width="72"
            height="6"
            rx="3"
            fill="#6366f1"
            opacity="0.9"
          />
          <rect
            className="hero-code-line hero-code-line--2"
            x="142"
            y="134"
            width="110"
            height="6"
            rx="3"
            fill="#8b5cf6"
            opacity="0.75"
          />
          <rect
            className="hero-code-line hero-code-line--3"
            x="142"
            y="150"
            width="88"
            height="6"
            rx="3"
            fill="#22d3ee"
            opacity="0.7"
          />
          <rect
            className="hero-code-line hero-code-line--4"
            x="142"
            y="166"
            width="124"
            height="6"
            rx="3"
            fill="#a5b4fc"
            opacity="0.5"
          />
          <text
            x="152"
            y="188"
            fill="#67e8f9"
            fontFamily="JetBrains Mono, monospace"
            fontSize="11"
            opacity="0.9"
          >
            {typed}
            <tspan className="hero-type-cursor">|</tspan>
          </text>
          <rect x="196" y="220" width="28" height="14" rx="4" fill="#4338ca" />
          <rect x="174" y="234" width="72" height="8" rx="4" fill="rgba(255,255,255,0.1)" />

          {/* Floating window */}
          <g className="hero-float-window" filter="url(#hero-glow)">
            <rect
              x="286"
              y="48"
              width="96"
              height="72"
              rx="10"
              fill="rgba(99,102,241,0.15)"
              stroke="url(#hero-accent)"
              strokeWidth="1.2"
            />
            <path
              d="M302 70h12v4h-12zm0 12h48v4h-48zm0 12h32v4h-32z"
              fill="#c4b5fd"
              opacity="0.8"
            />
          </g>

          {/* Terminal chip */}
          <g className="hero-float-terminal">
            <rect
              x="40"
              y="120"
              width="64"
              height="56"
              rx="10"
              fill="rgba(34,211,238,0.08)"
              stroke="rgba(34,211,238,0.35)"
              strokeWidth="1"
            />
            <text
              x="52"
              y="142"
              fill="#22d3ee"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
            >
              $ deploy
            </text>
            <rect x="52" y="152" width="40" height="3" rx="1.5" fill="#22d3ee" opacity="0.5" />
            <rect x="52" y="160" width="28" height="3" rx="1.5" fill="#67e8f9" opacity="0.4" />
          </g>

          {/* Character — minimal modern silhouette */}
          <circle cx="248" cy="228" r="22" fill="#312e81" stroke="url(#hero-accent)" strokeWidth="2" />
          <path
            d="M228 252c0-8 6-14 20-14s20 6 20 14v8c0 4-3 6-8 6h-44c-5 0-8-2-8-6v-8z"
            fill="url(#hero-accent)"
            fillOpacity="0.85"
          />
          <path
            d="M218 268h60v36c0 6-5 10-12 10h-36c-7 0-12-4-12-10v-36z"
            fill="#4c1d95"
          />
          <ellipse cx="238" cy="318" rx="18" ry="6" fill="#1e1b4b" />
          <ellipse cx="268" cy="318" rx="18" ry="6" fill="#1e1b4b" />

          {/* Chair */}
          <path
            d="M268 290h52v56c0 4-3 8-8 8h-36c-5 0-8-4-8-8v-56z"
            fill="#0f172a"
            stroke="rgba(255,255,255,0.06)"
          />
          <rect x="278" y="266" width="32" height="28" rx="6" fill="#1e293b" />

          {/* Orbit nodes */}
          <circle className="hero-orbit hero-orbit--1" cx="352" cy="200" r="6" fill="#22d3ee" />
          <circle className="hero-orbit hero-orbit--2" cx="68" cy="200" r="5" fill="#8b5cf6" />
          <circle className="hero-orbit hero-orbit--3" cx="210" cy="40" r="4" fill="#6366f1" />
        </svg>

        <motion.div
          className="hero-illustration__badge hero-illustration__badge--cloud"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          Cloud
        </motion.div>
        <motion.div
          className="hero-illustration__badge hero-illustration__badge--k8s"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          K8s
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroIllustration;