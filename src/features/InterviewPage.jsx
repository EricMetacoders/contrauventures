import React from "react";
import PropTypes from "prop-types";
import HeaderComponent from "./component/Header/HeaderComponent";
import MainFounder from "./component/MainFounder/MainFounder";
import FooterComponent from "./component/Footer/Footer";

InterviewPage.propTypes = {};

function InterviewPage(props) {
  return (
    <div>
      <HeaderComponent />
      <MainFounder />
      <FooterComponent />
    </div>
  );
}

export default InterviewPage;
