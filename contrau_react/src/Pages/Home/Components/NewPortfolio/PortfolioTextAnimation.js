import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";
import { useEffect, useState } from "react";

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
    }, 500);
    setTimeout(() => {
      setShowText3(true);
    }, 1000);
  }, []);
  return (
    <>
      <div className="text-white hidden md:block ">
        <div className="text-center w-full bg-transparent">
          <div>
            <FadeInUpDiv>
              <p className="robotoFlexFont font-bold text-[24px] ">
                Portfolios
              </p>
            </FadeInUpDiv>
            <div className="mt-[54px] leading-[1]">
              {showText2 ? (
                <FadeInUpDiv>
                  <div className="flex items-center justify-center">
                    <p className="popinsFont font-[900] sm:text-[63px] xl:text-[110px] mb-0">
                      Vietnam's{" "}
                      <span className="popinsFont italic font-thin">
                        victory
                      </span>
                    </p>
                  </div>
                </FadeInUpDiv>
              ) : (
                <></>
              )}
              {showText2 ? (
                <FadeInUpDiv>
                  <div className="flex items-center justify-center sm:text-[63px] xl:text-[110px] space-x-3">
                    <p className="popinsFont italic font-thin mb-0">is</p>
                    <p className="popinsFont font-[900] text-red  mb-0">
                      Our victory.
                    </p>
                  </div>
                </FadeInUpDiv>
              ) : (
                <></>
              )}
            </div>

            <div className="mt-[54px]">
              {showText3 ? (
                <FadeInUpDiv>
                  <p className="text-[13px] xl:text-[20px] popinsFont font-normal text-hoverGrey mb-0">
                    Our investments focus on the fields that could help boost
                    Vietnam's growth and lift the country up.
                  </p>
                </FadeInUpDiv>
              ) : (
                <></>
              )}
              {showText3 ? (
                <FadeInUpDiv>
                  <p className="text-[13px] xl:text-[20px] popinsFont font-normal text-hoverGrey mb-0">
                    We will lay the groundwork and sow the seeds for Vietnam's
                    startup ecosystem, seeing it grow into a dense forest.
                  </p>
                </FadeInUpDiv>
              ) : (
                <></>
              )}
              {showText3 ? (
                <FadeInUpDiv>
                  <p className="text-[13px] xl:text-[20px]  popinsFont font-normal text-hoverGrey mb-0">
                    Rather than a fund with the highest profit, we aim to be
                    remembered as a vital contributor to Vietnam's startup
                    ecosystem.
                  </p>
                </FadeInUpDiv>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden ml-[36px] bg-portfolioBg">
        <div className="text-white relative">
          <FadeInUpDiv>
            <p className="robotoFlexFont text-[13px] sm:text-[24px] font-bold mb-0">
              Portfolios
            </p>
          </FadeInUpDiv>
          <div className="mt-[27px] text-[40px] sm:text-[63px] leading-[1]">
            {showText2 ? (
              <FadeInUpDiv>
                <p className="font-[900]  popinsFont mb-0">Vietnam's</p>
              </FadeInUpDiv>
            ) : (
              <></>
            )}
            {showText2 ? (
              <FadeInUpDiv>
                <p className="italic font-thin text-[40px] sm:text-[63px] popinsFont mb-0">
                  victory is
                </p>
              </FadeInUpDiv>
            ) : (
              <></>
            )}
            {showText2 ? (
              <FadeInUpDiv>
                <div className="flex items-center justify-start space-x-[1px]">
                  <p className="font-[900] text-red mb-0 popinsFont text-[40px] sm:text-[63px]">
                    Our victory.
                  </p>
                </div>
              </FadeInUpDiv>
            ) : (
              <></>
            )}
          </div>
          <div className="mt-[30px]">
            {showText3 ? (
              <FadeInUpDiv>
                <p className="popinsFont text-[13px] w-[243px] text-white leading-[20px] font-light mt-[45px] lg:mt-0">
                  We invest in areas that can increase Vietnam's growth
                  potential where Vietnam can become strong.
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
