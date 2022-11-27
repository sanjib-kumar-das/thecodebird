import React from "react";
import { Link } from "react-router-dom";
import graphic from "./images/graphic.png";
import "./styles/home.css";

export default function Home() {
  return (
    <>
      <div className="container mt-3">
        {/* <div className="">
          <img className="graphic rounded img-fluid" src={graphic} alt="" />
        </div> */}
      </div>
      <div className="main">
        <div className="row">
          <div className="text col-sm-6 px-5">
            <div className="codebird">
              <h1>
                The <br /> CODEBIRD
              </h1>
            </div>
            <div className="sub-text my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              dolorum voluptate, laudantium accusantium deserunt eos explicabo,
              ipsa exercitationem asperiores voluptatum illum quasi id, sequi
              impedit nobis. Doloremque corporis veritatis neque?
            </div>
            <Link to="contact" className="">
              <button type="button" class="btn btn-primary btn-sm">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="anim col-sm-6 img-fluid">
            <img className="graphic rounded img-fluid" src={graphic} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
