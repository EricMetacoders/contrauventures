import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import "./style.scss";
import InterviewBody from "./InterviewBody";
import GalleryBody from "./GalleryBody";

MainPageDetail.propTypes = {
  detailArticle: PropTypes.object,
};

function MainPageDetail({ detailArticle }) {
  const contenttitle = [
    { id: 1, name: "Interview" },
    { id: 2, name: "Gallery" },
  ];
  const [clicked, setClicked] = useState(contenttitle[0].name);

  const dealClick = (item) => {
    setClicked(item.name);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="rootpagedetail">
      <Box className="framecontentmain">
        {contenttitle.map((item) => (
          <Box
            key={item.id}
            className={
              clicked == item.name ? "detailcontent-active" : "detailcontent"
            }
            onClick={() => dealClick(item)}
          >
            {item.name}
          </Box>
        ))}
      </Box>
      {clicked == "Interview" ? (
        <InterviewBody detailArticle={detailArticle?.acf?.content || {}} />
      ) : (
        <GalleryBody detailFounder={detailArticle} />
      )}
    </div>
  );
}
export default MainPageDetail;
