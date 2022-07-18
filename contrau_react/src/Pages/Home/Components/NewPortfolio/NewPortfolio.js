import React, { useEffect, useState, forwardRef } from "react";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolioList } from "../../../../reducers/homeSlice";
import bg from "../../../../assets/homepage_img/porti_bg.png";
import PortfolioTextAnimation from "./PortfolioTextAnimation";
import Slick from "./Slick";

import "./portfolio.scss";

const NewPortfolio = forwardRef((props, ref) => {
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
    <>
      <div className="bg-portfolioBg pt-[2px] mt-[171px] lg:mt-[401px] relative">
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
          <div className="relative" ref={ref}>
            {/* desktop animation */}
            <div className="hidden sm:block h-[454px]">
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
          <div className="flex items-center justify-center pb-[87px] lg:pb-[329px] pt-[38px] md:mt-[268px] lg:pt-[6.6%]  bg-portfolioBg">
            <div className="mx-[20px]">
              <div className="hidden sm:block">
                <Tabs defaultActiveKey="1">
                  <TabPane
                    tab={
                      <div
                        id="portfolioHover"
                        className="popinsFont text-[10px] lg:text-[15px] xl:text-[20px] lg:font-semibold w-full h-full  flex items-center justify-center "
                      >
                        <p>View All</p>
                      </div>
                    }
                    key="1"
                  >
                    <div className="flex flex-wrap justify-center gap-y-[30px] gap-x-[20px] mx-auto lg:w-[740px] xl:w-[900px] lg:mt-[40px]">
                      {viewAll?.map((logo, i) => {
                        return (
                          <>
                            <div key={i}>
                              <div className="flex items-center justify-center">
                                <img
                                  src={logo?.acf?.image}
                                  alt={logo?.acf?.category}
                                  className="imgWidth opacity-40 hover:opacity-100 w-[204px] h-[117px] object-contain"
                                />
                              </div>
                            </div>
                            {(i + 1) % 4 === 0 ? (
                              <hr className="w-full bg-white" />
                            ) : (
                              <></>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </TabPane>
                  <TabPane
                    tab={
                      <div
                        id="portfolioHover"
                        className="popinsFont text-[10px] lg:text-[15px] xl:text-[20px]  lg:font-semibold w-full h-full   flex flex-col items-center justify-center"
                      >
                        <p className="sm:block hidden">SW Infrastructure</p>
                      </div>
                    }
                    key="2"
                  >
                    <div className="flex flex-wrap justify-center gap-y-[30px] gap-x-[20px]  mx-auto w-[80%]  lg:mt-[40px]">
                      {sWInfrastructure?.map((logo, i) => {
                        return (
                          <>
                            <div key={i}>
                              <div className="flex items-center justify-center">
                                <img
                                  src={logo?.acf?.image}
                                  alt={logo?.acf?.category}
                                  className="imgWidth opacity-40 hover:opacity-100 w-[204px] h-[117px] object-contain"
                                />
                              </div>
                            </div>
                            {(i + 1) % 4 === 0 ? (
                              <hr className="w-full bg-white" />
                            ) : (
                              <></>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </TabPane>
                  <TabPane
                    tab={
                      <div
                        id="portfolioHover"
                        className=" popinsFont lg:text-[15px] xl:text-[20px]  lg:font-semibold w-full h-full  flex flex-col items-center justify-center"
                      >
                        <p className="sm:block hidden">Digital Supply Chain</p>
                      </div>
                    }
                    key="3"
                  >
                    <div className="flex flex-wrap justify-center gap-y-[30px] gap-x-[20px]  mx-auto 2xl:w-[900px]  lg:mt-[40px]">
                      {digitalSupplyChain?.map((logo, i) => {
                        return (
                          <>
                            <div key={i}>
                              <div className="flex items-center justify-center">
                                <img
                                  src={logo?.acf?.image}
                                  alt={logo?.acf?.category}
                                  className="imgWidth opacity-40 hover:opacity-100 w-[204px] h-[117px] object-contain"
                                />
                              </div>
                            </div>
                            {(i + 1) % 4 === 0 ? (
                              <hr className="w-full bg-white" />
                            ) : (
                              <></>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </TabPane>
                  <TabPane
                    tab={
                      <div
                        id="portfolioHover"
                        className="popinsFont text-[10px] lg:text-[15px] xl:text-[20px]  lg:font-semibold w-full h-full flex items-center justify-center"
                      >
                        <p className="hidden sm:block">Sustainable Megacity</p>
                      </div>
                    }
                    key="4"
                  >
                    <div className="flex flex-wrap justify-center gap-y-[30px] gap-x-[20px]  mx-auto w-[80%]  lg:mt-[40px]">
                      {sustainableMegacity?.map((logo, i) => {
                        return (
                          <>
                            <div key={i}>
                              <div className="flex items-center justify-center">
                                <img
                                  src={logo?.acf?.image}
                                  alt={logo?.acf?.category}
                                  className="imgWidth opacity-40 hover:opacity-100 w-[204px] h-[117px] object-contain"
                                />
                              </div>
                            </div>
                            {(i + 1) % 4 === 0 ? (
                              <hr className="w-full bg-white" />
                            ) : (
                              <></>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </TabPane>
                </Tabs>
              </div>
              <div className="block sm:hidden mt-[0] md:mt-[65%] lg:mt-[134px]">
                <div className="w-full">
                  <Slick />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default NewPortfolio;
