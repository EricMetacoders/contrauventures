import React, { useEffect, useState, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupTextAnimation from "./GroupTextAnimation";
import { getPartnersList } from "../../../../reducers/homeSlice";
import "./group.css";
import { PartnerLogo } from "./partnerLogo/partnerLogo";
import { GroupCarouselAnimation, WrapperGroupCarousel } from "./GroupStyle";

const Group = forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const partners = useSelector((state) => state.homeSlice.partners);

  useEffect(() => {
    dispatch(getPartnersList());
  }, []);

  const [offset, setOffset] = useState(0);
  const handleScroll = () => setOffset(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={ref}>
      <div className="bg-partnersContactBg overflow-hidden " ref={ref}>
        <div className="mx-[34px] md:mx-[117px] 2xl:mx-[300px] pb-[65px] mt-[84px] md:mt-[318px]">
          {/* desktop animation */}
          <div className="xl:block hidden md:w-[1030px] md:h-[498px]">
            {/* start animation */}
            {offset > 100 ? <GroupTextAnimation /> : <></>}
            {/* end animation */}
          </div>

          {/* tablet animation */}
          <div className="hidden sm:block xl:hidden md:w-[1320px] md:h-[498px]">
            {/* start animation */}
            {offset > 100 ? <GroupTextAnimation /> : <></>}
            {/* end animation */}
          </div>

          {/* mobile animation */}
          <div className="sm:hidden block w-[292px] h-[474.5px]">
            {/* start animation */}
            {offset > 100 ? <GroupTextAnimation /> : <></>}
            {/* end animation */}
          </div>
        </div>
      </div>
      <div className="bg-partnersContactBg overflow-hidden">
        {/* desktop */}
        {/* <div className="hidden xl:block mt-[172px]  mb-[323px]">
          <div className="overflow-hidden flex  relative h-[179px] items-center">
            <div className="right-left1 absolute flex justify-center items-center ">
              {partners
                ?.filter((partner) => partner?.acf?.category === "partner 1")
                .map((logo, i) => {
                  return (
                    <PartnerLogo
                      {...{
                        logoUrl: logo?.acf?.image || "",
                        logoName: logo?.acf?.name || "",
                        wrapperWidth: "173px",
                        wrapperHeight: "173px",
                        paddingLeft: "20px",
                        linkWebsite: logo?.acf?.linkWebsite,
                      }}
                      key={i}
                    />
                  );
                })}
            </div>
            <div className=" right-left2 absolute flex justify-center items-center ">
              {partners
                ?.filter((partner) => partner?.acf?.category === "partner 1")
                .map((logo, i) => {
                  return (
                    <PartnerLogo
                      {...{
                        logoUrl: logo?.acf?.image || "",
                        logoName: logo?.acf?.name || "",
                        wrapperWidth: "173px",
                        wrapperHeight: "173px",
                        paddingLeft: "20px",
                        linkWebsite: logo?.acf?.linkWebsite,
                      }}
                      key={i}
                    />
                  );
                })}
            </div>
            <div className=" right-left3 absolute flex justify-center items-center ">
              {partners
                ?.filter((partner) => partner?.acf?.category === "partner 1")
                .map((logo, i) => {
                  return (
                    <PartnerLogo
                      {...{
                        logoUrl: logo?.acf?.image || "",
                        logoName: logo?.acf?.name || "",
                        wrapperWidth: "173px",
                        wrapperHeight: "173px",
                        paddingLeft: "20px",
                        linkWebsite: logo?.acf?.linkWebsite,
                      }}
                      key={i}
                    />
                  );
                })}
            </div>
          </div>
          <div className="overflow-hidden flex  relative h-[179px] items-center my-[60px]">
            <div className="left-right1 absolute flex justify-center items-center">
              {partners
                ?.filter((partner) => partner?.acf?.category === "partner 2")
                .map((logo, i) => {
                  return (
                    <PartnerLogo
                      {...{
                        logoUrl: logo?.acf?.image || "",
                        logoName: logo?.acf?.name || "",
                        wrapperWidth: "173px",
                        wrapperHeight: "173px",
                        paddingLeft: "20px",
                        linkWebsite: logo?.acf?.linkWebsite,
                      }}
                      key={i}
                    />
                  );
                })}
            </div>
            <div className=" left-right2 absolute flex justify-center items-center">
              {partners
                ?.filter((partner) => partner?.acf?.category === "partner 2")
                .map((logo, i) => {
                  return (
                    <PartnerLogo
                      {...{
                        logoUrl: logo?.acf?.image || "",
                        logoName: logo?.acf?.name || "",
                        wrapperWidth: "173px",
                        wrapperHeight: "173px",
                        paddingLeft: "20px",
                        linkWebsite: logo?.acf?.linkWebsite,
                      }}
                      key={i}
                    />
                  );
                })}
            </div>
            <div className=" left-right3 absolute flex justify-center items-center">
              {partners
                ?.filter((partner) => partner?.acf?.category === "partner 2")
                .map((logo, i) => {
                  return (
                    <PartnerLogo
                      {...{
                        logoUrl: logo?.acf?.image || "",
                        logoName: logo?.acf?.name || "",
                        wrapperWidth: "173px",
                        wrapperHeight: "173px",
                        paddingLeft: "20px",
                        linkWebsite: logo?.acf?.linkWebsite,
                      }}
                      key={i}
                    />
                  );
                })}
            </div>
          </div>
          <div className="overflow-hidden flex  relative h-[179px] items-center ">
            <div className="absolute right-left1 flex justify-center items-center">
              {partners
                ?.filter((partner) => partner?.acf?.category === "partner 3")
                .map((logo, i) => {
                  return (
                    <PartnerLogo
                      {...{
                        logoUrl: logo?.acf?.image || "",
                        logoName: logo?.acf?.name || "",
                        wrapperWidth: "173px",
                        wrapperHeight: "173px",
                        paddingLeft: "20px",
                        linkWebsite: logo?.acf?.linkWebsite,
                      }}
                      key={i}
                    />
                  );
                })}
            </div>
            <div className="absolute right-left2 flex justify-center items-center">
              {partners
                ?.filter((partner) => partner?.acf?.category === "partner 3")
                .map((logo, i) => {
                  return (
                    <PartnerLogo
                      {...{
                        logoUrl: logo?.acf?.image || "",
                        logoName: logo?.acf?.name || "",
                        wrapperWidth: "173px",
                        wrapperHeight: "173px",
                        paddingLeft: "20px",
                        linkWebsite: logo?.acf?.linkWebsite,
                      }}
                      key={i}
                    />
                  );
                })}
            </div>
            <div className="absolute right-left3 flex justify-center items-center">
              {partners
                ?.filter((partner) => partner?.acf?.category === "partner 3")
                .map((logo, i) => {
                  return (
                    <PartnerLogo
                      {...{
                        logoUrl: logo?.acf?.image || "",
                        logoName: logo?.acf?.name || "",
                        wrapperWidth: "173px",
                        wrapperHeight: "173px",
                        paddingLeft: "20px",
                        linkWebsite: logo?.acf?.linkWebsite,
                      }}
                      key={i}
                    />
                  );
                })}
            </div>
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <button className="mb-[129px] text-[24px] mt-[129px]  px-[40px] py-[15px] border border-white text-white hover:bg-white hover:text-black transition-all">
              View all 1000+ partners
            </button>
          </div>
        </div> */}
        <WrapperGroupCarousel className="overflow-hidden hidden xl:block mt-[172px]">
          <GroupCarouselAnimation className="flex relative h-[173px]">
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
          </GroupCarouselAnimation>
        </WrapperGroupCarousel>
        <WrapperGroupCarousel className="overflow-hidden hidden xl:block mt-[50px]">
          <GroupCarouselAnimation
            rightToLeft={true}
            className="flex relative h-[173px]"
          >
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
          </GroupCarouselAnimation>
        </WrapperGroupCarousel>
        <WrapperGroupCarousel className="overflow-hidden hidden xl:block mt-[50px] mb-[323px]">
          <GroupCarouselAnimation className="flex relative h-[173px]">
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
          </GroupCarouselAnimation>

          {/* <div className="flex items-cener justify-center mt-[76px] mb-[76px]">
            <button className="px-[28px] py-[12px] font-semibold text-white border hover:bg-white hover:text-black transition-all">
              View All
            </button>
          </div> */}
        </WrapperGroupCarousel>

        {/* tablet */}
        <WrapperGroupCarousel className="overflow-hidden hidden sm:block xl:hidden mt-[172px]">
          <GroupCarouselAnimation className="flex relative h-[173px]">
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
          </GroupCarouselAnimation>
        </WrapperGroupCarousel>
        <WrapperGroupCarousel className="overflow-hidden hidden sm:block xl:hidden mt-[50px]">
          <GroupCarouselAnimation
            rightToLeft={true}
            className="flex relative h-[173px]"
          >
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
          </GroupCarouselAnimation>
        </WrapperGroupCarousel>
        <WrapperGroupCarousel className="overflow-hidden hidden sm:block xl:hidden mt-[50px] mb-[323px]">
          <GroupCarouselAnimation className="flex relative h-[173px]">
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "173px",
                      wrapperHeight: "173px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
          </GroupCarouselAnimation>

          {/* <div className="flex items-cener justify-center mt-[76px] mb-[76px]">
            <button className="px-[28px] py-[12px] font-semibold text-white border hover:bg-white hover:text-black transition-all">
              View All
            </button>
          </div> */}
        </WrapperGroupCarousel>

        {/* mobile */}
        <WrapperGroupCarousel className="overflow-hidden block sm:hidden">
          <GroupCarouselAnimation className="flex relative h-[80px]">
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 1")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
          </GroupCarouselAnimation>
        </WrapperGroupCarousel>
        <WrapperGroupCarousel className="overflow-hidden block sm:hidden">
          <GroupCarouselAnimation
            rightToLeft={true}
            className="flex relative h-[80px]"
          >
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 2")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
          </GroupCarouselAnimation>
        </WrapperGroupCarousel>
        <WrapperGroupCarousel className="overflow-hidden block sm:hidden mb-[123px]">
          <GroupCarouselAnimation className="flex relative h-[80px]">
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
            {partners
              ?.filter((partner) => partner?.acf?.category === "partner 3")
              .map((partner, i) => {
                return (
                  <PartnerLogo
                    {...{
                      logoUrl: partner?.acf?.image || "",
                      logoName: partner?.acf?.name || "",
                      wrapperWidth: "80px",
                      wrapperHeight: "80px",
                      paddingLeft: "20px",
                      linkWebsite: partner?.acf?.linkWebsite,
                    }}
                    key={i}
                  />
                );
              })}
          </GroupCarouselAnimation>

          {/* <div className="flex items-cener justify-center mt-[76px] mb-[76px]">
            <button className="px-[28px] py-[12px] font-semibold text-white border hover:bg-white hover:text-black transition-all">
              View All
            </button>
          </div> */}
        </WrapperGroupCarousel>
      </div>
    </div>
  );
});

export default Group;
