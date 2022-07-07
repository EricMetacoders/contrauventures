import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/homepage_img/logo.png";
import logoMobile from "../../../../assets/homepage_img/logo_mobile.png";
import HeaderDropDown from "./HeaderDropDown";
export default function Header() {
  return (
    <div className="md:h-[80px] w-screen">
      <div className="ml-[20px] mr-[10px] md:mx-[90px] h-full">
        <div className="flex items-center justify-between w-full h-full">
          <div className="hidden md:block">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="block md:hidden">
            <Link to="/">
              {" "}
              <img src={logoMobile} alt="logo" />
            </Link>
          </div>

          {/* menu select desktop */}
          <div className="hidden md:flex item-center justify-center space-x-12 md:mt-[4px]">
            <Link to="/">
              <p className="popinsFont text-[16px] font-extrabold hover:text-hoverGrey transition-all cursor-pointer">
                HOME
              </p>
            </Link>
            <p className="popinsFont text-[16px] font-normal hover:text-hoverGrey transition-all cursor-pointer">
              About Us
            </p>
            <p className="popinsFont text-[16px] font-normal hover:text-hoverGrey transition-all cursor-pointer">
              Portfolio
            </p>
            <Link to="/story">
              <p className="popinsFont text-[16px] font-normal hover:text-hoverGrey transition-all cursor-pointer">
                Story
              </p>
            </Link>
          </div>

          {/* menu select mobile */}
          <div className="md:hidden">
            <HeaderDropDown />
          </div>
        </div>
      </div>
    </div>
  );
}
