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
    <div className="bg-portfolioBg pt-[2px] md:mt-[171px] 2xl:mt-[300px] relative">
      {/* image */}
      <div className="absolute">
        <img src={bg} alt="background" className="w-full h-auto object-cover" />
      </div>

      <div className="mt-[157px] 2xl:mt-[787px] bg-portfolioBg">
        {/* text content */}
        <div className="relative">
          {/* desktop animation */}
          <div className="hidden md:block">
            {/* start animation */}
            {offset > 4500 ? (
              <PortfolioTextAnimation />
            ) : (
              <>
                <div className="text-white hidden md:block ">
                  <div className="text-center w-full bg-transparent">
                    <div>
                      <p className="robotoFlexFont font-bold text-[24px] ">
                        Portfolio
                      </p>
                      <div className="mt-[54px] leading-[1]">
                        <div className="flex items-center justify-center">
                          <p className="popinsFont font-[900] italic text-[110px] mb-0">
                            Vietnam's{" "}
                            <span className="popinsFont italic font-thin">
                              victory
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center justify-center text-[110px] space-x-3">
                          <p className="popinsFont italic font-thin mb-0">is</p>
                          <p className="font-[900] text-red  mb-0">
                            Our victory
                          </p>
                          <div className=" w-[25px] h-[25px] rounded-full bg-red mt-[79px]"></div>
                        </div>
                      </div>
                      <div className="mt-[54px]">
                        <p className="text-[20px] popinsFont font-normal text-hoverGrey mb-0">
                          Our investments focus on the fields that could help
                          boost Vietnam's growth and lift the country up.
                        </p>
                        <p className="text-[20px] popinsFont font-normal text-hoverGrey mb-0">
                          We will lay the groundwork and sow the seeds for
                          Vietnam's startup ecosystem, seeing it grow into a
                          dense forest.
                        </p>
                        <p className="text-[20px] popinsFont font-normal text-hoverGrey mb-0">
                          Rather than a fund with the highest profit, we aim to
                          be remembered as a vital contributor to Vietnam's
                          startup ecosystem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:hidden ml-[36px] bg-portfolioBg">
                  <div className="text-white relative">
                    <p className="robotoFlexFont text-[13px] font-bold mb-0">
                      Portfolio
                    </p>
                    <div className="mt-[27px] text-[40px] leading-[1]">
                      <p className="font-[900]  popinsFont mb-0">Vietnam's</p>
                      <p className="italic font-thin text-[40px] popinsFont mb-0">
                        victory is
                      </p>
                      <div className="flex items-center justify-start space-x-[1px]">
                        <p className="font-[900] text-red mb-0 popinsFont text-[40px]">
                          Our victory
                        </p>
                        <div className="w-[13px] h-[13px] bg-red rounded-full mt-[40px]"></div>
                      </div>
                    </div>
                    <div className="mt-[30px]">
                      <p className="popinsFont text-[13px] w-[243px] text-white leading-[20px] font-light">
                        We invest in areas that can increase Vietnam's growth
                        potential where Vietnam can become strong.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {/* end aimation */}
          </div>

          {/* mobile animation */}
          <div className="block md:hidden">
            {/* start animation */}
            {offset > 2100 ? (
              <PortfolioTextAnimation />
            ) : (
              <>
                <div className="text-white hidden md:block ">
                  <div className="text-center w-full bg-transparent">
                    <div>
                      <p className="robotoFlexFont font-bold text-[24px] ">
                        Portfolio
                      </p>
                      <div className="mt-[54px] leading-[1]">
                        <div className="flex items-center justify-center">
                          <p className="popinsFont font-[900] italic text-[110px] mb-0">
                            Vietnam's{" "}
                            <span className="popinsFont italic font-thin">
                              victory
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center justify-center text-[110px] space-x-3">
                          <p className="popinsFont italic font-thin mb-0">is</p>
                          <p className="font-[900] text-red  mb-0">
                            Our victory
                          </p>
                          <div className=" w-[25px] h-[25px] rounded-full bg-red mt-[79px]"></div>
                        </div>
                      </div>
                      <div className="mt-[54px]">
                        <p className="text-[20px] popinsFont font-normal text-hoverGrey mb-0">
                          Our investments focus on the fields that could help
                          boost Vietnam's growth and lift the country up.
                        </p>
                        <p className="text-[20px] popinsFont font-normal text-hoverGrey mb-0">
                          We will lay the groundwork and sow the seeds for
                          Vietnam's startup ecosystem, seeing it grow into a
                          dense forest.
                        </p>
                        <p className="text-[20px] popinsFont font-normal text-hoverGrey mb-0">
                          Rather than a fund with the highest profit, we aim to
                          be remembered as a vital contributor to Vietnam's
                          startup ecosystem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:hidden ml-[36px] bg-transparent">
                  <div className="text-white relative">
                    <p className="robotoFlexFont text-[13px] font-bold mb-0">
                      Portfolio
                    </p>
                    <div className="mt-[27px] text-[40px] leading-[1]">
                      <p className="font-[900]  popinsFont mb-0">Vietnam's</p>
                      <p className="italic font-thin text-[40px] popinsFont mb-0">
                        victory is
                      </p>
                      <div className="flex items-center justify-start space-x-[1px]">
                        <p className="font-[900] text-red mb-0 popinsFont text-[40px]">
                          Our victory
                        </p>
                        <div className="w-[13px] h-[13px] bg-red rounded-full mt-[40px]"></div>
                      </div>
                    </div>
                    <div className="mt-[30px]">
                      <p className="popinsFont text-[13px] w-[243px] text-white leading-[20px] font-light">
                        We invest in areas that can increase Vietnam's growth
                        potential where Vietnam can become strong.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {/* end aimation */}
          </div>
        </div>

        {/* tabs */}
        <div className="flex items-center justify-center pb-[87px] 2xl:pb-[200px] pt-[38px] 2xl:pt-[119px] bg-portfolioBg">
          <div className="mx-[20px]">
            <div className="hidden 2xl:block">
              <Tabs defaultActiveKey="1">
                <TabPane
                  tab={
                    <div className="popinsFont text-[10px] 2xl:text-[20px] 2xl:font-semibold w-full h-full  flex items-center justify-center ">
                      <p>View All</p>
                    </div>
                  }
                  key="1"
                >
                  <div className="grid grid-cols-4">
                    {viewAll?.map((logo, i) => {
                      return (
                        <div
                          className="flex items-center justify-center"
                          key={i}
                        >
                          <img
                            src={logo?.acf?.image}
                            alt={logo?.acf?.category}
                            className="opacity-40 hover:opacity-100"
                          />
                        </div>
                      );
                    })}
                  </div>
                </TabPane>
                <TabPane
                  tab={
                    <div className="popinsFont text-[10px] 2xl:text-[20px] 2xl:font-semibold w-full h-full   flex flex-col items-center justify-center">
                      <p className="2xl:block hidden">SW Infrastructure</p>
                    </div>
                  }
                  key="2"
                >
                  <div className="grid grid-cols-4">
                    {sWInfrastructure?.map((logo, i) => {
                      return (
                        <div
                          className="flex items-center justify-center"
                          key={i}
                        >
                          <img
                            src={logo?.acf?.image}
                            alt={logo?.acf?.category}
                            className="opacity-40 hover:opacity-100"
                          />
                        </div>
                      );
                    })}
                  </div>
                </TabPane>
                <TabPane
                  tab={
                    <div className=" popinsFont 2xl:text-[20px] 2xl:font-semibold w-full h-full  flex flex-col items-center justify-center">
                      <p className="2xl:block hidden">Digital Supply Chainl</p>
                    </div>
                  }
                  key="3"
                >
                  <div className="grid grid-cols-4">
                    {digitalSupplyChain?.map((logo, i) => {
                      return (
                        <div
                          className="flex items-center justify-center"
                          key={i}
                        >
                          <img
                            src={logo?.acf?.image}
                            alt={logo?.acf?.category}
                            className="opacity-40 hover:opacity-100"
                          />
                        </div>
                      );
                    })}
                  </div>
                </TabPane>
                <TabPane
                  tab={
                    <div className="popinsFont text-[10px] 2xl:text-[20px] 2xl:font-semibold w-full h-full   flex items-center justify-center">
                      <p className="hidden 2xl:block">Sustainable Megacity</p>
                    </div>
                  }
                  key="4"
                >
                  <div className="grid grid-cols-4">
                    {sustainableMegacity?.map((logo, i) => {
                      return (
                        <div
                          className="flex items-center justify-center"
                          key={i}
                        >
                          <img
                            src={logo?.acf?.image}
                            alt={logo?.acf?.category}
                            className="opacity-40 hover:opacity-100"
                          />
                        </div>
                      );
                    })}
                  </div>
                </TabPane>
              </Tabs>
            </div>
            <div className="block 2xl:hidden lg:mt-[134px]">
              <div className="w-screen h-full">
                <PortfolioSlick />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
