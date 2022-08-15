import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FounderImageCarousel from "Pages/Home/Components/Founders/ImageCarousel/FounderImageCarousel";
import { useSelector } from "react-redux";

import "../ImageCarousel/divImageSize.scss";

export default function FounderCarousel() {
  const data = useSelector((state) => state.homeSlice.founders);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {data?.map((img, index) => {
        return (
          <div className="divImgSize">
            <FounderImageCarousel key={index} data={img} />
          </div>
        );
      })}
    </Slider>
  );
}
