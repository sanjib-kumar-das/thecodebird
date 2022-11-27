import React from "react";
import navpic from "./images/logo.png";
import pic from "./images/pic.jpg";
import graphic from "./images/anim3.gif";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="mt-5">
        <div className="main">
          <div className="row d-flex mx-auto">
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
            <div className="text col-sm-6 px-5">
              <div className="codebird">
                <h1 className="text-primary">
                  AB<span className="text-warning">0</span>
                  UT
                </h1>
              </div>
              <div className="sub-text my-5">
                The Code Bird also referred to as "Code Bird" is the Coding Club
                of University Institute of Technology Burdwan. It is a student
                community aimed to foster coding culture existing inside
                University Institute of Technology Burdwan. The Club was founded
                on 23rd August, 2016 under the guidance of our esteemed mentor
                Professor Sumit Gupta. Since then The Code Bird has been evolved
                into the ever growing community of Coders at UIT, BU. It is the
                place where institute's Best Coders lead to create pathways for
                the UITians.
              </div>

              <button type="button" class="btn btn-info text-white btn-sm mb-5">
                Contact Us
              </button>

              {/* <a href="https://discord.gg/m6AMnhBXwn" target="blank">
                <button
                  type="button"
                  class="btn btn-warning text-dark btn-sm mb-5"
                >
                  <i className="fab fa-discord fa-flip text-light"></i> Join Our
                  Community
                </button>
              </a> */}
            </div>
          </div>
        </div>
        {/* First Member */}
        <div className="container">
          <div className="accordion-item mt-5">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                <span>
                  #<strong>&nbsp; Founding Team of The CODEBIRD</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse show mb-5 mt-5"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "6rem" }}
                  >
                    <div className="card-body">
                      <figure>
                        <blockquote class="blockquote">
                          <p>Vishal Kumar</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                          President
                          <cite title="Source Title">(IT 2013-17)</cite>
                        </figcaption>
                      </figure>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                {/* 2 */}

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "6rem" }}
                  >
                    <div className="card-body">
                      <figure>
                        <blockquote class="blockquote">
                          <p>Vishal Kumar</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                          President
                          <cite title="Source Title">(IT 2013-17)</cite>
                        </figcaption>
                      </figure>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                {/* 3 */}

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "6rem" }}
                  >
                    <div className="card-body">
                      <figure>
                        <blockquote class="blockquote">
                          <p>Vishal Kumar</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                          President
                          <cite title="Source Title">(IT 2013-17)</cite>
                        </figcaption>
                      </figure>
                    </div>
                    {/* btn */}
                  </div>
                </div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "6rem" }}
                  >
                    <div className="card-body">
                      <figure>
                        <blockquote class="blockquote">
                          <p>Vishal Kumar</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                          President
                          <cite title="Source Title">(IT 2013-17)</cite>
                        </figcaption>
                      </figure>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "6rem" }}
                  >
                    <div className="card-body">
                      <figure>
                        <blockquote class="blockquote">
                          <p>Vishal Kumar</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                          President
                          <cite title="Source Title">(IT 2013-17)</cite>
                        </figcaption>
                      </figure>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "6rem" }}
                  >
                    <div className="card-body">
                      <figure>
                        <blockquote class="blockquote">
                          <p>Vishal Kumar</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                          President
                          <cite title="Source Title">(IT 2013-17)</cite>
                        </figcaption>
                      </figure>
                    </div>
                    {/* btn */}
                  </div>
                </div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "6rem" }}
                  >
                    <div className="card-body">
                      <figure>
                        <blockquote class="blockquote">
                          <p>Vishal Kumar</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                          President
                          <cite title="Source Title">(IT 2013-17)</cite>
                        </figcaption>
                      </figure>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "6rem" }}
                  >
                    <div className="card-body">
                      <figure>
                        <blockquote class="blockquote">
                          <p>Vishal Kumar</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                          President
                          <cite title="Source Title">(IT 2013-17)</cite>
                        </figcaption>
                      </figure>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "6rem" }}
                  >
                    <div className="card-body">
                      <figure>
                        <blockquote class="blockquote">
                          <p>Vishal Kumar</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                          President
                          <cite title="Source Title">(IT 2013-17)</cite>
                        </figcaption>
                      </figure>
                    </div>
                    {/* btn */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Member */}
          <div className="accordion-item mt-5">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="true"
                aria-controls="collapse2"
              >
                <span>
                  #<strong>&nbsp; Current Team of The CODEBIRD</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse show mb-5 mt-5"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      style={{ width: "8rem" }}
                      src={pic}
                      alt="Baga Beach"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Mohtasheem Ejaz{" "}
                        <span class="badge bg-primary"> CSE </span>
                      </h5>
                      <p className="card-text text-truncate">2020-24</p>
                      <hr className="dropdown-divider" />
                      <h6>POSITION: President</h6>

                      <p>
                        <button
                          type="button"
                          className="btn btn-primary mt-2 shadow"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop11"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                {/* 2 */}

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      alt="Madgaon"
                      style={{ width: "8rem" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Amrit Dhandharia{" "}
                        <span class="badge bg-primary"> CSE </span>
                      </h5>
                      <p className="card-text text-truncate">2014-18</p>
                      <hr className="dropdown-divider" />
                      <h6>POSITION: Core Committee Member</h6>

                      <p>
                        <button
                          type="button"
                          className="btn btn-primary mt-2 shadow"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop12"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                {/* 3 */}

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Sanjib Kumar Das{" "}
                        <span class="badge bg-primary"> CSE </span>
                      </h5>
                      <p className="card-text text-truncate">2014-18</p>
                      <hr className="dropdown-divider" />
                      <h6>POSITION: Core Committee Member</h6>
                      <p>
                        <button
                          type="button"
                          className="btn btn-primary mt-2 shadow"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop13"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Sourav Biswas{" "}
                        <span class="badge bg-primary"> CSE </span>
                      </h5>
                      <p className="card-text text-truncate">2015-19</p>
                      <hr className="dropdown-divider" />
                      <h6>POSITION: Core Committee Member</h6>
                      <p>
                        <button
                          type="button"
                          className="btn btn-primary mt-2 shadow"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop13"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Harshita Singh {""}
                        <span class="badge bg-primary"> CSE </span>
                      </h5>
                      <p className="card-text text-truncate">2015-19</p>
                      <hr className="dropdown-divider" />
                      <h6>POSITION: Core Committee Member</h6>
                      <p>
                        <button
                          type="button"
                          className="btn btn-primary mt-2 shadow"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop13"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Saptyadweep Bhattacharjee{" "}
                        <span class="badge bg-primary"> IT </span>
                      </h5>
                      <p className="card-text text-truncate">2015-19</p>
                      <hr className="dropdown-divider" />
                      <h6>POSITION: Core Committee Member</h6>
                      <p>
                        <button
                          type="button"
                          className="btn btn-primary mt-2 shadow"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop13"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Raja Bhandari <span class="badge bg-primary"> IT </span>
                      </h5>
                      <p className="card-text text-truncate">2013-17</p>
                      <hr className="dropdown-divider" />
                      <h6>POSITION: Executive Committee Member</h6>
                      <p>
                        <button
                          type="button"
                          className="btn btn-primary mt-2 shadow"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop13"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Gaurav <span class="badge bg-primary"> IT </span>
                      </h5>
                      <p className="card-text text-truncate">2014-18</p>
                      <hr className="dropdown-divider" />
                      <h6>POSITION: Executive Committee Member</h6>
                      <p>
                        <button
                          type="button"
                          className="btn btn-primary mt-2 shadow"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop13"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around">
                  <div
                    className="card shadow"
                    style={{ width: "18rem", height: "23rem" }}
                  >
                    <img
                      className="card-img-top skeleton img-fluid mx-auto mt-1 d-block rounded"
                      src={navpic}
                      style={{ width: "8rem" }}
                      height={"100%"}
                      alt="Panaji"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Surabhi Pal <span class="badge bg-primary"> ECE </span>
                      </h5>
                      <p className="card-text text-truncate">2014-18</p>
                      <hr className="dropdown-divider" />
                      <h6>POSITION: Executive Committee Member</h6>
                      <p>
                        <button
                          type="button"
                          className="btn btn-primary mt-2 shadow"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop13"
                        >
                          Read More
                        </button>
                      </p>
                    </div>
                    {/* btn */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* graph */}
      </div>
    </>
  );
}
