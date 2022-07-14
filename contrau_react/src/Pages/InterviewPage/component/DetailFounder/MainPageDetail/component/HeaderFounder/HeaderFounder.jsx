import React from "react";
import PropTypes from "prop-types";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import logotrau from "../../../../../../../assets/interview-img/logotrauventure.png";
import logotraumb from "../../../../../../../assets/interview-img/logotrauventure-mb.png";
import "./style.scss";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./TemporaryDrawer";

HeaderFounder.propTypes = {
  detailFounder: PropTypes.object,
};

function HeaderFounder({ detailFounder }) {
  const theme = useTheme();

  const matchMobile = useMediaQuery("(max-width:640px)");
  return (
    <div>
      <Box className="frameheaderfoundermain">
        <Box className="frameimglayout">
          <img
            src={
              matchMobile
                ? detailFounder?.acf?.header_thumbnail
                : detailFounder?.acf?.header_image
            }
            alt="logotrau"
            className="logobackgroundheader"
          />
        </Box>
        <Box className="imglogotrauframe-header">
          <Link to="/">
            <img
              src={matchMobile ? logotraumb : logotrau}
              alt="logotrau"
              className="logotrau"
            />
          </Link>
        </Box>
        {matchMobile ? (
          <TemporaryDrawer />
        ) : (
          <Box className="titledetaimainframeheader">
            <Link to="/">
              <Box className="titledetaiframeheader">HOME</Box>
            </Link>
            <Box className="titledetaiframeheader">About Us</Box>
            <Box className="titledetaiframeheader">Portfolio</Box>
            <Link to="/story">
              <Box className="titledetaiframeheader-active">Story</Box>
            </Link>
          </Box>
        )}
        <Box className="framemaintilecenterheader">
          {matchMobile
            ? detailFounder?.acf?.first_name.toUpperCase() || ""
            : detailFounder?.acf?.first_name.toUpperCase() || ""}
          <Box className="framedetailtitlemain">
            {matchMobile
              ? detailFounder?.acf?.last_name.toUpperCase() || ""
              : detailFounder?.acf?.last_name.toUpperCase() || ""}
          </Box>
          <Box className="titlecompany">
            {detailFounder?.acf?.company_name.split('"')[0]}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default HeaderFounder;
