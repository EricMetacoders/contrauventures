import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="mt-[142px] lg:mt-[243px]">
      <div className=" mx-[12px] md:mx-[40px] xl:mx-[40px] lg:mx-[31px] 2xl:mx-[181px] ">
        <div className="bg-partnersContactBg pb-[32px] 2xl:pb-[115px] shadowContact">
          <div className="pt-[16%] md:pt-[64px] md:mx-[76px] lg:pt-[124px] mx-[24px] lg:mx-[88px] xl:mx-[62px] 2xl:mx-[123px]">
            <div className="flex items-center">
              <p className="popinsFont italic text-[40px]  text-white lg:text-[60px] font-[900]">
                Contact{" "}
              </p>
              <p className="text-red popinsFont italic text-[40px] lg:text-[60px] font-[900]">
                .
              </p>
            </div>
            <div className="block">
              <p className="text-[13px] lg:font-normal popinsFont font-light  lg:text-[20px] text-white lg:opacity-50 mb-0  mt-[33px] lg:mt-[30px] w-full break-words lg:pr-[62px]">
                We will plant seeds for Vietnam’s Startup ecosystem more than 10
                years.
              </p>
              <div className=" mt-[33px] lg:mt-[110px] w-full lg:w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
