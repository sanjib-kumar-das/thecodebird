import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";
import navpic from "./images/logo.png";
import GetLocation from "./GetLocation";

export default function Navbar() {
  const location = GetLocation();
  const lat = location.loaded
    ? JSON.stringify(location.coordinates.lat)
    : "Location data not availale yet";
  const lng = location.loaded
    ? JSON.stringify(location.coordinates.lng)
    : "Location data not availale yet";
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-gradient bg-white rounded ">
        <div className="container-fluid">
          <img className="mx-2" src={navpic} alt="" height="35" width="35" />
          <Link className="navbar-brand col-md-1 mx-1 text-center" to="/">
            <p className="navMainTxt mt-3 fw-bold">
              The CODEBIRD
              {/* <p style={{ fontSize: "12px" }}>The Coding Club of UIT, BU</p> */}
            </p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            {/* <ul className="navbar-nav nav justify-content-left mr-auto mx-2 d-flex justify-content-center"> */}
            <ul className="nav navbar-nav justify-content-end">
              <li className="nav-item active">
                <Link className="nav-link" aria-current="page" to="/">
                  <p className="text-center demo fw-bold">Home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  <p className="text-center fw-bold">About</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="advisor">
                  <p className="text-center fw-bold">Advisor</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="events">
                  <p className="text-center fw-bold">Events</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="faq">
                  <p className="text-center fw-bold">FAQs</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  <p className="text-center fw-bold">Contact Us</p>
                </Link>
              </li>

              {/* // <li className="nav-item">
              //   <Link className="nav-link" to="latestnews">
              //     <p className="text-center">
              //       Bad graph
              //       <br />
              //       hindi
              //     </p>
              //   </Link>
              // </li>  */}

              {/* <li className="nav-item">
                <Link className="nav-link" to="?">
                  <p
                    className="text-center fa-beat text-primary fab1"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                  >
                    Helpline
                  </p>
                </Link>
              </li> */}

              {/* <div className="whatsapp nav-item">
                <a
                  href="https://wa.me/+916289181751"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link text-center"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Send SOS"
                >
                  <i className="fab mt-3 fa-brands fa-whatsapp-square fa-3x fa-bounce"></i>
                </a>
              </div> */}

              {/* <li className="nav-item searchbar">
                <form className="form-inline my-2 my-lg-0 d-flex justify-content-between col-md-4">
                  <input
                    className="form-control mr-sm-2 mx-2 search"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-primary my-2 my-sm-0"
                    type="submit"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* Start */}

      <div
        className="offcanvas offcanvas-end"
        // data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <div className="">
            <h5
              className="offcanvas-title align-self-center"
              id="offcanvasWithBothOptionsLabel"
            >
              At your service (Tap to call)
            </h5>
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-virus-covid"></i> 1075
              </a>
            </button>{" "}
            Covid19 Helpline
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-person-hiking"></i>&nbsp; 1363
              </a>
            </button>{" "}
            Tourist Helpline
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-building-shield"></i>&nbsp;&nbsp; 100
              </a>
            </button>{" "}
            Police Helpline
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-fire-extinguisher"></i>
                &nbsp;&nbsp;&nbsp; 101
              </a>
            </button>{" "}
            Fire Emergency
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-truck-medical"></i> &nbsp;&nbsp;102
              </a>
            </button>{" "}
            Ambulance Emeergency
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-venus"></i>&nbsp;&nbsp; 1091
              </a>
            </button>{" "}
            Women Helpline
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-person-cane"></i>&nbsp; 14567
              </a>
            </button>{" "}
            Senior Citizen Helpline
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-baby"></i>&nbsp;&nbsp; 1098
              </a>
            </button>{" "}
            Child Abuse Helpline
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-cloud-showers-water"></i>
                &nbsp;&nbsp;&nbsp; 108
              </a>
            </button>{" "}
            Disaster Mangement
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-train-subway"></i>
                &nbsp;&nbsp;&nbsp;&nbsp; 139&nbsp;
              </a>
            </button>{" "}
            Railway Enquiry
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-road"></i>&nbsp;&nbsp; 1073
              </a>
            </button>{" "}
            Road Accident Emergency
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-earth-asia"></i> 155620
              </a>
            </button>{" "}
            Cyber Crime Helpline
          </p>

          <div className="dropdown-divider bg-muted mt-5"></div>
          <p className="mt-2 text-center">
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-phone"></i> 1800-111-363
              </a>
            </button>{" "}
            <p className="mt-3"> Tourist Helpline (Toll-free)</p>
          </p>
        </div>

        <div className="div bg-dark">
          {/* {location.loaded
            ? JSON.stringify(location)
            : "Location data not availale yet"} */}
          <p className="text-center text-muted">
            <br />
            <h4>Your current location</h4>
            Latitude: {lat} <br />
            Longitude: {lng}
          </p>
        </div>
        {/* <div className="dropdown-divider bg-muted mt-2"></div> */}
        <p className="text-center text-muted">
          <br />
          For any other query you may contact teamudvaban@gmail.com
        </p>
      </div>
      {/* End */}
    </>
  );
}
