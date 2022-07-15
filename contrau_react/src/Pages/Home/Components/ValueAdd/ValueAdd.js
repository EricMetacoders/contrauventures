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
    <div className="mx-[34px]  md:mx-[117px] xl:mx-[100px] 2xl:mx-[300px] mt-[61px]  2xl:mt-[294px]">
      {/* desktop animation */}
      <div className="hidden md:block h-[520px]">
        {/* start animation */}
        {offset > 5700 ? <ValueAddAnimation /> : <></>}
        {/* end animation */}
      </div>

      {/* mobile animation*/}
      <div className="block md:hidden h-[249.5px]">
        {/* start animation */}
        {offset > 2926 ? <ValueAddAnimation /> : <></>}
        {/* end animation */}
      </div>

      <div>
        {data?.map((empower, i) => {
          return (
            <div
              className="border-darkGrey border-t-[1px] pb-[26px] 2xl:pb-[65px]"
              key={i}
            >
              <div className=" mt-[26px] lg:mt-[65px]">
                <div className="lg:mx-0 block lg:flex  lg:space-x-4">
                  <p className="popinsFont text-[18px] font-light  lg:text-[24px] italic text-red mb-0">
                    {i > 9 ? i + 1 : `0${i + 1}`}
                  </p>
                  <p className="popinsFont text-[24px] lg:text-[40px] font-light mb-[13px] lg:mb-0 leading-[47px]">
                    {empower?.acf?.title}
                  </p>
                </div>
              </div>
              <div className=" flex-col space-y-5 2xl:space-y-0 justify-start flex lg:flex-row lg:items-start lg:justify-center lg:ml-[45px] lg:mt-[30px]">
                <img
                  src={empower?.acf?.image}
                  alt={empower?.acf?.title}
                  className="w-full object-cover"
                />
                <p className=" popinsFont leading-[18px] font-light lg:leading-[32px] lg:font-normal lg:ml-[40px] lg:text-[20px]   text-[13px] mb-0">
                  {empower?.acf?.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
