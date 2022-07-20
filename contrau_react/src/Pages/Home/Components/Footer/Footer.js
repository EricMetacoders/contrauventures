import React from "react";
import footerLogo from "../../../../assets/homepage_img/footer_logo.png";
import shadowBg from "../../../../assets/homepage_img/shadowBg.png";
import reserved from "../../../../assets/homepage_img/reserved.png";
import li from "../../../../assets/homepage_img/li.svg";
import fb from "../../../../assets/homepage_img/fb.svg";
export default function Footer() {
  return (
    <div className="relative">
      <div className="absolute w-full top-[-69px] h-[228px] lg:h-auto  lg:top-[-276px] -z-40">
        <img src={shadowBg} alt="shadow" className="w-full h-full" />
      </div>
      <div className="hidden 2xl:block 2xl:mt-[40px] 2xl:mx-[179px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center space-x-4 ">
            <img src={footerLogo} alt="logo" />
            <div className="flex items-center justify-center space-x-4 ">
              <p className="popinsFont text-[11px] font-bold text-hoverGrey">
                Tell
              </p>
              <p className="popinsFont  text-[11px] text-hoverGrey">
                1234-5678-910
              </p>
              <p className="popinsFont text-[11px] text-hoverGrey">|</p>
            </div>
            <div className="flex items-center justify-center space-x-4 ">
              <p className="popinsFont text-[11px] font-bold text-hoverGrey">
                E-mail
              </p>
              <p className="popinsFont text-[11px] text-hoverGrey">
                abcd@gmail.com
              </p>
              <p className="popinsFont text-[11px] text-hoverGrey">|</p>
            </div>
            <div className="flex items-center justify-center space-x-4 ">
              <p className="popinsFont text-[11px] font-bold text-hoverGrey">
                Address
              </p>
              <p className="popinsFont text-[11px] text-hoverGrey">
                36-1 Chungdam-dong, Seoul, Korea
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 ">
            <img src={reserved} alt="reserved" />
            <div className="flex items-center justify-center rounded-full bg-[#dddedf] hover:bg-[#cccdcf] transition-all w-[34px] h-[34px] cursor-pointer">
              <img src={fb} alt="fb" className="opacity-40 " />
            </div>
            <div className="flex items-center justify-center rounded-full bg-[#dddedf] hover:bg-[#cccdcf] transition-all w-[34px] h-[34px] cursor-pointer">
              <img src={li} alt="li" className="opacity-40 " />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[21px]  mt-[20px] 2xl:hidden">
        <img src={footerLogo} alt="logo" />
        <div className="flex justify-between items-center">
          <div>
            <div className="flex space-x-3">
              <p className="popinsFont text-[9px] font-bold text-hoverGrey">
                Tell
              </p>
              <p className="popinsFont text-[9px] text-hoverGrey">
                1234-5678-910
              </p>
              <p className="popinsFont text-[9px] text-hoverGrey">|</p>
              <p className="popinsFont text-[9px] font-bold text-hoverGrey">
                E-mail
              </p>
              <p className="popinsFont text-[9px] text-hoverGrey">
                abcd@gmail.com
              </p>
            </div>
            <div className="flex space-x-3">
              <p className="popinsFont text-[9px] font-bold text-hoverGrey">
                Address
              </p>
              <p className="popinsFont text-[9px] text-hoverGrey">
                36-1 Chungdam-dong, Seoul, Korea
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="flex items-center justify-center rounded-full bg-[#dddedf] hover:bg-[#cccdcf] transition-all w-[30px] h-[30px] cursor-pointer">
              <img src={fb} alt="facebook" className="opacity-40" />
            </div>
            <div className="flex items-center justify-center rounded-full bg-[#dddedf] hover:bg-[#cccdcf] transition-all w-[30px] h-[30px] cursor-pointer">
              {" "}
              <img src={li} alt="li" className="opacity-40" />
            </div>
          </div>
        </div>
        <div className="mt-[25px] mb-[37px]">
          <img src={reserved} alt="reserved" />
        </div>
      </div>
    </div>
  );
}
