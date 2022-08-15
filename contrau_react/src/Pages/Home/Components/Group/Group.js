import React, { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import GroupTextAnimation from "./GroupTextAnimation";
import { getPartnersList } from "reducers/homeSlice";
import { PartnerLogo } from "./PartnerLogo/PartnerLogo";
import { GroupCarouselAnimation, WrapperGroupCarousel } from "./GroupStyle";

export default function Group() {
  const dispatch = useDispatch();

  const [inView, setInView] = useState(false);

  // get data from homeSlice
  const partners = useSelector((state) => state.homeSlice.partners);

  useEffect(() => {
    // call api from homeSlice
    dispatch(getPartnersList());
  }, []);

  return (
    <div>
      <div className="bg-partnersContactBg overflow-hidden ">
        <div
          id="aboutUs"
          className="pb-[84px] md:pb-0 lg:pb-0 xl:pb-[13px]  md:mt-[187px] mt-[10px]"
        >
          <div className="mx-[34px] md:mx-[117px] 2xl:mx-[300px] 2xl:pb-[65px]  pt-[108px]">
            <div className=" w-[292px] h-[474.5px]  sm:w-[1320px] sm:h-[498px] xl:w-[1030px] xl:h-[498px]">
              {/* start animation */}
              <div inView={inView}>
                <InView onChange={setInView}>
                  {({ ref, inView }) => (
                    <div ref={ref}>
                      {inView ? <GroupTextAnimation /> : <></>}
                    </div>
                  )}
                </InView>
              </div>
              {/* end animation */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-partnersContactBg overflow-hidden">
        {/* desktop */}
        <WrapperGroupCarousel className="hidden xl:block mt-[64px]">
          <GroupCarouselAnimation>
            {(() => {
              let partnerLogos = [];
              for (let i = 1; i <= 5; i++) {
                const logo = partners
                  ?.filter((partner) => partner?.acf?.category === "partner 1")
                  .map((partner, i) => {
                    return (
                      <PartnerLogo
                        {...{
                          logoUrl: partner?.acf?.image || "",
                          logoName: partner?.acf?.name || "",
                          wrapperWidth: "173px",
                          wrapperHeight: "173px",
                          paddingLeft: "90px",
                          linkWebsite: partner?.acf?.linkWebsite,
                        }}
                        key={i}
                      />
                    );
                  });
                partnerLogos.push(logo);
              }
              return partnerLogos;
            })()}
          </GroupCarouselAnimation>
        </WrapperGroupCarousel>
        <WrapperGroupCarousel className="overflow-hidden hidden xl:block mt-[50px]">
          <GroupCarouselAnimation
            rightToLeft={true}
            className="flex relative h-[173px]"
          >
            {(() => {
              let partnerLogos = [];
              for (let i = 1; i <= 6; i++) {
                const logo = partners
                  ?.filter((partner) => partner?.acf?.category === "partner 2")
                  .map((partner, i) => {
                    return (
                      <PartnerLogo
                        {...{
                          logoUrl: partner?.acf?.image || "",
                          logoName: partner?.acf?.name || "",
                          wrapperWidth: "173px",
                          wrapperHeight: "173px",
                          paddingLeft: "90px",
                          linkWebsite: partner?.acf?.linkWebsite,
                        }}
                        key={i}
                      />
                    );
                  });
                partnerLogos.push(logo);
              }
              return partnerLogos;
            })()}
          </GroupCarouselAnimation>
        </WrapperGroupCarousel>
        <WrapperGroupCarousel className="overflow-hidden hidden xl:block mt-[50px] mb-[323px]">
          <GroupCarouselAnimation className="flex relative h-[173px]">
            {(() => {
              let partnerLogos = [];
              for (let i = 1; i <= 8; i++) {
                const logo = partners
                  ?.filter((partner) => partner?.acf?.category === "partner 3")
                  .map((partner, i) => {
                    return (
                      <PartnerLogo
                        {...{
                          logoUrl: partner?.acf?.image || "",
                          logoName: partner?.acf?.name || "",
                          wrapperWidth: "173px",
                          wrapperHeight: "173px",
                          paddingLeft: "90px",
                          linkWebsite: partner?.acf?.linkWebsite,
                        }}
                        key={i}
                      />
                    );
                  });
                partnerLogos.push(logo);
              }
              return partnerLogos;
            })()}
          </GroupCarouselAnimation>

          <div className="flex items-cener justify-center mt-[76px] mb-[76px]">
            <button className="px-[28px] py-[12px] font-semibold text-white border hover:bg-white hover:text-black transition-all">
              View All
            </button>
          </div>
        </WrapperGroupCarousel>

        {/* tablet */}
        <WrapperGroupCarousel className="overflow-hidden hidden sm:block xl:hidden">
          <GroupCarouselAnimation className="flex relative h-[173px]">
            {(() => {
              let partnerLogos = [];
              for (let i = 1; i <= 6; i++) {
                const logo = partners
                  ?.filter((partner) => partner?.acf?.category === "partner 1")
                  .map((partner, i) => {
                    return (
                      <PartnerLogo
                        {...{
                          logoUrl: partner?.acf?.image || "",
                          logoName: partner?.acf?.name || "",
                          wrapperWidth: "173px",
                          wrapperHeight: "173px",
                          paddingLeft: "90px",
                          linkWebsite: partner?.acf?.linkWebsite,
                        }}
                        key={i}
                      />
                    );
                  });
                partnerLogos.push(logo);
              }
              return partnerLogos;
            })()}
          </GroupCarouselAnimation>
        </WrapperGroupCarousel>
        <WrapperGroupCarousel className="overflow-hidden hidden sm:block xl:hidden mt-[50px]">
          <GroupCarouselAnimation
            rightToLeft={true}
            className="flex relative h-[173px]"
          >
            {(() => {
              let partnerLogos = [];
              for (let i = 1; i <= 6; i++) {
                const logo = partners
                  ?.filter((partner) => partner?.acf?.category === "partner 2")
                  .map((partner, i) => {
                    return (
                      <PartnerLogo
                        {...{
                          logoUrl: partner?.acf?.image || "",
                          logoName: partner?.acf?.name || "",
                          wrapperWidth: "173px",
                          wrapperHeight: "173px",
                          paddingLeft: "90px",
                          linkWebsite: partner?.acf?.linkWebsite,
                        }}
                        key={i}
                      />
                    );
                  });
                partnerLogos.push(logo);
              }
              return partnerLogos;
            })()}
          </GroupCarouselAnimation>
        </WrapperGroupCarousel>
        <WrapperGroupCarousel className="overflow-hidden hidden sm:block xl:hidden mt-[50px] mb-[323px]">
          <GroupCarouselAnimation className="flex relative h-[173px]">
            {(() => {
              let partnerLogos = [];
              for (let i = 1; i <= 8; i++) {
                const logo = partners
                  ?.filter((partner) => partner?.acf?.category === "partner 3")
                  .map((partner, i) => {
                    return (
                      <PartnerLogo
                        {...{
                          logoUrl: partner?.acf?.image || "",
                          logoName: partner?.acf?.name || "",
                          wrapperWidth: "173px",
                          wrapperHeight: "173px",
                          paddingLeft: "90px",
                          linkWebsite: partner?.acf?.linkWebsite,
                        }}
                        key={i}
                      />
                    );
                  });
                partnerLogos.push(logo);
              }
              return partnerLogos;
            })()}
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
            {(() => {
              let partnerLogos = [];
              for (let i = 1; i <= 6; i++) {
                const logo = partners
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
                  });
                partnerLogos.push(logo);
              }
              return partnerLogos;
            })()}
          </GroupCarouselAnimation>
        </WrapperGroupCarousel>
        <WrapperGroupCarousel className="overflow-hidden block sm:hidden mt-[25px]">
          <GroupCarouselAnimation
            rightToLeft={true}
            className="flex relative h-[80px]"
          >
            {(() => {
              let partnerLogos = [];
              for (let i = 1; i <= 6; i++) {
                const logo = partners
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
                  });
                partnerLogos.push(logo);
              }
              return partnerLogos;
            })()}
          </GroupCarouselAnimation>
        </WrapperGroupCarousel>
        <WrapperGroupCarousel className="overflow-hidden block sm:hidden mt-[25px] mb-[123px]">
          <GroupCarouselAnimation className="flex relative h-[80px]">
            {(() => {
              let partnerLogos = [];
              for (let i = 1; i <= 8; i++) {
                const logo = partners
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
                  });
                partnerLogos.push(logo);
              }
              return partnerLogos;
            })()}
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
}
