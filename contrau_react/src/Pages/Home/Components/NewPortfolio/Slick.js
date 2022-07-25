import Carousel from "nuka-carousel";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./slick.scss";

export default function Slick() {
  // get data from HomeSlice
  const viewAll = useSelector((state) => state.homeSlice.portfolios);

  // Filter Data
  const digitalSupplyChain = viewAll?.filter((logo) => {
    return logo.acf.category === "Digital Supply Chain";
  });
  const sustainableMegacity = viewAll?.filter((logo) => {
    return logo.acf.category === "Sustainable Megacity";
  });
  const sWInfrastructure = viewAll?.filter((logo) => {
    return logo.acf.category === "SW Infrastructure";
  });

  const [data, setData] = useState(null);

  useEffect(() => {
    setData(viewAll);
  }, [viewAll]);

  // set Data
  const handleSetData = (name) => {
    if (name === "View All") {
      setData(viewAll);
    } else if (name === "Digital Supply Chain") {
      setData(digitalSupplyChain);
    } else if (name === "Sustainable Megacity") {
      setData(sustainableMegacity);
    } else if (name === "SW Infrastructure") {
      setData(sWInfrastructure);
    }
  };

  // handle active class

  const [viewAllActive, setViewAllActive] = useState(true);
  const [digitalSupplyChainActive, setDigitalSupplyChainActive] =
    useState(false);
  const [sustainableMegacityActive, setSustainableMegacityActive] =
    useState(false);
  const [sWInfrastructureActive, setSWInfrastructureActive] = useState(false);

  const handleActiveClass = (name) => {
    if (name === "View All") {
      setViewAllActive(true);
      setDigitalSupplyChainActive(false);
      setSustainableMegacityActive(false);
      setSWInfrastructureActive(false);
    } else if (name === "Digital Supply Chain") {
      setDigitalSupplyChainActive(true);
      setViewAllActive(false);
      setSustainableMegacityActive(false);
      setSWInfrastructureActive(false);
    } else if (name === "Sustainable Megacity") {
      setSustainableMegacityActive(true);
      setDigitalSupplyChainActive(false);
      setViewAllActive(false);
      setSWInfrastructureActive(false);
    } else if (name === "SW Infrastructure") {
      setSWInfrastructureActive(true);
      setDigitalSupplyChainActive(false);
      setViewAllActive(false);
      setSustainableMegacityActive(false);
    }
  };

  return (
    <div id="slickId">
      <Carousel slidesToShow={2.5}>
        {/* View all button */}
        <div
          className="h-[56px]"
          onClick={() => {
            handleSetData("View All");
            handleActiveClass("View All");
          }}
        >
          <div className={viewAllActive ? "active" : "notActive"}>
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-[14px] font-semibold popinsFont text-white">
                View All
              </p>
            </div>
          </div>
        </div>

        {/* SWInfrastructure Button */}
        <div
          className=" h-[56px]"
          onClick={() => {
            // handleShowSWInfrastructure();
            handleSetData("SW Infrastructure");
            handleActiveClass("SW Infrastructure");
          }}
        >
          <div className={sWInfrastructureActive ? "active" : "notActive"}>
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-[14px] font-semibold popinsFont text-white text-center">
                SW Infrastructure
              </p>
            </div>
          </div>
        </div>

        {/* DigitalSupplyChain Button */}
        <div
          className="h-[56px] "
          onClick={() => {
            // handleShowDigitalSupplyChain();
            handleSetData("Digital Supply Chain");
            handleActiveClass("Digital Supply Chain");
          }}
        >
          <div className={digitalSupplyChainActive ? "active" : "notActive"}>
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-[14px] font-semibold popinsFont text-white text-center">
                Digital Supply Chain
              </p>
            </div>
          </div>
        </div>

        {/* SustainableMegacity Button */}
        <div
          className="h-[56px]"
          onClick={() => {
            // handleShowSustainableMegacity();
            handleSetData("Sustainable Megacity");
            handleActiveClass("Sustainable Megacity");
          }}
        >
          <div className={sustainableMegacityActive ? "active" : "notActive"}>
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-[14px] font-semibold popinsFont text-white text-center">
                Sustainable Megacity
              </p>
            </div>
          </div>
        </div>
      </Carousel>
      {/* showAll data */}
      {data ? (
        <div className="flex flex-wrap col gap-x-[10px] gap-y-[20px] justify-left mt-[26px] mx-auto w-[300px]">
          {data?.map((logo, i) => {
            return (
              <>
                <a href={logo.acf.linkWebsite} target="_blank">
                  <div key={i}>
                    <div className="flex items-center justify-center">
                      <img
                        src={logo?.acf?.image}
                        alt={logo?.acf?.category}
                        className="opacity-80 hover:opacity-100 w-[63px] h-[36px] object-contain"
                      />
                    </div>
                  </div>
                </a>
                {(i + 1) % 4 === 0 ? <hr className="w-full bg-white" /> : <></>}
              </>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
