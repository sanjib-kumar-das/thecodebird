import React from "react";
import graphic from "./images/graphic.png";
import "./styles/home.css";

export default function Home() {
  return (
    <>
      <div className="container mt-3">
        <div className="">
          <img className="graphic rounded img-fluid" src={graphic} alt="" />
        </div>
      </div>
      <div className="lotte"></div>
    </>
  );
}
