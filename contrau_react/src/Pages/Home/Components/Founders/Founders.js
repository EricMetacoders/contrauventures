import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FounderTextAnimation from "./FounderTextAnimation";
import { getFounderList } from "../../../../reducers/homeSlice";
import FounderCarousel from "./FounderCarousel";
import MobileCarousel from "./MobileCarousel";
import "./founderImageCarousel.scss";
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
    <div>
      <div className="mx-[34px] md:mx-[117px] 2xl:mx-[300px]">
        <div className="mt-[80px] md:mt-[300px]">
          <div>
            {/* desktop animation */}
            <div className="hidden md:block xl:w-[1119px] 2xl:w-[1127px] h-[442px]">
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
          </div>
        </div>
      </div>
      <div
        id="founderCarousel"
<<<<<<< HEAD
        className="hidden md:block md:ml-[12%] md:mt-[46%] xl:mt-[13%] 2xl:mt-[8%] lg:ml-0 mb-[30px] md:mb-0  mt-[110px] sm:mt-[78px] lg:mt-[27%px] overflow-visible xl:ml-[107px] 2xl:mx-[300px]"
=======
        className="hidden md:block md:ml-[12%] md:mt-[10%] lg:ml-0 mb-[30px] md:mb-0  mt-[110px] sm:mt-[78px] lg:mt-[27%px] overflow-visible xl:ml-[107px] 2xl:mx-[300px]"
>>>>>>> e0ead99ed70da2973c3fa8416d880e45ec3a4e2f
      >
        <FounderCarousel />
      </div>

      <div className="block md:hidden">
        <MobileCarousel />
      </div>
    </div>
  );
}
