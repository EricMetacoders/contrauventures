import styled, { keyframes } from "styled-components";

export const WrapperGroupCarousel = styled.div`
  width: 100%;
`

const groupCarouselLeftToRight = (widthItemCarousel, numberItemsCarousel) => keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-${widthItemCarousel}px * (${numberItemsCarousel})));
  }
`

const groupCarouselRightToLeft = (widthItemCarousel, numberItemsCarousel) => keyframes`
  0% {
    transform: translateX(calc(-${widthItemCarousel}px * (${numberItemsCarousel})));
  }
  100% {
    transform: translateX(0);
  }
`


export const GroupCarousel = styled.div`
  animation:
    ${
      (props) => props.rightToLeft
                  ? groupCarouselRightToLeft(props.widthItemCarousel, props.numberItemsCarousel)
                  : groupCarouselLeftToRight(props.widthItemCarousel, props.numberItemsCarousel)
    }
    9s 
    linear
    infinite;
  width: calc(${(props) => props.widthItemCarousel}px * ${(props) => props.numberItemsCarousel} * 2);
`