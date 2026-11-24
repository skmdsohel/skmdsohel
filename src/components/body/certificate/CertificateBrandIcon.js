import React from "react";

export function CertificateBrandIcon({ brand, accent, logo }) {
  if (logo) {
    return (
      <img
        src={logo}
        alt=""
        className="cert-logo-img"
        style={{ filter: `drop-shadow(0 0 12px ${accent}40)` }}
      />
    );
  }
  if (brand === "aws") {
    return (
      <i
        className="devicon-amazonwebservices-plain-wordmark colored cert-devicon"
        style={{ color: accent || "#FF9900" }}
        aria-hidden
      />
    );
  }
  return <span className="cert-logo-fallback" style={{ color: accent }}>★</span>;
}