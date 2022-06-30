import React from "react";
import PropTypes from "prop-types";
import { Box, useMediaQuery, useTheme } from "@material-ui/core";
import logobackgroundheader from "../../../../assets/interview-img/logobackgroundheader.png";
import logobackgroundheadermb from "../../../../assets/interview-img/logobackgroundheadermb.png";
import logotrau from "../../../../assets/interview-img/logotrauventure.png";
import logotraumb from "../../../../assets/interview-img/logotrauventure-mb.png";
import "./style.scss";
import TemporaryDrawer from "./TemporaryDrawer";
import { Link } from "react-router-dom";

HeaderComponent.propTypes = {};

function HeaderComponent({ pagecurrent }) {
  // console.log("pagecurrent:", pagecurrent);
  // CHECK CURRENT PARENT PAGE(Detail Founder & Story) CALL HEADER COMPONENT

  //RESPONSIVE
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  //END RESPONSIVE
  return (
    <div>
      <Box className="frameheadermain">
        <Box className="frameimglayout">
          {isMatch ? (
            <img
              src={logobackgroundheadermb}
              alt="logotrau"
              className="logobackgroundheader"
            />
          ) : (
            <img
              src={logobackgroundheader}
              alt="logotrau"
              className="logobackgroundheader"
            />
          )}
        </Box>

        <Box className="imglogotrauframe-header">
          <Link to="/">
            <img
              src={isMatch ? logotraumb : logotrau}
              alt="logotrau"
              className="logotrau"
            />
          </Link>
        </Box>
        {isMatch ? (
          <TemporaryDrawer />
        ) : (
          <Box className="titledetaimainframeheader">
            <Box className="titledetaiframeheader">HOME</Box>
            <Box className="titledetaiframeheader">About Us</Box>
            <Box className="titledetaiframeheader">Portfolio</Box>
            <Link to="/story">
              <Box className="titledetaiframeheader-active">Story</Box>
            </Link>
          </Box>
        )}

        <Box className="framemaintilecenterheader">
          Meet a few of the makers
          <div className="framedetailtitlemain">Behind the change.</div>
        </Box>
      </Box>
    </div>
  );
}

export default HeaderComponent;
