import React from "react";
import "./certificate.css";
import Separator from "../../common/separator";
import { WorkData } from "../../data/certificates";
import CertificateCard from "./certificate-card";
import AnimatedSection from "../../common/AnimatedSection";

function Certificate() {
  return (
    <AnimatedSection className="work">
      <Separator />
      <label className="section-title">Certificates</label>
      <div className="work-list">
        {WorkData.map((item, index) => (
          <CertificateCard key={item.course} item={item} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default Certificate;