import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/image/logo.png";
export default function Header() {
  return (
    <div className="h-[80px] py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center space-x-4 ml-[30px] xl:ml-[30px]">
            <img src={logo} alt="logo" />
          </div>
          <div className="hidden md:flex lg:mr-[30px] item-center justify-center space-x-5">
            <p className="robotoFont font-extrabold hover:text-hoverGrey transition-all cursor-pointer">
              HOME
            </p>
            <p className="robotoFont font-normal hover:text-hoverGrey transition-all cursor-pointer">
              About Us
            </p>
            <p className="robotoFont font-normal hover:text-hoverGrey transition-all cursor-pointer">
              Portfolio
            </p>
            <p className="robotoFont font-normal hover:text-hoverGrey transition-all cursor-pointer">
              Story
            </p>
          </div>
          <div className="mr-[30px]  md:hidden">
            <GiHamburgerMenu size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
