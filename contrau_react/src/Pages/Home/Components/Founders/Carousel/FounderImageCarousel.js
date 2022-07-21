import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { interviewServices } from "../../../../../services/interviewService";
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
      className=" relative imgCarousel  w-[100%] h-full rounded-3xl overflow-hidden mx-auto smooth"
    >
      <img
        src={data?.acf?.image}
        alt={data?.acf?.name}
        className="rounded-3xl  scaleImg mx-auto smooth  object-cover h-full w-full"
      />

      {/* Desktop */}
      <div className="hidden 2xl:block absolute bottom-[9%] w-full imgText z-50 smooth">
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="flex flex-col items-center justify-center leading-[1]">
            <p className="text-white text-[32px] 2xl:text-[50px] font-thin popinsFont">
              FOUNDER
            </p>
            <div id="nameText">
              <p className="text-white text-[32px] 2xl:text-[40px] font-[900] popinsFont break-all">
                {data?.acf?.first_name.toUpperCase()}
                &nbsp;
                {data?.acf?.last_name.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mx-[20px]">
            <p className="text-white popinsFont  font-light text-[13px] 2xl:text-[20px] 2xl:font-normal text-center">
              {data?.acf?.title.slice(0, 80).concat("...")}
            </p>
          </div>
        </div>
      </div>

      {/* Small Desktop Screen */}

      <div className="hidden lg:block 2xl:hidden absolute bottom-[9%] w-full imgText z-50 smooth ">
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="flex flex-col items-center justify-center leading-[1]">
            <p className="text-white text-[32px] 2xl:text-[50px] font-thin popinsFont">
              FOUNDER
            </p>
            <div id="nameText">
              <p className="text-white text-[32px] 2xl:text-[40px] font-[900] popinsFont break-all">
                {data?.acf?.first_name.toUpperCase()}
                &nbsp;
                {data?.acf?.last_name.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mx-[20px]">
            <p className="text-white popinsFont  font-light text-[13px] 2xl:text-[20px] 2xl:font-normal text-center">
              {data?.acf?.title.slice(0, 80).concat("...")}
            </p>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden sm:block lg:hidden absolute bottom-[20%] w-full z-50 ">
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="flex flex-col items-center justify-center leading-[1]">
            <p className="text-white text-[28px] font-thin popinsFont">
              FOUNDER
            </p>
            <div id="nameText">
              <p className="text-white text-[31px] font-[900] popinsFont break-all">
                {data?.acf?.first_name.toUpperCase()}
                &nbsp;
                {data?.acf?.last_name.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mx-[20px]">
            <p className="text-white popinsFont  font-light text-[14px] text-center">
              {data?.acf?.title.slice(0, 80).concat("...")}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="block sm:hidden absolute bottom-[16%] w-full ">
        <div className="flex flex-col items-center justify-center z-10 ">
          <div
            id="foundeText"
            className="flex flex-col items-center justify-center leading-[1] "
          >
            <p
              id="founder"
              className="text-white text-[28px] 2xl:text-[40px] font-thin popinsFont"
            >
              FOUNDER
            </p>
            <div>
              <p className="text-white text-[30px]  font-[900] popinsFont break-all">
                {data?.acf?.first_name.toUpperCase()}
                &nbsp;
                {data?.acf?.last_name.toUpperCase()}
              </p>
            </div>
          </div>
          <div
            id="pText"
            className="flex items-center justify-center mx-[20px]"
          >
            <p className="text-white popinsFont  font-light text-[12px] text-center pt-[3%] mb-[26px]">
              {data?.acf?.title.slice(0, 64).concat("...")}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute  bottom-[6%]  lg:hidden w-full flex justify-center ">
        <div className=" w-[192px] h-[44px] bg-white  cursor-pointer">
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

      {/* Blur Background */}
      <div
        className="hidden lg:block  w-full h-full absolute bgBlur smooth"
        style={{
          background: `linear-gradient(to top, #191C21 0, rgba(25, 28, 33, 0.5) 66%, rgba(25, 28, 33, 0) 90%) center no-repeat`,
        }}
      ></div>
      <div className="btnInterview flex justify-center w-full smooth">
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
