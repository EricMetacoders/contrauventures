import React from "react";
import imgPhoto from "../../assets/image/img_hero.png";
export default function Hero() {
  return (
    <div className=" overflow-hidden">
      <div className="md:grid grid-cols-2">
        <div className="py-[5rem] xl:py-[10rem] ">
          <div>
            <div className="pl-[36px] md:ml-[80px] xl:pl-0 2xl:pl-[300px] leading-[1]">
              <p className="font-bold text-[40px] xl:text-[110px] italic w-[252px] xl:w-full">
                We bet on
              </p>
              <p className="text-[40px] xl:text-[110px] leading-[1] font-thin italic">
                the future of
              </p>
              <p className="text-red font-bold text-[40px] xl:text-[110px]">
                Vietnam.
              </p>

              <div className="w-[296px]  xl:w-[500px]">
                <p className="pt-10 robotoFont font-[300] xl:font-[400]">
                  We discover in the founders the power of persistence inherent
                  in Vietnamese people in the history of thousands of years of
                  struggle and victories.
                </p>
                <p className="pt-10 robotoFont font-[300] xl:font-[400] ">
                  Their youthful energy, eagerness to learn, and commitment to
                  the future of their families make us confident of the future
                  of Vietnam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex items-end justify-end overflow-visible">
          <img
            src={imgPhoto}
            alt="imgPhoto"
            className="w-[300px] h-[300px] md:w-[350px] md:h-[500px] ml-[110px] md:ml-0  lg:w-[500px] lg:h-[600px] 2xl:w-[700px] 2xl:h-[650px]"
          />
        </div>
      </div>
    </div>
  );
}
