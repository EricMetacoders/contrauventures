import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ValueAddAnimation from "./ValueAddAnimation";
import { getEmpowerList } from "../../../../reducers/homeSlice";
export default function ValueAdd() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.homeSlice.empowers);
  useEffect(() => {
    dispatch(getEmpowerList());
  }, []);

  const [offset, setOffset] = useState(null);
  const handleScroll = () => setOffset(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="mx-[34px]  2xl:mx-[300px] mt-[61px]  2xl:mt-[294px]">
      {/* desktop animation */}
      <div className="hidden md:block">
        {/* start animation */}
        {offset > 6190 && offset < 7859 ? (
          <ValueAddAnimation />
        ) : (
          <div>
            <p className="robotoFlexFont text-[13px] md:text-[24px] font-bold">
              Value Add
            </p>
            <div className="mt-[30px] 2xl:mt-[74px] border-t-2 border-black pb-[40px] 2xl:pb-[80px] leading-[1]">
              <p className="popinsFont text-[40px]  font-[900] md:text-[80px] 2xl:text-[110px]  2xl:font-thin 2xl:italic mb-0">
                We empower
              </p>
              <p className="popinsFont text-[40px] md:text-[80px] 2xl:text-[110px]  italic font-thin mb-0">
                ourselve with
              </p>
              <div className="block md:flex items-center justify-start md:space-x-5">
                <p className="popinsFont text-[40px] md:text-[80px] 2xl:text-[110px]  italic font-thin mb-0">
                  various
                </p>
                <p className="popinsFont text-[40px] md:text-[80px] 2xl:text-[110px] font-[900] text-red italic mb-0">
                  potentials
                </p>
              </div>
            </div>
          </div>
        )}
        {/* end animation */}
      </div>

      {/* mobile animation*/}
      <div className="block md:hidden">
        {/* start animation */}
        {offset > 2926 && offset < 4126 ? (
          <ValueAddAnimation />
        ) : (
          <div>
            <p className="robotoFlexFont text-[13px] md:text-[24px] font-bold">
              Value Add
            </p>
            <div className="mt-[30px] 2xl:mt-[74px] border-t-2 border-black pb-[40px] 2xl:pb-[80px] leading-[1]">
              <p className="popinsFont text-[40px]  font-[900] md:text-[80px] 2xl:text-[110px]  2xl:font-thin 2xl:italic mb-0">
                We empower
              </p>
              <p className="popinsFont text-[40px] md:text-[80px] 2xl:text-[110px]  italic font-thin mb-0">
                ourselve with
              </p>
              <div className="block md:flex items-center justify-start md:space-x-5">
                <p className="popinsFont text-[40px] md:text-[80px] 2xl:text-[110px]  italic font-thin mb-0">
                  various
                </p>
                <p className="popinsFont text-[40px] md:text-[80px] 2xl:text-[110px] font-[900] text-red italic mb-0">
                  potentials
                </p>
              </div>
            </div>
          </div>
        )}
        {/* end animation */}
      </div>

      {data?.map((empower, i) => {
        return (
          <div
            className="border-darkGrey border-t-[1px] pb-[26px] 2xl:pb-[65px]"
            key={i}
          >
            <div className=" mt-[26px] 2xl:mt-[65px]">
              <div className="mx-[20px] 2xl:mx-0 block 2xl:flex items-center justify-star 2xl:space-x-4">
                <p className="popinsFont text-[18px] font-light  2xl:text-[24px] italic text-red mb-0">
                  {i > 9 ? i + 1 : `0${i + 1}`}
                </p>
                <p className="popinsFont text-[24px] 2xl:text-[40px] font-light mb-0 ">
                  {empower?.acf?.title}
                </p>
              </div>
            </div>
            <div className=" flex-col space-y-5 2xl:space-y-0 justify-start flex 2xl:flex-row 2xl:items-start 2xl:justify-center 2xl:ml-[45px] 2xl:mt-[30px]">
              <img
                src={empower?.acf?.image}
                alt={empower?.acf?.title}
                className="w-[288px] h-[160px] 2xl:w-[370px] 2xl:h-[205px] ml-[20px] 2xl:mx-0"
              />
              <p className=" popinsFont leading-[18px] font-light 2xl:leading-[32px] 2xl:font-normal 2xl:ml-[20px] 2xl:text-[20px] ml-[20px]  mr-[30px] 2xl:mr-0 text-[13px] mb-0">
                {empower?.acf?.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
