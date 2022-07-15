import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
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

      // console.log("detailfoundergallery:", detailfoundergallery.data.acf.image);

      var array = [];

      Object.values(detailfoundergallery.data.acf.image).map((item) => {
        array.push(item);
      });
      setListGallery([...array]);
    }
    fechData();
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const scrollTo = () => {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToWithContainer = () => {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  };

  return (
    <div>
      <div className="">
        <div
          className="frameyearcategory"
          style={{
            background: "#151515",
            color: "white",
            width: "10%",
            position: "fixed",
            top: "50%",
          }}
        >
          <div className="">
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
      </div>
      {Object.keys(listGallery).length > 1 &&
        listGallery?.map((item) => (
          <Element name={item.year} className="element">
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
                    <div className="frameimg3">
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
                    </div>
                    <div className="frameimg4">
                      <img
                        style={{ filter: "grayscale(0%)" }}
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

      <a onClick={scrollToTop}>To the top!</a>
    </div>
  );
}
export default Section2;
