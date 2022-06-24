import React from "react";
import footerLogo from "../../assets/image/footer_logo.png";
import shadowBg from "../../assets/image/shadowBg.png";
import reserved from "../../assets/image/reserved.png";
import li from "../../assets/image/LI.png";
import fb from "../../assets/image/FB.png";
export default function Footer() {
  return (
    <div className="relative">
      <div className="absolute top-[-276px] -z-40">
        <img src={shadowBg} alt="shadow" />
      </div>
      <div className="hidden 2xl:block 2xl:mt-[40px] 2xl:mx-[179px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center space-x-4 ">
            <img src={footerLogo} alt="logo" />
            <div className="flex items-center justify-center space-x-4 ">
              <p className="text-[11] font-bold text-hoverGrey">Tell</p>
              <p className="tesxt-[11] text-hoverGrey">1234-5678-910</p>
              <p className="tesxt-[11] text-hoverGrey">|</p>
            </div>
            <div className="flex items-center justify-center space-x-4 ">
              <p className="text-[11] font-bold text-hoverGrey">E-mail</p>
              <p className="tesxt-[11] text-hoverGrey">abcd@gmail.com</p>
              <p className="tesxt-[11] text-hoverGrey">|</p>
            </div>
            <div className="flex items-center justify-center space-x-4 ">
              <p className="text-[11] font-bold text-hoverGrey">Address</p>
              <p className="tesxt-[11] text-hoverGrey">
                36-1 Chungdam-dong, Seoul, Korea
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 ">
            <img src={reserved} alt="reserved" />
            <img src={fb} alt="fb" />
            <img src={li} alt="li" />
          </div>
        </div>
      </div>
      <div className="mx-[12px]  mt-[20px] 2xl:hidden">
        <img src={footerLogo} alt="logo" />
        <div className="flex justify-between items-center">
          <div>
            <div className="flex space-x-3">
              <p className="text-[9px] font-bold text-hoverGrey">Tell</p>
              <p className="text-[9px] text-hoverGrey">1234-5678-910</p>
              <p className="text-[9px] text-hoverGrey">|</p>
              <p className="text-[9px] font-bold text-hoverGrey">E-mail</p>
              <p className="text-[9px] text-hoverGrey">abcd@gmail.com</p>
            </div>
            <div className="flex space-x-3">
              <p className="text-[9px] font-bold text-hoverGrey">Address</p>
              <p className="text-[9px] text-hoverGrey">
                36-1 Chungdam-dong, Seoul, Korea
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <img src={fb} alt="facebook" />
            <img src={li} alt="li" />
          </div>
        </div>
        <div className="mt-[25px] mb-[37px]">
          <img src={reserved} alt="reserved" />
        </div>
      </div>
    </div>
  );
}
