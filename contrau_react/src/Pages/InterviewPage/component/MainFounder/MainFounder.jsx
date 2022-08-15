import { Box, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { interviewServices } from "services/interviewService";
import ListFounder from "./ListFounder/ListFounder";

MainFounder.propTypes = {};

function MainFounder(props) {
  //RESPONSIVE

  const matchMobile = useMediaQuery("(max-width:639px)");

  const [listFounder2, setListFounder2] = useState([]);

  // GET LIST FOUNDER FROM API
  async function getListFounder() {
    try {
      const listFounder = await interviewServices.getListFounder();
      return listFounder;
    } catch (error) {
      console.log("getListFounder => listFounder", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const _listFounder = await getListFounder();

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
      const _listFounder = await getListFounder();

      const filtercategory = _listFounder.data.filter((founder) => {
        return founder.acf.category === item.name;
      });
      setListFounder2(filtercategory);
    } else {
      const _listFounder = await getListFounder();
      setListFounder2(_listFounder.data);
    }
  };

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
                  clicked === item.name
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
                clicked === item.name
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
      {Object.values(listFounder2).length !== 0 && (
        <ListFounder listDataFounder={listFounder2} />
      )}
    </div>
  );
}

export default MainFounder;
