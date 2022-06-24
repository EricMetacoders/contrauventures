import React from "react";
import frame1 from "../../assets/image/frame1.png";
import frame2 from "../../assets/image/frame2.png";
import photo2 from "../../assets/image/logo2.png";
import photo3 from "../../assets/image/logo3.png";
import "./group.css";

export default function Group() {
  return (
    <div className="bg-black overflow-hidden">
      <div className=" mx-[34px] md:mx-[117px] 2xl:mx-[300px] pb-[61px] ">
        <div className="pt-[80px] xl:pt-[324px] ">
          <div>
            <p className="text-white robotoFlexFont font-[700] text-[13px] 2xl:text-[24px] mb-[17px]">
              Partners
            </p>
            <div className="hidden xl:block">
              <div className="text-white  leading-[1] ">
                <div className="flex space-x-7">
                  <p className=" text-[110px] font-bold mb-0">We are </p>
                  <p className="popinsFont italic text-[110px] font-thin mb-0">
                    a Fund of
                  </p>
                </div>
                <div className="flex space-x-7 justify-start">
                  <p className="italic popinsFont font-thin text-[110px]">
                    Korean
                  </p>
                  <span className="popinsFont text-[110px] font-bold">
                    FOUNDERS
                  </span>
                  <div className="inline-block bg-red w-[23px] h-[23px] rounded-full mt-[70px]"></div>
                </div>
              </div>
            </div>
            <div className="block xl:hidden">
              <div className="text-white mt-[27px]]">
                <p className="popinsfont text-[40px] font-extrabold mb-[3px]">
                  We are
                </p>
                <p className="popinsFont text-[40px] italic font-thin w-[220px] mb-0 leading-[1]">
                  a Fund of Korean
                </p>
                <div className="flex mt-[3px]">
                  <p className="popinsFont text-[40px] font-[900]">FOUNDERS</p>
                  <div className="inline-block bg-red w-[13px] h-[13px] rounded-full mt-[32px] ml-[1px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white mt-[45px] 2xl:mt-[90px] ">
            <div className="2xl:mr-[-70px]">
              <p className="popinsFont  text-[13px] 2xl:text-[20px] leading-[20px] 2xl:leading-[32px] font-[300]">
                Founders hold the power of perseverance inherent in the
                Vietnamese people whose history is marked by thousands of years
                of struggle and victories. Their youthful energy, eagerness to
                learn, and commitment to the future of their families make us
                confident in the future of Vietnam.
              </p>
              <p className="popinsFont text-[13px] pt-[24px] 2xl:text-[20px]  leading-[20px] 2xl:leading-[32px]  font-[300] mr-[20px]">
                We are proud to have led Korea's digital economy transformation
                over the past decade.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block ">
        <div className="left-right">
          <img
            src={photo2}
            alt="photo2"
            className="mt-[46px] w-full h-[171px]"
          />
        </div>
        <div className="right-left">
          <img
            src={photo2}
            alt="photo2"
            className="mt-[46px] h-[171px] w-full"
          />
        </div>
        <div className="left-right">
          <img
            src={photo2}
            alt="photo2"
            className="mt-[46px] h-[171px] w-full"
          />
        </div>
        <div className="flex items-center justify-center mt-[20px] ">
          <button className="mb-[129px] text-[24px] mt-[129px]  px-[40px] py-[15px] border border-white text-white hover:bg-white hover:text-black transition-all">
            View all 1000+ partners
          </button>
        </div>
      </div>
      <div className="block md:hidden  overflow-hidden">
        <div className="left-right">
          <img src={frame2} alt="frame2" />
        </div>
        <div className="right-left">
          <img src={frame2} alt="frame2" />
        </div>
        <div className="left-right">
          <img src={frame2} alt="frame2" />
        </div>
        <div className="flex items-cener justify-center mt-[76px] mb-[76px]">
          <button className="px-[50px] py-[15px] text-white border hover:bg-white hover:text-black transition-all">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
