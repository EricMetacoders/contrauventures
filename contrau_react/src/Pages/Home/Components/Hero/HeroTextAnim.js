import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";
import { useEffect } from "react";
import "./hero.scss";
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
      <div id="heroDiv" className=" leading-[1]">
        <FadeInUpDiv>
          <p className="mb-[4px] xl:mb-0 text-black font-extrabold text-[40px] sm:text-[70px] sm:leading-[60px] lg:leading-[63px] xl:leading-[46px] xl:text-[110px] 2xl:leading-[37px] italic w-[252px] lg:w-[400px] sm:w-[368px] xl:w-[1000px] popinsFont">
            We bet on
          </p>
        </FadeInUpDiv>

        {showText2 ? (
          <FadeInUpDiv>
            <p className=" text-black w-[700px] xl:my-[30px] text-[40px] sm:text-[63px] xl:leading-[100px] 2xl:leading-[190px] xl:text-[110px] font-thin sm:italic popinsFont 2xl:w-[708px]">
              the future of
            </p>
            <p className="text-red font-extrabold text-[40px] sm:text-[63px] 2xl:leading-[37px] sm:leading-[60px]  lg:leading-[63px] xl:leading-[45px] xl:text-[110px] popinsFont">
              Vietnam.
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}

        <div className="hidden xl:block xl:mt-[75px] 2xl:mt-[89px]">
          {showText3 ? (
            <FadeInUpDiv>
              <p className="text-black mr-[91px leading-[20px]  xl:w-[670px] text-[13px]  xl:text-[20px] xl:font-[400] xl:leading-[32px] popinsFont">
                The unyielding spirit, the youthful energy, and the thirst for
                knowledge of Vietnamese founders amaze us completely.
                <br />
                Their remarkable qualities have strengthened our belief in the
                bright future of the country.
              </p>
            </FadeInUpDiv>
          ) : (
            <></>
          )}
        </div>

        <div className="block xl:hidden mt-[50px]">
          {showText3 ? (
            <FadeInUpDiv>
              <p className="text-black leading-[20px]  xl:mb-0 xl:w-[670px] text-[13px]  2xl:text-[20px] 2xl:font-[400] 2xl:leading-[32px] popinsFont">
                The unyielding spirit, the youthful energy, and the thirst for
                knowledge of Vietnamese founders amaze us completely.
                <br />
                Their remarkable qualities have strengthened our belief in the
                bright future of the country.
              </p>
            </FadeInUpDiv>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
