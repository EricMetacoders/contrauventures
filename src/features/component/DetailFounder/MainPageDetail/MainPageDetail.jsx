import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import "./style.scss";
import axios from "axios";
import dot1 from "../../../../img/dot1.png";
import dot2 from "../../../../img/dot2.png";
MainPageDetail.propTypes = {};

function MainPageDetail(props) {
  const contenttitle = [
    { id: 1, name: "Interview" },
    { id: 2, name: "Gallery" },
  ];
  const [clicked, setClicked] = useState(contenttitle[0].name);
  const dealClick = (item) => {
    setClicked(item.name);
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
      <Box className="framehtmlinterview">
        <Box className="framemaintitle">
          <Box className="framedot1">
            <img src={dot1} alt="" />
          </Box>
          <Box className="frametitle">
            <Box className="titlemain">
              Everyone advised me
              <Box className="detailtitle">not to do it</Box>
            </Box>
          </Box>
          <Box className="framedot2">
            <img src={dot2} />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default MainPageDetail;
