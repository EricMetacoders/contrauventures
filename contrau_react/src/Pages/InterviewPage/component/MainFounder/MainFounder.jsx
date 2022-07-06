import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Box, Button, useMediaQuery, useTheme } from "@material-ui/core";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { interviewServices } from "../../../../services/interviewService";
import { useDispatch, useSelector } from "react-redux";
import { getListFounder } from "../../../../reducers/interviewSlice";

MainFounder.propTypes = {};

function MainFounder(props) {
  //RESPONSIVE
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  // const [listFounder, setListFounder] = useState([]);
  // const listFounder = useSelector((state) => state.interviewSlice.listFounder);

  // useEffect(() => {
  //   dispatch(getListFounder());
  // }, []);

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

  const history = useNavigate();

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
      console.log("_listFounder:", _listFounder);
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
    let resultList = await getIdFounderFromAPI();

    var findID = Object.values(resultList.data).find(
      (element) =>
        element.acf.first_name.toLowerCase() ==
          item.acf.first_name.toLowerCase() &&
        element.acf.last_name.toLowerCase() == item.acf.last_name.toLowerCase()
    );
    history(`/detailfounder/${findID.id}`);
  };
  const clickDetailFounderMobile = async (item) => {
    // GET API
    let resultList = await getIdFounderFromAPI();

    var findID = Object.values(resultList.data).find(
      (element) =>
        element.acf.first_name.toLowerCase() ==
          item.acf.first_name.toLowerCase() &&
        element.acf.last_name.toLowerCase() == item.acf.last_name.toLowerCase()
    );
    history(`/detailfounder/${findID.id}`);
  };
  console.log(listFounder2);
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
      <div className="framefounder overflow-hidden">
        {Object.values(listFounder2).length != 0 &&
          Object.values(listFounder2).map((item) => (
            <div className="frameimgfounder" key={item.id}>
              <img
                src={isMatch ? item.acf.thumbnail : item.acf.image}
                alt=""
                className="imgfounder"
                onClick={() => {
                  isMatch && clickDetailFounderMobile(item);
                }}
              />
              {/* #B0ACA3" */}
              <div className="framemaintile">
                <Box className="framedetailfoundername">
                  <Box className="detailfoundername">
                    FOUNDER
                    <Box className="titlename ">
                      {item.acf.first_name.toUpperCase()} &nbsp;
                      {item.acf.last_name.toUpperCase()}
                    </Box>
                  </Box>
                </Box>
                <Box className="titledetail">
                  Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </Box>
              </div>
              {/*    background: linear-gradient(
          180deg,
          rgba(111, 111, 117, 0) 49%,
          rgba(49, 50, 52, 1) 75%
        ); */}
              <div
                className="hidden lg:block  w-full h-full absolute bgBlur2"
                style={{
                  background: `linear-gradient(0deg,${item.acf.gradient_color} 49%, ${item?.acf.background_color}75%)`,
                }}
              ></div>
              <div className="btnInterview">
                <div className="hidden lg:block w-[200px] h-[60px] bg-white  cursor-pointer z-50">
                  <div className="flex items-center justify-center w-full h-full">
                    <p
                      className="popinsFont font-semibold text-[20px] text-black mb-0"
                      onClick={() => {
                        clickDetailFounder(item);
                      }}
                    >
                      See Full Interview
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MainFounder;
