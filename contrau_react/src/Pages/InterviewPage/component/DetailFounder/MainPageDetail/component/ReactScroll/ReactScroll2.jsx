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
  async function getAPIGallery() {
    try {
      let _listGallery = await interviewServices.getGallery();
      return _listGallery;
    } catch (error) {
      console.log("Failed to fetch", error);
    }
  }
  const [listGallery, setListGallery] = useState([{}]);

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
  const onScroll = () => {
    const position = window.pageYOffset;

    if (position >= 715) {
      const myReference = refCategory.current;
      myReference.style.display = "block";
    } else if (position < 700) {
      const myReference = refCategory.current;
      myReference.style.display = "none";
    }
  };

  // USE EFFECT TO APPLY LIBRARY AND HIDE AND SHOW YEAR CATEGORY
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
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
      console.log("end", arguments);
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
  console.log("itemsRef:", itemsRef);
  // you can access the elements with itemsRef.current[n]

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, listGallery.length);
  }, [listGallery]);

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
                  activeClass="active"
                  className={item.year}
                  to={item.year}
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{ color: "white", background: "none" }}
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
            <Element
              name={item.year}
              className="element"
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <div className="rootgallery">
                <div key={item.year} className="carousel-gallery">
                  <div
                    className={
                      item.year == "2014" ||
                      item.year == "2018" ||
                      item.year == "2020"
                        ? "frameimgmain"
                        : "frameimgmain2 "
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
