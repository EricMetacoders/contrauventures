import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import bg from "../../../../assets/homepage_img/porti_bg.png";
import { getPortfolioList } from "../../../../reducers/homeSlice";
import PortfolioTextAnimation from "./PortfolioTextAnimation";
import "./portfolio.css";
import Test from "./Test";
import "./test.scss";
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
    <div className="bg-portfolioBg pt-[2px] md:mt-[171px] 2xl:mt-[300px] relative h-[871px] md:h[1596px]">
      <div>
        <img src={bg} alt="background" className="w-full h-auto object-cover" />
        {/* start animation */}
        <PortfolioTextAnimation />
        {/* end aimation */}
      </div>
      <div className="flex items-center justify-center mt-[300px] lg:mt-[-210px] 2xl:mt-0 2xl:pb-[200px] md:pt-[206px] 2xl:pt-[186px] bg-portfolioBg">
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
                      <div className="flex items-center justify-center" key={i}>
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
                  {sWInfrastructure?.map((logo, i) => {
                    return (
                      <div className="flex items-center justify-center" key={i}>
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
                  {digitalSupplyChain?.map((logo, i) => {
                    return (
                      <div className="flex items-center justify-center" key={i}>
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
                  {sustainableMegacity?.map((logo, i) => {
                    return (
                      <div className="flex items-center justify-center" key={i}>
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
            <div className="w-screen h-full">
              <Test />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
