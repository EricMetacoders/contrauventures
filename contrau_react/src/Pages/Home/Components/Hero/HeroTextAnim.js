import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";

const FadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv1 = styled.div`
  animation: 2s ${FadeInUpAnimation};
`;
const FadeInUpDiv2 = styled.div`
  animation: 3s ${FadeInUpAnimation};
`;
const FadeInUpDiv3 = styled.div`
  animation: 4s ${FadeInUpAnimation};
`;
const FadeInUpDiv4 = styled.div`
  animation: 5s ${FadeInUpAnimation};
`;
export default function Components() {
  return (
    <>
      <div className=" pl-[36px] md:ml-[80px] xl:pl-0 2xl:pl-[220px] leading-[1] ">
        <FadeInUpDiv1>
          <p className="mb-[4px] xl:mb-0 text-black font-extrabold text-[40px] xl:text-[110px] italic w-[252px] xl:w-full popinsFont">
            We bet on
          </p>
        </FadeInUpDiv1>

        <FadeInUpDiv2>
          <p className="mb-[4px] text-black xl:mb-0 text-[40px] xl:text-[110px] font-thin italic popinsFont 2xl:w-[708px]">
            the future of
          </p>
        </FadeInUpDiv2>

        <FadeInUpDiv3>
          <p className="mb-[59px] 2xl:mb-[50px] text-red font-extrabold text-[40px] xl:text-[110px] popinsFont">
            Vietnam.
          </p>
        </FadeInUpDiv3>

        <FadeInUpDiv4>
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
        </FadeInUpDiv4>
        <FadeInUpDiv4>
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
        </FadeInUpDiv4>
      </div>
    </>
  );
}
