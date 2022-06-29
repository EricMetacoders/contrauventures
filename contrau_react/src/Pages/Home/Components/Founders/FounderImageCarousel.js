import React from "react";
import "./founderImageCarousel.css";
export default function FounderImageCarousel({ data }) {
  return (
    <div
      id="divBtn"
      className="relative imgCarousel  w-[278px] h-[431px] md:w-[223px] md:h-[350px] xl:h-[550px] xl:w-[323px] 2xl:h-[664px] 2xl:w-[424px] rounded-3xl overflow-hidden "
    >
      <img
        src={data?.acf?.image}
        alt={data?.acf?.name}
        className="rounded-3xl w-full h-full"
      />
      <div className="hidden lg:block absolute bottom-[63px] w-full imgText">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center leading-[1]">
            <p className="text-white text-[32px] 2xl:text-[50px] font-thin popinsFont">
              FOUNDER
            </p>
            <p className="text-white text-[32px] 2xl:text-[50px] font-[900] popinsFont">
              {data?.acf?.name}
            </p>
          </div>
          <div className="flex items-center justify-center mx-[20px]">
            <p className="text-white popinsFont  font-light text-[13px] 2xl:text-[20px] 2xl:font-normal text-center">
              {data?.acf?.title.slice(0, 100).concat("...")}
            </p>
          </div>
        </div>
      </div>
      <div className="block lg:hidden absolute bottom-[63px] w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center leading-[1]">
            <p className="text-white text-[32px] 2xl:text-[50px] font-thin popinsFont">
              FOUNDER
            </p>
            <p className="text-white text-[32px] 2xl:text-[50px] font-[900] popinsFont">
              {data?.acf?.name}
            </p>
          </div>
          <div className="flex items-center justify-center mx-[20px]">
            <p className="text-white popinsFont  font-light text-[13px] 2xl:text-[20px] 2xl:font-normal text-center">
              {data?.acf?.title.slice(0, 64).concat("...")}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute block top-[386px] left-[20%] md:top-[299px] md:left-[27px] lg:hidden">
        <div className=" w-[170px] h-[30px] bg-white  cursor-pointer z-50">
          <div className="flex items-center justify-center w-full h-full">
            <p className="popinsFont font-semibold text-[14px] text-black mb-0">
              See Full Interview
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block  w-full h-full absolute bgBlur"></div>
      <div className="btnInterview">
        <div className="hidden lg:block w-[200px] h-[60px] bg-white  cursor-pointer z-50">
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
