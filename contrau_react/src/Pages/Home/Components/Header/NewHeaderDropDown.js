import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { Link } from "react-router-dom";
export default function NewHeaderDropDown({ resultRef, partnersRef }) {
  const [state, setState] = React.useState({
    right: false,
  });

  // handleScrollTo
  const handleScrollPartners = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };
  const handleScrollPortfolios = () => {
    window.scrollTo({
      top: 3215,
      behavior: "smooth",
    });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <Link to="/">
            <ListItemButton>
              <ListItemText
                primary={"Home"}
                primaryTypographyProps={{
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"About Us"} onClick={handleScrollPartners} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={"Portfolios"}
              onClick={handleScrollPortfolios}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <Link to="/story">
            <ListItemButton>
              <ListItemText primary={"Story"} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="right">
        <MenuIcon
          style={{ color: "black", fontSize: "1.9rem" }}
          onClick={toggleDrawer("right", true)}
        />
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
