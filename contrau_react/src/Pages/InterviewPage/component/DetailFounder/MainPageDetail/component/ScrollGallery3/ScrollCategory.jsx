import React, { createRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { useRef } from "react";

ScrollCategory.propTypes = {};

const arr = [
  {
    id: 1,
    name: "one",
  },
  {
    id: 2,
    name: "two",
  },
];
function ScrollCategory(props) {
  const itemsRef = useRef([]);
  // you can access the elements with itemsRef.current[n]

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, arr.length);
  }, [arr]);

  const clickToPosition = (item) => {
    console.log(item);
    console.log(item.offsetTop);
  };

  return (
    <div>
      <div className="menu">
        {arr.map((item, i) => (
          <a key={i} href={`#${item.name}`} className="category">
            {item.name}
          </a>
        ))}
      </div>

      {arr.map((item, i) => (
        <div
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
          onClick={() => clickToPosition(itemsRef.current[i])}
          className="frame-element"
        >
          <div id={item.name} className="element">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScrollCategory;
