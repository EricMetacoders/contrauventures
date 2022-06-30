import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2014_1 from "../../../../../../assets/interview-img/2014-1.png";
import img2014_1mb from "../../../../../../assets/interview-img/2014-1mb.png";
import img2014_1cl from "../../../../../../assets/interview-img/2014-1cl.png";
import img2014_2 from "../../../../../../assets/interview-img/2014-2.png";
import img2014_2mb from "../../../../../../assets/interview-img/2014-2mb.png";
import img2014_3 from "../../../../../../assets/interview-img/2014-3.png";
import img2014_3mb from "../../../../../../assets/interview-img/2014-3mb.png";
import img2014_4 from "../../../../../../assets/interview-img/2014-4.png";
import img2014_4mb from "../../../../../../assets/interview-img/2014-4mb.png";

import img2016_1 from "../../../../../../assets/interview-img/2016-1.png";
import img2016_1cl from "../../../../../../assets/interview-img/2016-1.png";
import img2016_2 from "../../../../../../assets/interview-img/2016-2.png";
import img2016_3 from "../../../../../../assets/interview-img/2016-3.png";
import { Box, useMediaQuery, useTheme } from "@material-ui/core";
import { collection, wasClick } from "./ChangeImage.js";
import { interviewServices } from "../../../../../../services/interviewService";
import { useParams } from "react-router-dom";
SlideGallery.propTypes = {};

