import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
  animation: 3s ${fadeInUpAnimation};
`;
export default function Components() {
  return (
    <FadeInUpDiv>
      <fadeInUpAnimation>
        <div className=" pl-[36px] md:ml-[80px] xl:pl-0 2xl:pl-[220px] leading-[1] ">
          <p className="mb-[4px] xl:mb-0 text-black font-extrabold text-[40px] xl:text-[110px] italic w-[252px] xl:w-full popinsFont">
            We bet on
          </p>
          <p className="mb-[4px] text-black xl:mb-0 text-[40px] xl:text-[110px] font-thin italic popinsFont 2xl:w-[708px]">
            the future of
          </p>
          <p className="mb-[59px] 2xl:mb-[50px] text-red font-extrabold text-[40px] xl:text-[110px] popinsFont">
            Vietnam.
          </p>

          <div>
            <p className="text-black mr-[91px] xl:mr-0 leading-[20px]  mb-[21px] xl:mb-0 xl:w-[670px] text-[13px]  2xl:text-[20px] 2xl:font-[400] 2xl:leading-[32px] popinsFont">
              We discover in the founders the power of persistence inherent in
              Vietnamese people in the history of thousands of years of struggle
              and victories.
            </p>
            <p className="text-black mr-[74px] 2xl:mr-0  xl:w-[679px]  leading-[20px]    text-[13px]  2xl:text-[20px]  2xl:font-[400]  popinsFont 2xl:leading-[32px]  2xl:mt-[26px]">
              Their youthful energy, eagerness to learn, and commitment to the
              future of their families make us confident of the future of
              Vietnam.
            </p>
          </div>
        </div>
      </fadeInUpAnimation>
    </FadeInUpDiv>
  );
}
<div className="text-slate-900"></div>;
