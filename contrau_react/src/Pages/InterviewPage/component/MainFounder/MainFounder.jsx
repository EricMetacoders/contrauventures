import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { interviewServices } from "../../../../services/interviewService";
import { useDispatch, useSelector } from "react-redux";
import { getListFounder } from "../../../../reducers/interviewSlice";
import ListFounder from "./ListFounder/ListFounder";

MainFounder.propTypes = {};

function MainFounder(props) {
  //RESPONSIVE
  const theme = useTheme();
  const dispatch = useDispatch();
  const matchMobile = useMediaQuery("(max-width:639px)");

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

  const [clicked, setClicked] = useState(contentdatacategory[0].name);

  const carouselProperties = {
    // initialSlide: 3,
    infinite: false,
    arrows: false,

    responsive: [
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
        },
      },
    ],
  };

  const dealClick = async (item) => {
    setClicked(item.name);

    if (item.name !== "View All") {
      var _listFounder = await getListFounder();

      const filtercategory = _listFounder.data.filter((founder) => {
        return founder.acf.category == item.name;
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

  return (
    <div className="rootmainfounder">
      {/* FRAME BUTTON */}

      {matchMobile ? (
        <Box className="carouselcategory">
          <Slider {...carouselProperties}>
            {contentdatacategory.map((item) => (
              <Box
                key={item.id}
                className={
                  clicked == item.name
                    ? "frame-icon-main tab-active"
                    : "frame-icon-main tab-notactive"
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
      {Object.values(listFounder2).length != 0 && (
        <ListFounder listDataFounder={listFounder2} />
      )}
    </div>
  );
}

export default MainFounder;
