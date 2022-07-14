import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ScrollGallery from "./component/ScrollGallery2/ScrollGallery";
import "./component/ScrollGallery2/style.scss";
GalleryBody.propTypes = {};

function GalleryBody({ detailFounder }) {
  return (
    <div id="root2">
      <ScrollGallery detailFounder={detailFounder} />
      {/* <div style={{ background: "gray",height:'140px' }}>FOOTER</div> */}
    </div>
  );
}

export default GalleryBody;
