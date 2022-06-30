import React from "react";
import PropTypes from "prop-types";
import { Box, useMediaQuery, useTheme } from "@material-ui/core";
import logobackgroundheader from "../../../../../../../assets/interview-img/logobackgroundheader.png";
import logobackgroundheadermb from "../../../../../../../assets/interview-img/logobackgroundheadermb.png";
import logotrau from "../../../../../../../assets/interview-img/logotrauventure.png";
import logotraumb from "../../../../../../../assets/interview-img/logotrauventure-mb.png";
import interviewdetail from "../../../../../../../assets/interview-img/interviewdetail.png";
import "./style.scss";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./TemporaryDrawer";

HeaderFounder.propTypes = {
  detailFounder: PropTypes.object,
};

function HeaderFounder({ detailFounder }) {
  //RESPONSIVE
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  //END RESPONSIVE
  return (
    <div>
      <Box className="frameheaderfoundermain">
        <Box className="frameimglayout">
          {isMatch ? (
            <img
              src={
                Object.keys(detailFounder).length != 0 &&
                detailFounder.acf.thumbnail
              }
              alt="logotrau"
              className="logobackgroundheader"
            />
          ) : (
            <img
              src={
                Object.keys(detailFounder).length != 0 &&
                detailFounder.acf.image
              }
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
          {Object.keys(detailFounder).length != 0 &&
            (!isMatch
              ? detailFounder.acf.first_name.toUpperCase()
              : detailFounder.acf.first_name)}
          <Box className="framedetailtitlemain">
            {Object.keys(detailFounder).length != 0 &&
              (!isMatch
                ? detailFounder.acf.last_name.toUpperCase()
                : detailFounder.acf.last_name)}
          </Box>
          <Box className="titlecompany">
            {Object.keys(detailFounder).length != 0 &&
              detailFounder.acf.company}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default HeaderFounder;
