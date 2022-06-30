import React from "react";
import PropTypes from "prop-types";
import HeaderComponent from "../InterviewPage/component/Header/HeaderComponent";
import MainFounder from "../InterviewPage/component/MainFounder/MainFounder";
import FooterComponent from "../InterviewPage/component/Footer/Footer";

InterviewPage.propTypes = {};

function InterviewPage(props) {
  return (
    <div>
      <HeaderComponent pagecurrent="story" />
      <MainFounder />
      <FooterComponent />
    </div>
  );
}

export default InterviewPage;
