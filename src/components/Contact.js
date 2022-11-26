import { useEffect, useState } from "react";
// import Loader from "react-loaders";

import { useRef } from "react";

// import AnimatedLetters from "../AnimatedLetters";
// import "./index.scss";

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            /> */}
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <ul>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input placeholder="Email" type="email" name="email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input
                  type="submit"
                  className="flat-button send"
                  value="SEND"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="info-map">
          SANJIB KUMAR DAS
          <br />
          20A/2 Prasanta Roy Road
          <br />
          Purba Barisha, Kolkata <br />
          West Bengal, India
          <br />
          <br />
          <span>sanjibdas.23012002@gmail.com</span>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  );
};

export default Contact;
