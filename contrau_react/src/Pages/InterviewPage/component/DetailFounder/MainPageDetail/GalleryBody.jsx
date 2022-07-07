import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./component/gallerystyle.scss";
import SlideGallery from "./component/SlideGallery";
GalleryBody.propTypes = {};

function GalleryBody({ detailFounder }) {
  useEffect(() => {}, []);
  return (
    <div className="rootgallery">
      <SlideGallery detailFounder={detailFounder} />
    </div>
  );
}

export default GalleryBody;
