import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";
import "./Home";
import "./Advisor";
import "./Events";

export default function Footer() {
  return (
    <div className="mt-5">
      <footer className="text-center text-lg-start text-dark">
        <section className="d-flex justify-content-between p-4 bg-light text-dark shadow rounded">
          <div className="me-5">
            <span>Be our CodeBirder </span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/thecodebird"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-facebook fa-flip"></i>
            </a>
            <a
              href="https://discord.gg/m6AMnhBXwn"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-discord fa-flip"></i>
            </a>

            <a
              href="https://www.linkedin.com/company/thecodebird-coding-club-uit-bu"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-linkedin fa-flip"></i>
            </a>
            <a
              href="https://www.instagram.com/thecodebird.exe"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-instagram fa-flip"></i>
            </a>
            <a
              // href="https://bit.ly/3qFvDlv"
              href="https://thecodebird.blogspot.com"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-blogger fa-flip"></i>
            </a>
          </div>
        </section>

        <section className="bg-light shadow rounded">
          <div className="container text-center text-md-start mt-4">
            <div className="row mt-4">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-4">
                <h6 className=" fw-bold">The CODEBIRD</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr1" />
                <p className="text-dark">
                  <p className="just d-flex mx-auto">
                    Every student of UIT, irrespective of their stream or year
                    can make great things, CODEBIRD helps you to achieve that,
                    for FREE !! 😀🏆 Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Eligendi, explicabo, aliquam beatae
                    nostrum fuga libero eos odio molestiae nulla minima ipsa
                    maxime maiores assumenda aliquid?
                  </p>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold">Website Developer</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr2" />
                <p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/sanjibkumardas-webdev/"
                    className="text-dark"
                  >
                    Developed with ❤ <br />
                    Sanjib Kumar Das
                  </a>
                </p>
                <br />
                <h6 className="text-uppercase fw-bold">Faculty Advisor</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr2" />
                <p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/sumit-gupta-sgp-168109151/"
                    className="text-dark"
                  >
                    Prof. Sumit Gupta
                    <br />
                    Faculty Advisor, The Code Bird
                    <br />
                    Assistant Professor, CSE, UIT, BU
                  </a>
                </p>
                {/* ALAN AI */}
                {/* <h6 className="fw-bold mt-4">Alan AI</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr2" />
                <p className="just">
                  Alan AI - Fully voice automated auditory bot that will read
                  out every minute details of a place that a tourist asks for
                  and specially visually impair tourists.
                </p> */}
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold">Nav links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr3" />
                <p>
                  <Link to="/" className="text-dark">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/about" className="text-dark">
                    About
                  </Link>
                </p>
                <p>
                  <Link to="/advisor" className="text-dark">
                    Advisor
                  </Link>
                </p>
                <p>
                  <Link to="/events" className="text-dark">
                    Events
                  </Link>
                </p>
                <p>
                  <Link to="/faq" className="text-dark">
                    FAQs
                  </Link>
                </p>
                <p>
                  <Link to="/contact" className="text-dark">
                    Contact Us
                  </Link>
                </p>
                {/* <p>
                  <Link
                    to="?"
                    className="text-dark"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                  >
                    Helpline
                  </Link>
                </p> */}
                {/* Chatbot */}
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4 last">
                <h6 className="text-uppercase fw-bold">Contact Us</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr4" />
                <p>
                  <i className="fa-solid fa-map-location-dot mr-3"></i> UIT
                  Campus, Burdwan
                  <p> West Bengal, India</p>
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  thecodebird.uitbu@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i>{" "}
                  <a href="tel: 6290374022">1800 111 363</a>
                </p>
                <div className="div">
                  <p>
                    {/* <label
                    htmlFor="validationDefault02"
                    className="form-label text-bold qfont text-dark"
                  ></label> */}
                    <div className="input-group">
                      <input
                        type="emails"
                        placeholder="Email ID"
                        className="form-control"
                        id="validationDefaultMail"
                        aria-describedby="inputGroupPrepend2"
                        name="mail"
                        autoComplete="off"
                      />
                    </div>
                  </p>
                  <p>
                    <textarea
                      className="form-control mt-1"
                      id="exampleFormControlTextarea7"
                      rows="2"
                      placeholder="Give your feedback here"
                      name="love"
                    ></textarea>
                  </p>
                  <p className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm align-center"
                    >
                      Send
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3 bg-muted text-muted">
          © 2022 Copyright: &nbsp;
          <a className="text-muted" href="/">
            The CODEBIRD
          </a>
        </div>
      </footer>
    </div>
  );
}
