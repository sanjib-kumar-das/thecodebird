import React, { useState, useEffect } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Events from "./components/Events";
import Advisor from "./components/Advisor";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Lottie from "lottie-react";
import lottie from "./components/images/scan.json";
// import GetLocation from "./components/GetLocation";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

// import AlanAI from "../src/components/AlanAI";
// import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Lottie
          className="lottie d-flex mx-auto"
          animationData={lottie}
          background="transparent"
        />
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home key="home" />}></Route>
            <Route exact path="about" element={<About key="about" />}></Route>
            <Route
              exact
              path="advisor"
              element={<Advisor key="advisor" />}
            ></Route>
            <Route
              exact
              path="events"
              element={<Events key="events" />}
            ></Route>
            <Route exact path="faq" element={<Faq key="faq" />}></Route>
            <Route
              exact
              path="contact"
              element={<Contact key="contact" />}
            ></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Chatbot />
          <Footer />
        </BrowserRouter>
      )}
      {/* </div> */}

      {/* <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home key="home" />}></Route>
          <Route exact path="about" element={<About key="about" />}></Route>
          <Route
            exact
            path="advisor"
            element={<Advisor key="advisor" />}
          ></Route>
          <Route exact path="events" element={<Events key="events" />}></Route>
          <Route
            exact
            path="contact"
            element={<Contact key="contact" />}
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Chatbot />
        <Footer />
      </BrowserRouter> */}
    </>
  );
}

export default App;
