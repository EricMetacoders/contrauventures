import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, useMediaQuery, useTheme } from "@material-ui/core";
import "./style.scss";
import axios from "axios";
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
    if (item.name == "Gallery") {
      const varrt = (document.getElementsByClassName(
        "rootfooter"
      )[0].style.display = "none");
    } else {
      const varrt = (document.getElementsByClassName(
        "rootfooter"
      )[0].style.display = "block");
    }
  };

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
      {/* Interview */}
      {clicked == "Interview" ? (
        <InterviewBody detailArticle={detailArticle} />
      ) : (
        <GalleryBody detailFounder={detailArticle} />
      )}
    </div>
  );
}
export default MainPageDetail;
