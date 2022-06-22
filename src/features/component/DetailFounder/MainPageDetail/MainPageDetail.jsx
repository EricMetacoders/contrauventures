import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import "./style.scss";
import axios from "axios";
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
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        console.log("res:", res.data);
      })
      .catch((error) => console.log(error));
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
      <Box className="framehtmlinterview"></Box>
    </div>
  );
}

export default MainPageDetail;
