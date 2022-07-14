import React from "react";
import SlideGallery from "./component/Gallery/SlideGallery";
import Section from "./component/ReactScroll/ReactScroll";
import "./component/ScrollGallery2/style.scss";
import "./component/Gallery/gallerystyle.scss";
GalleryBody.propTypes = {};

function GalleryBody({ detailFounder }) {
  return (
    <div>
      {/* <ScrollGallery detailFounder={detailFounder} /> */}
      {/* <div style={{ background: "gray",height:'140px' }}>FOOTER</div> */}
      {/* <ScrollCategory /> */}
      {/* <Section /> */}
      <SlideGallery detailFounder={detailFounder} />
    </div>
  );
}

export default GalleryBody;
