import React from "react";
import imgPhoto from "../../../../assets/homepage_img/img_hero.png";
import HeroTextAnim from "./HeroTextAnim";
export default function Hero() {
  return (
    <div className=" overflow-hidden">
      <div className="md:grid grid-cols-2">
        <div className="py-[5rem] xl:pt-[207px] xl:pb-[173px] x:pt-[207px]">
          <div>
            {/* start text animation */}
            <HeroTextAnim />
            {/* end text animation */}
          </div>
        </div>
        <div className="md:flex items-end justify-end overflow-visible">
          <img
            src={imgPhoto}
            alt="imgPhoto"
            className="w-[300px] h-[300px] md:w-[350px] md:h-[500px] ml-[110px] md:ml-0  lg:w-[500px] lg:h-[600px] 2xl:w-[831px] 2xl:h-[787px]"
          />
        </div>
      </div>
    </div>
  );
}
