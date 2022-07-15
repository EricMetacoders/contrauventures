import React from "react";
import "./component/ReactScroll/gallerystyle.scss";
import Section2 from "./component/ReactScroll/ReactScroll2";
GalleryBody.propTypes = {};

function GalleryBody({ detailFounder }) {
  return (
    <div>
      {/* <Section /> */}
      <Section2 />
      {/* <SlideGallery detailFounder={detailFounder} /> */}
    </div>
  );
}

export default GalleryBody;
