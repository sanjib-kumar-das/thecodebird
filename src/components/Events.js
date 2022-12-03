import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles/events.css";

// import required modules
import { Pagination } from "swiper";

import event1 from "./images/event1.png";
import event2 from "./images/event2.png";
import event3 from "./images/event3.png";
import event4 from "./images/event4.png";
import event5 from "./images/event5.png";
import event6 from "./images/event6.png";
import event7 from "./images/event7.png";
import event8 from "./images/event8.png";
import event9 from "./images/event9.png";
import event10 from "./images/event10.png";
import event11 from "./images/event11.png";
import event12 from "./images/event12.png";
import event13 from "./images/event13.png";
export default function Events() {
  return (
    <>
      {/* UPCOMING EVENTS */}
      <div className="container">
        <h2 className="heading my-4">
          <div className="codebird head-txt">
            <h1 className="text-primary">
              Upc<span className="text-warning">0</span>m
              <span className="text-warning">1</span>ng Events
            </h1>
          </div>
        </h2>
      </div>

      <div className="main">
        <div className="row d-flex mx-auto">
          <div className="text col-sm-6 px-5">
            <div className="codebird">
              <h1 className="text-primary fw-underline fs-1">
                Freshers' Or<span className="text-warning">1</span>entation Pr
                <span className="text-warning">0</span>
                gramme
              </h1>
            </div>
            <p className="sub-text my-5">
              &lt;Hello Everyone /&gt; <br />
              <br /> "The Code Bird"- Coding Club, UIT, BU We are back again
              with a new and dynamic team brimming with gusto and high spirits.
              This time we are hosting the most important event for our beloved
              juniors & peers!!! It is often said that “Everyone has to start
              their innings from zero”. We, The Code Bird, the Coding Club of
              University Institute of Technology, Burdwan University invites all
              UITians to attend this Freshers' Orientation Session and learn
              about various branches and realms of CodeBird from the present
              team members and experts. Anticipating an enthralling
              participation from dear UITians and prospective CodeBirders.
            </p>
            <p className="">
              <span className="">Prof. Sumit Gupta</span> <br />
              <span className="">
                Faculty Advisor, The Code Bird &
                <br /> Assistant Professor, CSE, UIT, BU
              </span>
            </p>
            <p>
              <span className="fw-bold"> Event Details :-</span> <br />
              <br /> 📌 Programme Date: Friday, 25-11-2022 <br /> 📌
              Registration Deadline: Thursday, 24-11-2022, latest by 12 noon{" "}
              <br /> 📌 Mode : Offline at UIT Campus <br />
              <br />
              <span className="fst-italic">
                {" "}
                Note: Prior registration is mandatory. Only registered students
                will be allowed to attend the session. Anybody from 1st and 2nd
                year can register irrespective of their branch.
              </span>
            </p>

            <a href="https://forms.gle/3m1wsgLAQqz33tmT8" target="blank">
              <button
                type="button"
                class="btn btn-warning text-dark btn-sm mb-5 fa-bounce"
              >
                <i class="fa-solid fa-hand-point-right fa-beat text-dark">
                  &nbsp;&nbsp;
                </i>
                REGISTER NOW
              </button>
            </a>
          </div>
          <div className="anim col-sm-6 img-fluid mx-auto d-flex">
            <img
              className="home-anim rounded img-fluid mx-auto d-flex"
              src={event13}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* PAST EVENTS */}
      <div className="container">
        <h2 className="heading my-4">
          <div className="codebird head-txt">
            <h1 className="text-primary">Past Events</h1>
          </div>
        </h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
          }}
          modules={[Pagination]}
          className="mySwiper container"
        >
          <SwiperSlide>
            <figure>
              <img className="event-img mb-5" src={event1} alt="" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure>
              <img className="event-img" src={event2} alt="" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure>
              <img className="event-img" src={event3} alt="" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure>
              <img className="event-img" src={event4} alt="" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure>
              <img className="event-img" src={event5} alt="" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure>
              <img className="event-img" src={event6} alt="" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure>
              <img className="event-img" src={event7} alt="" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure>
              <img className="event-img" src={event8} alt="" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure>
              <img className="event-img" src={event9} alt="" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure>
              <img className="event-img" src={event10} alt="" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure>
              <img className="event-img" src={event11} alt="" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure>
              <img className="event-img" src={event12} alt="" />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure>
              <img className="event-img" src={event13} alt="" />
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
