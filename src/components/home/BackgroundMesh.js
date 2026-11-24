import React from "react";
import "./background-mesh.css";

function BackgroundMesh() {
  return (
    <div className="background-mesh" aria-hidden="true">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="grid-overlay" />
    </div>
  );
}

export default BackgroundMesh;