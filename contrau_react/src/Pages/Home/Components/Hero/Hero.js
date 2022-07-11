import React from "react";
import imgPhoto from "../../../../assets/homepage_img/img_hero.png";
import HeroTextAnim from "./HeroTextAnim";
export default function Hero() {
  return (
    <div className=" overflow-hidden">
      <div className="lg:grid grid-cols-2">
        <div className="mt-[64px] md:mt-[24%] lg:mb-[30%]">
          <div className="h-[235px] 2xl:h-[542px]">
            {/* start text animation */}
            <HeroTextAnim />
            {/* end text animation */}
          </div>
        </div>
        <div className="md:flex items-end justify-end overflow-visible relative left-[50%] translate-x-[-21%] lg:translate-x-[-39%] lg:translate-y-[19%]">
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
