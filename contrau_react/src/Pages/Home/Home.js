import React, { useEffect, useState } from "react";
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
import { useLocation } from "react-router-dom";
export default function Home() {
  const location = useLocation();
  const loading = useSelector((state) => state.homeSlice.loading);
  useEffect(() => {
    location?.state?.name === "porfolio"
      ? window.scrollTo({
          top: 6343,
          behavior: "smooth",
        })
      : window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Group />
      <Founders />
      <NewPortfolio />
      <ValueAdd />
      <Faq />
      {/* <News /> */}
      <Contact />
      <Footer />
    </>
  );
}
