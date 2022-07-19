import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useMediaQuery } from "@mui/material";
import { createTheme, makeStyles, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
ListFounder.propTypes = {};

// const useStyles = makeStyles((theme) => ({
//   gridItem: {
//     [theme.breakpoints.up("xs")]: {
//       columnGap: "20px",
//       rowGap: "20px",
//     },
//     [theme.breakpoints.up("lg")]: {
//       columnGap: "25px",
//       rowGap: "40px",
//     },
//     [theme.breakpoints.up("xl")]: {
//       columnGap: "25px",
//       rowGap: "40px",
//     },
//   },
// }));

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // smol phone
      xs: 640, // phone
      sm: 768, // tablets
      md: 1024, // small laptop
      lg: 1280, // desktop
      xl: 1536, // large screens
    },
  },
});

function ListFounder({ listDataFounder }) {
  const matchMobile = useMediaQuery("(max-width:1279px)");
  const history = useNavigate();

  const clickDetailFounder = async (item) => {
    const founderId = item.acf.interview[0];
    history(`/detailfounder/${founderId}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: [
            "310px", // theme.breakpoints.up('xxs')
            "480px", // theme.breakpoints.up('xs')
            "640px", // theme.breakpoints.up('sm')
            "870px", // theme.breakpoints.up('md')
            "880px", // theme.breakpoints.up('lg')
            "1325px", // theme.breakpoints.up('xl')
          ],
        }}
        style={{ margin: "auto", marginTop: "100px" }}
      >
        <Grid
          container
          // columns={{ xs: 12, sm: 2, md: 12, lg: 12, xl: 12 }}
          columns={{ xss: 1, xs: 1, sm: 1, md: 5, lg: 12, xl: 4 }}
          // className={styles.gridItem}
          sx={{
            columnGap: [
              "15px", //0
              "20px", //xs 640
              "15px", //sm 768
              "15px", //md 1024
              "25px", //lg 1280
              "25px", //xl 1536
            ],
            rowGap: [
              "15px", //0
              "20px", //xs 640
              "20px", //sm 768
              "5px", //md 1024
              "40px", //lg 1280
              "40px", //xl 1536
            ],
          }}
        >
          {listDataFounder &&
            Object.values(listDataFounder).map((item) => (
              <Grid item key={item.id} className="framefounder">
                <Box
                  className="frameimgfounder"
                  key={item.id}
                  sx={{
                    width: [
                      "144px",
                      "144px", //xs
                      "144px",
                      "144px",
                      "424px",
                      "424px", //xl
                    ],
                  }}
                >
                  <img
                    src={matchMobile ? item.acf.thumbnail : item.acf.image}
                    alt=""
                    className="imgfounder"
                    onClick={() => {
                      clickDetailFounder(item);
                    }}
                  />
                  <div className="framemaintile">
                    <Box className="framedetailfoundername">
                      <Box className="detailfoundername">
                        FOUNDER
                        <Box className="titlename ">
                          {item.acf.first_name.toUpperCase()} &nbsp;
                          {item.acf.last_name.toUpperCase()}
                        </Box>
                      </Box>
                    </Box>
                    <Box className="titledetail">
                      Lorem ipsum dolor sit amet, cons ectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                    </Box>
                  </div>

                  <div
                    className="hidden lg:block  w-full h-full absolute bgBlur2"
                    style={{
                      background: `linear-gradient(0deg,${item.acf.gradient_color} 49%, ${item?.acf.background_color}75%)`,
                    }}
                  ></div>
                  <div className="btnInterviewfounder">
                    <div className="hidden lg:block w-[200px] h-[60px] bg-white  cursor-pointer z-50">
                      <div className="flex items-center justify-center w-full h-full">
                        <p
                          className="popinsFont font-semibold text-[20px] text-black mb-0"
                          onClick={() => {
                            clickDetailFounder(item);
                          }}
                        >
                          See Full Interview
                        </p>
                      </div>
                    </div>
                  </div>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default ListFounder;
