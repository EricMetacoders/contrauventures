import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FounderImageCarousel from "../FounderImage/FounderImageCarousel";
import { useSelector } from "react-redux";

import "./divImageSize.scss";

export default function TabletCarousel() {
  const data = useSelector((state) => state.homeSlice.founders);
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    dots: false,
    infinite: true,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {data?.map((img, index) => {
        return (
          <div className="divImgSize" key={index}>
            <FounderImageCarousel key={index} data={img} />
          </div>
        );
      })}
    </Slider>
  );
}
