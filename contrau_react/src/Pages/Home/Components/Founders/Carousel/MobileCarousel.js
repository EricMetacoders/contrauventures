import React from "react";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FounderImageCarousel from "../ImageCarousel/FounderImageCarousel";

import "../ImageCarousel/divImageSize.scss";

export default function MobileCarousel() {
  const data = useSelector((state) => state.homeSlice.founders);
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: false,
    centerMode: true,
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
