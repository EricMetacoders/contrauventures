import React from "react";
import { useNavigate } from "react-router-dom";
import "./founderImageCarousel.scss";
export default function FounderImageCarousel({ data }) {
  const history = useNavigate();

  const handleSeeFull = (data) => {
    const founderId = data.id;
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
      <div className="hidden sm:block absolute  bottom-[26%] lg:bottom-[9%] w-full imgText z-50 smooth">
        <div className="flex flex-col items-center justify-center leading-[1] lineDiv">
          <div id="nameText" className="lg:mb-[1%]">
            <p className="text-white text-[32px] xl:text-[50px] font-[900] popinsFont text-center">
              {data?.acf?.first_name.toUpperCase()}
              &nbsp;
              {data?.acf?.last_name.toUpperCase()}
            </p>
          </div>
        </div>
        <div
          id="titleText"
          className="flex items-center justify-center mx-[20px] h-[40px] lg:h-[100px] pt-[26%] 2xl:pt-[0] relative lg:static bottom-[-31px] lg:bottom-[0]"
        >
          <p className="text-white popinsFont  font-light text-[14] lg:text-[18px] lg:font-normal text-center lg:pt-[17%]">
            {data?.acf?.title.slice(0, 50).concat("...")}
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="block sm:hidden absolute bottom-[24%] w-full ">
        <div className="flex flex-col items-center justify-center z-10 ">
          <div
            id="foundeText"
            className="flex flex-col items-center justify-center leading-[1] lineDiv"
          >
            <div>
              <p className="text-white text-[30px]  font-[900] popinsFont  text-center">
                {data?.acf?.first_name.toUpperCase()}
                &nbsp;
                {data?.acf?.last_name.toUpperCase()}
              </p>
            </div>
          </div>
          <div
            id="pText"
            className="flex items-center justify-center mx-[20px] h-[47px] relative bottom-[-25px]"
          >
            <div id="titleText">
              <p className="text-white popinsFont  font-light text-[12px] text-center pt-[6%] ">
                {data?.acf?.title.slice(0, 50).concat("...")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* button */}
      <div
        id="btnPosition"
        className="absolute  bottom-[10px]  lg:hidden w-full flex justify-center z-[100] "
      >
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
          background: `linear-gradient(to top, #191C21 0, rgba(25, 28, 33, 0.3) 66%, rgba(25, 28, 33, 0) 90%) center no-repeat`,
        }}
      ></div>
      <div className="btnInterview flex justify-center w-full smooth z-[100]">
        <div
          id="btnSize"
          className="hidden lg:block w-[200px] h-[60px] bg-white  cursor-pointer z-50"
        >
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
