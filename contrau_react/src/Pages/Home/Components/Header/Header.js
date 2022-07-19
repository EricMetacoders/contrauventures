import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/homepage_img/logo.svg";
import logoMobile from "../../../../assets/homepage_img/logo_mobile.png";
import HeaderDropDown from "./HeaderDropDown";
export default function Header({ resultRef, partnersRef }) {
  // scroll to Porfolio
  const handleScroll = () => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollPartners = () => {
    partnersRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // handleShowHideHeader
  const refHeader = useRef();
  // CHECK EVENT SCROLL DOWN
  const [y, setY] = useState(0);

  const handleNavigation = (e) => {
    const window = e.currentTarget;

    if (window.scrollY < 15) {
      document.getElementById("headerNav").style.display = "block";
    } else {
      if (y > window.scrollY) {
        document.getElementById("headerNav").style.display = "block";
      } else if (y < window.scrollY) {
        document.getElementById("headerNav").style.display = "none";
      }
    }

    setY(window.scrollY);
  };

  //
  useEffect(() => {
    setY(window.scrollY);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  return (
    <div
      ref={refHeader}
      id="headerNav"
      className="md:h-[80px]  sm:mt-0 fixed z-50 bg-white w-full"
    >
      <div className="ml-[20px] mr-[10px] md:mx-[90px] h-full">
        <div className="flex items-center justify-between w-full h-full">
          {/* logo Desktop */}
          <div className="hidden sm:block">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/* logo Mobile */}
          <div className="block sm:hidden">
            <Link to="/">
              {" "}
              <img src={logo} alt="logo" className="w-[100px] h-[30px]" />
            </Link>
          </div>

          {/* menu select desktop */}
          <div className="hidden lg:flex item-center justify-center space-x-12 md:mt-[4px]">
            <Link to="/">
              <p className="popinsFont text-[16px] font-extrabold text-black hover:text-hoverGrey transition-all cursor-pointer">
                HOME
              </p>
            </Link>
            <p
              className="popinsFont text-[16px] font-normal hover:text-hoverGrey transition-all cursor-pointer"
              onClick={handleScrollPartners}
            >
              About Us
            </p>
            <p
              className="popinsFont text-[16px] font-normal hover:text-hoverGrey transition-all cursor-pointer"
              onClick={handleScroll}
            >
              Portfolios
            </p>
            <Link to="/story">
              <p className="popinsFont text-[16px] font-normal text-black hover:text-hoverGrey transition-all cursor-pointer">
                Story
              </p>
            </Link>
          </div>

          {/* menu select mobile */}
          <div className="lg:hidden">
            <HeaderDropDown resultRef={resultRef} partnersRef={partnersRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
