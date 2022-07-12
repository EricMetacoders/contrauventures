import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import logobackgroundheader from "../../../../assets/interview-img/logobackgroundheader.png";
import logobackgroundheadermb from "../../../../assets/interview-img/logobackgroundheadermb.png";
import logotraumb from "../../../../assets/interview-img/logotrauventure-mb.png";
import logotrau from "../../../../assets/interview-img/logotrauventure.png";
import "./style.scss";
import TemporaryDrawer from "./TemporaryDrawer";
HeaderComponent.propTypes = {};

const useStyles = makeStyles((theme) => ({
  frameheadermain: {},
  frameimglayout: {
    "&::before": {
      background: "red",
      content: "jdsdsjf",
      display: "block",
      height: "100%",
      position: "absolute",
      width: "100%",
    },
  },
  framemaintilecenterheader: {
    position: "absolute",
    width: "auto",
    height: "auto",
    left: "50%",
    top: "70%",
    transform: "translateX(-50%) translateY(-70%)",
    fontFamily: "Poppins, sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "60px",
    lineHeight: "70px",
    textAlign: "center",
    letterSpacing: "-0.01em",
    color: "#ffffff",
    "& div": {
      fontStyle: "italic",
      fontWeight: "100",
    },
    [theme.breakpoints.up("xs")]: {
      width: "284px",
      left: "10%",
      top: "70%",
      transform: "translateY(-50%)",
      fontFamily: "Poppins ,sans-serif",
      fontWeight: "900",
      fontSize: "40px",
      lineHeight: "44px",
    },
    [theme.breakpoints.up("sm")]: {
      color: "blue",
    },
    [theme.breakpoints.up("md")]: {
      color: "green",
    },
    [theme.breakpoints.up("lg")]: {
      color: "yellow",
    },
    [theme.breakpoints.up("xl")]: {
      color: "#ffffff",
    },
  },
}));

function HeaderComponent({ pagecurrent }) {
  const theme = useTheme();
  const styles = useStyles();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  let navigate = useNavigate();
  const clickToScroll = () => {
    navigate("/", { state: { id: 1, name: "porfolio" } });
  };

  //END RESPONSIVE
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          width: "auto",
        }}
      >
        <Box
          sx={{ position: "relative", width: "100%" }}
          className="frameimglayout"
        >
          <Box
            component="img"
            sx={{ width: "100%" }}
            src={isMatch ? logobackgroundheadermb : logobackgroundheader}
            alt="logotrau"
          />
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
            <Link to="/">
              <Box className="titledetaiframeheader">HOME</Box>
            </Link>
            <Box className="titledetaiframeheader">About Us</Box>

            <Box className="titledetaiframeheader" onClick={clickToScroll}>
              Portfolio
            </Box>

            <Link to="/story">
              <Box className="titledetaiframeheader-active">Story</Box>
            </Link>
          </Box>
        )}

        <Box className={styles.framemaintilecenterheader}>
          Meet a few of the makers
          <div>Behind the change.</div>
        </Box>
      </Box>
    </div>
  );
}

export default HeaderComponent;
