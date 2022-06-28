import React from "react";
import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./portfolio.css";
export default function PortfolioMobileTabs() {
  const viewAll = useSelector((state) => state.homeSlice.portfolios);
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
    <div>
      <Tabs>
        <TabList>
          <Tab>
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-[14px] font-semibold popinsFont">View All</p>
            </div>
          </Tab>
          <Tab>
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-[14px] font-semibold popinsFont">
                SW Infrastructure
              </p>
            </div>
          </Tab>
          <Tab>
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-[14px] font-semibold popinsFont">
                Digital Supply Chain
              </p>
            </div>
          </Tab>
          <Tab>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <p className="text-[13px] font-semibold popinsFont">
                Sustainable Megacity
              </p>
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-2">
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
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2">
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
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2">
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
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2">
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
        </TabPanel>
      </Tabs>
    </div>
  );
}
