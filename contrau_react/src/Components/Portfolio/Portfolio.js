import React from "react";
import bg from "../../assets/image/porti_bg.png";
import logo from "../../assets/image/porti_logo.png";
import logo2 from "../../assets/image/porti_logo2.png";
export default function Portfolio() {
  return (
    <div className="bg-black pt-[2px] md:mt-[300px] relative h-[871px] md:h[1596px]">
      <div>
        <img
          src={bg}
          alt="background"
          className="w-full h-[1115px] object-cover"
        />
        <div className="text-white hidden md:block ">
          <div className="absolute top-[65%] text-center w-full bg-transparent">
            <div>
              <p className="robotoFont font-bold text-[24px]">Portfolio</p>
              <div className="mt-[54px]">
                <div className="flex items-center justify-center">
                  <p className="font-extrabold italic text-[110px] ">
                    Vietnam's <span className="italic font-thin">victory</span>
                  </p>
                </div>
                <div className="flex items-center justify-center text-[110px] space-x-7">
                  <p className="italic font-thin">is</p>
                  <p className="font-extrabold text-red ">Our victory</p>
                  <div className=" w-[20px] h-[20px] rounded-full bg-red mt-[100px]"></div>
                </div>
              </div>
              <div className="mt-[54px]">
                <p className="text-[20px] font-normal">
                  We invest in areas that can increase Vietnam's growth potentia
                </p>
                <p className="text-[20px]  font-normal">
                  where Vietnam can become strong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden ml-[36px] bg-black">
        <div className="text-white absolute top-[75%]">
          <p className="robotoFont text-[13px] font-bold ">Portfolio</p>
          <div className="mt-[27px] text-[40px]">
            <p className="font-extrabold">Vietnam's</p>
            <p className="italic  font-extralight">victory is</p>
            <div className="flex items-center justify-start space-x-1">
              <p className="font-extrabold text-red">Our victory</p>
              <div className="w-[10px] h-[10px] bg-red rounded-full mt-[40px]"></div>
            </div>
          </div>
          <div className="mt-[45px]">
            <p className="text-[13px] w-[210px] text-white">
              We invest in areas that can increase Vietnam's growth potential
              where Vietnam can become strong.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  md:pt-[206px] 2xl:pt-[100px] bg-black text-white ">
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
