import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="mt-[142px] lg:mt-[243px]">
      <div className=" mx-[12px] xl:mx-[106px] lg:mx-[31px] 2xl:mx-[181px] ">
        <div className="bg-partnersContactBg pb-[32px] 2xl:pb-[115px] shadowContact">
          <div className="pt-[16%] md:pt-[64px] lg:pt-[124px] mx-[24px] lg:mx-[120px]">
            <div className="flex items-center">
              <p className="popinsFont italic text-[40px]  text-white lg:text-[60px] font-[900]">
                Contact
              </p>
              <div className="w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full bg-red mt-[22px]"></div>
            </div>
            <div className="block lg:flex">
              <p className="text-[13px] lg:font-normal popinsFont font-light  lg:text-[20px] text-white lg:text-hoverGrey mb-0  mt-[33px] lg:mt-[110px] w-full lg:w-[20%] lg:pr-[62px]">
                We will plant seeds for Vietnam’s Startup ecosystem more than 10
                years.
              </p>
              <div className="lg:pl-[70px] mt-[33px] lg:mt-[110px] w-full lg:w-[80%]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
