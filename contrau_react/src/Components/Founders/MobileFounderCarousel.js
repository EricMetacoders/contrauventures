import React from "react";
import male from "../../assets/image/male.png";
import male2 from "../../assets/image/male2.png";
import female from "../../assets/image/female.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MobileFounderCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src={male}
          alt="male1"
          className="w-[278px] h-[431px] rounded-3xl"
        />
      </div>
      <div>
        <img
          src={male2}
          alt="male2"
          className="w-[278px] h-[431px] rounded-3xl"
        />
      </div>
      <div>
        <img
          src={female}
          alt="female"
          className="w-[278px] h-[431px] rounded-3xl"
        />
      </div>
    </Slider>
  );
}
