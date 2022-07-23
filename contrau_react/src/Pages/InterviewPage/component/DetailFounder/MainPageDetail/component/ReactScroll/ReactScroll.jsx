import { useMediaQuery } from "@mui/material";

import React, { useEffect, useRef, useState } from "react";

import {
  animateScroll as scroll,
  Element,
  Events,
  Link,
  scroller,
} from "react-scroll";
import styled from "styled-components";
import { interviewServices } from "../../../../../../../services/interviewService";

function ReactScroll({ founderID }) {
  const [listGallery, setListGallery] = useState([{}]);
  const matchMobile = useMediaQuery("(max-width:639px)");
  // GET FOUNDER BY FOUNDER ID
  async function getFounderID(id) {
    try {
      let detailgallery = await interviewServices.getFounderByFounderID(id);

      return detailgallery;
    } catch (error) {
      console.log("Failed to fetch", error);
    }
  }
  // GET DETAIL GALLERY
  async function getGalleryFounderDetail(id) {
    try {
      let detailgallery = await interviewServices.getGalleryFounder(id);

      return detailgallery;
    } catch (error) {
      console.log("Failed to fetch", error);
    }
  }

  const refCategory = useRef(null);
  // CHECK MOBILE OR PC TO CHANGE HIDE/SHOW CATEGORY YEAR
  const onScroll = () => {
    const position = window.pageYOffset;
    if (!matchMobile) {
      if (position >= 715) {
        const myReference = refCategory.current;
        myReference.style.display = "block";
      } else if (position < 700) {
        const myReference = refCategory.current;
        myReference.style.display = "none";
      }
    } else {
      if (position >= 500) {
        const myReference = refCategory.current;
        myReference.style.display = "block";
      } else if (position < 600) {
        const myReference = refCategory.current;
        myReference.style.display = "none";
      }
    }
  };
  const [click, setclick] = useState(false);
  // USE EFFECT TO APPLY LIBRARY AND HIDE AND SHOW YEAR CATEGORY
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      // Remove animation add color of user scroll roller
      // window.removeEventListener("scroll", scrollHandler);
    });

    Events.scrollEvent.register("end", function () {
      // Add again animation add color of user scroll roller
      // window.addEventListener("scroll", scrollHandler);
      var addColor =
        arguments[1].children[0].children[0].children[0].children[0].children[0]
          .children[0];
      var addColor2 =
        arguments[1].children[0].children[0].children[0].children[0].children[1]
          .children[0];
      var addColor3 =
        arguments[1].children[0].children[0].children[0].children[1].children[0]
          .children[0];
      var addColor4 =
        arguments[1].children[0].children[0].children[0].children[1].children[1]
          .children[0];
      addColor.style.filter = "grayscale(0%)";
      addColor2.style.filter = "grayscale(0%)";
      addColor3.style.filter = "grayscale(0%)";
      addColor4.style.filter = "grayscale(0%)";
      // if (
      //   arguments[0] == itemsRef.current[0].children[1].children[0].textContent
      // ) {
      //   console.log("bang");
      // }
      // }
      for (var i = 0; i < itemsRef.current.length; i++) {
        if (
          arguments[0] !=
          itemsRef.current[i].children[1].children[0].textContent
        ) {
          var addColor =
            itemsRef.current[i].children[0].children[0].children[0].children[0];
          var addColor2 =
            itemsRef.current[i].children[0].children[0].children[1].children[0];
          var addColor3 =
            itemsRef.current[i].children[0].children[1].children[0].children[0];
          var addColor4 =
            itemsRef.current[i].children[0].children[1].children[1].children[0];

          addColor.style.filter = "grayscale(100%)";
          addColor2.style.filter = "grayscale(100%)";
          addColor3.style.filter = "grayscale(100%)";
          addColor4.style.filter = "grayscale(100%)";
        }
        // setoff(0);
      }
    });

    window.addEventListener("scroll", onScroll);
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  // GET DATA TO RENDER FIRST TIME
  useEffect(() => {
    // changeColor();
    async function fechData() {
      // FIND ID FROM LIST ALL GALLERY

      let detailfoundergallery = await getGalleryFounderDetail(founderID);

      var array = [];

      Object.values(detailfoundergallery.data.acf.image).map((item) => {
        array.push(item);
      });
      setListGallery([...array]);
    }
    fechData();
  }, []);

  const itemsRef = useRef([]);
  const itemsRefYear = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, listGallery.length);
  }, [listGallery]);

  const scrollHandler = () => {
    const between = (x, min, max) => {
      return x >= min && x <= max;
    };
    // Subtract 1000 to get offset center image

    var getCenter;
    if (matchMobile) {
      getCenter = window.innerHeight - 350; // 360x740 => 450
    } else {
      getCenter = 250;
    }

    let screenSize =
      window.pageYOffset +
      window.innerHeight -
      (window.innerHeight + itemsRef.current[0].offsetTop + getCenter);

    var getId = -1;
    for (var i = 0; i < itemsRef.current.length; i++) {
      // CHECK LAST ITEM
      if (screenSize >= itemsRef.current.at(-1).offsetTop) {
        getId = i;
      } else {
        if (
          between(
            screenSize,
            itemsRef.current[i].offsetTop,
            itemsRef.current[i].offsetTop + 200
          )
        ) {
          getId = i;
          break;
        }
      }
    }

    if (getId >= 0) {
      // ADD COLOR WHEN SCROLL TO CENTER IMAGE
      var addColor =
        itemsRef.current[getId].children[0].children[0].children[0].children[0];
      var addColor2 =
        itemsRef.current[getId].children[0].children[0].children[1].children[0];
      var addColor3 =
        itemsRef.current[getId].children[0].children[1].children[0].children[0];
      var addColor4 =
        itemsRef.current[getId].children[0].children[1].children[1].children[0];

      addColor.style.filter = "grayscale(0%)";
      addColor2.style.filter = "grayscale(0%)";
      addColor3.style.filter = "grayscale(0%)";
      addColor4.style.filter = "grayscale(0%)";

      // NO COLOR ALL IMAGE EXCEPT CURRENT IMAGE
      if (getId + 1 < itemsRef.current.length) {
        var noColor =
          itemsRef.current[getId + 1].children[0].children[0].children[0]
            .children[0];
        var noColor2 =
          itemsRef.current[getId + 1].children[0].children[0].children[1]
            .children[0];
        var noColor3 =
          itemsRef.current[getId + 1].children[0].children[1].children[0]
            .children[0];
        var noColor4 =
          itemsRef.current[getId + 1].children[0].children[1].children[1]
            .children[0];
        noColor.style.filter = "grayscale(100%)";
        noColor2.style.filter = "grayscale(100%)";
        noColor3.style.filter = "grayscale(100%)";
        noColor4.style.filter = "grayscale(100%)";
      }
      if (getId - 1 >= 0) {
        var noColor5 =
          itemsRef.current[getId - 1].children[0].children[0].children[0]
            .children[0];

        var noColor6 =
          itemsRef.current[getId - 1].children[0].children[0].children[1]
            .children[0];
        var noColor7 =
          itemsRef.current[getId - 1].children[0].children[1].children[0]
            .children[0];
        var noColor8 =
          itemsRef.current[getId - 1].children[0].children[1].children[1]
            .children[0];

        noColor5.style.filter = "grayscale(100%)";
        noColor6.style.filter = "grayscale(100%)";
        noColor7.style.filter = "grayscale(100%)";
        noColor8.style.filter = "grayscale(100%)";
      }
    }
  };
  // const [off, setoff] = useState(-150);
  const handleSetActive = (to) => {
    // setoff(-150);
    for (var i = 0; i < itemsRef.current.length; i++) {
      if (to == itemsRef.current[i].children[1].children[0].textContent) {
        var addColor =
          itemsRef.current[i].children[0].children[0].children[0].children[0];
        var addColor2 =
          itemsRef.current[i].children[0].children[0].children[1].children[0];
        var addColor3 =
          itemsRef.current[i].children[0].children[1].children[0].children[0];
        var addColor4 =
          itemsRef.current[i].children[0].children[1].children[1].children[0];

        addColor.style.filter = "grayscale(0%)";
        addColor2.style.filter = "grayscale(0%)";
        addColor3.style.filter = "grayscale(0%)";
        addColor4.style.filter = "grayscale(0%)";
      }
    }
  };

  const handleSetInactive = (to) => {
    for (var i = 0; i < itemsRef.current.length; i++) {
      if (to == itemsRef.current[i].children[1].children[0].textContent) {
        var noColor =
          itemsRef.current[i].children[0].children[0].children[0].children[0];
        var noColor2 =
          itemsRef.current[i].children[0].children[0].children[1].children[0];
        var noColor3 =
          itemsRef.current[i].children[0].children[1].children[0].children[0];
        var noColor4 =
          itemsRef.current[i].children[0].children[1].children[1].children[0];
        noColor.style.filter = "grayscale(100%)";
        noColor2.style.filter = "grayscale(100%)";
        noColor3.style.filter = "grayscale(100%)";
        noColor4.style.filter = "grayscale(100%)";
      }
    }
  };
  // CHECK AT BOTTOM
  const handleScroll3 = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom) {
      // HIDE CATEGORY YEAR
      const myReference = refCategory.current;
      myReference.style.display = "none";
      // ADD COLOR LAST IMGAGES YEAR
      var addColor =
        itemsRef.current[itemsRef.current.length - 1].children[0].children[0]
          .children[0].children[0];
      var addColor2 =
        itemsRef.current[itemsRef.current.length - 1].children[0].children[0]
          .children[1].children[0];
      var addColor3 =
        itemsRef.current[itemsRef.current.length - 1].children[0].children[1]
          .children[0].children[0];
      var addColor4 =
        itemsRef.current[itemsRef.current.length - 1].children[0].children[1]
          .children[1].children[0];

      addColor.style.filter = "grayscale(0%)";
      addColor2.style.filter = "grayscale(0%)";
      addColor3.style.filter = "grayscale(0%)";
      addColor4.style.filter = "grayscale(0%)";

      // noColor.style.filter = "grayscale(100%)";
      // noColor2.style.filter = "grayscale(100%)";
      // noColor3.style.filter = "grayscale(100%)";
      // noColor4.style.filter = "grayscale(100%)";
    } else {
      var noColor =
        itemsRef.current[itemsRef.current.length - 1].children[0].children[0]
          .children[0].children[0];
      var noColor2 =
        itemsRef.current[itemsRef.current.length - 1].children[0].children[0]
          .children[1].children[0];
      var noColor3 =
        itemsRef.current[itemsRef.current.length - 1].children[0].children[1]
          .children[0].children[0];
      var noColor4 =
        itemsRef.current[itemsRef.current.length - 1].children[0].children[1]
          .children[1].children[0];

      if (matchMobile) {
        noColor.style.filter = "grayscale(100%)";
        noColor2.style.filter = "grayscale(100%)";
        noColor3.style.filter = "grayscale(100%)";
        noColor4.style.filter = "grayscale(100%)";
      }
    }
  };

  // ADD SCROLL EVENT FOR CHECK BOTTOM
  useEffect(() => {
    window.addEventListener("scroll", handleScroll3, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll3);
    };
  }, []);

  // CHECK LENGTH FOR YEAR
  const checkLength = (numberImage) => {
    if (numberImage && numberImage > 0) {
      if (numberImage == 4) {
        return "frameimgmain4";
      } else if (numberImage == 3) {
        return "frameimgmain3";
      } else if (numberImage == 1) {
        return "frameimgmain1";
      } else if (numberImage == 2) {
        return "frameimgmain2";
      }
    }
    return;
  };

  return (
    <div className="framemaingallery">
      <div className="categorydetailyear" ref={refCategory}>
        <div className="frameyearcategory">
          {Object.keys(listGallery).length > 1 &&
            listGallery?.map((item, index) => (
              <div ref={(el) => (itemsRefYear.current[index] = el)}>
                <Link
                  className="yeartitle"
                  to={item.year}
                  key={item.year}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={matchMobile ? -250 : -150}
                  // offset={off}
                  onSetActive={handleSetActive}
                  onSetInactive={handleSetInactive}
                >
                  {item.year}
                </Link>
              </div>
            ))}
        </div>
      </div>
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
                            item.image && item.image.length > 0 && item.image
                              ? item?.image[0]?.guid
                              : ""
                          }
                        />
                      </div>
                      <div className="frameimg2">
                        <img
                          style={{ filter: "grayscale(100%)" }}
                          src={
                            item.image && item.image.length > 0 && item.image
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
                            item.image && item.image.length > 0 && item.image
                              ? item.image[2]?.guid
                              : ""
                          }
                        />
                      </div>
                      <div className="frameimg4">
                        <img
                          style={{ filter: "grayscale(100%)" }}
                          src={
                            item.image && item.image.length > 0 && item.image
                              ? item.image[3]?.guid
                              : ""
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="frametitleyear">
                    {item.year && (
                      <div className="titleyeardetail">{item.year}</div>
                    )}
                  </div>
                </div>
              </div>
            </Element>
          ))}
      </div>
    </div>
    // <div>hi</div>
  );
}
export default ReactScroll;
