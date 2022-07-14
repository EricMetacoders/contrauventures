import React from "react";
import { render } from "react-dom";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { interviewServices } from "../../../../../../../services/interviewService";
import img2014_1 from "../../../../../../../assets/interview-img/2014-1.png";
import img2014_2 from "../../../../../../../assets/interview-img/2014-2.png";
import img2014_3 from "../../../../../../../assets/interview-img/2014-3.png";
import img2014_4 from "../../../../../../../assets/interview-img/2014-4.png";
import { Box } from "@mui/material";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li>
                  <Link
                    activeClass="active"
                    className="test1"
                    to="test1"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Test 1
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test2"
                    to="test2"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Test 2
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test3"
                    to="test3"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Test 3
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test4"
                    to="test4"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Test 4
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Element name="test1" className="element" style={{ height: "auto" }}>
          <div className="rootgallery">
            <div className="carousel-gallery">
              <div className="frameimgmain">
                <div className="frameimgtop">
                  <div className="frameimg1">
                    <img style={{ filter: "grayscale(0%)" }} src={img2014_1} />
                  </div>
                  <div className="frameimg2">
                    <img style={{ filter: "grayscale(0%)" }} src={img2014_2} />
                  </div>
                </div>
                <div className="frameimgbot">
                  <Box className="frameimg3">
                    <img style={{ filter: "grayscale(0%)" }} src={img2014_3} />
                  </Box>
                  <Box className="frameimg4">
                    <img style={{ filter: "grayscale(0%)" }} src={img2014_4} />
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </Element>

        <Element name="test2" className="element" style={{ height: "1800px" }}>
          test 2
        </Element>

        <Element name="test3" className="element" style={{ height: "1800px" }}>
          test 3 Giá USD trên thị trường tự do sáng nay tăng vài trăm đồng, lên
          24.300 đồng trong khi tỷ giá ngân hàng biến động nhẹ. Sáng 14/7, các
          điểm thu đổi ngoại tệ trên thị trường tự do đồng loạt nâng giá mua bán
          đôla Mỹ. Mỗi USD hiện giao dịch quanh 24.280 - 24.310 đồng, tăng 130
          đồng chiều mua và 60 đồng chiều bán so với hôm qua. Như vậy, chỉ trong
          vài ngày, mỗi USD trên thị trường tự do đã tăng giá khoảng 250 đồng.
          Tỷ giá trung tâm được Ngân hàng Nhà nước sáng nay công bố ở mức 23.201
          đồng, tăng 3 đồng so với hôm qua. Với biên độ 3%, các ngân hàng thương
          mại được phép giao dịch USD trong vùng 22.505 - 23.897 đồng. Trên thị
          trường liên ngân hàng, tỷ giá USD/VND biến động nhẹ. Giá đôla Mỹ tại
          Vietcombank đi ngang so với hôm qua, mua vào 23.220 đồng và bán ra
          23.530 đồng. Trong khi đó, giá USD tại Eximbank tăng nhẹ lên 23.270 -
          23.490 đồng, Techcombank là 23.249 - 23.534 đồng. Còn Sacombank giữ
          nguyên chiều mua 23.271 đồng nhưng bán ra tăng mạnh 100 đồng, lên
          23.826 đồng.
        </Element>

        <Element name="test4" className="element" style={{ height: "1800px" }}>
          test 4 Giá USD trên thị trường tự do sáng nay tăng vài trăm đồng, lên
          24.300 đồng trong khi tỷ giá ngân hàng biến động nhẹ. Sáng 14/7, các
          điểm thu đổi ngoại tệ trên thị trường tự do đồng loạt nâng giá mua bán
          đôla Mỹ. Mỗi USD hiện giao dịch quanh 24.280 - 24.310 đồng, tăng 130
          đồng chiều mua và 60 đồng chiều bán so với hôm qua. Như vậy, chỉ trong
          vài ngày, mỗi USD trên thị trường tự do đã tăng giá khoảng 250 đồng.
          Tỷ giá trung tâm được Ngân hàng Nhà nước sáng nay công bố ở mức 23.201
          đồng, tăng 3 đồng so với hôm qua. Với biên độ 3%, các ngân hàng thương
          mại được phép giao dịch USD trong vùng 22.505 - 23.897 đồng. Trên thị
          trường liên ngân hàng, tỷ giá USD/VND biến động nhẹ. Giá đôla Mỹ tại
          Vietcombank đi ngang so với hôm qua, mua vào 23.220 đồng và bán ra
          23.530 đồng. Trong khi đó, giá USD tại Eximbank tăng nhẹ lên 23.270 -
          23.490 đồng, Techcombank là 23.249 - 23.534 đồng. Còn Sacombank giữ
          nguyên chiều mua 23.271 đồng nhưng bán ra tăng mạnh 100 đồng, lên
          23.826 đồng.
        </Element>

        <a onClick={this.scrollToTop}>To the top!</a>
      </div>
    );
  }
}
export default Section;
