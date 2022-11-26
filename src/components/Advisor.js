import React, { useState } from "react";
import "./styles/latestnews.css";
import pic from "./images/sgp.png";

export default function Advisor() {
  return (
    <>
      <div className="container">
        <div className="container"></div>
        <div class="row mt-3">
          <div class="col-12 p-2">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow h-md-250 position-relative bg-light">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-danger">
                  #mentor &nbsp;
                </strong>
                <h4 class="mb-0">Prof. Sumit Gupta</h4>
                <div class="mb-1 text-muted">2016 - Present</div>
                <br />
                <p class="card-text mb-auto">
                  Prof. Sumit Gupta is an Assistant Professor in the Department
                  of Computer Science & Engineering at UIT BU. Since the
                  Inception of the coding club "The Code Bird", Professor Gupta
                  has been the guiding pillar for all the Coder's at UIT who
                  strive for excellence. Under his guidance and mentorship, The
                  Code Bird achieved milestone's and organized various events
                  (CodeWiz, Snackdown, CIS Hackathon and many more..) and helped
                  UITians participate at global stages of ACM ICPC, Snackdown,
                  Bengalathon, CSI Inapp International Awards, Smart India
                  Hackathon, FOSET, Code2Create, WBSSTC, Toycathon, AICTE CVA
                  etc. The Code Bird team plans to expand its reach by exploring
                  various opportunities and organizing varied technical events
                  for all the students at UIT under the leadership of Professor
                  Sumit Gupta. The Students of UIT BU are forever grateful for
                  all the contributions that our esteemed advisor has made to
                  improve the Coding Culture in our Institution. We look forward
                  to achieve many more milestones under his guidance.
                </p>
                <br />
                <div className="contact row">
                  <a href="?" class="stretched-link col-2">
                    Contact
                  </a>

                  <a
                    href="https://www.facebook.com/SAHyatra-101525415857068"
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark me-4 col-1"
                  >
                    <i className="fab fa-facebook fa-beat"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/SAHyatra-101525415857068"
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark me-4 col-1"
                  >
                    <i className="fab fa-linkedin fa-beat"></i>
                  </a>
                </div>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src={pic}
                  class=" bd-placeholder-img img-fluid my-5 rounded p-3"
                  width="200"
                  height="250"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
