import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";

const FadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
  animation: 3s ${FadeInUpAnimation};
`;
export default function Components() {
  return (
    <FadeInUpDiv>
      <p className="font-bold robotoFlexFont  text-[13px]  md:text-[24px]">
        Founders
      </p>
      <div className="hidden md:block leading-[1] mt-[50px]">
        <p className="popinsFont text-[110px]  font-thin mb-[5px] 2xl:mb-0">
          We don’t go for Deal,
        </p>
        <div className="flex items-center justify-start 2xl:space-x-5 mb-0">
          <p className="md:leading-[60px] lg:leading-[110px] md:text-[50px] lg:text-[110px] popinsFont italic font-[900]  ">
            We go for{" "}
          </p>
          <div className="flex items-center justify-center">
            <p className="text-[110px] popinsFont italic font-[900] text-red">
              Founders
            </p>
            <div className="bg-red w-[10px] h-[10px] xl:w-[23px] xl:h-[23px] rounded-full  mt-[30px] md:mt-[27px] xl:mt-[-41px] 2xl:mt-[57px]"></div>
          </div>
        </div>
      </div>
      <div className="block md:hidden leading-[1] mt-[27px] ">
        <p className="popinsFont text-[40px] font-thin mb-0">We don't</p>
        <p className="popinsFont text-[40px] font-thin  mb-0">go for Deals,</p>
        <p className="popinsFont font-extrabold italic text-[40px] mb-0">
          We go for
        </p>
        <p className=" font-extrabold italic text-[40px] text-red">Founders</p>
      </div>
      <div className="popinsFont text-[13px] 2xl:text-[20px]  md:text-[20px] mt-[-16px] md:mt-[50px] 2xl:mt-[76px] pt-[67px] xl:pt-0 mr-[30px] ">
        <p className="mb-0">
          We don’t pursue a high follow-up investment ratio.
        </p>
        <p className="mb-0">
          Our goal is to be the first friend that founders can turn to in their
          most difficult moments.
        </p>
      </div>
    </FadeInUpDiv>
  );
}
