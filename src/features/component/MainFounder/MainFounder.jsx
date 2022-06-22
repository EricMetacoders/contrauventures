import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Box, Button, useMediaQuery, useTheme } from "@material-ui/core";
import img1 from "../../../img/founder1.png";
import img2 from "../../../img/founder2.png";
import img3 from "../../../img/founder3.png";
import img1mb from "../../../img/founder1mb.png";
import img2mb from "../../../img/founder2mb.png";
import img3mb from "../../../img/founder3mb.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
MainFounder.propTypes = {};

function MainFounder(props) {
  //RESPONSIVE
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const contentdatacategory = [
    { id: 1, name: "View All" },
    { id: 2, name: "Category 1" },
    { id: 3, name: "Category 2" },
    { id: 4, name: "Category 3" },
  ];

  var listimgfounder = [
    { id: 1, imgUrl: img1 },
    { id: 2, imgUrl: img2 },
    { id: 3, imgUrl: img3 },
    { id: 4, imgUrl: img3 },
    { id: 5, imgUrl: img1 },
    { id: 6, imgUrl: img2 },
    { id: 7, imgUrl: img2 },
    { id: 8, imgUrl: img3 },
    { id: 9, imgUrl: img1 },
  ];

  const [clicked, setClicked] = useState(contentdatacategory[0].name);
  const [listfounder, setListFounder] = useState(listimgfounder);
  const history = useNavigate();
  useEffect(() => {
    if (isMatch) {
      console.log("2");
      setListFounder([
        { id: 1, imgUrl: img1mb },
        { id: 2, imgUrl: img2mb },
        { id: 3, imgUrl: img3mb },
        { id: 4, imgUrl: img3mb },
        { id: 5, imgUrl: img1mb },
        { id: 6, imgUrl: img2mb },
        { id: 7, imgUrl: img2mb },
        { id: 8, imgUrl: img3mb },
      ]);
    }
  }, [isMatch]);

  const carouselProperties = {
    // initialSlide: 3,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const dealClick = (item) => {
    setClicked(item.name);
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }
    if (isMatch) {
      var shuffle_array = shuffle([
        { id: 1, imgUrl: img1mb },
        { id: 2, imgUrl: img2mb },
        { id: 3, imgUrl: img3mb },
        { id: 4, imgUrl: img3mb },
        { id: 5, imgUrl: img1mb },
        { id: 6, imgUrl: img2mb },
        { id: 7, imgUrl: img2mb },
        { id: 8, imgUrl: img3mb },
      ]);
      setListFounder(shuffle_array);
    } else {
      var shuffle_array = shuffle(listimgfounder);
      setListFounder(shuffle_array);
    }
  };

  const clickDetailFounder = () => {
    history("/detailinterview");
  };
  return (
    <div className="rootmainfounder">
      {/* FRAME BUTTON */}

      {isMatch ? (
        <Box className="carouselcategory">
          <Slider {...carouselProperties}>
            {contentdatacategory.map((item) => (
              <Box
                key={item.id}
                className={
                  clicked == item.name
                    ? "frame-icon-main tab-active"
                    : "frame-icon-main"
                }
                onClick={() => dealClick(item)}
              >
                <Box className="itemslide">{item.name}</Box>
              </Box>
            ))}
          </Slider>
        </Box>
      ) : (
        <div className="framebutton">
          {contentdatacategory.map((item) => (
            <div
              key={item.id}
              className={
                clicked == item.name
                  ? "buttoncategory-active"
                  : "buttoncategory"
              }
              onClick={() => dealClick(item)}
            >
              <div className="detailtitlebutton">{item.name}</div>
            </div>
          ))}
        </div>
      )}
      {/* FRAME FOUNDER */}
      <div className="framefounder">
        {listfounder.map((item) => (
          <div className="frameimgfounder" onClick={clickDetailFounder}>
            <img src={item.imgUrl} alt="" className="imgfounder" />
            <Box className="framedetailfoundername">
              <Box className="detailfoundername">
                FOUNDER
                <Box className="titlename">NAME</Box>
              </Box>
            </Box>
            <Box className="titledetail">
              Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainFounder;
