import React from "react";
import "./component/Gallery/gallerystyle.scss";
import Section from "./component/ReactScroll/ReactScroll";
import Section2 from "./component/ReactScroll/ReactScroll2";
import "./component/ScrollGallery2/style.scss";
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
