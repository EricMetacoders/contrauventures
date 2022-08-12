import { useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Element, Events, Link } from "react-scroll";
import { interviewServices } from "services/interviewService";

function ReactScroll({ founderID }) {
  const [listGallery, setListGallery] = useState([{}]);
  const matchMobile = useMediaQuery("(max-width:639px)");
  const matchMobileTablet = useMediaQuery("(max-width:1279px)");
  const itemsRef = useRef([]);
  const itemsRefYear = useRef([]);
  const refCategory = useRef(null);

  // GET DETAIL GALLERY
  async function getGalleryFounderDetail(id) {
    try {
      const detailgallery = await interviewServices.getGalleryFounder(id);

      return detailgallery;
    } catch (error) {
      console.log("getGalleryFounderDetail => detailgallery", error);
    }
  }

  useEffect(() => {
    (
      async () => {
        const detailfoundergallery = await getGalleryFounderDetail(founderID);
        const getListGallery = Object.values(detailfoundergallery.data.acf.image).filter((item) => !!item.year);
        setListGallery([...getListGallery]);
      }
    )(); 
  }, [founderID]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, listGallery.length);
  }, [listGallery]);

  // CHECK MOBILE OR PC TO CHANGE HIDE/SHOW CATEGORY YEAR
  // CONVERT GRAY SCALE
  const convertGrayScale = (grayScale) => {
    return grayScale === 0 ? "grayscale(0%)" : "grayscale(100%)";
  };

  // CHANGE GRAYSCALE WHEN ACTIVE/NOT ACTIVE
  const changeGrayScale = (index, grayScale) => {
    itemsRef.current[index].children[0].children[0].children[0].children[0].style.filter =
      convertGrayScale(grayScale);
    itemsRef.current[index].children[0].children[0].children[1].children[0].style.filter =
      convertGrayScale(grayScale);
    itemsRef.current[index].children[0].children[1].children[0].children[0].style.filter =
      convertGrayScale(grayScale);
    itemsRef.current[index].children[0].children[1].children[1].children[0].style.filter =
      convertGrayScale(grayScale);
  };

  // USE EFFECT TO APPLY LIBRARY AND HIDE AND SHOW YEAR CATEGORY
  useEffect(() => {
    // ACTIVE YEAR WHEN CLICK
    Events.scrollEvent.register("end", function () {
      arguments[1].children[0].children[0].children[0].children[0].children[0].children[0].style.filter =
        convertGrayScale(0);
      arguments[1].children[0].children[0].children[0].children[0].children[1].children[0].style.filter =
        convertGrayScale(0);
      arguments[1].children[0].children[0].children[0].children[1].children[0].children[0].style.filter =
        convertGrayScale(0);
      arguments[1].children[0].children[0].children[0].children[1].children[1].children[0].style.filter =
        convertGrayScale(0);

      // ACTIVE YEAR WHEN NOT CLICK
      for (let i = 0; i < itemsRef.current.length; i++) {
        if (
          arguments[0] !==
          itemsRef.current[i].children[1].children[0].textContent
        ) {
          changeGrayScale(i, 1);
        }
      }
    });

    return () => {
      Events.scrollEvent.remove("end");
    };
  }, []);

  // ACTIVE YEAR WHEN SCROLLL
  const handleSetActive = (to) => {
    for (let i = 0; i < itemsRef.current.length; i++) {
      if (to === itemsRef.current[i].children[1].children[0].textContent) {
        // ADD COLOR WHEN SCROLL ACTIVE YEAR
        changeGrayScale(i, 0);
      }
    }
  };
  // INACTIVE YEAR WHEN SCROLLL
  const handleSetInActive = (to) => {
    for (let i = 0; i < itemsRef.current.length; i++) {
      if (itemsRef.current[i].children[1].children[0].textContent !== "") {
        if (to === itemsRef.current[i].children[1].children[0].textContent) {
          // NO COLOR WHEN SCROLL NOT ACTIVE YEAR
          changeGrayScale(i, 1);
        }
      }
    }
  };

  // CHECK AT BOTTOM
  const handleScrollAtBottom = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      // HIDE CATEGORY YEAR IN PC
      const myReference = refCategory.current;
      myReference.style.display = "none";
      // HIDE CATEGORY YEAR IN MOBILE
      if (matchMobileTablet) {
        myReference.style.top = "-5%";
        // ADD COLOR LAST IMAGES YEAR
        changeGrayScale(itemsRef.current.length - 1, 0);
      }
    } else {
      // SHOW CATEGORY YEAR IN PIN
      const myReference = refCategory.current;
      myReference.style.display = "block";
      // SHOW CATEGORY YEAR IN MOBILE
      if (matchMobileTablet) {
        myReference.style.top = "8%";
        // NO COLOR WHEN NOT LAST IMAGE YEAR
        changeGrayScale(itemsRef.current.length - 1, 1);
      }
    }
  };

  // ADD SCROLL EVENT FOR CHECK BOTTOM
  useEffect(() => {
    window.addEventListener("scroll", handleScrollAtBottom, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScrollAtBottom);
    };
  }, []);

  // CHECK LENGTH FOR YEAR
  const checkLength = (numberImage) => {
    if (!numberImage) {
      return;
    }

    const frameImage = {
      1: "frameimgmain1",
      2: "frameimgmain2",
      3: "frameimgmain3",
      4: "frameimgmain4",
    };
    return frameImage[numberImage];
  };

  return (
    <div className="framemaingallery">
      <div className="categorydetailyear" ref={refCategory}>
        <div
          className="frameyearcategory"
          style={
            Object.keys(listGallery).length > 6
              ? {
                  columnGap: "5px ",
                }
              : {}
          }
        >
          {listGallery?.map((item, index) => (
            <div
              ref={(el) => (itemsRefYear.current[index] = el)}
              key={item.year ? item.year : ""}
            >
              <Link
                className="yeartitle"
                to={item.year ? item.year : ""}
                // key={item.year}
                spy={true}
                smooth={true}
                duration={500}
                offset={matchMobile ? -250 : -150}
                onSetActive={handleSetActive}
                onSetInactive={handleSetInActive}
              >
                <div className="titleyeardetail">{item.year}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* LIST IMAGE */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20vw",
        }}
      >
        {listGallery?.map((item, index) => (
          <Element
            name={item.year}
            className="element"
            key={item.year ? item.year : ""}
          >
            <div
              className="rootgallery"
              // onScroll={() => onScroll2(index)}
            >
              <div
                key={item.year}
                className="carousel-gallery"
                ref={(el) => (itemsRef.current[index] = el)}
              >
                <div className={checkLength(item?.image?.length)}>
                  <div className="frameimgtop">
                    <div className="frameimg1">
                      <img
                        style={{ filter: "grayscale(100%)" }}
                        // src={item?.image[1]?.guid}
                        src={
                          item.image && item.image.length > 0
                            ? item?.image[0]?.guid
                            : ""
                        }
                        alt=""
                      />
                    </div>
                    <div className="frameimg2">
                      <img
                        style={{ filter: "grayscale(100%)" }}
                        src={
                          item.image && item.image.length > 0
                            ? item.image[1]?.guid
                            : ""
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="frameimgbot">
                    <div className="frameimg3">
                      <img
                        style={{ filter: "grayscale(100%)" }}
                        src={
                          item.image && item.image.length > 0
                            ? item.image[2]?.guid
                            : ""
                        }
                        alt=""
                      />
                    </div>
                    <div className="frameimg4">
                      <img
                        style={{ filter: "grayscale(100%)" }}
                        src={
                          item.image && item.image.length > 0
                            ? item.image[3]?.guid
                            : ""
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="frametitleyear"
                  style={
                    checkLength(item?.image?.length) === "frameimgmain1"
                      ? { top: "35%" }
                      : {}
                  }
                >
                  <div className="titleyeardetail">{item.year}</div>
                </div>
              </div>
            </div>
          </Element>
        ))}
      </div>
    </div>
  );
}
export default ReactScroll;
