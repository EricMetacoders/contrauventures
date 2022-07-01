import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/homepage_img/logo.png";
import HeaderDropDown from "./HeaderDropDown";
export default function Header() {
  return (
    <div className="h-[80px] pt-[20px]">
      <div className="container md:mx-[60px]">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center justify-center space-x-4 ml-[30px] xl:ml-[30px]">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <div className="hidden md:flex item-center justify-center space-x-12 relative left-[236px]">
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
          <div className="mr-[30px]  md:hidden">
            <HeaderDropDown />
          </div>
        </div>
      </div>
    </div>
  );
}
