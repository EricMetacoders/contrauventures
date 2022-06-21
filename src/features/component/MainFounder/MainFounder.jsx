import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Box, Button } from '@material-ui/core';
import img1 from '../../../img/founder1.png';
import img2 from '../../../img/founder2.png';
import img3 from '../../../img/founder3.png';
MainFounder.propTypes = {};

function MainFounder(props) {
  const listimgfounder = [
    { id: 1, imgUrl: img1 },
    { id: 2, imgUrl: img2 },
    { id: 3, imgUrl: img3 },
    { id: 4, imgUrl: img3 },
    { id: 5, imgUrl: img1 },
    { id: 6, imgUrl: img2 },
    { id: 7, imgUrl: img2 },
    { id: 8, imgUrl: img3 },
    { id: 9, imgUrl: img1 },
  ];

  return (
    <div className="rootmainfounder">
      {/* FRAME BUTTON */}
      <Box className="framebutton">
        <div className="buttoncategory-active">
          <div className="detailtitlebutton">Category 1</div>
        </div>
        <div className="buttoncategory">
          <div className="detailtitlebutton">Category 2</div>
        </div>
        <div className="buttoncategory">
          <div className="detailtitlebutton">Category 3</div>
        </div>
        <div className="buttoncategory">
          <div className="detailtitlebutton">Category 4</div>
        </div>
      </Box>
      {/* FRAME FOUNDER */}
      <Box className="framefounder">
        {listimgfounder.map((item) => (
          <Box className="frameimgfounder">
            <img src={item.imgUrl} alt="" className="imgfounder" />
            <Box className="framedetailfoundername">
              <Box className="detailfoundername">
                FOUNDER
                <Box className="titlename">NAME</Box>
              </Box>
            </Box>
            <Box className="titledetail">
              Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default MainFounder;
