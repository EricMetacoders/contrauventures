import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";
import { useState } from "react";

const FadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
  animation: 1s ${FadeInUpAnimation};
`;

export default function Components() {
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText2(true);
    }, 1000);
    setTimeout(() => {
      setShowText3(true);
    }, 1500);
  }, []);

  return (
    <>
      <div>
        <div>
          <FadeInUpDiv>
            <p className="text-white robotoFlexFont font-[700] text-[13px] sm:text-[24px] sm:mb-[3.6%]">
              Partners
            </p>
          </FadeInUpDiv>

          {/* Desktop */}
          <div className="hidden xl:block">
            <div className="text-white  leading-[1] ">
              {showText2 ? (
                <FadeInUpDiv>
                  <div className="flex space-x-7">
                    <p className="popinsFont  text-[110px] font-[900] mb-0">
                      We are{" "}
                    </p>
                    <p className="popinsFont italic text-[110px] font-thin mb-0">
                      a Fund of
                    </p>
                  </div>
                </FadeInUpDiv>
              ) : (
                <></>
              )}
              {showText2 ? (
                <FadeInUpDiv>
                  <div className="flex space-x-1 justify-start">
                    <p className="italic popinsFont font-thin text-[110px] mr-[16px]">
                      Korean
                    </p>
                    <span className="popinsFont text-[110px] font-[900]">
                      FOUNDERS
                    </span>
                    <span className="popinsFont text-red text-[110px] font-[900]">
                      .
                    </span>
                  </div>
                </FadeInUpDiv>
              ) : (
                <></>
              )}
            </div>
          </div>

          {/* Tablet*/}
          <div className="hidden sm:block xl:hidden">
            <div className="text-white  leading-[1] ">
              {showText2 ? (
                <FadeInUpDiv>
                  <div className="flex space-x-7">
                    <p className="popinsFont  text-[63px] font-[900] mb-0">
                      We are{" "}
                    </p>
                    <p className="popinsFont italic text-[63px] font-thin mb-0">
                      a Fund of
                    </p>
                  </div>
                </FadeInUpDiv>
              ) : (
                <></>
              )}
              {showText2 ? (
                <FadeInUpDiv>
                  <div className="flex space-x-1 justify-start">
                    <p className="italic popinsFont font-thin text-[63px] mr-[16px]">
                      Korean
                    </p>
                    <span className="popinsFont text-[63px] font-[900]">
                      FOUNDERS
                    </span>
                    <span className="popinsFont text-red text-[63px] font-[900]">
                      .
                    </span>
                  </div>
                </FadeInUpDiv>
              ) : (
                <></>
              )}
            </div>
          </div>

          {/* Mobile */}
          {showText2 ? (
            <FadeInUpDiv>
              <div className="block sm:hidden">
                <div className="text-white mt-[27px]">
                  <p className="popinsfont text-[40px] font-extrabold mb-[3px]">
                    We are
                  </p>
                  <p className="popinsFont text-[40px] italic font-thin w-[220px] mb-0 leading-[1]">
                    a Fund of
                  </p>
                  <p className="popinsFont text-[40px] italic font-thin w-[220px] mb-0 leading-[1]">
                    Korean
                  </p>
                  <div className="flex mt-[3px]">
                    <p className="popinsFont text-[40px] font-[900]">
                      FOUNDERS
                    </p>
                    <div className="inline-block bg-red w-[13px] h-[13px] rounded-full mt-[32px] ml-[1px]"></div>
                  </div>
                </div>
              </div>
            </FadeInUpDiv>
          ) : (
            <></>
          )}
        </div>
        <div className="text-white mt-[45px] 2xl:mt-[90px] ">
          {showText3 ? (
            <FadeInUpDiv>
              <div className="2xl:mr-[-70px]">
                <p className="popinsFont  text-[13px] md:text-[13px] lg:text-[20px] leading-[20px] 2xl:leading-[32px] font-[300]">
                  We once encountered the challenges facing many startup-ers
                  these days.
                </p>
                <p className="popinsFont  text-[13px] md:text-[13px] lg:text-[20px] leading-[20px] 2xl:leading-[32px] font-[300]">
                  We are here to accompany them on this arduous yet exciting
                  journey.
                </p>
                <p className="popinsFont  text-[13px] md:text-[13px] lg:text-[20px] leading-[20px] 2xl:leading-[32px] font-[300]">
                  Different linguistic and cultural backgrounds don’t matter
                  when we look in the same direction.
                </p>
                <p className="popinsFont  text-[13px] md:text-[13px] lg:text-[20px] leading-[20px] 2xl:leading-[32px] font-[300]">
                  We take pride in being the pioneer in Korea's digital
                  transformation over the past decade.
                </p>
              </div>
            </FadeInUpDiv>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
