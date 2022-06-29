import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import bg from "../../../../assets/homepage_img/porti_bg.png";
import { getPortfolioList } from "../../../../reducers/homeSlice";
import "./portfolio.css";
import PortfolioMobileTabs from "./PortfolioMobileTabs";
export default function Portfolio() {
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

  return (
    <div className="bg-black pt-[2px] md:mt-[171px] 2xl:mt-[300px] relative h-[871px] md:h[1596px]">
      <div>
        <img src={bg} alt="background" className="w-full h-auto object-cover" />
        <div className="text-white hidden md:block ">
          <div className="absolute md:top-[30%] 2xl:top-[90%] text-center w-full bg-transparent">
            <div>
              <p className="robotoFlexFont font-bold text-[24px] ">Portfolio</p>
              <div className="mt-[54px] leading-[1]">
                <div className="flex items-center justify-center">
                  <p className="popinsFont font-[900] italic text-[110px] mb-0">
                    Vietnam's{" "}
                    <span className="popinsFont italic font-thin">victory</span>
                  </p>
                </div>
                <div className="flex items-center justify-center text-[110px] space-x-3">
                  <p className="popinsFont italic font-thin mb-0">is</p>
                  <p className="font-extrabold text-red  mb-0">Our victory</p>
                  <div className=" w-[25px] h-[25px] rounded-full bg-red mt-[79px]"></div>
                </div>
              </div>
              <div className="mt-[54px]">
                <p className="text-[20px] popinsFont font-normal text-hoverGrey mb-0">
                  We invest in areas that can increase Vietnam's growth potentia
                </p>
                <p className="text-[20px] popinsFont font-normal text-hoverGrey mb-0">
                  where Vietnam can become strong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden ml-[36px] bg-black">
        <div className="text-white absolute top-[20%]">
          <p className="robotoFlexFont text-[13px] font-bold mb-0">Portfolio</p>
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
              We invest in areas that can increase Vietnam's growth potential
              where Vietnam can become strong.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[300px] lg:mt-[-210px] 2xl:mt-0 2xl:pb-[200px] md:pt-[206px] 2xl:pt-[186px] bg-black">
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
                  {viewAll?.map((logo) => {
                    return (
                      <div className="flex items-center justify-center">
                        <img
                          src={logo?.acf?.image}
                          alt={logo?.acf?.category}
                          className="opacity-80 hover:opacity-100"
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
                  {sWInfrastructure?.map((logo) => {
                    return (
                      <div className="flex items-center justify-center">
                        <img
                          src={logo?.acf?.image}
                          alt={logo?.acf?.category}
                          className="opacity-80 hover:opacity-100"
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
                  {digitalSupplyChain?.map((logo) => {
                    return (
                      <div className="flex items-center justify-center">
                        <img
                          src={logo?.acf?.image}
                          alt={logo?.acf?.category}
                          className="opacity-80 hover:opacity-100"
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
                  {sustainableMegacity?.map((logo) => {
                    return (
                      <div className="flex items-center justify-center">
                        <img
                          src={logo?.acf?.image}
                          alt={logo?.acf?.category}
                          className="opacity-80 hover:opacity-100"
                        />
                      </div>
                    );
                  })}
                </div>
              </TabPane>
            </Tabs>
          </div>
          <div className="block 2xl:hidden lg:mt-[134px]">
            <PortfolioMobileTabs />
          </div>
        </div>
      </div>
    </div>
  );
}
