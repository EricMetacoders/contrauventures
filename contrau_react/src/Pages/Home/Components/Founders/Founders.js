import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FounderTextAnimation from "./FounderTextAnimation";
import { getFounderList } from "../../../../reducers/homeSlice";
import FounderCarousel from "./FounderCarousel";
export default function Founders() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFounderList());
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
    <div className="mx-[34px] md:mx-[117px] 2xl:mx-[300px] ">
      <div className="mt-[80px] md:mt-[300px]">
        <div>
          {/* desktop animation */}
          <div className="hidden md:block w-[1319px] h-[442px]">
            {/* start animation */}
            {offset > 2300 ? <FounderTextAnimation /> : <></>}
          </div>
          {/* end animation */}

          {/* mobile animation */}
          <div className="block md:hidden w-[305px] h-[315px]">
            {/* start animation */}
            {offset > 1100 ? <FounderTextAnimation /> : <></>}
          </div>
          {/* end animation */}

          <div className="md:ml-0 mb-[30px] md:mb-0  mt-[110px] md:mt-[78px] lg:mt-[200px] overflow-visible">
            <FounderCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