function SlideGallery({ detailFounder }) {
  const slidedata = {
    data: [
      {
        key: "2014",
        title: "2014",
        url: img2014_1,
      },
      {
        key: "2016",
        title: "2016",
        url: img2014_1,
      },
      {
        key: "2018",
        title: "2018",
        url: img2014_1,
      },
      {
        key: "2020",
        title: "2020",
        url: img2014_1,
      },
      {
        key: "2022",
        title: "2022",
        url: img2014_1,
      },
    ],
  };
  const slidedata2 = {
    data: [
      {
        key: "2014-2",
        title: "2014-2",
        url: img2014_1cl,
      },
      {
        key: "2016-2",
        title: "2016-2",
        url: img2014_1cl,
      },
      {
        key: "2018-2",
        title: "2018-2",
        url: img2014_1cl,
      },
      {
        key: "2020-2",
        title: "2020-2",
        url: img2014_1cl,
      },
      {
        key: "2022-2",
        title: "2022-2",
        url: img2014_1cl,
      },
    ],
  };
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
  const [ClickSlide, setClickSlide] = useState(slidedata);

  const [listGallery, setListGallery] = useState([]);

  // CHANGE COLOR
  const changeColor = (current) => {
    // CHANGE ADD COLOR IMG1
    let addColorImg = document.querySelector(".slick-active");

    //   // CHECK SLIDE HAVE 4 IMAGE OR 3 IMAGE
    if (addColorImg.getElementsByClassName("frameimgmain")[0]) {
      if (listGallery.length != 0) {
        var stringUrlImg1 = `http://192.168.50.159${listGallery[
          current
        ].image[0].guid.slice(16, 49)}color-1.png`;
        var stringUrlImg2 = `http://192.168.50.159${listGallery[
          current
        ].image[0].guid.slice(16, 49)}color-2.png`;
        var stringUrlImg3 = `http://192.168.50.159${listGallery[
          current
        ].image[0].guid.slice(16, 49)}color-3.png`;
        var stringUrlImg4 = `http://192.168.50.159${listGallery[
          current
        ].image[0].guid.slice(16, 49)}color-4.png`;
        addColorImg
          .getElementsByClassName("frameimgtop")[0]
          .getElementsByClassName("frameimg1")[0]
          .getElementsByTagName("img")[0].src = stringUrlImg1;
        addColorImg
          .getElementsByClassName("frameimgtop")[0]
          .getElementsByClassName("frameimg2")[0]
          .getElementsByTagName("img")[0].src = stringUrlImg2;
        addColorImg
          .getElementsByClassName("frameimgbot")[0]
          .getElementsByClassName("frameimg3")[0]
          .getElementsByTagName("img")[0].src = stringUrlImg3;
        addColorImg
          .getElementsByClassName("frameimgbot")[0]
          .getElementsByClassName("frameimg4")[0]
          .getElementsByTagName("img")[0].src = stringUrlImg4;
      }
    } else {
      if (listGallery.length != 0) {
        var stringUrlImg1 = `http://192.168.50.159${listGallery[
          current
        ].image[0].guid.slice(16, 49)}2022-color-1.png`;
        var stringUrlImg2 = `http://192.168.50.159${listGallery[
          current
        ].image[0].guid.slice(16, 49)}2022-color-2.png`;
        var stringUrlImg3 = `http://192.168.50.159${listGallery[
          current
        ].image[0].guid.slice(16, 49)}2022-color-3.png`;

        addColorImg
          .getElementsByClassName("frameimgtop")[0]
          .getElementsByClassName("frameimg1")[0]
          .getElementsByTagName("img")[0].src = stringUrlImg1;

        addColorImg
          .getElementsByClassName("frameimgtop")[0]
          .getElementsByClassName("frameimg2")[0]
          .getElementsByTagName("img")[0].src = stringUrlImg2;

        addColorImg
          .getElementsByClassName("frameimgbot")[0]
          .getElementsByClassName("frameimg3")[0]
          .getElementsByTagName("img")[0].src = stringUrlImg3;
      }
    }

    // CHANGE NO COLOR IMG1
    let noColorImg1 = document.querySelectorAll(
      ".slick-slide:not(.slick-active)"
    );
    for (var i = 0; i < noColorImg1.length; i++) {
      if (noColorImg1[i].getElementsByClassName("frameimgmain")[0]) {
        console.log(
          i,
          noColorImg1[i].getElementsByClassName("frameimgmain")[0]
        );
        noColorImg1[i]
          .getElementsByClassName("frameimgtop")[0]
          .getElementsByClassName("frameimg1")[0]
          .getElementsByTagName(
            "img"
          )[0].src = `http://192.168.50.159${listGallery[0].image[0].guid.slice(
          16
        )}`;
        noColorImg1[i]
          .getElementsByClassName("frameimgtop")[0]
          .getElementsByClassName("frameimg2")[0]
          .getElementsByTagName(
            "img"
          )[0].src = `http://192.168.50.159${listGallery[0].image[1].guid.slice(
          16
        )}`;
        noColorImg1[i]
          .getElementsByClassName("frameimgbot")[0]
          .getElementsByClassName("frameimg3")[0]
          .getElementsByTagName(
            "img"
          )[0].src = `http://192.168.50.159${listGallery[0].image[2].guid.slice(
          16
        )}`;
        noColorImg1[i]
          .getElementsByClassName("frameimgbot")[0]
          .getElementsByClassName("frameimg4")[0]
          .getElementsByTagName(
            "img"
          )[0].src = `http://192.168.50.159${listGallery[0].image[3].guid.slice(
          16
        )}`;
      } else {
        noColorImg1[i]
          .getElementsByClassName("frameimgtop")[0]
          .getElementsByClassName("frameimg1")[0]
          .getElementsByTagName(
            "img"
          )[0].src = `http://192.168.50.159${listGallery[1].image[3].guid.slice(
          16
        )}`;
        noColorImg1[i]
          .getElementsByClassName("frameimgtop")[0]
          .getElementsByClassName("frameimg2")[0]
          .getElementsByTagName(
            "img"
          )[0].src = `http://192.168.50.159${listGallery[1].image[4].guid.slice(
          16
        )}`;
        noColorImg1[i]
          .getElementsByClassName("frameimgbot")[0]
          .getElementsByClassName("frameimg3")[0]
          .getElementsByTagName(
            "img"
          )[0].src = `http://192.168.50.159${listGallery[1].image[5].guid.slice(
          16
        )}`;
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
      console.log(
        "detailfoundergallery:",
        typeof Object.values(detailfoundergallery.data.acf.image)
      );

      var array = [];

      Object.values(detailfoundergallery.data.acf.image).map((item) => {
        array.push(item);
      });
      setListGallery([...array]);
    }
    fechData();
  }, []);

  const settings = {
    dots: true,
    vertical: true,
    slidesToShow: 1, //when add/edit css img(item)/per slide ==> height change ==> reset to 0 and to 1
    slidesToScroll: 1,
    verticalSwiping: true,
    arrows: false,
    speed: 1000,
    // beforeChange: (current, next) => changeColorBlack(),
    // afterChange: (current) => setClickSlide(slidedata2),
    // afterChange: (current) => changeColor(current),
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
    customPaging: (i) => <div>{slidedata.data[i].key}</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };
  // listGallery.length != 0 &&
  //   listGallery[1].image.map((item) => {
  //     console.log("http://192.168.50.159" + item.guid.slice(16));
  //     // console.log(
  //     //   listGallery.length != 0 &&
  //     //     "http://192.168.50.159" + listGallery.image[0].guid.slice(16)
  //     // );
  //   });

  const bannerData =
    listGallery.length != 0 &&
    listGallery.map((item) => (
      <div key={item.year} className="carousel-gallery">
        {!isMatch && (
          <div
            className={
              item.year == "2014" || item.year == "2018" || item.year == "2020"
                ? "frameimgmain"
                : "frameimgmain2"
            }
          >
            <div className="frameimgtop">
              <div className="frameimg1">
                <img
                  src={
                    item.year == "2014" ||
                    item.year == "2018" ||
                    item.year == "2020"
                      ? `http://192.168.50.159${item.image[0].guid.slice(16)}`
                      : `http://192.168.50.159${item.image[3].guid.slice(16)}`
                  }
                />
              </div>
              <div className="frameimg2">
                <img
                  src={
                    item.year == "2014" ||
                    item.year == "2018" ||
                    item.year == "2020"
                      ? `http://192.168.50.159${item.image[1].guid.slice(16)}`
                      : `http://192.168.50.159${item.image[4].guid.slice(16)}`
                  }
                />
              </div>
            </div>

            <div className="frameimgbot">
              <Box className="frameimg3">
                <img
                  src={
                    item.year == "2014" ||
                    item.year == "2018" ||
                    item.year == "2020"
                      ? `http://192.168.50.159${item.image[2].guid.slice(16)}`
                      : `http://192.168.50.159${item.image[5].guid.slice(16)}`
                  }
                />
              </Box>
              <Box className="frameimg4">
                <img
                  src={`http://192.168.50.159${item.image[3].guid.slice(16)}`}
                />
              </Box>
            </div>
          </div>
        )}

        {/* MOBILE */}
        {isMatch && (
          <div className="frameimgmain">
            <div className="frameimgtop">
              <div className="frameimg1">
                <img src={img2014_1mb} />
              </div>
              <div className="frameimg2">
                <img src={img2014_2mb} />
              </div>
            </div>

            <div className="frameimgbot">
              <Box className="frameimg3">
                <img src={img2014_3mb} />
              </Box>
              <Box className="frameimg4">
                <img src={img2014_4mb} />
              </Box>
            </div>
          </div>
        )}
        <div className="frametitleyear">
          <div className="titleyeardetail">{item.year}</div>
          <div className="detailtitle">{item.title}</div>
        </div>
      </div>
    ));
  return (
    <div>
      <Slider {...settings}>{bannerData}</Slider>
      {/* <div>{test}</div> */}
    </div>
  );
}

export default SlideGallery;
