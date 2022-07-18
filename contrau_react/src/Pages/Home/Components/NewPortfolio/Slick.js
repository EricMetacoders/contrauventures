import Carousel from "nuka-carousel";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./slick.scss";

export default function Slick() {
  const viewAll = useSelector((state) => state.homeSlice.portfolios);
  // set data
  const digitalSupplyChain = viewAll?.filter((logo) => {
    return logo.acf.category === "Digital Supply Chain";
  });
  const sustainableMegacity = viewAll?.filter((logo) => {
    return logo.acf.category === "Sustainable Megacity";
  });
  const sWInfrastructure = viewAll?.filter((logo) => {
    return logo.acf.category === "SW Infrastructure";
  });
  // set show div
  const [showViewAll, setShowViewAll] = useState(true);
  const [showDigitalSupplyChain, setShowDigitalSupplyChain] = useState(false);
  const [showSustainableMegacity, setShowSustainableMegacity] = useState(false);
  const [showSWInfrastructure, setShowSWInfrastructure] = useState(false);

  // handle active class
  const [viewAllActive, setViewAllActive] = useState(true);
  const [digitalSupplyChainActive, setDigitalSupplyChainActive] =
    useState(false);
  const [sustainableMegacityActive, setSustainableMegacityActive] =
    useState(false);
  const [sWInfrastructureActive, setSWInfrastructureActive] = useState(false);

  // handle show div
  const handleShowViewAll = () => {
    setShowViewAll(true);
    setShowDigitalSupplyChain(false);
    setShowSustainableMegacity(false);
    setShowSWInfrastructure(false);
  };
  const handleShowDigitalSupplyChain = () => {
    setShowDigitalSupplyChain(true);
    setShowViewAll(false);
    setShowSustainableMegacity(false);
    setShowSWInfrastructure(false);
  };
  const handleShowSustainableMegacity = () => {
    setShowSustainableMegacity(true);
    setShowDigitalSupplyChain(false);
    setShowViewAll(false);
    setShowSWInfrastructure(false);
  };
  const handleShowSWInfrastructure = () => {
    setShowSWInfrastructure(true);
    setShowSustainableMegacity(false);
    setShowDigitalSupplyChain(false);
    setShowViewAll(false);
  };

  // handle Active class
  const handleViewAllActive = () => {
    setViewAllActive(true);
    setDigitalSupplyChainActive(false);
    setSustainableMegacityActive(false);
    setSWInfrastructureActive(false);
  };

  const handleSustainableMegacityActive = () => {
    setSustainableMegacityActive(true);
    setDigitalSupplyChainActive(false);
    setViewAllActive(false);
    setSWInfrastructureActive(false);
  };

  const handleDigitalSupplyChainActive = () => {
    setDigitalSupplyChainActive(true);
    setViewAllActive(false);
    setSustainableMegacityActive(false);
    setSWInfrastructureActive(false);
  };

  const handleSWInfrastructureActive = () => {
    setSWInfrastructureActive(true);
    setDigitalSupplyChainActive(false);
    setViewAllActive(false);
    setSustainableMegacityActive(false);
  };

  return (
    <div id="slickId">
      <Carousel slidesToShow={2.5}>
        {/* View all button */}
        <div
          className="h-[56px]"
          onClick={() => {
            handleShowViewAll();
            handleViewAllActive();
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
            handleShowSWInfrastructure();
            handleSWInfrastructureActive();
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
            handleShowDigitalSupplyChain();
            handleDigitalSupplyChainActive();
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
            handleShowSustainableMegacity();
            handleSustainableMegacityActive();
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
      {showViewAll ? (
        <div className="flex flex-wrap col gap-x-[10px] gap-y-[20px] justify-center mt-[26px] mx-auto w-[300px]">
          {viewAll?.map((logo, i) => {
            return (
              <>
                <div key={i}>
                  <div className="flex items-center justify-center">
                    <img
                      src={logo?.acf?.image}
                      alt={logo?.acf?.category}
                      className="opacity-80 hover:opacity-100 w-[63px] h-[36px] object-contain"
                    />
                  </div>
                </div>
                {(i + 1) % 4 === 0 ? <hr className="w-full bg-white" /> : <></>}
              </>
            );
          })}
        </div>
      ) : (
        <></>
      )}

      {/* SWInfrastructure data */}
      {showSWInfrastructure ? (
        <div className="flex flex-wrap col gap-x-[10px]  gap-y-[20px]  justify-center mt-[26px] mx-auto w-[300px]">
          {sWInfrastructure?.map((logo, i) => {
            return (
              <>
                <div key={i}>
                  <div className="flex items-center justify-center">
                    <img
                      src={logo?.acf?.image}
                      alt={logo?.acf?.category}
                      className="opacity-80 hover:opacity-100 w-[63px] h-[36px] object-contain"
                    />
                  </div>
                </div>
                {(i + 1) % 4 === 0 ? <hr className="w-full bg-white" /> : <></>}
              </>
            );
          })}
        </div>
      ) : (
        <></>
      )}

      {/* DigitalSupplyChain data */}
      {showDigitalSupplyChain ? (
        <div className="flex flex-wrap col gap-x-[10px]  gap-y-[20px]  justify-center mt-[26px] mx-auto w-[300px]">
          {digitalSupplyChain?.map((logo, i) => {
            return (
              <>
                <div key={i}>
                  <div className="flex items-center justify-center">
                    <img
                      src={logo?.acf?.image}
                      alt={logo?.acf?.category}
                      className="opacity-80 hover:opacity-100 w-[63px] h-[36px] object-contain"
                    />
                  </div>
                </div>
                {(i + 1) % 4 === 0 ? <hr className="w-full bg-white" /> : <></>}
              </>
            );
          })}
        </div>
      ) : (
        <></>
      )}

      {/* SustainableMegacity data */}
      {showSustainableMegacity ? (
        <div className="flex flex-wrap col gap-x-[10px]  gap-y-[20px]  justify-center mt-[26px] mx-auto w-[300px]">
          {sustainableMegacity?.map((logo, i) => {
            return (
              <>
                <div key={i}>
                  <div className="flex items-center justify-center">
                    <img
                      src={logo?.acf?.image}
                      alt={logo?.acf?.category}
                      className="opacity-80 hover:opacity-100 w-[63px] h-[36px] object-contain"
                    />
                  </div>
                </div>
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
