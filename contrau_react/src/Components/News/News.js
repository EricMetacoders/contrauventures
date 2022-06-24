import React from "react";
import news_photo1 from "../../assets/image/news1.png";
import news_photo2 from "../../assets/image/news2.png";
import news_photo3 from "../../assets/image/news3.png";
export default function News() {
  return (
    <div className="mt-[307px]">
      <div className=" mx-[34px] xl:mx-[300px]">
        <div className="flex items-center justify-between">
          <div className="flex items-end justify-start">
            <p className="popinsFont italic text-[40px]  2xl:text-[60px] font-[900]">
              News
            </p>
            <div className="w-[10px] h-[10px] 2xl:w-[15px] 2xl:h-[15px] rounded-full bg-red mb-[58px] 2xl:mb-[86px]"></div>
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
            <div className="2xl:w-[428px] 2xl:h-[399px] w-[291px] h-[377px] border-b-2 border-black pb-[20px] mb-[50px] cursor-pointer">
              <img
                src={news_photo1}
                alt="news1"
                className="w-[288px] h-[168px] 2xl:w-[424px] 2xl:h-[178px]"
              />
              <div className="mt-[36px]">
                <p className="text-[14px] robotoFlexFont italic text-red mb-0">
                  Category
                </p>
                <p className="popinsFont 2xl:text-[24px] 2xl:font-normal text-[18px] font-light mb-0">
                  What happens when AI and NFT meets?
                </p>
                <p className="2xl-text[16px] 2xl:font-light 2xl:robotoFlexFont text-[13px] popinsFont font-light mb-0">
                  Sub text max 2 line sub text goes here and sub text goes here
                  and sub text goes hereSub text max 2 line sub text go...
                </p>
              </div>
            </div>
            <div className="2xl:w-[428px] 2xl:h-[399px] w-[291px] h-[377px] border-b-2 border-black pb-[20px] mb-[50px]  cursor-pointer">
              <img
                src={news_photo2}
                alt="news2"
                className="w-[288px] h-[168px] 2xl:w-[424px] 2xl:h-[178px]"
              />
              <div className="mt-[36px]">
                <p className="text-[14px] robotoFont italic text-red mb-0">
                  Category
                </p>
                <p className="popinsFont 2xl:text-[24px] 2xl:font-normal text-[18px] font-light mb-0">
                  Title max 2 lines Title max 2 linesTitle max 2 linesTitle max
                  2 ...
                </p>
                <p className="2xl-text[16px] 2xl:font-light 2xl:robotoFlexFont text-[13px] popinsFont font-light mb-0">
                  Sub text max 2 line sub text goes here and sub text goes here
                  and sub text goes hereSub text max 2 line sub text go...
                </p>
              </div>
            </div>
            <div className="2xl:w-[428px] 2xl:h-[399px] w-[291px] h-[377px] border-b-2 border-black pb-[20px]  mb-[50px]  cursor-pointer">
              <img
                src={news_photo3}
                alt="news3"
                className="w-[288px] h-[168px] 2xl:w-[424px] 2xl:h-[178px]"
              />
              <div className="mt-[36px]">
                <p className="text-[14px] robotoFlexFont italic text-red mb-0">
                  Category
                </p>
                <p className="popinsFont 2xl:text-[24px] 2xl:font-normal text-[18px] font-light mb-0">
                  What happens when AI and NFT meets?
                </p>
                <p className="2xl-text[16px] 2xl:font-light 2xl:robotoFlexFont text-[13px] popinsFont font-light mb-0">
                  Sub text max 2 line sub text goes here and sub text goes here
                  and sub text goes hereSub text max 2 line sub text go...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
