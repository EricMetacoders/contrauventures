import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Box } from "@mui/material";
import logotraufooter from "../../../../assets/interview-img/logotraufooter.png";
import logofb from "../../../../assets/interview-img/FB.png";
import logolk from "../../../../assets/interview-img/LI.png";
import logofbsvg from "../../../../assets/interview-img/fb.svg";
import logolisvg from "../../../../assets/interview-img/li.svg";
FooterComponent.propTypes = {};

function FooterComponent(props) {
  return (
    <Box className="rootfooter">
      <Box className="mainfooter">
        <Box className="logofooter">
          <img src={logotraufooter} alt="logotrau" />
        </Box>
        <Box className="frameaddress">
          <Box className="addressdetailfooter">
            <span style={{ fontWeight: "700" }}>Tell</span> (+84) (0)961-806-406
            | <span style={{ fontWeight: "700" }}>E-mail </span>
            update@contrau.ventures |
            <span style={{ fontWeight: "700" }}> Address</span> 94 Xuan Thuy
            Street, Thao Dien Ward, District 2, Thu Duc City, Ho Chi Minh City
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
            <a href="https://www.facebook.com/contrauventures" target="_blank">
              <img src={logofbsvg} alt="logofbsvg" />
            </a>
          </Box>
          <Box className="framelogolk">
            <img src={logolisvg} alt="logolisvg" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FooterComponent;
