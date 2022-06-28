import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Group from "./Components/Group/Group";
import Founders from "./Components/Founders/Founders";
import Portfolio from "./Components/Portfolio/Portfolio";
import ValueAdd from "./Components/ValueAdd/ValueAdd";
import Faq from "./Components/Faq/Faq";
import News from "./Components/News/News";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./index.css";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Group />
      <Founders />
      <Portfolio />
      <ValueAdd />
      <Faq />
      <News />
      <Contact />
      <Footer />
    </>
  );
}
