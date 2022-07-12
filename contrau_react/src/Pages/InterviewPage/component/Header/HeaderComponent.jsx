import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logobackgroundheader from "../../../../assets/interview-img/logobackgroundheader.png";
import logobackgroundheadermb from "../../../../assets/interview-img/logobackgroundheadermb.png";
import logotraumb from "../../../../assets/interview-img/logotrauventure-mb.png";
import logotrau from "../../../../assets/interview-img/logotrauventure.png";
import "./style.scss";
import TemporaryDrawer from "./TemporaryDrawer";
HeaderComponent.propTypes = {};

function HeaderComponent({ pagecurrent }) {
  // CHECK CURRENT PARENT PAGE(Detail Founder & Story) CALL HEADER COMPONENT

  //RESPONSIVE
  const theme = useTheme();

  const matchMobile = useMediaQuery("(max-width:640px)");
  let navigate = useNavigate();
  const clickToScroll = () => {
    navigate("/", { state: { id: 1, name: "test" } });
  };
  //END RESPONSIVE
  return (
    <div>
      <Box className="frameheadermain">
        <Box className="frameimglayout">
          <img
            src={matchMobile ? logobackgroundheadermb : logobackgroundheader}
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
            <Box className="titledetaiframeheader">HOME</Box>
            <Box className="titledetaiframeheader">About Us</Box>
            <Box className="titledetaiframeheader" onClick={clickToScroll}>
              Portfolio
            </Box>

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
