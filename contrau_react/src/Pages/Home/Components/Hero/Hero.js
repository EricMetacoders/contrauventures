import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import imgPhoto from "assets/homepage_img/img_hero.png";
import HeroTextAnim from "./HeroTextAnim";
import "./hero.scss";

export default function Hero() {
  const [inView, setInView] = useState(false);
  return (
    <div className=" overflow-hidden">
      <div className="lg:grid grid-cols-2">
        <div
          id="textDiv"
          className=" mx-[34px] md:mb-0 lg:mb-[218px]  md:mx-[117px] xl:mx-[100px] 2xl:ml-[264px] mt-[110px]  md:mt-[173px] lg:mt-[31%]   xl:mb-[355px] 2xl:mb-[237px]"
        >
          <div className="h-[235px] 2xl:h-[542px]">
            {/* start text animation */}
            <div inView={inView}>
              <InView onChange={setInView}>
                {({ ref }) => (
                  <div ref={ref}>{inView ? <HeroTextAnim /> : <></>}</div>
                )}
              </InView>
            </div>
            {/* end text animation */}
          </div>
        </div>
        <div
          id="heroImg"
          className="md:flex items-end justify-end overflow-visible relative left-[50%] translate-x-[-21%] lg:translate-x-[-37%] lg:translate-y-[26%]"
        >
          <div className="w-full h-full mt-[33%] sm:mt-[10%]">
            <img
              src={imgPhoto}
              alt="imgPhoto"
              className="w-[80%] lg:h-[74%] lg:w-[90%] h-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
