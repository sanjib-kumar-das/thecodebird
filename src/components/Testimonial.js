import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles/testimonial.css";

import pic from "./images/sgp.png";

// import required modules
import { Pagination } from "swiper";

export default function Testimonial() {
  return (
    <>
      <div className="container">
        <h2 className="heading my-4">
          <div className="codebird head-txt">
            <h1 className="text-primary">
              Test<span className="text-warning">1</span>m
              <span className="text-warning">0</span>n
              <span className="text-warning">1</span>als
            </h1>
          </div>
        </h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper container"
        >
          <SwiperSlide>
            <div className="swiper-client">
              <div class="mycard shadow rounded">
                <p className="review-text">
                  <i class="fa-solid fa-quote-left text-warning quote "></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora distinctio quod atque, modi delectus iure dignissimos!
                  Aspernatur cumque sapiente vero tempore nostrum nemo repellat
                  veniam porro! Veritatis, aperiam! Iure, id?
                </p>
              </div>
              <div className="review-details row mt-4 ">
                <div className="col-md-6 image  d-flex mx-auto">
                  <figure>
                    <img className="user" src={pic} alt="" />
                  </figure>

                  <div className="mt-3 mx-3 data mb-5">
                    <p className="name fw-bold">Sanjib Kumar Das</p>
                    <p className="post">SDE Intern</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-client">
              <div class="mycard shadow rounded mymycard">
                <p className="review-text">
                  <i class="fa-solid fa-quote-left text-warning quote"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora distinctio quod atque, modi delectus iure dignissimos!
                  Aspernatur cumque sapiente vero tempore nostrum nemo repellat
                  veniam porro! Veritatis, aperiam! Iure, id?
                </p>
              </div>
              <div className="review-details row mt-4 ">
                <div className="col-md-6 image  d-flex mx-auto">
                  <figure>
                    <img className="user" src={pic} alt="" />
                  </figure>

                  <div className="mt-3 mx-3 data mb-5">
                    <p className="name fw-bold">Sanjib Kumar Das</p>
                    <p className="post">SDE Intern</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="swiper-client">
              <div class="mycard shadow rounded">
                <p className="review-text">
                  <i class="fa-solid fa-quote-left text-warning quote"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora distinctio quod atque, modi delectus iure dignissimos!
                  Aspernatur cumque sapiente vero tempore nostrum nemo repellat
                  veniam porro! Veritatis, aperiam! Iure, id?
                </p>
              </div>
              <div className="review-details row mt-4 ">
                <div className="col-md-6 image  d-flex mx-auto">
                  <figure>
                    <img className="user" src={pic} alt="" />
                  </figure>

                  <div className="mt-3 mx-3 data mb-5">
                    <p className="name fw-bold">Sanjib Kumar Das</p>
                    <p className="post">SDE Intern</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="swiper-client">
              <div class="mycard shadow rounded">
                <p className="review-text">
                  <i class="fa-solid fa-quote-left text-warning quote"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora distinctio quod atque, modi delectus iure dignissimos!
                  Aspernatur cumque sapiente vero tempore nostrum nemo repellat
                  veniam porro! Veritatis, aperiam! Iure, id?
                </p>
              </div>
              <div className="review-details row mt-4 ">
                <div className="col-md-6 image  d-flex mx-auto">
                  <figure>
                    <img className="user" src={pic} alt="" />
                  </figure>

                  <div className="mt-3 mx-3 data mb-5">
                    <p className="name fw-bold">Sanjib Kumar Das</p>
                    <p className="post">SDE Intern</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="swiper-client">
              <div class="mycard shadow rounded">
                <p className="review-text">
                  <i class="fa-solid fa-quote-left text-warning quote"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora distinctio quod atque, modi delectus iure dignissimos!
                  Aspernatur cumque sapiente vero tempore nostrum nemo repellat
                  veniam porro! Veritatis, aperiam! Iure, id?
                </p>
              </div>
              <div className="review-details row mt-4 ">
                <div className="col-md-6 image  d-flex mx-auto">
                  <figure>
                    <img className="user" src={pic} alt="" />
                  </figure>

                  <div className="mt-3 mx-3 data mb-5">
                    <p className="name fw-bold">Sanjib Kumar Das</p>
                    <p className="post">SDE Intern</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="swiper-client">
              <div class="mycard shadow rounded">
                <p className="review-text">
                  <i class="fa-solid fa-quote-left text-warning quote"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora distinctio quod atque, modi delectus iure dignissimos!
                  Aspernatur cumque sapiente vero tempore nostrum nemo repellat
                  veniam porro! Veritatis, aperiam! Iure, id?
                </p>
              </div>
              <div className="review-details row mt-4 ">
                <div className="col-md-6 image  d-flex mx-auto">
                  <figure>
                    <img className="user" src={pic} alt="" />
                  </figure>

                  <div className="mt-3 mx-3 data mb-5">
                    <p className="name fw-bold">Sanjib Kumar Das</p>
                    <p className="post">SDE Intern</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="swiper-client">
              <div class="mycard shadow rounded">
                <p className="review-text">
                  <i class="fa-solid fa-quote-left text-warning quote"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora distinctio quod atque, modi delectus iure dignissimos!
                  Aspernatur cumque sapiente vero tempore nostrum nemo repellat
                  veniam porro! Veritatis, aperiam! Iure, id?
                </p>
              </div>
              <div className="review-details row mt-4 ">
                <div className="col-md-6 image  d-flex mx-auto">
                  <figure>
                    <img className="user" src={pic} alt="" />
                  </figure>

                  <div className="mt-3 mx-3 data mb-5">
                    <p className="name fw-bold">Sanjib Kumar Das</p>
                    <p className="post">SDE Intern</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
