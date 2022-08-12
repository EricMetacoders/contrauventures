import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MainPageDetail from "./MainPageDetail/MainPageDetail";
import FooterComponent from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { interviewServices } from "../../../../services/interviewService.js";
import HeaderFounder from "./MainPageDetail/component/HeaderFounder/HeaderFounder";
import NotFound from "../../../NotFound/NotFound";
DetailFounder.propTypes = {
  currentFounder: PropTypes.string,
};

// GET FOUNDER ID
async function getFounderData(founderId) {
  try {
    let detailFounder = await interviewServices.getFounderByFounderID(
      founderId
    );
    return detailFounder;
  } catch (error) {
    console.log("getFounderData => detailFounder", error);
  }
}
// HAVE FOUNDER ID ==> GET INTERVIEW ID OF FOUNDER
async function getAPIDetailFounder(founderId) {
  try {
    let detailFounder = await interviewServices.getInterviewHtmlByFounderId(
      founderId
    );

    return detailFounder;
  } catch (error) {
    console.log("getAPIDetailFounder => detailFounder", error);
  }
}

function DetailFounder({ currentFounder }) {
  var { founderId } = useParams();

  const [detailInterviewFounder, setDetailInterviewFounder] = useState({});
  const [detailFounder2, setDetailFounder2] = useState([]);
  useEffect(() => {
    (async function () {
      const dataFounder = await getFounderData(founderId);
      if (dataFounder.data.acf.length == 0) {
        setDetailFounder2(null);
      } else {
        setDetailFounder2(dataFounder.data);
      }
    })();
  }, []);

  useEffect(() => {
    // GET ID INTERVIEW FROM DETAIL FOUNDER
    (async function () {
      if (Object.values(detailFounder2).length > 0) {
        const interviewHtmlGetByFounderId = await getAPIDetailFounder(
          detailFounder2?.acf?.interview[0]
        );

        setDetailInterviewFounder(interviewHtmlGetByFounderId.data);
      }
    })();
    window.scrollTo(0, 0);
  }, [detailFounder2]);

  return (
    <div>
      {detailFounder2 ? (
        <>
          <HeaderFounder detailFounder={detailInterviewFounder} />
          <MainPageDetail
            detailArticle={detailInterviewFounder}
            founderID={
              Object.values(detailFounder2).length > 0
                ? detailFounder2?.acf?.gallery[0]
                : ""
            }
          />
          <FooterComponent />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default DetailFounder;
