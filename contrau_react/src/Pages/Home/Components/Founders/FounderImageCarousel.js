import React from "react";
import male from "../../../../assets/homepage_img/male.png";
import "./founderImageCarousel.css";
export default function FounderImageCarousel({ data }) {
  return (
    <div
      id="divBtn"
      className="relative imgCarousel  w-[278px] h-[431px] md:w-[223px] md:h-[350px] xl:h-[550px] xl:w-[350px] 2xl:h-[664px] 2xl:w-[424px] rounded-3xl overflow-hidden "
    >
      <img src={data} alt="male" className="rounded-3xl w-full" />
      <div className="hidden 2xl:block absolute bottom-[63px] w-full imgText">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center leading-[1]">
            <p className="text-white text-[32px] 2xl:text-[50px] font-thin popinsFont">
              FOUNDER
            </p>
            <p className="text-white text-[32px] 2xl:text-[50px] font-[900] popinsFont">
              NAME
            </p>
          </div>
          <div className="flex items-center justify-center mx-[20px]">
            <p className="text-white popinsFont  font-light text-[13px] 2xl:text-[20px] 2xl:font-normal text-center">
              Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="block 2xl:hidden absolute bottom-[63px] w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center leading-[1]">
            <p className="text-white text-[32px] 2xl:text-[50px] font-thin popinsFont">
              FOUNDER
            </p>
            <p className="text-white text-[32px] 2xl:text-[50px] font-[900] popinsFont">
              NAME
            </p>
          </div>
          <div className="flex items-center justify-center mx-[20px]">
            <p className="text-white popinsFont  font-light text-[13px] 2xl:text-[20px] 2xl:font-normal text-center">
              Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute block top-[386px] left-[20%] 2xl:hidden">
        <div className=" w-[170px] h-[30px] bg-white  cursor-pointer z-50">
          <div className="flex items-center justify-center w-full h-full">
            <p className="popinsFont font-semibold text-[14px] text-black mb-0">
              See Full Interview
            </p>
          </div>
        </div>
      </div>
      <div className="hidden 2xl:block  w-full h-full absolute bgBlur"></div>
      <div className="btnInterview">
        <div className="hidden 2xl:block w-[200px] h-[60px] bg-white  cursor-pointer z-50">
          <div className="flex items-center justify-center w-full h-full">
            <p className="popinsFont font-semibold text-[20px] text-black mb-0">
              See Full Interview
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
