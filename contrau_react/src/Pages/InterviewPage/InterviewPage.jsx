import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import FooterComponent from "./component/Footer/Footer";
import HeaderComponent from "./component/Header/HeaderComponent";
import MainFounder from "./component/MainFounder/MainFounder";

InterviewPage.propTypes = {};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 769,
      md: 1024,
      lg: 1280,
      xl: 1536,
    },
  },
});

function InterviewPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <HeaderComponent pagecurrent="story" />
      </ThemeProvider>
      <MainFounder />
      <FooterComponent />
    </div>
  );
}

export default InterviewPage;
