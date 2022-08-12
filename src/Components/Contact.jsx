import React from "react";

import "./css/contact.css";

const Contact = () => {
  return (
    <div className="section contact">
      <div className="socialsPart"></div>
      <div className="formPart">
        <form className="contactForm">
          <h2 className="formTitle">Would love to hear from you</h2>
          <div className="formInputGrid">
            <input
              className="formInput"
              type="text"
              name="fName"
              placeholder="First Name"
            />
            <input
              className="formInput"
              type="text"
              name="lName"
              placeholder="Last Name"
            />
            <input
              className="formInput"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="formInput"
              type="text"
              name="phone"
              placeholder="Phone Number"
            />
          </div>
          <input
            className="formInput subject"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            className="formInput message"
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <input className="formInput sendBtn" type="submit" value={"Send"} />
          {/* <input className='formInput' type="textarea" name='phone' placeholder='Phone Number'/> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
