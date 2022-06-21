import React from 'react';
import PropTypes from 'prop-types';
import HeaderComponent from './component/Header/HeaderComponent';
import MainFounder from './component/MainFounder/MainFounder';

InterviewPage.propTypes = {};

function InterviewPage(props) {
  return (
    <div>
      <HeaderComponent />
      <MainFounder />
    </div>
  );
}

export default InterviewPage;
