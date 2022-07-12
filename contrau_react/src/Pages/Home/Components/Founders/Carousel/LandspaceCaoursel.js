import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import LandspaceImage from "./LandspaceImage";

export default function LandspaceCarousel() {
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
        return <LandspaceImage key={index} data={img} />;
      })}
    </Slider>
  );
}
