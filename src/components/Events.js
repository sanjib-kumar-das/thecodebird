import React from "react";
import { useState } from "react";
import "./styles/travelogue.css";

import event1 from "./images/event1.png";
import event2 from "./images/event2.jpg";
import event3 from "./images/event3.jpg";
import event4 from "./images/event4.jpg";
import event5 from "./images/event5.jpg";
import event6 from "./images/event6.jpg";
import newEvent from "./images/newEvent.png";

export default function Events() {
  return (
    <>
      <div class=" mt-3 vstack gap-2 col-md-5 mx-auto">
        <button type="button" class="btn btn-warning">
          Past Events
        </button>
        {/* <button type="button" class="btn btn-outline-secondary">
          Cancel
        </button> */}
      </div>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide mt-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active bg-info"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            className="bg-info"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            className="bg-info"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            className="bg-info"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            className="bg-info"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            className="bg-info"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={event1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p> */}
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={event2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p> */}
            </div>
          </div>
          <div class="carousel-item">
            <img src={event3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p> */}
            </div>
          </div>
          <div class="carousel-item">
            <img src={event4} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p> */}
            </div>
          </div>
          <div class="carousel-item">
            <img src={event5} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p> */}
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

        {/*  */}
      </div>
      <div class="vstack mt-5 gap-2 col-md-5 mx-auto">
        <button type="button" class="btn btn-primary">
          Upcoming Events
        </button>
      </div>
      <div className="container mt-3">
        <div className="">
          <img
            className="mt-5 graphic rounded img-fluid"
            src={newEvent}
            alt=""
          />
        </div>
      </div>
      ;
    </>
  );
}
