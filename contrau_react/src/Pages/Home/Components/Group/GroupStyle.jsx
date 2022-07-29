import styled, { keyframes } from "styled-components";

export const WrapperGroupCarousel = styled.div`
  width: 100%;
  height: 180px;
	overflow:hidden;
	position: relative;

  &:before,
	&:after {
		@include white-gradient;
		content: "";
		height: 180px;
		position: absolute;
		width: 0px;
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

  @media (max-width: 640px) {
    height: 80px;
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
    width: 200%;
    display: flex;
`;