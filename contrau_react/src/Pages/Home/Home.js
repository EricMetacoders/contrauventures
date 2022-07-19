import React, { useRef } from "react";
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
import NewGroup from "./Components/Group/NewGroup";
import Loading from "../../Components/Loading/Loading";
import { useLocation } from "react-router-dom";
export default function Home() {
  const location = useLocation();
  const loading = useSelector((state) => state.homeSlice.loading);
  const resultRef = useRef(null);
  const partnersRef = useRef(null);

  return (
    <>
      <Header resultRef={resultRef} partnersRef={partnersRef} />
      <Hero />
      {/* <Group ref={partnersRef} /> */}
      <NewGroup ref={partnersRef} />
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
