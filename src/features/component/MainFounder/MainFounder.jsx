import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Box, Button, useMediaQuery, useTheme } from '@material-ui/core';
import img1 from '../../../img/founder1.png';
import img2 from '../../../img/founder2.png';
import img3 from '../../../img/founder3.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
MainFounder.propTypes = {};

function MainFounder(props) {
  //RESPONSIVE
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const contentdatacategory = [
    { id: 1, name: 'View All' },
    { id: 2, name: 'Category 1' },
    { id: 3, name: 'Category 2' },
    { id: 4, name: 'Category 3' },
  ];
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

  const [clicked, setClicked] = useState(contentdatacategory[0].name);
  const [listfounder, setListFounder] = useState(listimgfounder);

  const carouselProperties = {
    // initialSlide: 3,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const dealClick = (item) => {
    setClicked(item.name);
  };
  return (
    <div className="rootmainfounder">
      {/* FRAME BUTTON */}

      {isMatch ? (
        <div className="carouselcategory">
          <Slider {...carouselProperties}>
            {contentdatacategory.map((item) => (
              <div
                key={item.id}
                className={clicked == item.name ? 'frame-icon-main tab-active' : 'frame-icon-main'}
                onClick={() => dealClick(item)}
              >
                <div className="itemslide">{item.name}</div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
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
      )}

      {/* FRAME FOUNDER */}
      <Box className="framefounder">
        {listfounder.map((item) => (
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
