import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

const PulseAnimation = keyframes`${pulse}`;

const PulseDiv = styled.div`
  animation: 1s ${PulseAnimation} infinite;
`;
export default function Components() {
  return (
    <PulseDiv>
      <p className="text-[50px] popinsFont">Loading...</p>
    </PulseDiv>
  );
}
