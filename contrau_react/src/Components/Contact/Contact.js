import React from "react";
import ContactForm from "./ContactForm";
import contactForm from "./contactForm.css";
export default function Contact() {
  return (
    <div className="mt-[142px] 2xl:mt-[243px]">
      <div className=" mx-[12px] 2xl:mx-[181px] ">
        <div className="bg-black pb-[32px] 2xl:pb-[115px] boxShadow">
          <div className="pt-[83] 2xl:pt-[124px] mx-[24px] 2xl:mx-[112px]">
            <div className="flex items-center">
              <p className="text-[40px] 2xl:text-[60px] italic font-semibold text-white mb-[0]">
                Contact
              </p>
              <div className="w-[10px] h-[10px] 2xl:w-[15px] 2xl:h-[15px] rounded-full bg-red mt-[27px]"></div>
            </div>
            <div className="block 2xl:flex">
              <p className="text-[13px] 2xl:text-[20px] text-hoverGrey mb-0  mt-[33px] 2xl:mt-[110px] 2xl:w-[184px]">
                We will plant seeds for Vietnam’s Startup ecosystem more than 10
                years.
              </p>
              <div className="2xl:pl-[70px] mt-[33px] 2xl:mt-[110px]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
