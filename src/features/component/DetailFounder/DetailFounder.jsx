import React from "react";
import PropTypes from "prop-types";
import HeaderComponent from "../Header/HeaderComponent";
import MainPageDetail from "./MainPageDetail/MainPageDetail";

DetailFounder.propTypes = {};

function DetailFounder(props) {
  return (
    <div>
      <HeaderComponent />
      <MainPageDetail />
    </div>
  );
}

export default DetailFounder;
