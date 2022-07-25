import React from "react";
import PropTypes from "prop-types";
import Header from "../Home/Components/Header/Header";

NotFound.propTypes = {};

function NotFound(props) {
  return (
    <div>
      <Header />
      <div className="h-screen flex items-center justify-center ">
        <div style={{ fontSize: "5vw" }}>
          <p>PAGE NOT FOUND</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
