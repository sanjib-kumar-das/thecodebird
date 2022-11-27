import React, { useState } from "react";
import "./styles/latestnews.css";
import pic from "./images/sgp.png";
import graphic from "./images/anim3.gif";
import advisor from "./images/sgp.png";

export default function Advisor() {
  return (
    <>
      <div className="">
        <div className="main">
          <div className="row d-flex mx-auto">
            <div className="text col-sm-6 px-5">
              <div className="codebird">
                <h1 className="text-primary">
                  ADV<span className="text-warning">1</span>S
                  <span className="text-warning">0</span>R
                  <img src={advisor} alt="advisor" className="advisor" />
                </h1>
              </div>
              <div className="sub-text my-5">
                Mr. Sumit Gupta is an Assistant Professor in the Department of
                Computer Science & Engineering at UIT BU. Since the Inception of
                the coding club "The Code Bird", Professor Gupta has been the
                guiding pillar for all the Coder's at UIT who strive for
                excellence. Under his guidance and mentorship, The Code Bird
                achieved milestone's and organized various events (CodeWiz,
                Snackdown, CIS Hackathon and many more..) and helped UITians
                participate at global stages of ACM ICPC, Snackdown,
                Bengalathon, CSI Inapp International Awards, Smart India
                Hackathon, FOSET, Code2Create, WBSSTC, Toycathon, AICTE CVA etc.
                The Code Bird team plans to expand its reach by exploring
                various opportunities and organizing varied technical events for
                all the students at UIT under the leadership of Professor Gupta.
                The Students of UIT BU are forever grateful for all the
                contributions that our esteemed advisor has made to improve the
                Coding Culture in our Institution. We look forward to achieve
                many more milestones under his guidance.
              </div>
              {/* <Link to="https://discord.gg/m6AMnhBXwn" className="">
              <button type="button" class="btn btn-info text-white btn-sm mb-5">
                Contact Us
              </button>
            </Link> */}
              <a href="https://discord.gg/m6AMnhBXwn" target="blank">
                <button
                  type="button"
                  class="btn btn-warning text-dark btn-sm mb-5"
                >
                  <i className="fab fa-discord fa-flip text-light"></i> Join Our
                  Community
                </button>
              </a>
            </div>
            <div className="anim col-sm-6 img-fluid mx-auto d-flex">
              <img
                className="graphic rounded img-fluid mx-5"
                src={graphic}
                alt=""
              />
              {/* <Lottie
              className="lottie d-flex mx-auto"
              animationData={lottie}
              background="transparent"
            /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
