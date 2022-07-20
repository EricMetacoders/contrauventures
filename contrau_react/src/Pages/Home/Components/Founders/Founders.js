import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FounderTextAnimation from "./FounderTextAnimation";
import { getFounderList } from "../../../../reducers/homeSlice";
import FounderCarousel from "./Carousel/FounderCarousel";
import "./Carousel/founderImageCarousel.scss";
import TabletCarousel from "./Carousel/TabletCarousel";
import MobileCarousel from "./Carousel/MobileCarousel";
import "./founder.scss";
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
    <div id="founderId">
      <div className="mx-[34px] md:mx-[117px] xl:mx-[100px] 2xl:mx-[300px]">
        <div className="mt-[80px] md:mt-[300px]">
          <div>
            {/* desktop animation */}
            <div className="hidden xl:block xl:w-[1174px] 2xl:w-[1194px] h-[442px]">
              {/* start animation */}
              {offset > 2300 ? <FounderTextAnimation /> : <></>}
            </div>
            {/* end animation */}

            {/* tablet animation */}
            <div className="hidden sm:block xl:hidden   xl:w-[1119px] 2xl:w-[1127px] h-[442px]">
              {/* start animation */}
              {offset > 2300 ? <FounderTextAnimation /> : <></>}
            </div>
            {/* end animation */}

            {/* mobile animation */}
            <div className="block sm:hidden w-[305px] h-[315px]">
              {/* start animation */}
              {offset > 1100 ? <FounderTextAnimation /> : <></>}
            </div>
            {/* end animation */}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden 2xl:block mt-[20%] md:mt-[43%] lg:mt-[18%] ">
          <FounderCarousel />
        </div>

        {/* Desktop Small Screen */}
        <div className="hidden lg:block 2xl:hidden mt-[20%] md:mt-[43%] lg:mt-[18%] ">
          <FounderCarousel />
        </div>
      </div>

      {/* Tablet */}
      <div
        id="tabletSlick"
        className="hidden md:block lg:hidden mt-[20%] md:mt-[20%] lg:mt-[18%]  "
      >
        <TabletCarousel />
      </div>

      {/* Mobile */}

      <div className="block  md:hidden mt-[20%] md:mt-[43%] lg:mt-[18%]">
        <MobileCarousel />
      </div>
    </div>
  );
}
