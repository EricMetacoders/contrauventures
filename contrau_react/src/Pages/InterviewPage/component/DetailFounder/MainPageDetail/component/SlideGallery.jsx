import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, debounce, useMediaQuery, useTheme } from "@material-ui/core";
import { collection, wasClick } from "./ChangeImage.js";
import { interviewServices } from "../../../../../../services/interviewService";
import { useParams } from "react-router-dom";
import { current } from "@reduxjs/toolkit";
import "./ChangeImage.js";
SlideGallery.propTypes = {};

function SlideGallery({ detailFounder }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  async function getAPIGallery() {
    try {
      let _listGallery = await interviewServices.getGallery();
      return _listGallery;
    } catch (error) {
      console.log("Failed to fetch", error);
    }
  }
  const [listGallery, setListGallery] = useState([{}]);

  const changeColor2 = (current) => {
    // if (!isMatch) {
    // CHANGE ADD COLOR SLIDE ACTIVE
    let addColorImg = document.querySelector(".slick-active");

    if (listGallery) {
      addColorImg.getElementsByTagName("img")[0].style.filter = "grayscale(0)";
      addColorImg.getElementsByTagName("img")[1].style.filter = "grayscale(0)";
      addColorImg.getElementsByTagName("img")[2].style.filter = "grayscale(0)";
      addColorImg.getElementsByTagName("img")[3].style.filter = "grayscale(0)";

      // ADD NO COLOR
      // CHANGE NO COLOR IMG1
      let noColorImg1 = document.querySelectorAll(
        ".slick-slide:not(.slick-active)"
      );
      for (var i = 0; i < noColorImg1.length; i++) {
        noColorImg1[i].getElementsByTagName("img")[0].style.filter =
          "grayscale(100%)";
        noColorImg1[i].getElementsByTagName("img")[1].style.filter =
          "grayscale(100%)";
        noColorImg1[i].getElementsByTagName("img")[2].style.filter =
          "grayscale(100%)";
        noColorImg1[i].getElementsByTagName("img")[3].style.filter =
          "grayscale(100%)";
      }
    }
  };
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

  // GET DATA TO RENDER FIRST TIME
  useEffect(() => {
    // changeColor();
    async function fechData() {
      // FIND ID FROM LIST ALL GALLERY
      let listfoundergallery = await getGalleryFounderList();

      var findID = await Object.values(listfoundergallery.data).find(
        (element) =>
          element.acf.first_name == detailFounder.acf.first_name &&
          element.acf.last_name == detailFounder.acf.last_name
      );

      // HAVE ID ==> TO GET API DETAIL GALLERY OF FOUNDER
      let detailfoundergallery = await getGalleryFounderDetail(findID.id);

      // console.log("detailfoundergallery:", detailfoundergallery.data.acf.image);

      var array = [];

      Object.values(detailfoundergallery.data.acf.image).map((item) => {
        array.push(item);
      });
      setListGallery([...array]);
    }
    fechData();
  }, []);

  useEffect(() => {
    // ADD NO COLOR
    // CHANGE NO COLOR IMG1
    let noColorImg1 = document.querySelectorAll(
      ".slick-slide:not(.slick-active)"
    );
    for (var i = 0; i < noColorImg1.length; i++) {
      noColorImg1[i].getElementsByTagName("img")[0].style.filter =
        "grayscale(100%)";
      noColorImg1[i].getElementsByTagName("img")[1].style.filter =
        "grayscale(100%)";
      noColorImg1[i].getElementsByTagName("img")[2].style.filter =
        "grayscale(100%)";
      noColorImg1[i].getElementsByTagName("img")[3].style.filter =
        "grayscale(100%)";
    }
  }, []);

  const slider = useRef(null);

  function scroll(e) {
    if (slider === null) return 0;
    var scrollTo = null;

    e.wheelDelta > 0 ? slider.current.slickNext() : slider.current.slickPrev();
  }
  function mouseEnterSlide(e) {
    if (slider === null) return 0;
    document.body.style.overflow = "hidden";
    console.log("1");
  }
  function mouseOverSlide(e) {
    if (slider === null) return 0;
    document.body.style.overflow = "auto";
    console.log("2");
  }
  function clickMe(params) {
    document.body.style.overflow = "hidden";
  }
  function clickMe2(params) {
    document.body.style.overflow = "auto";
  }
  useEffect(() => {
    // window.addEventListener("wheel", scroll, true);
    // var getSlide = document.getElementsByClassName("slick-list")[0];
    // getSlide.addEventListener("mouseenter", mouseEnterSlide);
    // getSlide.addEventListener("mouseover", mouseOverSlide);
    return () => {
      // window.removeEventListener("wheel", scroll, true);
      // getSlide.removeEventListener("mouseenter", mouseEnterSlide, false);
      // getSlide.removeEventListener("mouseover", mouseOverSlide, false);
    };
  }, []);
  const settings = {
    dots: true,
    vertical: true,
    slidesToShow: 1, //when add/edit css img(item)/per slide ==> height change ==> reset to 0 and to 1
    slidesToScroll: 1,
    verticalSwiping: true,
    arrows: false,
    speed: 1000,
    afterChange: (current) => changeColor2(current),
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
    customPaging: (i) => <div>{listGallery[i].year}</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
    ],
  };
  const bannerData =
    Object.keys(listGallery).length > 1 &&
    listGallery?.map((item) => (
      <div key={item.year} className="carousel-gallery">
        <div
          className={
            item.year == "2014" || item.year == "2018" || item.year == "2020"
              ? "frameimgmain"
              : "frameimgmain2 "
          }
        >
          <div className="frameimgtop">
            <div className="frameimg1">
              <img
                style={{ filter: "grayscale(0%)" }}
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
                style={{ filter: "grayscale(0%)" }}
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
            <Box className="frameimg3">
              <img
                style={{ filter: "grayscale(0%)" }}
                src={
                  item.year == "2014" ||
                  item.year == "2018" ||
                  item.year == "2020"
                    ? `${item.image[6].guid}
                       `
                    : `${item.image[2].guid}`
                }
              />
            </Box>
            <Box className="frameimg4">
              <img
                style={{ filter: "grayscale(0%)" }}
                src={
                  (item.year == "2014" ||
                    item.year == "2018" ||
                    item.year == "2020") &&
                  `${item.image[7].guid}`
                }
              />
            </Box>
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
    ));

  return (
    <div>
      <Slider {...settings} ref={slider}>
        {bannerData}
      </Slider>
    </div>
  );
}

export default SlideGallery;
