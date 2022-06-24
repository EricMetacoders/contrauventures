import React from "react";
import bg from "../../assets/image/porti_bg.png";
import logo from "../../assets/image/porti_logo.png";
import logo2 from "../../assets/image/porti_logo2.png";
export default function Portfolio() {
  return (
    <div className="bg-black pt-[2px] md:mt-[300px] relative h-[871px] md:h[1596px]">
      <div>
        <img src={bg} alt="background" className="w-full h-auto object-cover" />
        <div className="text-white hidden md:block ">
          <div className="absolute md:top-[30%] 2xl:top-[90%] text-center w-full bg-transparent">
            <div>
              <p className="robotoFont font-bold text-[24px] ">Portfolio</p>
              <div className="mt-[54px] leading-[1]">
                <div className="flex items-center justify-center">
                  <p className="font-extrabold italic text-[110px] mb-0">
                    Vietnam's <span className="italic font-thin">victory</span>
                  </p>
                </div>
                <div className="flex items-center justify-center text-[110px] space-">
                  <p className="italic font-thin mb-0">is</p>
                  <p className="font-extrabold text-red  mb-0">Our victory</p>
                  <div className=" w-[25px] h-[25px] rounded-full bg-red mt-[79px]"></div>
                </div>
              </div>
              <div className="mt-[54px]">
                <p className="text-[20px] font-normal text-hoverGrey mb-0">
                  We invest in areas that can increase Vietnam's growth potentia
                </p>
                <p className="text-[20px]  font-norma text-hoverGrey mb-0l">
                  where Vietnam can become strong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden ml-[36px] bg-black">
        <div className="text-white absolute top-[20%]">
          <p className="robotoFont text-[13px] font-bold mb-0">Portfolio</p>
          <div className="mt-[27px] text-[40px] leading-[1]">
            <p className="font-extrabold mb-0">Vietnam's</p>
            <p className="italic  font-extralight mb-0">victory is</p>
            <div className="flex items-center justify-start space-x-1">
              <p className="font-extrabold text-red mb-0">Our victory</p>
              <div className="w-[10px] h-[10px] bg-red rounded-full mt-[40px]"></div>
            </div>
          </div>
          <div className="mt-[30px]">
            <p className="text-[13px] w-[210px] text-white">
              We invest in areas that can increase Vietnam's growth potential
              where Vietnam can become strong.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[249px] 2xl:mt-0 md:pt-[206px] 2xl:pt-[186px] bg-black text-white ">
        <button className="w-[280px] h-[60px] border border-white hover:bg-grey hover:text-black transition-all">
          View All
        </button>

        <button className="w-[280px] h-[60px] border border-white  hover:bg-grey hover:text-black transition-all">
          SW Infrastructurel
        </button>

        <button className="w-[280px] h-[60px] border border-white hover:bg-grey hover:text-black transition-all">
          Digital Supply Chain
        </button>

        <button className="w-[280px] h-[60px] border border-white hover:bg-grey hover:text-black transition-all">
          Sustainable Megacityl
        </button>
      </div>
      <div className="flex items-center justify-center bg-black pb-[139px] ">
        <div className="bg-black pt-[20px] xl:pt-[81px] 2xl:pt-[50px] ">
          <div className="border-b-2 border-darkGrey pb-[50px]">
            <img
              src={logo}
              alt="logo"
              className="opacity-80 hover:opacity-100 "
            />
          </div>
          <div className="border-b-2 border-darkGrey pb-[50px]">
            <img
              src={logo2}
              alt="logo2"
              className="opacity-80 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
