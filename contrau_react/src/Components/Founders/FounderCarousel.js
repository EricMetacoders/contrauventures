import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import male from "../../assets/image/male.png";
import male2 from "../../assets/image/male2.png";
import female from "../../assets/image/female.png";
import FounderImageCarousel from "./FounderImageCarousel";

const founders = [male, male2, female];

export default function FounderCarousel() {
  let settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {founders.map((img) => {
        return <FounderImageCarousel data={img} />;
      })}
    </Slider>
  );
}
