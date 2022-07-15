import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolioList } from "../../../../reducers/homeSlice";
import bg from "../../../../assets/homepage_img/porti_bg.png";
import PortfolioTextAnimation from "./PortfolioTextAnimation";
import PortfolioSlick from "./PortfolioSlick";
import "./portfolioSlick.scss";
import "./portfolio.css";
export default function NewPortfolio() {
  const { TabPane } = Tabs;
  const viewAll = useSelector((state) => state.homeSlice.portfolios);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPortfolioList());
  }, []);

  const digitalSupplyChain = viewAll?.filter((logo) => {
    return logo.acf.category === "Digital Supply Chain";
  });
  const sustainableMegacity = viewAll?.filter((logo) => {
    return logo.acf.category === "Sustainable Megacity";
  });
  const sWInfrastructure = viewAll?.filter((logo) => {
    return logo.acf.category === "SW Infrastructure";
  });

  const [offset, setOffset] = useState(null);
  const handleScroll = () => setOffset(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-portfolioBg pt-[2px] mt-[171px] lg:mt-[300px] relative">
      {/* image */}
      <div className="absolute">
        <img
          src={bg}
          alt="background"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="mt-[50%] lg:mt-[787px] bg-portfolioBg">
        {/* text content */}
        <div className="relative">
          {/* desktop animation */}
          <div className="hidden md:block h-[454px]">
            {/* start animation */}
            {offset > 4100 ? <PortfolioTextAnimation /> : <></>}
            {/* end aimation */}
          </div>

          {/* mobile animation */}
          <div className="block md:hidden h-[264px]">
            {/* start animation */}
            {offset > 2100 ? <PortfolioTextAnimation /> : <></>}
            {/* end aimation */}
          </div>
        </div>

        {/* tabs */}
        <div className="flex items-center justify-center pb-[87px] lg:pb-[200px] pt-[38px] lg:pt-[15%]  bg-portfolioBg">
          <div className="mx-[20px]">
            <div className="hidden lg:block">
              <Tabs defaultActiveKey="1">
                <TabPane
                  tab={
                    <div className="popinsFont text-[10px] lg:text-[15px] xl:text-[20px] lg:font-semibold w-full h-full  flex items-center justify-center ">
                      <p>View All</p>
                    </div>
                  }
                  key="1"
                >
                  <div className="grid grid-cols-4 lg:mx-[17.5%] gap-[5.25rem]">
                    {viewAll?.map((logo, i) => {
                      return (
                        <div
                          className="flex items-center justify-center"
                          key={i}
                        >
                          <img
                            src={logo?.acf?.image}
                            alt={logo?.acf?.category}
                            className="opacity-40 hover:opacity-100 w-[204px] h-[117px] object-contain"
                          />
                        </div>
                      );
                    })}
                  </div>
                </TabPane>
                <TabPane
                  tab={
                    <div className="popinsFont text-[10px] lg:text-[15px] xl:text-[20px]  lg:font-semibold w-full h-full   flex flex-col items-center justify-center">
                      <p className="md:block hidden">SW Infrastructure</p>
                    </div>
                  }
                  key="2"
                >
                  <div className="grid grid-cols-4 lg:mx-[17.5%] gap-[5.25rem]">
                    {sWInfrastructure?.map((logo, i) => {
                      return (
                        <div
                          className="flex items-center justify-center"
                          key={i}
                        >
                          <img
                            src={logo?.acf?.image}
                            alt={logo?.acf?.category}
                            className="opacity-40 hover:opacity-100  w-[204px] h-[117px] object-contain"
                          />
                        </div>
                      );
                    })}
                  </div>
                </TabPane>
                <TabPane
                  tab={
                    <div className=" popinsFont lg:text-[15px] xl:text-[20px]  lg:font-semibold w-full h-full  flex flex-col items-center justify-center">
                      <p className="md:block hidden">Digital Supply Chainl</p>
                    </div>
                  }
                  key="3"
                >
                  <div className="grid grid-cols-4 lg:mx-[17.5%] gap-[5.25rem]">
                    {digitalSupplyChain?.map((logo, i) => {
                      return (
                        <div
                          className="flex items-center justify-center"
                          key={i}
                        >
                          <img
                            src={logo?.acf?.image}
                            alt={logo?.acf?.category}
                            className="opacity-40 hover:opacity-100  w-[204px] h-[117px] object-contain"
                          />
                        </div>
                      );
                    })}
                  </div>
                </TabPane>
                <TabPane
                  tab={
                    <div className="popinsFont text-[10px] lg:text-[15px] xl:text-[20px]  lg:font-semibold w-full h-full flex items-center justify-center">
                      <p className="hidden md:block">Sustainable Megacity</p>
                    </div>
                  }
                  key="4"
                >
                  <div className="grid grid-cols-4 lg:mx-[17.5%] gap-[5.25rem]">
                    {sustainableMegacity?.map((logo, i) => {
                      return (
                        <div
                          className="flex items-center justify-center"
                          key={i}
                        >
                          <img
                            src={logo?.acf?.image}
                            alt={logo?.acf?.category}
                            className="opacity-40 hover:opacity-100  w-[200px] h-[117px] object-contain"
                          />
                        </div>
                      );
                    })}
                  </div>
                </TabPane>
              </Tabs>
            </div>
            <div className="block lg:hidden mt-[0] md:mt-[65%] lg:mt-[134px]">
              <div className="w-[330px]">
                <PortfolioSlick />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
