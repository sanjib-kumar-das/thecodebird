import { useRef } from "react";
import emailjs from "@emailjs/browser";
import graphic from "./images/contact-anim.gif";
import "./styles/contact.css";

export default function Contact() {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "contact_service",
        "template_4oa2a1b",
        refForm.current,
        "RJy48fHoAV--GvoIN"
      )

      .then(
        () => {
          alert("Message has been sent successfully!!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send your message! Please try again...");
        }
      );
  };
  return (
    <>
      <div className="main">
        <div className="row d-flex mx-auto">
          <div className="text col-sm-6 px-5">
            <div className="codebird">
              <h1 className="text-primary">
                C<span className="text-warning">0</span>ntact Us
              </h1>
            </div>
            <div className="sub-text my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              dolorum voluptate, laudantium accusantium deserunt eos explicabo,
              ipsa exercitationem asperiores voluptatum illum quasi id, sequi
              impedit nobis. Doloremque corporis veritatis neque?
            </div>
            <div className="contact-form mt-5">
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      className="rounded-pill"
                      type="text"
                      name="name"
                      id=""
                      placeholder="Name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      className="rounded-pill"
                      type="email"
                      name="email"
                      id=""
                      placeholder="Email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      className="rounded-pill"
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      className="rounded"
                      placeholder="Messsage"
                      name="message"
                      id=""
                      cols="30"
                      rows="10"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input
                      type="submit"
                      className="flat-button button btn bg-warning"
                      value="SEND"
                    />
                  </li>
                </ul>
              </form>
            </div>
          </div>

          <div className="anim col-sm-6 img-fluid mx-auto d-flex">
            <img
              className="home-anim rounded img-fluid mx-auto d-flex"
              src={graphic}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
