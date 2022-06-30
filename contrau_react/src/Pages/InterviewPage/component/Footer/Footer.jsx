import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Box } from "@material-ui/core";
import logotraufooter from "../../../../assets/interview-img/logotraufooter.png";
import logofb from "../../../../assets/interview-img/FB.png";
import logolk from "../../../../assets/interview-img/LI.png";
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
            Tell 1234-5678-910 | E-mail abcd@gmail.com | Address 36-1
            Chungdam-dong, Seoul, Korea
          </Box>
          <Box className="framelogofb-mb">
            <img src={logofb} alt="logofb" />
          </Box>
          <Box className="framelogolk-mb">
            <img src={logolk} alt="logolk" />
          </Box>
        </Box>

        <Box className="allrightframe">© All rights reserved.</Box>
        <Box className="framelogofb">
          <img src={logofb} alt="logofb" />
        </Box>
        <Box className="framelogolk">
          <img src={logolk} alt="logolk" />
        </Box>
      </Box>
    </Box>
  );
}

export default FooterComponent;
