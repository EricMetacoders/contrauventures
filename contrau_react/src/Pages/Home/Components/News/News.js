import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsList } from "../../../../reducers/homeSlice";

export default function News() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.homeSlice.news);
  useEffect(() => {
    dispatch(getNewsList());
  }, []);

  return (
    <div className="mt-[307px]">
      <div className=" mx-[34px] xl:mx-[300px]">
        <div className="flex items-center justify-between">
          <div className="flex items-end justify-start">
            <p className="popinsFont italic text-[40px]  2xl:text-[60px] font-[900]">
              News
            </p>
            <div className="w-[10px] h-[10px] 2xl:w-[15px] 2xl:h-[15px] rounded-full bg-red mb-[14px] 2xl:mb-[22px]"></div>
          </div>
          <div>
            <div className="border-b-2 border-darkGrey">
              <p className="robotoFlexFont font-bold text-[14px] md:text-[16px] mb-0 cursor-pointer">
                view more
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[109px]">
          <div className="flex flex-col 2xl:flex-row items-center justify-center 2xl:space-x-6">
            {data?.map((n) => {
              return (
                <div className="2xl:w-[428px] 2xl:h-[399px] w-[291px] h-[377px] border-b-2 border-black pb-[20px] mb-[50px] cursor-pointer">
                  <img
                    src={n.acf?.image}
                    alt={n.acf?.title}
                    className="w-[288px] h-[168px] 2xl:w-[424px] 2xl:h-[178px]"
                  />
                  <div className="mt-[36px]">
                    <p className="text-[14px] robotoFlexFont italic text-red mb-0">
                      {n.acf?.categies}
                    </p>
                    <p className="popinsFont 2xl:text-[24px] 2xl:font-normal text-[18px] font-light mb-0">
                      {n.acf?.title.slice(0, 77).concat("...")}
                    </p>
                    <p className="2xl-text[16px] 2xl:font-light 2xl:robotoFlexFont text-[13px] popinsFont font-light mb-0">
                      {n.acf?.newscontent.slice(0, 115).concat("...")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
