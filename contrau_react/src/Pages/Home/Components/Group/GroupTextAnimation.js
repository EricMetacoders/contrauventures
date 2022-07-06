import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";

const FadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
  animation: 2s ${FadeInUpAnimation};
`;
const FadeInUpDiv2 = styled.div`
  animation: 3s ${FadeInUpAnimation};
`;
const FadeInUpDiv3 = styled.div`
  animation: 4s ${FadeInUpAnimation};
`;
export default function Components() {
  return (
    <>
      <div className=" mx-[34px] md:mx-[117px] 2xl:mx-[300px] pb-[65px] ">
        <div className="pt-[80px] xl:pt-[324px] ">
          <div>
            <FadeInUpDiv>
              <p className="text-white robotoFlexFont font-[700] text-[13px] 2xl:text-[24px] 2xl:mb-[32px]">
                Partners
              </p>
            </FadeInUpDiv>

            <FadeInUpDiv2>
              <div className="hidden xl:block">
                <div className="text-white  leading-[1] ">
                  <div className="flex space-x-7">
                    <p className="popinsFont  text-[110px] font-[900] mb-0">
                      We are{" "}
                    </p>
                    <p className="popinsFont italic text-[110px] font-thin mb-0">
                      a Fund of
                    </p>
                  </div>
                  <div className="flex space-x-1 justify-start">
                    <p className="italic popinsFont font-thin text-[110px] mr-[16px]">
                      Korean
                    </p>
                    <span className="popinsFont text-[110px] font-[900]">
                      FOUNDERS
                    </span>
                    <div className="inline-block bg-red w-[23px] h-[23px] rounded-full mt-[70px]"></div>
                  </div>
                </div>
              </div>
            </FadeInUpDiv2>
            <FadeInUpDiv2>
              <div className="block xl:hidden">
                <div className="text-white mt-[27px]]">
                  <p className="popinsfont text-[40px] font-extrabold mb-[3px]">
                    We are
                  </p>
                  <p className="popinsFont text-[40px] italic font-thin w-[220px] mb-0 leading-[1]">
                    a Fund of Korean
                  </p>
                  <div className="flex mt-[3px]">
                    <p className="popinsFont text-[40px] font-[900]">
                      FOUNDERS
                    </p>
                    <div className="inline-block bg-red w-[13px] h-[13px] rounded-full mt-[32px] ml-[1px]"></div>
                  </div>
                </div>
              </div>
            </FadeInUpDiv2>
          </div>
          <FadeInUpDiv3>
            <div className="text-white mt-[45px] 2xl:mt-[90px] ">
              <div className="2xl:mr-[-70px]">
                <p className="popinsFont  text-[13px] 2xl:text-[20px] leading-[20px] 2xl:leading-[32px] font-[300]">
                  We once encountered the challenges facing many startup-ers
                  these days. We are here to accompany them on this arduous yet
                  exciting journey. Different linguistic and cultural
                  backgrounds don’t matter when we look in the same direction.
                </p>
                <p className="popinsFont text-[13px] pt-[24px] 2xl:text-[20px]  leading-[20px] 2xl:leading-[32px]  font-[300] mr-[20px]">
                  We take pride in being the pioneer in Korea's digital
                  transformation over the past decade.
                </p>
              </div>
            </div>
          </FadeInUpDiv3>
        </div>
      </div>
    </>
  );
}
