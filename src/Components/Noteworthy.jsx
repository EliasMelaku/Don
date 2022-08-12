import React from "react";

import "./css/noteworthy.css";

const Noteworthy = () => {
  return (
    <div className="section noteworthy">
      <h2 className="noteworthyTitle">--- Noteworthy Projects ---</h2>
      <div className="projectGrid">
        <div className="singleProjContainer">
          <h3 className="singleProjTitle">Project</h3>
          <p className="singleProjDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            voluptatem dolore quam praesentium accusantium optio.
          </p>
          <div className="singleProjIcons">
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
          <img
            src={require("./images/proj1.png")}
            alt="project"
            className="singleProjImg"
          />
        </div>
        <div className="singleProjContainer">
          <h3 className="singleProjTitle">Project</h3>
          <p className="singleProjDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            voluptatem dolore quam praesentium accusantium optio.
          </p>
          <div className="singleProjIcons">
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
          <img
            src={require("./images/proj2.png")}
            alt="project"
            className="singleProjImg"
          />
        </div>
        <div className="singleProjContainer">
          <h3 className="singleProjTitle">Project</h3>
          <p className="singleProjDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            voluptatem dolore quam praesentium accusantium optio.
          </p>
          <div className="singleProjIcons">
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
          <img
            src={require("./images/proj3.png")}
            alt="project"
            className="singleProjImg"
          />
        </div>
        <div className="singleProjContainer">
          <h3 className="singleProjTitle">Project</h3>
          <p className="singleProjDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            voluptatem dolore quam praesentium accusantium optio.
          </p>
          <div className="singleProjIcons">
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
          <img
            src={require("./images/proj4.png")}
            alt="project"
            className="singleProjImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Noteworthy;
