import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";

const FadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
  animation: 3s ${FadeInUpAnimation};
`;
export default function Components() {
  return (
    <FadeInUpDiv>
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

        <div className="hidden xl:block">
          <p className="text-black mr-[91px] xl:mr-0 leading-[20px]  mb-[23px] xl:mb-0 xl:w-[670px] text-[13px]  2xl:text-[20px] 2xl:font-[400] 2xl:leading-[32px] popinsFont">
            The unyielding spirit, the youthful energy, and the thirst for
            knowledge of Vietnamese founders amaze us completely.
          </p>
          <p className="text-black mr-[74px] 2xl:mr-0  xl:w-[679px]  leading-[20px]    text-[13px]  2xl:text-[20px]  2xl:font-[400]  popinsFont 2xl:leading-[32px]  2xl:mt-[26px]">
            Their remarkable qualities have strengthened our belief in the
            bright future of the country.
          </p>
        </div>
        <div className="block xl:hidden">
          <p className="text-black mr-[86px] xl:mr-0 leading-[20px]  mb-[21px] xl:mb-0 xl:w-[670px] text-[13px]  2xl:text-[20px] 2xl:font-[400] 2xl:leading-[32px] popinsFont">
            The unyielding spirit, the youthful energy, and the thirst for
            knowledge of Vietnamese founders amaze us completely.
          </p>
          <p className="text-black mr-[91px] xl:mr-0 leading-[20px]  xl:mb-0 xl:w-[670px] text-[13px]  2xl:text-[20px] 2xl:font-[400] 2xl:leading-[32px] popinsFont">
            Their remarkable qualities have strengthened our belief in the
            bright future of the country.
          </p>
        </div>
      </div>
    </FadeInUpDiv>
  );
}
