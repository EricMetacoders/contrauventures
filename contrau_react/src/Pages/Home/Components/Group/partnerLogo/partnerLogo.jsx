import { Logo, Wrapper, BackgroundLogo } from "./partnerLogoStyled";

export const PartnerLogo = ({ logoUrl, logoName, wrapperWidth, wrapperHeight, marginLeft }) => {
  return (
    <Wrapper className={`${wrapperWidth} ${wrapperHeight} ${marginLeft}`}>
      <BackgroundLogo className="w-full h-full">
        <Logo
          src={logoUrl}
          alt={logoName}
          className="w-[50%] h-[50%] object-contain opacity-80 hover:opacity-100"
        />
      </BackgroundLogo>
    </Wrapper>
  )
} 