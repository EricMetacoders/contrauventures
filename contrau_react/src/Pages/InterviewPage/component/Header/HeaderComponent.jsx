import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logobackgroundheader from "assets/interview-img/logobackgroundheader.png";
import logobackgroundheadermb from "assets/interview-img/logobackgroundheadermb.png";

import logoheader from "assets/interview-img/logoheadertrau.svg";
import "./style.scss";
import TemporaryDrawer from "./TemporaryDrawer";
import { useEffect, useRef, useState } from "react";
HeaderComponent.propTypes = {};

function HeaderComponent({ pagecurrent }) {
  // const refHeader = useRef();
  // CHECK EVENT SCROLL DOWN
  const [y, setY] = useState(0);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (document.getElementById("refHeader")) {
      if (window.scrollY < 15) {
        // NO BACKGROUND HEADER WHEN FIRST LOAD
        document.getElementById("refHeader").style.display = "block";
        document.getElementById("refHeader").style.backgroundColor =
          "transparent ";
      } else {
        if (y > window.scrollY) {
          // ADD BACKGROUND HEADER WHEN SCROLL UP
          document.getElementById("refHeader").style.display = "block";
          document.getElementById("refHeader").style.backgroundColor =
            "rgba(0,0,0,0.5)";
        } else if (y < window.scrollY) {
          // HIDE HEADER WHEN SCROLL DOWN
          document.getElementById("refHeader").style.display = "none";
        }
      }

      setY(window.scrollY);
    }
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

  //RESPONSIVE
  const theme = useTheme();

  const matchMobile = useMediaQuery("(max-width:639px)");

  //END RESPONSIVE
  return (
    <div>
      <Box className="frameheadermain">
        <div
          style={{
            height: "80px",
            position: "fixed",
            zIndex: "1000",
            width: "100%",
          }}
          id="refHeader"
        >
          <Box className="imglogotrauframe-header">
            <Link to="/">
              <img src={logoheader} alt="logotrau" className="logotrau" />
            </Link>
          </Box>
          {matchMobile ? (
            <TemporaryDrawer />
          ) : (
            <Box className="titledetaimainframeheader" style={{ opacity: "1" }}>
              <Link to="/">
                <Box className="titledetaiframeheader">HOME</Box>
              </Link>

              <Link to="/story">
                <Box className="titledetaiframeheader-active">Story</Box>
              </Link>
            </Box>
          )}
        </div>
        <Box className="frameimglayout">
          <img
            src={matchMobile ? logobackgroundheadermb : logobackgroundheader}
            alt="logotrau"
            className="logobackgroundheader"
          />
        </Box>

        <Box className="framemaintilecenterheader">
          Meet a few of the makers
          <div className="framedetailtitlemain">Behind the change.</div>
        </Box>
      </Box>
    </div>
  );
}

export default HeaderComponent;
