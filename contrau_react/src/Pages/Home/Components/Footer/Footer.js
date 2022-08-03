import React from "react";
import { Box } from "@mui/material";
import shadowBg from "../../../../assets/homepage_img/shadowBg.png";
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
        </div>
      </div>
    </div>
  );
}
