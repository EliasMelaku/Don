import React from "react";

import "./css/greeting.css";

const Greeting = () => {
  return (
    <div className="greeting">
        <img className="myPic" src={require("./images/greeting.jpeg")} alt="some image" />
        <h1 className="greetingTitle">Greetings</h1>
        <p className="fromDon">from Don</p>
    </div>
  );
};

export default Greeting;
