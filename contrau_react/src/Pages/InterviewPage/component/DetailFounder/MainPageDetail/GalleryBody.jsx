import React, { useEffect } from "react";
import PropTypes from "prop-types";
// import "./component/gallerystyle.scss";
import SlideGallery2 from "./component/SlideGallery2";
import ScrollGallery from "./component/ScrollGallery/ScrollGallery";
GalleryBody.propTypes = {};

function GalleryBody({ detailFounder }) {
  useEffect(() => {}, []);
  return (
    <div className="rootgallery">
      <ScrollGallery detailFounder={detailFounder} />
    </div>
  );
}

export default GalleryBody;
