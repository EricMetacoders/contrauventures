import React from "react";
import PropTypes from "prop-types";

ItemGallery.propTypes = {};

function ItemGallery(props) {
  return (
    <div>
      <section id="section-1" style={{ height: "800px", background: "gray" }}>
        <h2>Section 1</h2>
      </section>
      <section id="section-2" style={{ height: "800px", background: "gray" }}>
        <h2>Section 2</h2>
      </section>
      <section id="section-3" style={{ height: "800px", background: "gray" }}>
        <h2>Section 3</h2>
      </section>
      <section id="section-4" style={{ height: "800px", background: "gray" }}>
        <h2>Section 4</h2>
      </section>
      <section id="section-5" style={{ height: "800px", background: "gray" }}>
        <h2>Section 5</h2>
      </section>
    </div>
  );
}

export default ItemGallery;
