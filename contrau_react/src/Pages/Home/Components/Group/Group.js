import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupTextAnimation from "./GroupTextAnimation";
import { getPartnersList } from "../../../../reducers/homeSlice";
import "./group.css";

export default function Group() {
  const dispatch = useDispatch();

  const partners = useSelector((state) => state.homeSlice.partners);

  useEffect(() => {
    dispatch(getPartnersList());
  }, []);

  const [offset, setOffset] = useState(null);
  const handleScroll = () => setOffset(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-partnersContactBg overflow-hidden">
      {/* start animation */}
      {offset > 100 && offset < 2100 ? (
        <GroupTextAnimation />
      ) : (
        <div className=" mx-[34px] md:mx-[117px] 2xl:mx-[300px] pb-[65px] ">
          <div className="pt-[80px] xl:pt-[324px] ">
            <div>
              <p className="text-white robotoFlexFont font-[700] text-[13px] 2xl:text-[24px] 2xl:mb-[32px]">
                Partners
              </p>

              <div className="hidden xl:block">
                <div className="text-white  leading-[1] ">
                  <div className="flex space-x-7">
                    <p className="popinsFont  text-[110px] font-[900] mb-0">
                      We are{" "}
                    </p>
                    <p className="popinsFont italic text-[110px] font-thin mb-0">
                      a Fund of
                    </p>
                  </div>
                  <div className="flex space-x-1 justify-start">
                    <p className="italic popinsFont font-thin text-[110px] mr-[16px]">
                      Korean
                    </p>
                    <span className="popinsFont text-[110px] font-[900]">
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
                    <p className="popinsFont text-[40px] font-[900]">
                      FOUNDERS
                    </p>
                    <div className="inline-block bg-red w-[13px] h-[13px] rounded-full mt-[32px] ml-[1px]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white mt-[45px] 2xl:mt-[90px] ">
              <div className="2xl:mr-[-70px]">
                <p className="popinsFont  text-[13px] 2xl:text-[20px] leading-[20px] 2xl:leading-[32px] font-[300]">
                  We once encountered the challenges facing many startup-ers
                  these days. We are here to accompany them on this arduous yet
                  exciting journey. Different linguistic and cultural
                  backgrounds don’t matter when we look in the same direction.
                </p>
                <p className="popinsFont text-[13px] pt-[24px] 2xl:text-[20px]  leading-[20px] 2xl:leading-[32px]  font-[300] mr-[20px]">
                  We take pride in being the pioneer in Korea's digital
                  transformation over the past decade.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* end animation */}
      <div className="hidden md:block ">
        {/* logo */}
        <div className="overflow-hidden flex  relative h-[179px] items-center">
          <div className="right-left1 absolute flex justify-center items-center ">
            {partners?.map((logo, i) => {
              return (
                <img
                  src={logo?.acf?.image}
                  alt={logo?.acf?.name}
                  className="w-[173px] h-full opacity-80 hover:opacity-100 mx-[2rem]"
                  key={i}
                />
              );
            })}
          </div>
          <div className=" right-left2 absolute flex justify-center items-center ">
            {partners?.map((logo, i) => {
              return (
                <img
                  src={logo?.acf?.image}
                  alt={logo?.acf?.name}
                  className="w-[173px] h-full opacity-80 hover:opacity-100 mx-[2rem]"
                  key={i}
                />
              );
            })}
          </div>
          <div className=" right-left3 absolute flex justify-center items-center ">
            {partners?.map((logo, i) => {
              return (
                <img
                  src={logo?.acf?.image}
                  alt={logo?.acf?.name}
                  className="w-[173px] h-full opacity-80 hover:opacity-100 mx-[2rem]"
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className="overflow-hidden flex  relative h-[179px] items-center my-[60px]">
          <div className="left-right1 absolute flex justify-center items-center">
            {partners?.map((logo, i) => {
              return (
                <img
                  src={logo?.acf?.image}
                  alt={logo?.acf?.name}
                  className="w-[173px] h-full opacity-80 hover:opacity-100 mx-[2rem]"
                  key={i}
                />
              );
            })}
          </div>
          <div className=" left-right2 absolute flex justify-center items-center">
            {partners?.map((logo, i) => {
              return (
                <img
                  src={logo?.acf?.image}
                  alt={logo?.acf?.name}
                  className="w-[173px] h-full opacity-80 hover:opacity-100 mx-[2rem]"
                  key={i}
                />
              );
            })}
          </div>
          <div className=" left-right3 absolute flex justify-center items-center">
            {partners?.map((logo, i) => {
              return (
                <img
                  src={logo?.acf?.image}
                  alt={logo?.acf?.name}
                  className="w-[173px] h-full opacity-80 hover:opacity-100 mx-[2rem]"
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className="overflow-hidden flex  relative h-[179px] items-center ">
          <div className="absolute right-left1 flex justify-center items-center">
            {partners?.map((logo, i) => {
              return (
                <img
                  src={logo?.acf?.image}
                  alt={logo?.acf?.name}
                  className="w-[173px] h-full opacity-80 hover:opacity-100  mx-[2rem]"
                  key={i}
                />
              );
            })}
          </div>
          <div className="absolute right-left2 flex justify-center items-center">
            {partners?.map((logo, i) => {
              return (
                <img
                  src={logo?.acf?.image}
                  alt={logo?.acf?.name}
                  className="w-[173px] h-full opacity-80 hover:opacity-100  mx-[2rem]"
                  key={i}
                />
              );
            })}
          </div>
          <div className="absolute right-left3 flex justify-center items-center">
            {partners?.map((logo, i) => {
              return (
                <img
                  src={logo?.acf?.image}
                  alt={logo?.acf?.name}
                  className="w-[173px] h-full opacity-80 hover:opacity-100 mx-[2rem]"
                  key={i}
                />
              );
            })}
          </div>
        </div>
        {/* logo */}
        <div className="flex items-center justify-center mt-[20px] ">
          <button className="mb-[129px] text-[24px] mt-[129px]  px-[40px] py-[15px] border border-white text-white hover:bg-white hover:text-black transition-all">
            View all 1000+ partners
          </button>
        </div>
      </div>
      <div className="block md:hidden ">
        {/* logo */}
        <div className="overflow-hidden flex  relative h-[80px] items-center ">
          <div className="mobile-right-left1 absolute flex justify-center items-center ">
            {partners?.map((logo, i) => {
              return (
                <img
                  src={logo?.acf?.image}
                  alt={logo?.acf?.name}
                  className="w-[80px] h-full opacity-80 hover:opacity-100 mx-[5px]"
                  key={i}
                />
              );
            })}
          </div>
          <div className="mobile-right-left2 absolute flex justify-center items-center ">
            {partners?.map((logo, i) => {
              return (
                <img
                  src={logo?.acf?.image}
                  alt={logo?.acf?.name}
                  className="w-[80px] h-full opacity-80 hover:opacity-100 mx-[5px]"
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className="overflow-hidden flex  relative h-[80px] items-center my-[40px] ">
          <div className="mobile-left-right1 absolute flex justify-center items-center ">
            {partners?.map((logo, i) => {
              return (
                <img
                  src={logo?.acf?.image}
                  alt={logo?.acf?.name}
                  className="w-[80px] h-full opacity-80 hover:opacity-100 mx-[5px]"
                  key={i}
                />
              );
            })}
          </div>
          <div className="mobile-left-right2 absolute flex justify-center items-center ">
            {partners?.map((logo, i) => {
              return (
                <img
                  src={logo?.acf?.image}
                  alt={logo?.acf?.name}
                  className="w-[80px] h-full opacity-80 hover:opacity-100 mx-[5px]"
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className="overflow-hidden flex  relative h-[80px] items-center ">
          <div className="mobile-right-left1 absolute flex justify-center items-center ">
            {partners?.map((logo, i) => {
              return (
                <img
                  src={logo?.acf?.image}
                  alt={logo?.acf?.name}
                  className="w-[80px] h-full opacity-80 hover:opacity-100 mx-[5px]"
                  key={i}
                />
              );
            })}
          </div>
          <div className="mobile-right-left2 absolute flex justify-center items-center ">
            {partners?.map((logo, i) => {
              return (
                <img
                  src={logo?.acf?.image}
                  alt={logo?.acf?.name}
                  className="w-[80px] h-full opacity-80 hover:opacity-100 mx-[5px]"
                  key={i}
                />
              );
            })}
          </div>
        </div>
        {/* logo */}
        <div className="flex items-cener justify-center mt-[76px] mb-[76px]">
          <button className="px-[50px] py-[15px] text-white border hover:bg-white hover:text-black transition-all">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
