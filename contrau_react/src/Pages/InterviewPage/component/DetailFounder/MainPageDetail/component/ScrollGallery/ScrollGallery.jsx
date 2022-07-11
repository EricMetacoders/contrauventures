import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import ScrollData from "./ScrollData";
import "./style.scss";

ScrollGallery.propTypes = {};

function ScrollGallery(props) {
  return (
    <div style={{ background: "red", display: "relative" }}>
      <ScrollData />
      <Box style={{ height: "500" }}>
        <Box id="section1">
          <h1>Section 1</h1>
        </Box>
        <Box id="section2">
          <h1>Section 2</h1>
        </Box>
        <Box id="section3">
          <h1>Section 3</h1>
        </Box>
        <Box id="section4">
          <h1>Section 4</h1>
        </Box>
      </Box>
    </div>
  );
}

export default ScrollGallery;
