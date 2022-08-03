import React from "react";
import { Box } from "@mui/material";
import footerLogo from "../../../../assets/homepage_img/footer_logo.png";
import shadowBg from "../../../../assets/homepage_img/shadowBg.png";
import reserved from "../../../../assets/homepage_img/reserved.png";
import li from "../../../../assets/homepage_img/li.svg";
import fb from "../../../../assets/homepage_img/fb.svg";
import logofbsvg from "../../../../assets/interview-img/fb.svg";
import logolisvg from "../../../../assets/interview-img/li.svg";
import logotraufooter from "../../../../assets/interview-img/footerlogo.svg";

import "./footer.scss";

export default function Footer() {
  return (
    <div className="absolute -z-10 translate-y-[-192px]">
      <div className="w-full h-[400px] lg:h-[400px]">
        <img src={shadowBg} alt="shadow" className="w-full h-full" />
        <div className="absolute bottom-0 w-full translate-y-[40px] md:translate-y-[-50px]">
          <Box className="rootfooter">
            <Box className="mainfooter">
              <Box className="logofooter">
                <img src={logotraufooter} alt="logotrau" />
              </Box>
              <Box className="frameaddress">
                <Box className="addressdetailfooter">
                  <span style={{ fontWeight: "700" }}>Tell</span> (+84)
                  (0)961-806-406 |{" "}
                  <span style={{ fontWeight: "700" }}>E-mail </span>
                  update@contrau.ventures |
                  <span style={{ fontWeight: "700" }}> Address</span> 94 Xuan
                  Thuy Street, Thao Dien Ward, District 2, Thu Duc City, Ho Chi
                  Minh City
                </Box>
                <Box className="framelogomb">
                  <Box className="framelogofb-mb">
                    <a
                      href="https://www.facebook.com/contrauventures"
                      target="_blank"
                    >
                      <img src={logofbsvg} alt="logofbsvg" />
                    </a>
                  </Box>
                  <Box className="framelogolk-mb">
                    <img src={logolisvg} alt="logolisvg" />
                  </Box>
                </Box>
              </Box>

              <Box className="allrightframe">© All rights reserved.</Box>
              <Box className="framelogopc">
                <Box className="framelogofb">
                  <a
                    href="https://www.facebook.com/contrauventures"
                    target="_blank"
                  >
                    <img src={logofbsvg} alt="logofbsvg" />
                  </a>
                </Box>
                <Box className="framelogolk">
                  <img src={logolisvg} alt="logolisvg" />
                </Box>
              </Box>
            </Box>
          </Box>
          {/* <div className="hidden 2xl:block 2xl:mt-[40px] 2xl:mx-[179px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center space-x-4 ">
                <img src={footerLogo} alt="logo" />
                <div className="flex items-center justify-center space-x-4 ">
                  <p className="popinsFont text-[11px] font-bold text-hoverGrey">
                    Tell
                  </p>
                  <p className="popinsFont  text-[11px] text-hoverGrey">
                    (+84) (0)961-806-406
                  </p>
                  <p className="popinsFont text-[11px] text-hoverGrey">|</p>
                </div>
                <div className="flex items-center justify-center space-x-4 ">
                  <p className="popinsFont text-[11px] font-bold text-hoverGrey">
                    E-mail
                  </p>
                  <p className="popinsFont text-[11px] text-hoverGrey">
                    update@contrau.ventures
                  </p>
                  <p className="popinsFont text-[11px] text-hoverGrey">|</p>
                </div>
                <div className="flex items-center justify-center space-x-4 ">
                  <p className="popinsFont text-[11px] font-bold text-hoverGrey">
                    Address
                  </p>
                  <p className="popinsFont text-[11px] text-hoverGrey">
                    94 Xuan Thuy Street, Thao Dien Ward, District 2, Thu Duc
                    City, Ho Chi Minh City
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4 ">
                <img src={reserved} alt="reserved" />
                <a
                  href="https://www.facebook.com/contrauventures"
                  target="_blank"
                >
                  <div className="flex items-center justify-center rounded-full bg-[#dddedf] hover:bg-[#cccdcf] transition-all w-[34px] h-[34px] cursor-pointer">
                    <img src={fb} alt="fb" className="opacity-40 " />
                  </div>
                </a>
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
                <div className="flex space-x-3 flex-wrap">
                  <p className="popinsFont text-[9px] font-bold text-hoverGrey">
                    Tell
                  </p>
                  <p className="popinsFont text-[9px] text-hoverGrey">
                    (+84) (0)961-806-406
                  </p>
                  <p className="popinsFont text-[9px] text-hoverGrey">|</p>
                  <p className="popinsFont text-[9px] font-bold text-hoverGrey">
                    E-mail
                  </p>
                  <p className="popinsFont text-[9px] text-hoverGrey">
                    update@contrau.ventures
                  </p>
                </div>
                <div className="flex space-x-3">
                  <p className="popinsFont text-[9px] font-bold text-hoverGrey">
                    Address
                  </p>
                  <p className="popinsFont text-[9px] text-hoverGrey">
                    94 Xuan Thuy Street, Thao Dien Ward, District 2, Thu Duc
                    City, Ho Chi Minh City
                  </p>
                </div>
              </div>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/contrauventures"
                  target="_blank"
                >
                  <div className="flex items-center justify-center rounded-full bg-[#dddedf] hover:bg-[#cccdcf] transition-all w-[30px] h-[30px] cursor-pointer">
                    <img src={fb} alt="facebook" className="opacity-40" />
                  </div>
                </a>
                <div className="flex items-center justify-center rounded-full bg-[#dddedf] hover:bg-[#cccdcf] transition-all w-[30px] h-[30px] cursor-pointer">
                  {" "}
                  <img src={li} alt="li" className="opacity-40" />
                </div>
              </div>
            </div>
            <div className="mt-[25px] mb-[37px]">
              <img src={reserved} alt="reserved" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
