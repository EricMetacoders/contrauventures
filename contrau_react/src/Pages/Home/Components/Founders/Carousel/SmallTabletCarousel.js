import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FounderImageCarousel from "../ImageCarousel/FounderImageCarousel";
import { useSelector } from "react-redux";

import "../ImageCarousel/divImageSize.scss";

export default function SmallTabletCarousel() {
  const data = useSelector((state) => state.homeSlice.founders);
  const settings = {
    slidesToShow: 2,
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
