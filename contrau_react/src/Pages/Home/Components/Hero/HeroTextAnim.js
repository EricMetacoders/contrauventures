import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";
import { useEffect } from "react";

const FadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
  animation: 0.5s ${FadeInUpAnimation};
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
    <>
      <div className=" pl-[36px] md:ml-[80px] xl:pl-0 2xl:pl-[220px] leading-[1] ">
        <FadeInUpDiv>
          <p className="mb-[4px] xl:mb-0 text-black font-extrabold text-[40px] xl:text-[110px] italic w-[252px] xl:w-full popinsFont">
            We bet on
          </p>
        </FadeInUpDiv>

        {showText2 ? (
          <FadeInUpDiv>
            <p className=" text-black xl:mb-0 text-[40px] xl:text-[110px] font-thin italic popinsFont 2xl:w-[708px]">
              the future of
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}

        {showText3 ? (
          <FadeInUpDiv>
            <p className="text-red font-extrabold text-[40px] xl:text-[110px] popinsFont">
              Vietnam.
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}

        <div className="hidden xl:block">
          {showText4 ? (
            <FadeInUpDiv>
              <p className="text-black mr-[91px] xl:mr-0 leading-[20px]  xl:w-[670px] text-[13px]  2xl:text-[20px] 2xl:font-[400] 2xl:leading-[32px] popinsFont 2xl:mt-[55px]">
                The unyielding spirit, the youthful energy, and the thirst for
                knowledge of Vietnamese founders amaze us completely.
              </p>
            </FadeInUpDiv>
          ) : (
            <></>
          )}
          {showText5 ? (
            <FadeInUpDiv>
              <p className="text-black mr-[74px] 2xl:mr-0  xl:w-[679px]  leading-[20px]    text-[13px]  2xl:text-[20px]  2xl:font-[400]  popinsFont 2xl:leading-[32px]  2xl:mt-[26px]">
                Their remarkable qualities have strengthened our belief in the
                bright future of the country.
              </p>
            </FadeInUpDiv>
          ) : (
            <></>
          )}
        </div>

        <div className="block xl:hidden mt-[50px]">
          {showText4 ? (
            <FadeInUpDiv>
              <p className="text-black mr-[86px] xl:mr-0 leading-[20px]  xl:mb-0 xl:w-[670px] text-[13px]  2xl:text-[20px] 2xl:font-[400] 2xl:leading-[32px] popinsFont">
                The unyielding spirit, the youthful energy, and the thirst for
                knowledge of Vietnamese founders amaze us completely.
              </p>
            </FadeInUpDiv>
          ) : (
            <></>
          )}
          {showText5 ? (
            <FadeInUpDiv>
              <p className="text-black mr-[91px] xl:mr-0 leading-[20px]  xl:w-[670px] text-[13px]  2xl:text-[20px] 2xl:font-[400] 2xl:leading-[32px] popinsFont mt-[20px]">
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
