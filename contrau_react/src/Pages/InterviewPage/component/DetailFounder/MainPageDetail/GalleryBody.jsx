import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SlideGallery from "./component/Gallery/SlideGallery";
import ScrollGallery from "./component/ScrollGallery/ScrollGallery";
GalleryBody.propTypes = {};

function GalleryBody({ detailFounder }) {
  useEffect(() => {}, []);
  return (
    <div className="rootgallery">
      {/* <SlideGallery detailFounder={detailFounder} /> */}
      <ScrollGallery detailFounder={detailFounder} />
    </div>
  );
}

export default GalleryBody;
