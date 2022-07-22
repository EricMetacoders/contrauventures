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

async function getFounderData(founderId) {
  try {
    let detailFounder = await interviewServices.getFounderByFounderID(
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
  const [detailFounder2, setDetailFounder2] = useState([]);
  useEffect(() => {
    (async function () {
      const dataFounder = await getFounderData(founderId);
      console.log("dataFounder:", dataFounder);
      setDetailFounder2(dataFounder.data);
    })();
  }, []);

  useEffect(() => {
    // GET ID FOR HEADER
    (async function () {
      if (Object.values(detailFounder2).length > 0) {
        const interviewHtmlGetByFounderId = await getAPIDetailFounder(
          detailFounder2?.acf?.interview[0]
        );
        setDetailFounder(interviewHtmlGetByFounderId.data);
      }
    })();
    window.scrollTo(0, 0);
  }, [detailFounder2]);

  return (
    <div>
      <HeaderFounder detailFounder={detailFounder} />
      <MainPageDetail
        detailArticle={detailFounder}
        founderID={
          Object.values(detailFounder2).length > 0
            ? detailFounder2?.acf?.gallery[0]
            : ""
        }
      />
      <FooterComponent />
      {/* {` ${
        Object.values(detailFounder2).length > 0
          ? detailFounder2?.acf?.gallery[0]
          : ""
      }detailFounder2?.acf?.gallery[0]`} */}
    </div>
  );
}

export default DetailFounder;
