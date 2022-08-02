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
      <FadeInUpDiv>
        <p className="font-bold robotoFlexFont  text-[13px] sm:text-[24px]  md:text-[24px]">
          Founders
        </p>
      </FadeInUpDiv>

      {/* desktop */}
      <div className="hidden xl:block leading-[1] mt-[50px]">
        {showText2 ? (
          <FadeInUpDiv>
            <p className="popinsFont md:text-[70px]  xl:text-[110px]  font-thin mb-[5px] 2xl:mb-0">
              We don’t go for Deals,
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}

        {showText2 ? (
          <FadeInUpDiv>
            <div className="flex items-center justify-start lg:space-x-3 2xl:space-x-5 mb-0">
              <p className="md:leading-[60px] lg:leading-[110px] md:text-[50px] xl:text-[90px] 2xl:text-[110px] popinsFont italic font-[900]  ">
                We go for{" "}
              </p>
              <div className="flex items-center justify-center">
                <p className="md:text-[70px] lg:text-[90px] 2xl:text-[110px] popinsFont italic font-[900] text-red">
                  Founders.
                </p>
              </div>
            </div>
          </FadeInUpDiv>
        ) : (
          <></>
        )}
      </div>

      {/* tablet */}
      <div className="hidden sm:block xl:hidden leading-[1] mt-[50px]">
        {showText2 ? (
          <FadeInUpDiv>
            <p className="popinsFont text-[63px]  font-thin  mb-0">
              We don’t go for Deals,
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}

        {showText2 ? (
          <FadeInUpDiv>
            <p className="leading-[72px] text-[63px] ] popinsFont italic font-[900]  ">
              We go for{" "}
            </p>
            <div className="flex items-center">
              <p className="leading-[72px] text-[63px] ] popinsFont italic font-[900]   text-red">
                Founders.
              </p>
            </div>
          </FadeInUpDiv>
        ) : (
          <></>
        )}
      </div>

      {/* mobile */}
      <div className="block sm:hidden leading-[1] mt-[27px] ">
        {showText2 ? (
          <FadeInUpDiv>
            <p className="popinsFont text-[40px] font-thin mb-0">We don't</p>
            <p className="popinsFont text-[40px] font-thin mb-0">
              go for Deals,
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}

        {showText2 ? (
          <FadeInUpDiv>
            <p className="popinsFont font-extrabold italic text-[40px] mb-0">
              We go for
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}
        {showText2 ? (
          <FadeInUpDiv>
            <p className=" popinsFont   font-extrabold italic text-[40px] text-red">
              Founders
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}
      </div>

      <div className="popinsFont text-[13px] xl:text-[20px]   mt-[-16px] md:mt-0 lg:mt-0 xl:mt-[4%] 2xl:mt-[76px] pt-[67px]  xl:pt-0 mr-[30px] ">
        {showText3 ? (
          <FadeInUpDiv>
            <p className="mb-0">
              We don’t pursue a high follow-up investment ratio.
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}
        {showText3 ? (
          <FadeInUpDiv>
            <p className="mb-0">
              Our goal is to be the first friend that founders can turn to in
              their most difficult moments.
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
