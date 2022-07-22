import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { interviewServices } from "../../../../../services/interviewService";
import "./founderImageCarousel.scss";
export default function LandSpaceImage({ data }) {
  const history = useNavigate();
  const [founderList, setFounderList] = useState(null);

  const handleSeeFull = (data) => {
    const founderId = data.acf.interview[0];
    history(`/detailfounder/${founderId}`);
  };
  return (
    <div
      id="divBtn"
      className=" relative imgCarousel rounded-3xl overflow-hidden mx-auto"
    >
      <img
        src={data?.acf?.image}
        alt={data?.acf?.name}
        className="rounded-3xl w-[72%] h-[305px]  first:scaleImg mx-auto "
      />
      <div className=" absolute bottom-[16%] w-full ">
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
            <p className="text-white popinsFont w-[70%]  font-light text-[12px] text-center pt-[3%] mb-[26px]">
              {data?.acf?.title.slice(0, 64).concat("...")}
            </p>

          </div>
        </div>
      </div>
      <div className="absolute  bottom-[6%]  w-full flex justify-center ">
        <div className=" w-[151px] h-[44px] bg-white  cursor-pointer">
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
    </div>
  );
}
