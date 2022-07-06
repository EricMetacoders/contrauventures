import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";

const FadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
  animation: 3s ${FadeInUpAnimation};
`;
export default function Components() {
  return (
    <FadeInUpDiv>
      <div>
        <p className="robotoFlexFont text-[13px] md:text-[24px] font-bold">
          Value Add
        </p>
        <div className="mt-[30px] 2xl:mt-[74px]  border-black pb-[40px] 2xl:pb-[80px] leading-[1]">
          <p className="popinsFont text-[40px]  font-[900] md:text-[80px] 2xl:text-[110px]  2xl:font-thin 2xl:italic mb-0">
            We empower
          </p>
          <p className="popinsFont text-[40px] md:text-[80px] 2xl:text-[110px]  italic font-thin mb-0">
            ourselve with
          </p>
          <div className="block md:flex items-center justify-start md:space-x-5">
            <p className="popinsFont text-[40px] md:text-[80px] 2xl:text-[110px]  italic font-thin mb-0">
              various
            </p>
            <p className="popinsFont text-[40px] md:text-[80px] 2xl:text-[110px] font-[900] text-red italic mb-0">
              potentials
            </p>
          </div>
        </div>
      </div>
    </FadeInUpDiv>
  );
}
