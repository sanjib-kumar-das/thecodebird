import React from "react";
import { Link } from "react-router-dom";
import graphic from "./images/anim3.gif";
import "./styles/home.css";
import Lottie from "lottie-react";
import lottie from "./images/scan.json";

export default function Home() {
  return (
    <>
      {/* <div className="">
          <img className="graphic rounded img-fluid" src={graphic} alt="" />
        </div> */}

      <div className="main">
        <div className="row d-flex mx-auto">
          <div className="text col-sm-6 px-5">
            <div className="codebird">
              <h1 className="text-primary">
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
              <button type="button" class="btn btn-info text-white btn-sm mb-5">
                Contact Us
              </button>
            </Link>
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
    </>
  );
}
