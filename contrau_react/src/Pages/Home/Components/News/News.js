import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsList } from "../../../../reducers/homeSlice";
import "./news.scss";

export default function News() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.homeSlice.news);
  useEffect(() => {
    dispatch(getNewsList());
  }, []);

  return (
    <div>
      <div className=" mx-[34px] md:mx-[117px] xl:mx-[100px] 2xl:mx-[300px]">
        <div className="border-t-[1px] lg:mt-[2px]"></div>
        <div className="flex items-center justify-between mt-[276px]">
          <div className="flex items-end justify-start">
            <p className="popinsFont italic text-[40px]  lg:text-[60px] font-[900]">
              NEWS
            </p>
            <div className="w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full bg-red mb-[14px] lg:mb-[22px]"></div>
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
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6">
            {data?.map((n, index) => {
              return (
                <div
                  key={index}
                  className="lg:w-[428px] lg:h-[399px] w-full h-auto border-b-[1px] border-black pb-[20px] mb-[50px] cursor-pointer"
                >
                  <img
                    src={n.acf.image}
                    alt={n.acf.title}
                    className="w-full h-[157px] sm:h-[240px] lg:w-[424px] lg:h-[178px]"
                  />
                  <div className="mt-[36px]">
                    <p className="text-[14px] robotoFlexFont italic text-red mb-0">
                      {n.acf.categies}
                    </p>
                    <p className="text-break popinsFont lg:text-[24px] lg:font-normal text-[18px] font-light mb-0 hover:underline underline-offset-1">
                      {n.acf.title}
                    </p>
                    <p className="break-all text-break lg-text[16px] lg:font-light lg:robotoFlex Font text-[13px] popinsFont font-light mb-0">
                      {n.acf.newscontent}
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
