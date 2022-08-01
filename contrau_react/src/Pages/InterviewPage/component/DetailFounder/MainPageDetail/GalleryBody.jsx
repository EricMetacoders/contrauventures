import React from "react";
import "./component/ReactScroll/gallerystyle.scss";
import ReactScroll from "./component/ReactScroll/ReactScroll";
GalleryBody.propTypes = {};

function GalleryBody({ founderID }) {
  return (
    <div>
      <ReactScroll founderID={founderID} />
    </div>
  );
}

export default GalleryBody;
