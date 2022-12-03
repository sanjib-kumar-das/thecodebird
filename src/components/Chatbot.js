import "./styles/chatbot.css";
import React from "react";
import coffee from "./images/coffee.gif";

export default function Chatbot() {
  return (
    <>
      <div className="div">
        <div
          className="div"
          // data-bs-toggle="tooltip"
          // data-bs-placement="left"
          title="Buy me a coffee"
        >
          <a
            href="https://www.buymeacoffee.com/thecodebird"
            target="blank"
            rel="noreferrer"
          >
            <img
              className="botimg position-fixed bottom-0 end-0 chatbtn fixed-sm-bottom mx-auto my-1 fab fa-bounce"
              src={coffee}
              alt="coffee"
              style={{
                height: "10em",
                width: "10rem",
                cursor: "pointer",
              }}
              // data-bs-toggle="offcanvas"
              // data-bs-target="#offcanvasRight"
              // aria-controls="offcanvasRight"
            />
          </a>
        </div>
        {/* </button> */}
      </div>
    </>
  );
}
