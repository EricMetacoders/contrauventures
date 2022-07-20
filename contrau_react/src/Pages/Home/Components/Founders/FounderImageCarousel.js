import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { interviewServices } from "../../../../services/interviewService";
import "./founderImageCarousel.scss";
export default function FounderImageCarousel({ data }) {
  const history = useNavigate();
  const [founderList, setFounderList] = useState(null);

  const handleSeeFull = (data) => {
    const founderId = data.acf.interview[0];
    history(`/detailfounder/${founderId}`);
  };
  return (
    <div
      id="divBtn"
      className=" relative imgCarousel  w-[291px] h-[448px] md:w-[294px] md:h-[457px] xl:h-[550px] xl:w-[323px] 2xl:h-[664px] 2xl:w-[424px] rounded-3xl overflow-hidden"
    >
      <img
        src={data?.acf?.image}
        alt={data?.acf?.name}
        className="rounded-3xl w-full h-full scaleImg "
      />
      <div className="hidden lg:block absolute bottom-[63px] w-full imgText z-50">
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="flex flex-col items-center justify-center leading-[1]">
            <p className="text-white text-[32px] 2xl:text-[50px] font-thin popinsFont">
              FOUNDER
            </p>
            <div
              id="nameText"
              className="flex items-center justify-center space-x-3"
            >
              <p className="text-white text-[32px] 2xl:text-[50px] font-[900] popinsFont">
                {data?.acf?.first_name.toUpperCase()}
              </p>
              <p className="text-white text-[32px] 2xl:text-[50px] font-[900] popinsFont">
                {data?.acf?.last_name.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mx-[20px]">
            <p className="text-white popinsFont  font-light text-[13px] 2xl:text-[20px] 2xl:font-normal text-center">
              {data?.acf?.title.slice(0, 100).concat("...")}
            </p>
          </div>
        </div>
      </div>
      <div className="block lg:hidden absolute bottom-[63px] w-full">
        <div className="flex flex-col items-center justify-center z-10 ">
          <div
            id="foundeText"
            className="flex flex-col items-center justify-center leading-[1] "
          >
            <p
              id="founder"
              className="text-white text-[32px] 2xl:text-[50px] font-thin popinsFont"
            >
              FOUNDER
            </p>
            <div className="flex items-center justify-center space-x-3">
              <p className="text-white text-[32px] 2xl:text-[50px] font-[900] popinsFont">
                {data?.acf?.first_name.toUpperCase()}
              </p>
              <p className="text-white text-[32px] 2xl:text-[50px] font-[900] popinsFont">
                {data?.acf?.last_name.toUpperCase()}
              </p>
            </div>
          </div>
          <div
            id="pText"
            className="flex items-center justify-center mx-[20px]"
          >
            <p className="text-white popinsFont  font-light text-[13px] 2xl:text-[20px] 2xl:font-normal text-center pt-[20px] mb-[26px]">
              {data?.acf?.title.slice(0, 64).concat("...")}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute block top-[386px] left-[20%] md:top-[299px] md:left-[27px] lg:hidden">
        <div className=" w-[170px] h-[30px] bg-white  cursor-pointer">
          <div className="flex items-center justify-center w-full h-full">
            <p
              className="popinsFont font-semibold text-[14px] text-black mb-0"
              onClick={() => {
                handleSeeFull(data);
              }}
            >
              See Full Interview
            </p>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:block  w-full h-full absolute bgBlur "
        style={{
          background: `linear-gradient(0deg,${data.acf.gradient_color} 49%, ${data.acf.background_color}75%)`,
        }}
      ></div>
      <div className="btnInterview">
        <div className="hidden lg:block w-[200px] h-[60px] bg-white  cursor-pointer z-50">
          <div
            id="seeF"
            className="flex items-center justify-center w-full h-full"
          >
            <p
              className="popinsFont font-semibold text-[20px] text-black mb-0"
              onClick={() => {
                handleSeeFull(data);
              }}
            >
              See Full Interview
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
