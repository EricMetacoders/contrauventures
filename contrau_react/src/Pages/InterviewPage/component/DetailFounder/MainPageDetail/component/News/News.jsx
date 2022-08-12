import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { interviewServices } from "../../../../../../../services/interviewService";
import { Theme } from "@mui/material/styles";
import "./style.scss";
News.propTypes = {};

async function getAPINew() {
  try {
    const listNew = await interviewServices.getNew();
    return listNew;
  } catch (error) {
    console.log("getAPINew => listNew", error);
  }
}

function News(props) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [listNew, setListNew] = useState([]);

  useEffect(() => {
    (async function () {
      const _listNew = await getAPINew();
      setListNew(_listNew.data);
    })();
  }, []);

  return (
    <Box className="framenew">
      <Box className="framenewtitle">
        <span>
          NEWS <span style={{ color: "#DB2F33" }}>.</span>
        </span>
        <span className="viewtitle">view more</span>
      </Box>
      <Box className="framedetailnewmain">
        {listNew.length != 0 &&
          listNew.map((item) => (
            <Box className="framedetail" key={item.id}>
              <Box className="frameimgnew">
                <img
                  src={
                    isMatch
                      ? item?.acf?.thumbnail.toString() || ""
                      : item?.acf?.image.toString() || ""
                  }
                  alt=""
                />
              </Box>
              <Box>{item.acf.categies}</Box>
              <Box>{item.acf.title}</Box>
              <Box>{item.acf.newscontent}</Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default News;
