import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MainPageDetail from "./MainPageDetail/MainPageDetail";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/HeaderComponent";
import { useParams } from "react-router-dom";
import { interviewServices } from "../../../../services/interviewService.js";
import HeaderFounder from "./MainPageDetail/component/HeaderFounder/HeaderFounder";
DetailFounder.propTypes = {
  currentFounder: PropTypes.string,
};

function DetailFounder({ currentFounder }) {
  var founderid = useParams();

  const [detailFounder, setDetailFounder] = useState({});

  async function getAPIDetailFounder() {
    try {
      let detailFounder = await interviewServices.getFounderDetail(
        founderid.founderid
      );
      return detailFounder;
    } catch (error) {
      console.log("Failed to fetch", error);
    }
  }

  useEffect(() => {
    async function fechData() {
      let _detailfounder = await getAPIDetailFounder();
      // console.log("_detailfounder:", _detailfounder.data);
      setDetailFounder(_detailfounder.data);
    }
    fechData();
  }, []);

  // const getDetailFounder = () => {};

  return (
    <div>
      <HeaderFounder detailFounder={detailFounder} />
      <MainPageDetail detailArticle={detailFounder} />
      <FooterComponent />
    </div>
  );
}

export default DetailFounder;
