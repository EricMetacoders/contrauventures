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

function Section2({ detailFounder }) {
  const [listGallery, setListGallery] = useState([{}]);
  const matchMobile = useMediaQuery("(max-width:639px)");
  // GET LIST ALL GALLERY
  async function getGalleryFounderList() {
    try {
      let listGalleryFounder = await interviewServices.getAllGallery();

      return listGalleryFounder;
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
      if (position >= 400) {
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
      window.removeEventListener("scroll", scrollHandler);
      var noColor =
        arguments[1].children[0].children[0].children[0].children[0].children[0]
          .children[0];
      var noColor2 =
        arguments[1].children[0].children[0].children[0].children[0].children[1]
          .children[0];
      var noColor3 =
        arguments[1].children[0].children[0].children[0].children[1].children[0]
          .children[0];
      var noColor4 =
        arguments[1].children[0].children[0].children[0].children[1].children[1]
          .children[0];
      noColor.style.filter = "grayscale(100%)";
      noColor2.style.filter = "grayscale(100%)";
      noColor3.style.filter = "grayscale(100%)";
      noColor4.style.filter = "grayscale(100%)";
    });

    Events.scrollEvent.register("end", function () {
      // Add again animation add color of user scroll roller
      window.addEventListener("scroll", scrollHandler);
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
      let listfoundergallery = await getGalleryFounderList();

      var findID = await Object.values(listfoundergallery.data).find(
        (element) =>
          //   element.acf.first_name == detailFounder.acf.first_name &&
          //   element.acf.last_name == detailFounder.acf.last_name
          element.acf.first_name == "Nathan" && element.acf.last_name == "Do"
      );

      // HAVE ID ==> TO GET API DETAIL GALLERY OF FOUNDER
      let detailfoundergallery = await getGalleryFounderDetail(findID.id);

      var array = [];

      Object.values(detailfoundergallery.data.acf.image).map((item) => {
        array.push(item);
      });
      setListGallery([...array]);
    }
    fechData();
  }, []);

  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, listGallery.length);
  }, [listGallery]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  };

  const scrollHandler = () => {
    const between = (x, min, max) => {
      return x >= min && x <= max;
    };
    // Subtract 1000 to get offset center image

    var getCenter;
    if (matchMobile) {
      getCenter = 0;
    } else {
      getCenter = 250;
    }

    let screenSize =
      window.pageYOffset +
      window.innerHeight -
      (window.innerHeight + itemsRef.current[0].offsetTop + getCenter);
    console.log(
      "itemsRef.current[0].offsetTop:",
      itemsRef.current[0].offsetTop
    );

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

  return (
    <div
      style={{
        backgroundColor: "#151515",
        position: "relative",
        paddingBottom: "18%",
        paddingTop: "15%",
      }}
    >
      <div className="categorydetailyear" ref={refCategory}>
        <div className="frameyearcategory">
          {Object.keys(listGallery).length > 0 &&
            listGallery?.map((item) => (
              <div>
                <Link
                  className="yeartitle"
                  to={item.year}
                  key={item.year}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {item.year}
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "20vw" }}>
        {Object.keys(listGallery).length > 1 &&
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
                  <div
                    className={
                      item.year == "2014" ||
                      item.year == "2018" ||
                      item.year == "2020"
                        ? "frameimgmain"
                        : "frameimgmain2"
                    }
                  >
                    <div className="frameimgtop">
                      <div className="frameimg1">
                        <img
                          style={{ filter: "grayscale(100%)" }}
                          src={
                            item.year == "2014" ||
                            item.year == "2018" ||
                            item.year == "2020"
                              ? `${item.image[4].guid}
                    `
                              : `${item.image[0].guid}`
                          }
                        />
                      </div>
                      <div className="frameimg2">
                        <img
                          style={{ filter: "grayscale(100%)" }}
                          src={
                            item.year == "2014" ||
                            item.year == "2018" ||
                            item.year == "2020"
                              ? `${item.image[5].guid}`
                              : `${item.image[1].guid}`
                          }
                        />
                      </div>
                    </div>

                    <div className="frameimgbot">
                      <div className="frameimg3">
                        <img
                          style={{ filter: "grayscale(100%)" }}
                          src={
                            item.year == "2014" ||
                            item.year == "2018" ||
                            item.year == "2020"
                              ? `${item.image[6].guid}
                       `
                              : `${item.image[2].guid}`
                          }
                        />
                      </div>
                      <div className="frameimg4">
                        <img
                          style={{ filter: "grayscale(100%)" }}
                          src={
                            (item.year == "2014" ||
                              item.year == "2018" ||
                              item.year == "2020") &&
                            `${item.image[7].guid}`
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="frametitleyear">
                    <div className="titleyeardetail">{item.year}</div>
                    <div className="detailtitle">
                      <div>{item.title_top}</div>
                      <div>{item.title_bottom}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Element>
          ))}
      </div>
    </div>
  );
}
export default Section2;
