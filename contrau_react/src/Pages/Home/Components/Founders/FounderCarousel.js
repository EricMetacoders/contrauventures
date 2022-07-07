import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FounderImageCarousel from "./FounderImageCarousel";
import { useSelector } from "react-redux";

export default function FounderCarousel() {
  const data = useSelector((state) => state.homeSlice.founders);
  let settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data?.map((img, index) => {
        return <FounderImageCarousel key={index} data={img} />;
      })}
    </Slider>
  );
}
