import React from "react";
import "./home.css";
import Header from "../header/index";
import Body from "../body/index";
import Footer from "../footer/index";
import BackgroundMesh from "./BackgroundMesh";

function Home() {
  return (
    <div className="home">
      <BackgroundMesh />
      <div className="sticky-header">
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;