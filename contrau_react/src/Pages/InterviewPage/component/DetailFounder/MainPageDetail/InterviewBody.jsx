import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import dot1 from "assets/interview-img/dot1.png";
import dot2 from "assets/interview-img/dot2.png";

InterviewBody.propTypes = {
  detailArticle: PropTypes.object,
};

function InterviewBody({ detailArticle }) {

  return (
    <Box>
      {/* FRAME CONTENT */}
      <div className="framearticle">
        <div className="framehtmlinterview">
          <div className="framequote">
            <div className="framedot1">
              <img src={dot1} alt="quote-dot1" />
            </div>
            <div className="frametitleqoute">
              <div
                className="title1"
                dangerouslySetInnerHTML={{
                  //qoute part 1
                  __html: detailArticle?.qoute?.part_1 || "",
                }}
              />
            </div>
            <div className="framedot2">
              <img src={dot2} alt="quote-dot2" />
            </div>
          </div>

          {!detailArticle ? (
            <div />
          ) : (
            <div
              className="framearticle"
              dangerouslySetInnerHTML={{
                //content part 1
                __html: detailArticle.content_part_1?.detail_content || "",
              }}
            />
          )}

          {!detailArticle ? (
            <div />
          ) : (
            <div
              className=""
              dangerouslySetInnerHTML={{
                //image content part 1
                __html:
                  detailArticle.content_part_1?.detail_content_image || "",
              }}
            />
          )}
        </div>
        <div className="framearticle">
          {!detailArticle ? (
            <div />
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: detailArticle.content_part_2?.detail_content || "",
              }}
            />
          )}
          {!detailArticle ? ( //content part 3
            <div />
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: detailArticle.content_part_3?.detail_content || "",
              }}
            />
          )}
          {!detailArticle ? ( //content part 4
            <div />
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: detailArticle.content_part_4?.detail_content || "",
              }}
            />
          )}
        </div>
      </div>
      {/* FRAME NEW */}
      {/* <News /> */}
    </Box>
  );
}

export default InterviewBody;
