import React from "react";

import "./css/aboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <img
        src={require("./images/don.jfif")}
        alt=""
        className="myPicture"
      />
      <h1 className="aboutMeTitle">I'm Don</h1>
      <p className="aboutMeDescription">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt adipisci
        non nemo voluptatum assumenda illo id, architecto commodi, aut aperiam
        praesentium iure recusandae sed. Quos dolore laudantium blanditiis,
        recusandae possimus fuga numquam saepe impedit consequatur ea itaque
        sequi libero. Iure harum officia quas ullam quisquam porro quaerat
        libero nihil a.
      </p>
    </div>
  );
};

export default AboutMe;
