import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as PlusImage } from "../../../../assets/homepage_img/plus.svg";
import { ReactComponent as MinusImage } from "../../../../assets/homepage_img/minus.svg";
import { Collapse } from "antd";
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
    <div className="mx-[34px]  md:mx-[117px] xl:mx-[100px] 2xl:mx-[300px]  mt-[2px] md:mt-[-19px]">
      <div className="border-t-[1px] border-hoverGrey mb-[258px] 2xl:mb-[283px]"></div>
      <div className="  pb-[10px] md:pb-[90px]">
        <div className="flex items-end justify-start">
          <p className="popinsFont italic text-[40px]  2xl:text-[60px] font-[900]">
            FAQ
          </p>
          <div className="w-[10px] h-[10px] 2xl:w-[15px] 2xl:h-[15px] rounded-full bg-red mb-[11px] 2xl:mb-[21px]"></div>
        </div>
      </div>
      <div>
        <Collapse
          accordion
          expandIcon={({ isActive }) =>
            isActive ? (
              // <AiOutlineMinus size={30} color="#101010" />
              <MinusImage className="scale-75 2xl:scale-100" />
            ) : (
              // <AiOutlinePlus size={30} color="#101010" />
              <PlusImage className="scale-75 2xl:scale-100" />
            )
          }
        >
          {faqList?.map((ques, i) => {
            return (
              <Panel
                showArrow={true}
                header={
                  <div
                    id={`parentDiv${i}`}
                    onMouseOver={() => {
                      document
                        .getElementById(`parentDiv${i}`)
                        .classList.add("greyBg");
                    }}
                    onMouseOut={(e) => {
                      document
                        .getElementById(`parentDiv${i}`)
                        .classList.remove("greyBg");
                    }}
                  >
                    <div className="border-t-[1px] md:pb-[50px] cursor-pointer ">
                      <div className="mt-[10px] sm:mt-[20px] md:mt-[50px] xl:mt-[50px] 2xl:mx-[20px]">
                        <div className="flex items-center justify-between">
                          <div className="md:flex items-center  space-center justify-center md:space-x-5">
                            <p className="popinsFont text-[18px] font-light  lg:text-[24px] italic text-red mb-[2px] ">
                              Q{i + 1}
                            </p>
                            <p className="break-all text-[18px] md:text-[20px]  w-auto  lg:text-[25px]   popinsFont 2xl:text-[32px] sm:font-normal font-light  mb-0 mText">
                              {ques.acf.question}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                key={i + 1}
              >
                <div className="ml-[-3px] md:mt-[40px] mr-[47px] pb-[40px] md:mx-[50px] ">
                  <p className="break-all md:mt-[-21px] mt-[21px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    {ques.acf.answer_part_1}
                  </p>
                  <p className="break-all mt-[20px] md:mt-[42px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    {ques.acf.answer_part_2}
                  </p>
                  <p className="break-all mt-[20px] md:mt-[42px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    {ques.acf.answer_part_3}
                  </p>
                </div>
              </Panel>
            );
          })}
        </Collapse>
      </div>
      <div className="border-t-[1px] border-black mb-[258px] 2xl:mb-[283px]"></div>
    </div>
  );
}
