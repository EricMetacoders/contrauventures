import React, { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolioList } from "reducers/homeSlice";
import bg from "assets/homepage_img/porti_bg.png";
import PortfolioTextAnimation from "./PortfolioTextAnimation";
import Slick from "./Slick";

import "./portfolio.scss";

const NewPortfolio = () => {
  const [inView, setInView] = useState(false);

  const { TabPane } = Tabs;

  // get Data from homeSlice
  const viewAll = useSelector((state) => state.homeSlice.portfolios);

  const [categoryfounder, setCategoryFounder] = useState(viewAll);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPortfolioList());
  }, []);
  const contentdatacategory = [
    { id: 1, name: "View All" },
    { id: 2, name: "SW Infrastructure" },
    { id: 3, name: "Digital Supply Chain" },
    { id: 4, name: "Sustainable Megacity" },
  ];

  const [clicked, setClicked] = useState(contentdatacategory[0].name);

  useEffect(() => {
    setCategoryFounder(viewAll);
  }, [viewAll]);

  const categoryfilter = categoryfounder?.filter((item) => {
    if (clicked != "View All") {
      return item?.acf?.category == clicked;
    }
    return categoryfounder;
  });

  // Click change category
  const clickCategory = (itemName) => {
    setClicked(itemName);
  };

  // set Offset of scroll position
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
      <div className="bg-portfolioBg pt-[2px] sm:pt-[7rem] md:pt-[2px] mt-[171px] lg:mt-[401px] relative">
        {/* image */}
        <div className="absolute">
          <img
            src={bg}
            alt="background"
            className="w-full h-auto object-contain"
          />
        </div>

        <div id="portfolios" className="mt-[43%] lg:mt-[33%]">
          <div id="mobilePortfolios" class="pt-[7rem] md:pt-[7rem] md:mt-0">
            <div className="bg-portfolioBg pt-[2px]">
              {/* text content */}
              <div className="relative">
                <div className="h-[264px] md:h-[454px] md:mt-[107px] sm:mt-0">
                  <div inView={inView}>
                    <InView onChange={setInView}>
                      {({ ref, inView }) => (
                        <div ref={ref}>
                          {inView ? <PortfolioTextAnimation /> : <></>}
                        </div>
                      )}
                    </InView>
                  </div>
                </div>
              </div>

              {/* tabs */}
              <div
                id="tabsID"
                className="flex items-center justify-center pb-[87px]  lg:pb-[329px] pt-[150px] md:pt-0 md:mt-0 lg:mt-0 lg:pt-0 xl:pt-[6.6%]  bg-portfolioBg"
              >
                <div className="mx-[20px]">
                  <div className="hidden sm:block">
                    <Tabs defaultActiveKey="0">
                      {contentdatacategory?.map((item, i) => (
                        <TabPane
                          tab={
                            <div
                              id="portfolioHover"
                              className={
                                i == 0
                                  ? "popinsFont text-[10px] lg:text-[15px] xl:text-[20px] lg:font-semibold w-full h-full  flex items-center justify-center"
                                  : `popinsFont text-[10px] lg:text-[15px] xl:text-[20px]  lg:font-semibold w-full h-full   flex flex-col items-center justify-center`
                              }
                              onClick={() => {
                                clickCategory(item.name);
                              }}
                            >
                              <p className="sm:block hidden">{item?.name}</p>
                            </div>
                          }
                          key={i}
                        >
                          <div className="flex flex-wrap justify-left gap-y-[30px] gap-x-[20px] mx-auto sm:w-[504px] xl:w-[877px] 2xl:w-[900px] lg:mt-[40px]">
                            {categoryfilter?.map((item, i) => (
                              <>
                                <a href={item.acf.linkWebsite} target="_blank">
                                  <div key={i}>
                                    <div className="flex items-center justify-center">
                                      <img
                                        src={item?.acf?.image}
                                        alt={item?.acf?.category}
                                        className="imgWidth opacity-40 hover:opacity-100 w-[204px] h-[117px] object-contain"
                                      />
                                    </div>
                                  </div>
                                </a>
                                {(i + 1) % 4 === 0 ? (
                                  <hr className="w-full bg-white" />
                                ) : (
                                  <></>
                                )}
                              </>
                            ))}
                          </div>
                        </TabPane>
                      ))}
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
        </div>
      </div>
    </>
  );
};

export default NewPortfolio;
