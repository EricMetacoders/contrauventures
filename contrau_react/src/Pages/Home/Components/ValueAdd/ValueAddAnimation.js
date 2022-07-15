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
  const [showText4, setShowText4] = useState(false);
  const [showText5, setShowText5] = useState(false);

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
  }, []);
  return (
    <div>
      <FadeInUpDiv>
        <p className="robotoFlexFont text-[13px] md:text-[24px] font-bold">
          Value Add
        </p>
      </FadeInUpDiv>
      <div className="mt-[30px] 2xl:mt-[74px]  border-black pb-[40px] 2xl:pb-[80px] leading-[1]">
        {showText2 ? (
          <FadeInUpDiv>
            <p className="popinsFont text-[40px]  font-[900] md:text-[80px] 2xl:text-[110px]  2xl:font-thin 2xl:italic mb-0">
              We empower
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}
        {showText2 ? (
          <FadeInUpDiv>
            <p className="popinsFont text-[40px] md:text-[64px] lg:text-[80px] 2xl:text-[110px]  italic font-thin mb-0">
              ourselves with
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}

        {showText2 ? (
          <FadeInUpDiv>
            <div className="hidden md:flex items-center justify-start space-x-5">
              <p className="popinsFont text-[40px] md:text-[64px] lg:text-[80px] 2xl:text-[110px]  italic font-thin mb-0">
                various
              </p>
              <p className="popinsFont text-[40px] md:text-[64px] lg:text-[80px] 2xl:text-[110px] font-[900] text-red italic mb-0">
                potentials
              </p>
            </div>
          </FadeInUpDiv>
        ) : (
          <></>
        )}

        <div className="block md:hidden items-center justify-start ">
          {showText2 ? (
            <FadeInUpDiv>
              <p className="popinsFont text-[40px] md:text-[80px] 2xl:text-[110px]  italic font-thin mb-0">
                various
              </p>
            </FadeInUpDiv>
          ) : (
            <></>
          )}

          {showText2 ? (
            <FadeInUpDiv>
              <p className="popinsFont text-[40px] md:text-[80px] 2xl:text-[110px] font-[900] text-red italic mb-0">
                potentials
              </p>
            </FadeInUpDiv>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
