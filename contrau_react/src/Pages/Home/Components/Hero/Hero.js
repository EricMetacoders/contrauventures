import React from "react";
import imgPhoto from "../../../../assets/homepage_img/img_hero.png";
import HeroTextAnim from "./HeroTextAnim";
import "./hero.scss";

export default function Hero() {
  return (
    <div className=" overflow-hidden">
      <div className="lg:grid grid-cols-2">
        <div
          id="textDiv"
          className=" mx-[34px] md:mb-0 lg:mb-[218px]  md:mx-[117px] xl:mx-[100px] 2xl:ml-[264px] mt-[110px]  md:mt-[173px] lg:mt-[31%]   xl:mb-[355px] 2xl:mb-[355px]"
        >
          <div className="h-[235px] 2xl:h-[542px]">
            {/* start text animation */}
            <HeroTextAnim />
            {/* end text animation */}
          </div>
        </div>
        <div
          id="heroImg"
          className="md:flex items-end justify-end overflow-visible relative left-[50%] translate-x-[-21%] lg:translate-x-[-39%] lg:translate-y-[20.9%]"
        >
          <div className="w-full h-full mt-[33%] sm:mt-[10%]">
            <img
              src={imgPhoto}
              alt="imgPhoto"
              className="w-[80%] lg:h-[82%] lg:w-[90%] h-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
