import React from "react";
import { useNavigate } from "react-router-dom";

export default function MobileImgCarousel({ data }) {
  const history = useNavigate();

  const handleSeeFull = (data) => {
    const founderId = data.acf.interview[0];
    history(`/detailfounder/${founderId}`);
  };
  return (
    <>
      <div
        id="divBtn"
        className="mt-[60px] mb-[80px] relative imgCarousel w-[230px] h-[400px] md:w-[223px] md:h-[350px] xl:h-[550px] xl:w-[323px] 2xl:h-[664px] 2xl:w-[424px] rounded-3xl overflow-hidden"
      >
        <img
          src={data?.acf?.image}
          alt={data?.acf?.name}
          className="rounded-3xl w-full h-full scaleImg"
        />

        <div className="block absolute bottom-[63px] w-full">
          <div className="flex flex-col items-center justify-center z-10 ">
            <div className="flex flex-col items-center justify-center leading-[1] ">
              <p className="text-white text-[32px] 2xl:text-[50px] font-thin popinsFont">
                FOUNDER
              </p>
              <div>
                <p className="text-white text-[32px] 2xl:text-[50px] font-[900] popinsFont">
                  {data?.acf?.first_name.toUpperCase()}
                  &nbsp;
                  {data?.acf?.last_name.toUpperCase()}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mx-[20px]">
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
        <div></div>
      </div>
    </>
  );
}
