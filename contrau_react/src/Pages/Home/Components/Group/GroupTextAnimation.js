import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";
import { useState } from "react";

const FadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
  animation: 0.5s ${FadeInUpAnimation};
`;

export default function Components() {
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);
  const [showText5, setShowText5] = useState(false);
  const [showText6, setShowText6] = useState(false);
  const [showText7, setShowText7] = useState(false);
  const [showText8, setShowText8] = useState(false);
  const [showText9, setShowText9] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText2(true);
    }, 500);
    setTimeout(() => {
      setShowText3(true);
    }, 1000);
    setTimeout(() => {
      setShowText4(true);
    }, 1500);
    setTimeout(() => {
      setShowText5(true);
    }, 2000);
    setTimeout(() => {
      setShowText6(true);
    }, 2500);
    setTimeout(() => {
      setShowText7(true);
    }, 3000);
    setTimeout(() => {
      setShowText8(true);
    }, 3500);
    setTimeout(() => {
      setShowText9(true);
    }, 4000);
  }, []);

  return (
    <>
      <div>
        <div>
          <FadeInUpDiv>
            <p className="text-white robotoFlexFont font-[700] text-[13px] 2xl:text-[24px] 2xl:mb-[32px]">
              Partners
            </p>
          </FadeInUpDiv>

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
              {showText3 ? (
                <FadeInUpDiv>
                  <div className="flex space-x-1 justify-start">
                    <p className="italic popinsFont font-thin text-[110px] mr-[16px]">
                      Korean
                    </p>
                    <span className="popinsFont text-[110px] font-[900]">
                      FOUNDERS
                    </span>
                    <div className="inline-block bg-red w-[23px] h-[23px] rounded-full mt-[70px]"></div>
                  </div>
                </FadeInUpDiv>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="block xl:hidden">
            <div className="text-white mt-[27px]]">
              {showText2 ? (
                <FadeInUpDiv>
                  <p className="popinsfont text-[40px] font-extrabold mb-[3px]">
                    We are
                  </p>
                </FadeInUpDiv>
              ) : (
                <></>
              )}

              {showText3 ? (
                <FadeInUpDiv>
                  <p className="popinsFont text-[40px] italic font-thin w-[220px] mb-0 leading-[1]">
                    a Fund of
                  </p>
                </FadeInUpDiv>
              ) : (
                <></>
              )}

              {showText4 ? (
                <FadeInUpDiv>
                  <p className="popinsFont text-[40px] italic font-thin w-[220px] mb-0 leading-[1]">
                    Korean
                  </p>
                </FadeInUpDiv>
              ) : (
                <></>
              )}

              {showText5 ? (
                <FadeInUpDiv>
                  <div className="flex mt-[3px]">
                    <p className="popinsFont text-[40px] font-[900]">
                      FOUNDERS
                    </p>

                    <div className="inline-block bg-red w-[13px] h-[13px] rounded-full mt-[32px] ml-[1px]"></div>
                  </div>
                </FadeInUpDiv>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div className="text-white mt-[45px] 2xl:mt-[90px] ">
          <div className="2xl:mr-[-70px]">
            {showText6 ? (
              <FadeInUpDiv>
                <p className="popinsFont  text-[13px] 2xl:text-[20px] leading-[20px] 2xl:leading-[32px] font-[300]">
                  We once encountered the challenges facing many startup-ers
                  these days.
                </p>
              </FadeInUpDiv>
            ) : (
              <></>
            )}
            {showText7 ? (
              <FadeInUpDiv>
                <p className="popinsFont  text-[13px] 2xl:text-[20px] leading-[20px] 2xl:leading-[32px] font-[300]">
                  We are here to accompany them on this arduous yet exciting
                  journey.
                </p>
              </FadeInUpDiv>
            ) : (
              <></>
            )}
            {showText8 ? (
              <FadeInUpDiv>
                <p className="popinsFont  text-[13px] 2xl:text-[20px] leading-[20px] 2xl:leading-[32px] font-[300]">
                  Different linguistic and cultural backgrounds don’t matter
                  when we look in the same direction.
                </p>
              </FadeInUpDiv>
            ) : (
              <></>
            )}
            {showText9 ? (
              <FadeInUpDiv>
                <p className="popinsFont text-[13px] pt-[24px] 2xl:text-[20px]  leading-[20px] 2xl:leading-[32px]  font-[300] mr-[20px]">
                  We take pride in being the pioneer in Korea's digital
                  transformation over the past decade.
                </p>
              </FadeInUpDiv>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
