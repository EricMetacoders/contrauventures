import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MainPageDetail from "./MainPageDetail/MainPageDetail";
import FooterComponent from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { interviewServices } from "../../../../services/interviewService.js";
import HeaderFounder from "./MainPageDetail/component/HeaderFounder/HeaderFounder";
DetailFounder.propTypes = {
  currentFounder: PropTypes.string,
};

async function getAPIDetailFounder(founderId) {
  try {
    let detailFounder = await interviewServices.getInterviewHtmlByFounderId(
      founderId
    );

    return detailFounder;
  } catch (error) {
    console.log("Failed to fetch", error);
  }
}

function DetailFounder({ currentFounder }) {
  var { founderId } = useParams();

  const [detailFounder, setDetailFounder] = useState({});

  useEffect(() => {
    (async function () {
      const interviewHtmlGetByFounderId = await getAPIDetailFounder(founderId);
      setDetailFounder(interviewHtmlGetByFounderId.data);
    })();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeaderFounder detailFounder={detailFounder} />
      <MainPageDetail founderID={founderId} detailArticle={detailFounder} />
      <FooterComponent />
    </div>
  );
}

export default DetailFounder;
