import styled, { keyframes } from "styled-components";

export const WrapperGroupCarousel = styled.div`
  width: 100%;
  height: 120px;
	overflow:hidden;
	position: relative;

  &:before,
	&:after {
		@include white-gradient;
		content: "";
		height: 120px;
		position: absolute;
		width: 200px;
		z-index: 2;
	}
	
	&:after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}
`

const groupCarouselLeftToRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
`

const groupCarouselRightToLeft = keyframes`
  0% {
    transform: translateX(calc(-250px * 7));
  }
  100% {
    transform: translateX(0);
  }
`


export const GroupCarouselAnimation = styled.div`
  animation:
    ${
      (props) => props.rightToLeft
                  ? groupCarouselRightToLeft
                  : groupCarouselLeftToRight
    }
    40s 
    linear
    infinite;
    width: calc(250px * 14);
    display: flex;
`;