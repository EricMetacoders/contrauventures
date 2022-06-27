import React from "react";
import value_add_1 from "../../../../assets/homepage_img/value_add_1.png";
import value_add_2 from "../../../../assets/homepage_img/value_add_2.png";
export default function ValueAdd() {
  return (
    <div className="mx-[34px] md:mt-[1069px] 2xl:mx-[300px]  mt-[120px] 2xl:mt-[1377px] ">
      <div>
        <p className="robotoFlexFont text-[13px] md:text-[24px] font-bold">
          Value Add
        </p>
        <div className="mt-[30px] 2xl:mt-[74px] border-b-2 border-black pb-[40px] 2xl:pb-[80px] leading-[1]">
          <p className="popinsFont text-[40px] md:text-[80px] 2xl:text-[110px]  font-[900] mb-0">
            We empower
          </p>
          <p className="popinsFont text-[40px] md:text-[80px] 2xl:text-[110px]  italic font-thin mb-0">
            ourselve with
          </p>
          <div className="block md:flex items-center justify-start md:space-x-5">
            <p className="popinsFont text-[40px] md:text-[80px] 2xl:text-[110px]  italic font-thin mb-0">
              various
            </p>
            <p className="popinsFont text-[40px] md:text-[80px] 2xl:text-[110px] font-[900] text-red italic mb-0">
              potentials
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-darkGrey pb-[26px] 2xl:pb-[65px] ">
        <div className=" mt-[26px] 2xl:mt-[65px]">
          <div className="mx-[20px] 2xl:mx-0 block 2xl:flex items-center justify-star 2xl:space-x-4">
            <p className="popinsFont text-[18px] font-light  2xl:text-[24px] italic text-red mb-0">
              01
            </p>
            <p className="popinsFont text-[24px] 2xl:text-[40px] font-light mb-0 ">
              Developer Center
            </p>
          </div>
        </div>
        <div className=" flex-col space-y-5 2xl:space-y-0 justify-start flex 2xl:flex-row 2xl:items-start 2xl:justify-center 2xl:ml-[45px] 2xl:mt-[30px]">
          <img
            src={value_add_1}
            alt="value"
            className="w-[288px] h-[160px] 2xl:w-[370px] 2xl:h-[205px] ml-[20px] 2xl:mx-0"
          />
          <p className=" popinsFont leading-[18px] font-light 2xl:leading-[32px] 2xl:font-normal 2xl:ml-[20px] 2xl:text-[20px] ml-[20px]  mr-[30px] 2xl:mr-0 text-[13px] mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip
          </p>
        </div>
      </div>
      <div className="border-b-2 border-darkGrey pb-[26px] 2xl:pb-[65px] ">
        <div className=" mt-[26px] md:mt-[65px]">
          <div className="mx-[20px] md:mx-0 block md:flex items-center justify-star md:space-x-4">
            <p className="popinsFont text-[18px] font-light  2xl:text-[24px] italic text-red mb-0">
              02
            </p>
            <p className="popinsFont text-[24px] 2xl:text-[40px] font-light mb-0 ">
              Foundation Session
            </p>
          </div>
        </div>
        <div className=" flex-col space-y-5 2xl:space-y-0 justify-start flex 2xl:flex-row 2xl:items-start 2xl:justify-center 2xl:ml-[45px] 2xl:mt-[30px]">
          <img
            src={value_add_2}
            alt="value"
            className="w-[288px] h-[160px] 2xl:w-[370px] 2xl:h-[205px] ml-[20px] 2xl:mx-0"
          />
          <p className="popinsFont leading-[18px] font-light 2xl:leading-[32px] 2xl:font-normal 2xl:ml-[20px] 2xl:text-[20px] ml-[20px]  mr-[30px] 2xl:mr-0 text-[13px] mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip
          </p>
        </div>
      </div>
    </div>
  );
}
