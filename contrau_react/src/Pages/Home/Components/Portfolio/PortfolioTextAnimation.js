import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";

const FadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
  animation: 3s ${FadeInUpAnimation};
`;
export default function Components() {
  return (
    <FadeInUpDiv>
      <div className="text-white hidden md:block ">
        <div className="absolute md:top-[30%] 2xl:top-[90%] text-center w-full bg-transparent">
          <div>
            <p className="robotoFlexFont font-bold text-[24px] ">Portfolio</p>
            <div className="mt-[54px] leading-[1]">
              <div className="flex items-center justify-center">
                <p className="popinsFont font-[900] italic text-[110px] mb-0">
                  Vietnam's{" "}
                  <span className="popinsFont italic font-thin">victory</span>
                </p>
              </div>
              <div className="flex items-center justify-center text-[110px] space-x-3">
                <p className="popinsFont italic font-thin mb-0">is</p>
                <p className="font-[900] text-red  mb-0">Our victory</p>
                <div className=" w-[25px] h-[25px] rounded-full bg-red mt-[79px]"></div>
              </div>
            </div>
            <div className="mt-[54px]">
              <p className="text-[20px] popinsFont font-normal text-hoverGrey mb-0">
                Our investments focus on the fields that could help boost
                Vietnam's growth and lift the country up.
              </p>
              <p className="text-[20px] popinsFont font-normal text-hoverGrey mb-0">
                We will lay the groundwork and sow the seeds for Vietnam's
                startup ecosystem, seeing it grow into a dense forest.
              </p>
              <p className="text-[20px] popinsFont font-normal text-hoverGrey mb-0">
                Rather than a fund with the highest profit, we aim to be
                remembered as a vital contributor to Vietnam's startup
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden ml-[36px] bg-portfolioBg">
        <div className="text-white absolute top-[20%]">
          <p className="robotoFlexFont text-[13px] font-bold mb-0">Portfolio</p>
          <div className="mt-[27px] text-[40px] leading-[1]">
            <p className="font-[900]  popinsFont mb-0">Vietnam's</p>
            <p className="italic font-thin text-[40px] popinsFont mb-0">
              victory is
            </p>
            <div className="flex items-center justify-start space-x-[1px]">
              <p className="font-[900] text-red mb-0 popinsFont text-[40px]">
                Our victory
              </p>
              <div className="w-[13px] h-[13px] bg-red rounded-full mt-[40px]"></div>
            </div>
          </div>
          <div className="mt-[30px]">
            <p className="popinsFont text-[13px] w-[243px] text-white leading-[20px] font-light">
              We invest in areas that can increase Vietnam's growth potential
              where Vietnam can become strong.
            </p>
          </div>
        </div>
      </div>
    </FadeInUpDiv>
  );
}
