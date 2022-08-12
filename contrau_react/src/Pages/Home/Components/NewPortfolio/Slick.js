import Carousel from "nuka-carousel";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./slick.scss";

export default function Slick() {
  // get data from HomeSlice
  const viewAll = useSelector((state) => state.homeSlice.portfolios);

  const [data, setData] = useState(viewAll);

  const contentdatacategory = [
    { id: 1, name: "View All" },
    { id: 2, name: "SW Infrastructure" },
    { id: 3, name: "Digital Supply Chain" },
    { id: 4, name: "Sustainable Megacity" },
  ];
  const [clicked, setClicked] = useState(contentdatacategory[0].name);

  useEffect(() => {
    setData(viewAll);
  }, [viewAll]);

  const datafilter = data?.filter((item) => {
    if (clicked != "View All") {
      return item?.acf?.category == clicked;
    }
    return data;
  });

  // set Data
  const handleSetData = (name) => {
    setClicked(name);
  };

  return (
    <div id="slickId">
      <Carousel slidesToShow={2.5}>
        {/* View all button */}
        {contentdatacategory?.map((item, index) => (
          <div
            className="h-[56px]"
            onClick={() => {
              handleSetData(item.name);
            }}
          >
            <div className={clicked == item.name ? "active" : "notActive"}>
              <div className="flex items-center justify-center w-full h-full">
                <p className="text-[14px] font-semibold popinsFont text-white">
                  {item.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      {/* showAll data */}
      {datafilter ? (
        <div className="flex flex-wrap col gap-x-[10px] gap-y-[20px] justify-left mt-[26px] mx-auto w-[300px]">
          {datafilter?.map((logo, i) => {
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
