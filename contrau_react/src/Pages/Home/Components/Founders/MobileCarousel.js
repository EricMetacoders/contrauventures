import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import MobileImgCarousel from "./MobileImgCarousel";
export default function () {
  const data = useSelector((state) => state.homeSlice.founders);

  return (
    <Carousel
      centerMode
      infiniteLoop
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
    >
      {data?.map((img, i) => {
        return <MobileImgCarousel data={img} key={i} />;
      })}
    </Carousel>
  );
}
