import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Collapse } from "antd";
import plus from "../../../../assets/homepage_img/plus.png";
import ic_plus from "../../../../assets/homepage_img/ic_plus.png";
import { getFAQList } from "../../../../reducers/homeSlice";
import "./faqCollapse.css";

export default function Faq() {
  const dispatch = useDispatch();

  const faqList = useSelector((state) => state.homeSlice.faqList);

  useEffect(() => {
    dispatch(getFAQList());
  }, []);

  const { Panel } = Collapse;
  return (
    <div className="mx-[34px] xl:mx-[300px]  mt-[260px] md:mt-[280px]">
      <div className="  pb-[10px] md:pb-[90px]">
        <div className="flex items-end justify-start">
          <p className="popinsFont italic text-[40px]  2xl:text-[60px] font-[900]">
            FAQ
          </p>
          <div className="w-[10px] h-[10px] 2xl:w-[15px] 2xl:h-[15px] rounded-full bg-red mb-[11px] 2xl:mb-[21px]"></div>
        </div>
      </div>
      <div>
        <Collapse accordion>
          {faqList?.map((ques, index) => {
            return (
              <Panel
                showArrow={false}
                header={
                  <div className="border-t-2 md:pb-[50px]">
                    <div className="mt-[10px] xl:mt-[50px] 2xl:mx-[20px]">
                      <div className="flex items-center justify-between">
                        <div className="md:flex items-center justify-between md:space-x-5">
                          <p className="popinsFont text-[18px] font-light  2xl:text-[24px] italic text-red mb-0">
                            Q{index + 1}
                          </p>
                          <p className="text-[18px] md:text-[32px] w-[299px] md:w-[522px] 2xl:w-[900px]  popinsFont 2xl:text-[32px] 2xl:font-normal font-light  mb-0 ">
                            {ques.acf.question}
                          </p>
                        </div>
                        <div>
                          <img
                            src={plus}
                            alt="plus"
                            className=" w-[20px] h-[20px] md:w-[30px] md:h-[30px] mb-[50px] md:mb-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                }
                key={index + 1}
              >
                <div className="ml-[-3px] mr-[47px] pb-[40px] md:mx-[50px] ">
                  <p className="md:mt-[71px] mt-[40px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    {ques.acf.answer_part_1}
                  </p>
                  <p className="mt-[20px] md:mt-[42px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    {ques.acf.answer_part_2}
                  </p>
                  <p className="mt-[20px] md:mt-[42px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    {ques.acf.answer_part_3}
                  </p>
                </div>
              </Panel>
            );
          })}
        </Collapse>
      </div>
    </div>
  );
}
