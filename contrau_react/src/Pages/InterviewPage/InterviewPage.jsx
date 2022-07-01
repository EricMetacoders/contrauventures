import React from "react";
import PropTypes from "prop-types";
import HeaderComponent from "../InterviewPage/component/Header/HeaderComponent";
import MainFounder from "../InterviewPage/component/MainFounder/MainFounder";
import FooterComponent from "../InterviewPage/component/Footer/Footer";
import { useEffect } from "react";

InterviewPage.propTypes = {};

function InterviewPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeaderComponent pagecurrent="story" />
      <MainFounder />
      <FooterComponent />
    </div>
  );
}

export default InterviewPage;
