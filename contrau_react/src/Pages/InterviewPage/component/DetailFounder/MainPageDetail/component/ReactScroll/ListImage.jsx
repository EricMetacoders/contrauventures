import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Element, Events, Link } from "react-scroll";
ListImage.propTypes = {};

function ListImage(listGallery, itemsRef) {
  // CHECK LENGTH FOR YEAR
  const checkLength = (numberImage) => {
    if (!numberImage) {
      return;
    }

    const frameImage = {
      1: "frameimgmain1",
      2: "frameimgmain2",
      3: "frameimgmain3",
      4: "frameimgmain4",
    };

    return frameImage[numberImage];
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20vw" }}>
      {Object.keys(listGallery).length > 1 &&
        listGallery[0].image &&
        listGallery[0].image.length > 0 &&
        listGallery?.map((item, index) => (
          <Element name={item.year} className="element" key={item.year}>
            <div
              className="rootgallery"
              // onScroll={() => onScroll2(index)}
            >
              <div
                key={item.year}
                className="carousel-gallery"
                ref={(el) => (itemsRef.current[index] = el)}
              >
                <div className={checkLength(item?.image?.length)}>
                  <div className="frameimgtop">
                    <div className="frameimg1">
                      <img
                        style={{ filter: "grayscale(100%)" }}
                        // src={item?.image[1]?.guid}
                        src={
                          item.image && item.image.length > 0
                            ? item?.image[0]?.guid
                            : ""
                        }
                      />
                    </div>
                    <div className="frameimg2">
                      <img
                        style={{ filter: "grayscale(100%)" }}
                        src={
                          item.image && item.image.length > 0
                            ? item.image[1]?.guid
                            : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="frameimgbot">
                    <div className="frameimg3">
                      <img
                        style={{ filter: "grayscale(100%)" }}
                        src={
                          item.image && item.image.length > 0
                            ? item.image[2]?.guid
                            : ""
                        }
                      />
                    </div>
                    <div className="frameimg4">
                      <img
                        style={{ filter: "grayscale(100%)" }}
                        src={
                          item.image && item.image.length > 0
                            ? item.image[3]?.guid
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="frametitleyear"
                  style={
                    checkLength(item?.image?.length) == "frameimgmain1"
                      ? { top: "35%" }
                      : {}
                  }
                >
                  <div className="titleyeardetail">{item.year}</div>
                </div>
              </div>
            </div>
          </Element>
        ))}
    </div>
  );
}

export default ListImage;
