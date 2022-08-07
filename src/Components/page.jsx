import React from "react";

import "./css/common.css";

import AboutMe from "./AboutMe";
import Contact from "./Contact";

import Greeting from "./Greeting";
import Noteworthy from "./Noteworthy";
import Projects from "./Projects";
import Timeline from "./Timeline";

const Page = () => {
  return (
    <div className="container">
      <Greeting />
      <AboutMe />
      <Timeline />
      <Noteworthy />
      <Projects />
      <Contact />
    </div>
  );
};

export default Page;
