import React, { useState } from "react";
import aplus from "../../assets/image/plus.png";
import ic_plus from "../../assets/image/ic_plus.png";
export default function Faq() {
  const [ques1, setQues1] = useState(false);
  const [ques2, setQues2] = useState(false);
  const [ques3, setQues3] = useState(false);
  const [ques4, setQues4] = useState(false);
  const [plus1, setPlus1] = useState(aplus);
  const [plus2, setPlus2] = useState(aplus);
  const [plus3, setPlus3] = useState(aplus);
  const [plus4, setPlus4] = useState(aplus);
  const quesHandler1 = () => {
    setQues1(!ques1);
    setQues2(false);
    setQues3(false);
    setQues4(false);
    setPlus1(plus1 === aplus ? ic_plus : aplus);
    setPlus2(aplus);
    setPlus3(aplus);
    setPlus4(aplus);
  };
  const quesHandler2 = () => {
    setQues2(!ques2);
    setQues1(false);
    setQues3(false);
    setQues4(false);
    setPlus2(plus2 === aplus ? ic_plus : aplus);
    setPlus1(aplus);
    setPlus3(aplus);
    setPlus4(aplus);
  };
  const quesHandler3 = () => {
    setQues3(!ques3);
    setQues2(false);
    setQues1(false);
    setQues4(false);
    setPlus3(plus3 === aplus ? ic_plus : aplus);
    setPlus2(aplus);
    setPlus1(aplus);
    setPlus4(aplus);
  };
  const quesHandler4 = () => {
    setQues4(!ques4);
    setQues2(false);
    setQues3(false);
    setQues1(false);
    setPlus4(plus4 === aplus ? ic_plus : aplus);
    setPlus2(aplus);
    setPlus3(aplus);
    setPlus1(aplus);
  };
  return (
    <div className="mx-[34px] xl:mx-[300px]  mt-[260px] md:mt-[280px]">
      <div className="border-b-2 border-darkGrey pb-[10px] md:pb-[90px]">
        <div className="flex items-end justify-start">
          <p className="popinsFont italic text-[40px]  2xl:text-[60px] font-[900]">
            FAQ
          </p>
          <div className="w-[10px] h-[10px] 2xl:w-[15px] 2xl:h-[15px] rounded-full bg-red mb-[53px] 2xl:mb-[78px]"></div>
        </div>
      </div>
      <div>
        <div className="border-b-2 border-darkGrey pb-[10px] md:pb-[50px]">
          <div className="mt-[10px] xl:mt-[50px] 2xl:mx-[20px]">
            <div className="flex items-center justify-between">
              <div className="md:flex items-center justify-between md:space-x-5">
                <p className="popinsFont text-[18px] font-light  2xl:text-[24px] italic text-red mb-0">
                  Q1
                </p>
                <p className="text-[18px] md:text-[32px] w-[299px] md:w-[522px] 2xl:w-[900px]  popinsFont 2xl:text-[32px] 2xl:font-normal font-light  mb-0 ">
                  Question about this company and?
                </p>
              </div>
              <div>
                <img
                  src={plus1}
                  alt="plus"
                  className=" w-[20px] h-[20px] md:w-[30px] md:h-[30px] mb-[50px] md:mb-0"
                  onClick={quesHandler1}
                />
              </div>
            </div>
            {/* qes */}
            {ques1 ? (
              <div>
                <div className="ml-[-3px] mr-[47px] pb-[40px] md:mx-[50px] ">
                  <p className="md:mt-[71px] mt-[40px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame belongs to those who fail in their
                    duty through weakness of will, which is the same as saying
                    through shrinking from toil and pain.
                  </p>
                  <p className="mt-[20px] md:mt-[42px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    These cases are perfectly simple and easy to distinguish. In
                    a free hour, when our power of choice is untrammelled and
                    when nothing prevents our being able to do what we like
                    best, every pleasure is to be welcomed and every pain
                    avoided. But in certain circumstances and owing to the
                    claims of duty or the obligations of business it will
                    frequently occur that pleasures have to be repudiated and
                    annoyances accepted.{" "}
                  </p>
                  <p className="mt-[20px] md:mt-[42px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    The wise man therefore always holds in these matters to this
                    principle of selection: he rejects pleasures to secure other
                    greater pleasures, or else he endures pains to avoid worse
                    pains.
                  </p>
                </div>
              </div>
            ) : (
              <></>
            )}
            {/* end ques */}
          </div>
        </div>
        <div className="border-b-2 border-darkGrey pb-[10px] md:pb-[50px]">
          <div className="mt-[10px] 2xl:mt-[50px] 2xl:mx-[20px]">
            <div className="flex items-center justify-between">
              <div className="md:flex items-center justify-between md:space-x-5">
                <p className="popinsFont text-[18px] font-light  2xl:text-[24px] italic text-red mb-0">
                  Q2
                </p>
                <p className="text-[18px] md:text-[32px] w-[299px] md:w-[522px] 2xl:w-[900px]  popinsFont 2xl:text-[32px] 2xl:font-normal font-light  mb-0 ">
                  Question about this company and?
                </p>
              </div>
              <div>
                <img
                  src={plus2}
                  alt="plus"
                  className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] mb-[50px] md:mb-0 "
                  onClick={quesHandler2}
                />
              </div>
            </div>
            {/* qes */}
            {ques2 ? (
              <div>
                <div className="ml-[-3px] mr-[47px]  pb-[40px]   md:mx-[50px]">
                  <p className="md:mt-[71px] mt-[40px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame belongs to those who fail in their
                    duty through weakness of will, which is the same as saying
                    through shrinking from toil and pain.
                  </p>
                  <p className="mt-[20px] md:mt-[42px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    These cases are perfectly simple and easy to distinguish. In
                    a free hour, when our power of choice is untrammelled and
                    when nothing prevents our being able to do what we like
                    best, every pleasure is to be welcomed and every pain
                    avoided. But in certain circumstances and owing to the
                    claims of duty or the obligations of business it will
                    frequently occur that pleasures have to be repudiated and
                    annoyances accepted.{" "}
                  </p>
                  <p className="mt-[20px] md:mt-[42px]text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    The wise man therefore always holds in these matters to this
                    principle of selection: he rejects pleasures to secure other
                    greater pleasures, or else he endures pains to avoid worse
                    pains.
                  </p>
                </div>
              </div>
            ) : (
              <></>
            )}
            {/* end ques */}
          </div>
        </div>
        <div className="border-b-2 border-darkGrey pb-[10px] md:pb-[50px]">
          <div className="mt-[10px] xl:mt-[50px] 2xl:mx-[20px]">
            <div className="flex items-center justify-between">
              <div className="md:flex items-center justify-between md:space-x-5">
                <p className="popinsFont text-[18px] font-light  2xl:text-[24px] italic text-red mb-0">
                  Q3
                </p>
                <p className="text-[18px] md:text-[32px] w-[299px] md:w-[522px] 2xl:w-[900px]  popinsFont 2xl:text-[32px] 2xl:font-normal font-light  mb-0 ">
                  Question about this company and?
                </p>
              </div>
              <div>
                <img
                  src={plus3}
                  alt="plus"
                  className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] mb-[50px] md:mb-0 "
                  onClick={quesHandler3}
                />
              </div>
            </div>
            {/* qes */}
            {ques3 ? (
              <div>
                <div className="ml-[-3px] mr-[47px] pb-[40px]   md:mx-[50px]">
                  <p className="md:mt-[71px] mt-[40px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame belongs to those who fail in their
                    duty through weakness of will, which is the same as saying
                    through shrinking from toil and pain.
                  </p>
                  <p className="mt-[20px] md:mt-[42px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    These cases are perfectly simple and easy to distinguish. In
                    a free hour, when our power of choice is untrammelled and
                    when nothing prevents our being able to do what we like
                    best, every pleasure is to be welcomed and every pain
                    avoided. But in certain circumstances and owing to the
                    claims of duty or the obligations of business it will
                    frequently occur that pleasures have to be repudiated and
                    annoyances accepted.{" "}
                  </p>
                  <p className="mt-[20px] md:mt-[42px]text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    The wise man therefore always holds in these matters to this
                    principle of selection: he rejects pleasures to secure other
                    greater pleasures, or else he endures pains to avoid worse
                    pains.
                  </p>
                </div>
              </div>
            ) : (
              <></>
            )}
            {/* end ques */}
          </div>
        </div>
        <div className="border-b-2 border-darkGrey pb-[10px] md:pb-[50px]">
          <div className="mt-[10px] xl:mt-[50px] 2xl:mx-[20px]">
            <div className="flex items-center justify-between">
              <div className="md:flex items-center justify-between md:space-x-5">
                <p className="popinsFont text-[18px] font-light  2xl:text-[24px] italic text-red mb-0">
                  Q4
                </p>
                <p className="text-[18px] md:text-[32px] w-[299px] md:w-[522px] 2xl:w-[900px]  popinsFont 2xl:text-[32px] 2xl:font-normal font-light  mb-0  ">
                  Question about this company and?
                </p>
              </div>
              <div>
                <img
                  src={plus4}
                  alt="plus"
                  className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] mb-[50px] md:mb-0 "
                  onClick={quesHandler4}
                />
              </div>
            </div>
            {/* qes */}
            {ques4 ? (
              <div>
                <div className="ml-[-3px] mr-[47px] pb-[40px]  md:mx-[50px]">
                  <p className="md:mt-[71px] mt-[40px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame belongs to those who fail in their
                    duty through weakness of will, which is the same as saying
                    through shrinking from toil and pain.
                  </p>
                  <p className="mt-[20px] md:mt-[42px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    These cases are perfectly simple and easy to distinguish. In
                    a free hour, when our power of choice is untrammelled and
                    when nothing prevents our being able to do what we like
                    best, every pleasure is to be welcomed and every pain
                    avoided. But in certain circumstances and owing to the
                    claims of duty or the obligations of business it will
                    frequently occur that pleasures have to be repudiated and
                    annoyances accepted.{" "}
                  </p>
                  <p className="mt-[20px] md:mt-[42px] text-[13px] md:text-[20px] popinsFont font-light 2xl:font-normal">
                    The wise man therefore always holds in these matters to this
                    principle of selection: he rejects pleasures to secure other
                    greater pleasures, or else he endures pains to avoid worse
                    pains.
                  </p>
                </div>
              </div>
            ) : (
              <></>
            )}
            {/* end ques */}
          </div>
        </div>
      </div>
    </div>
  );
}
