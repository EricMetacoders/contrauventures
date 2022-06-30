import React from "react";
import PropTypes from "prop-types";
import "./component/gallerystyle.scss";
import SlideGallery from "./component/SlideGallery";
GalleryBody.propTypes = {};

function GalleryBody({ detailFounder }) {
  return (
    <div className="rootgallery">
      <SlideGallery detailFounder={detailFounder} />
    </div>
  );
}

export default GalleryBody;
