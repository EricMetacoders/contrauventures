import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import logotrau from "../../../../../../../assets/interview-img/logotrauventure.png";
import logotraumb from "../../../../../../../assets/interview-img/logotrauventure-mb.png";
import "./style.scss";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./TemporaryDrawer";
import { useEffect } from "react";

HeaderFounder.propTypes = {
  detailFounder: PropTypes.object,
};

function HeaderFounder({ detailFounder }) {
  const theme = useTheme();
  const refHeader = useRef();
  // CHECK EVENT SCROLL DOWN
  const [y, setY] = useState(0);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      refHeader.current.style.display = "block";
    } else if (y < window.scrollY) {
      refHeader.current.style.display = "none";
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  const matchMobile = useMediaQuery("(max-width:639px)");
  return (
    <div>
      <Box className="frameheaderfoundermain">
        <div
          style={{
            height: "80px",
            position: "fixed",
            zIndex: "1000",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
          ref={refHeader}
        >
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
            <Box className="titledetaimainframeheader" style={{ opacity: "1" }}>
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
        </div>
        <Box className="frameimglayout">
          <img
            src={
              matchMobile
                ? detailFounder?.acf?.header_thumbnail
                : detailFounder?.acf?.header_image
            }
            className="logobackgroundheader"
          />
        </Box>

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
