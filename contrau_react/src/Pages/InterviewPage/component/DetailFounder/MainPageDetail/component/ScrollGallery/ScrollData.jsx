import { makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  contentyear: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-arround",
    width: "20%",
    padding: "20px 20px",
    position: "absolute",
    backgroundColor: "aqua",
    // top: "50%",
  },
}));

const ScrollData = () => {
  const handleSetActive = () => {};
  const styles = useStyles();

  return (
    <nav>
      <ul className={styles.contentyear}>
        <li>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Section 1
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onSetActive={handleSetActive}
          >
            Section 2
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Section 3
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Section 4
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ScrollData;
