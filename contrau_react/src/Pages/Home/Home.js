import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Group from "./Components/Group/Group";
import Founders from "./Components/Founders/Founders";
import ValueAdd from "./Components/ValueAdd/ValueAdd";
import Faq from "./Components/Faq/Faq";
import News from "./Components/News/News";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./index.css";
import NewPortfolio from "./Components/NewPortfolio/NewPortfolio";
import Loading from "../../Components/Loading/Loading";
export default function Home() {
  const loading = useSelector((state) => state.homeSlice.loading);

  // Ref of scroll to Partners Component and About Us Component
  const resultRef = useRef(null);
  const partnersRef = useRef(null);

  // scroll to top
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header resultRef={resultRef} partnersRef={partnersRef} />
      <Hero />
      <Group ref={partnersRef} />
      <Founders />
      <NewPortfolio ref={resultRef} />
      <ValueAdd />
      <Faq />
      {/* <News /> */}
      <Contact />
      <Footer />
    </>
  );
}
