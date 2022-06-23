import React from 'react';
import PropTypes from 'prop-types';
import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import logobackgroundheader from '../../../img/logobackgroundheader.png';
import logobackgroundheadermb from '../../../img/logobackgroundheadermb.png';
import logotrau from '../../../img/logotrau.png';
import './style.scss';
import TemporaryDrawer from './TemporaryDrawer';
HeaderComponent.propTypes = {};

function HeaderComponent(props) {
  //RESPONSIVE
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  //END RESPONSIVE
  return (
    <div>
      <Box className="frameheadermain">
        <Box className="frameimglayout">
          {isMatch ? (
            <img src={logobackgroundheadermb} alt="logotrau" className="logobackgroundheader" />
          ) : (
            <img src={logobackgroundheader} alt="logotrau" className="logobackgroundheader" />
          )}
        </Box>
        <Box className="imglogotrauframe-header">
          <img src={logotrau} alt="logotrau" className="logotrau" />
          {/* Con trâu */}
        </Box>
        {isMatch ? (
          <TemporaryDrawer />
        ) : (
          <Box className="titledetaimainframeheader">
            <Box className="titledetaiframeheader">HOME</Box>
            <Box className="titledetaiframeheader">About Us</Box>
            <Box className="titledetaiframeheader">Portfolio</Box>
            <Box className="titledetaiframeheader-active">Story</Box>
          </Box>
        )}
        <Box className="titleframekoreanheader">뒷배경 사진 3~4가지로 바꿀 수 있나요?</Box>
        <Box className="framemaintilecenterheader">
          Meet a few of the makers
          <Box className="framedetailtitlemain">Behind the change.</Box>
        </Box>
      </Box>
    </div>
  );
}

export default HeaderComponent;
