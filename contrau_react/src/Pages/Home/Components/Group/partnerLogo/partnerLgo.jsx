import { Logo, Wrapper, BackgroundLogo } from "./partnerLogoStyled";

export const PartnerLogo = ({ logoUrl, logoName, wrapperWidth, wrapperHeight, marginLeft, }) => {
  return (
    <Wrapper className={`${wrapperWidth} ${wrapperHeight} ${marginLeft}`}>
      <BackgroundLogo className="w-full h-full"></BackgroundLogo>
      <Logo
        src={logoUrl}
        alt={logoName}
        className="w-full h-full object-contain opacity-80 hover:opacity-100"
      />
    </Wrapper>
  )
} 