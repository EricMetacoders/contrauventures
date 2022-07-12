import React from "react";
import PropTypes from "prop-types";
import Scrollspy from "react-scrollspy";
import ItemGallery from "./ItemGallery";
import "./style.scss";
ScrollGallery.propTypes = {};

function ScrollGallery(props) {
  return (
    <div>
      <ItemGallery />
      <Scrollspy
        className="scrollspy"
        items={[
          "section-1",
          "section-2",
          "section-3",
          "section-4",
          "section-5",
        ]}
        currentClassName="isCurrent"
      >
        <li>
          <a href="#section-1">section 1</a>
        </li>
        <li>
          <a href="#section-2">section 2</a>
        </li>
        <li>
          <a href="#section-3">section 3</a>
        </li>
        <li>
          <a href="#section-4">section 4</a>
        </li>
        <li>
          <a href="#section-5">section 5</a>
        </li>
      </Scrollspy>
    </div>
  );
}

export default ScrollGallery;
