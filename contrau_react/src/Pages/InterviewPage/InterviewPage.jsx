import React from "react";
import PropTypes from "prop-types";
import HeaderComponent from "../InterviewPage/component/Header/HeaderComponent";
import MainFounder from "../InterviewPage/component/MainFounder/MainFounder";
import FooterComponent from "../InterviewPage/component/Footer/Footer";
import { useEffect } from "react";
import { createTheme, MuiThemeProvider } from "@material-ui/core";

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
      <MuiThemeProvider theme={theme}>
        <HeaderComponent pagecurrent="story" />
      </MuiThemeProvider>
      <MainFounder />
      <FooterComponent />
    </div>
  );
}

export default InterviewPage;
