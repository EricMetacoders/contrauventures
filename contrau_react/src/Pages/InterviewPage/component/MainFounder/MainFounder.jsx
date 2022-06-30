import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Box, Button, useMediaQuery, useTheme } from "@material-ui/core";
import img1 from "../../../../assets/interview-img/founder1.png";
import img2 from "../../../../assets/interview-img/founder2.png";
import img3 from "../../../../assets/interview-img/founder3.png";
import img1mb from "../../../../assets/interview-img/founder1mb.png";
import img2mb from "../../../../assets/interview-img/founder2mb.png";
import img3mb from "../../../../assets/interview-img/founder3mb.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { interviewServices } from "../../../../services/interviewService";
MainFounder.propTypes = {};

function MainFounder(props) {
  //RESPONSIVE
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  // const [listFounder, setListFounder] = useState([]);

  const [listFounder2, setListFounder2] = useState([]);
  async function getListFounder() {
    try {
      let listFounder = await interviewServices.getListFounder();
      return listFounder;
    } catch (error) {
      console.log("Failed to fetch", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      var _listFounder = await getListFounder();

      setListFounder2(_listFounder.data);
    }
    fetchData();
  }, []);

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

  const dealClick = async (item) => {
    setClicked(item.name);
    if (item.name !== "View All") {
      var _listFounder = await getListFounder();
      const filtercategory = _listFounder.data.filter((founder) => {
        return item.name.toLowerCase() == founder.acf.category;
      });
      setListFounder2(filtercategory);
    } else {
      var _listFounder = await getListFounder();
      setListFounder2(_listFounder.data);
    }
  };

  async function getIdFounderFromAPI() {
    try {
      let listFounderInteview = await interviewServices.getFounderIDByName();
      return listFounderInteview;
    } catch (error) {
      console.log("Failed to fetch", error);
    }
  }

  const clickDetailFounder = async (item) => {
    // GET API
    console.log(item.acf.name);
    let resultList = await getIdFounderFromAPI();

    var findID = await Object.values(resultList.data).find(
      (element) => element.acf.name == item.acf.name
    );
    history(`/detailfounder/${findID.id}`);
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
        {Object.values(listFounder2).length != 0 &&
          Object.values(listFounder2).map((item) => (
            <div
              className="frameimgfounder"
              onClick={() => clickDetailFounder(item)}
            >
              <img
                src={isMatch ? item.acf.thumbnail : item.acf.image}
                alt=""
                className="imgfounder"
              />
              <Box className="framedetailfoundername">
                <Box className="detailfoundername">
                  {item.acf.first_name.toUpperCase()}
                  <Box className="titlename">
                    {item.acf.last_name.toUpperCase()}
                  </Box>
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
