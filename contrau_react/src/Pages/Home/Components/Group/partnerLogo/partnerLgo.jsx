import { Logo, Wrapper, WrapperLogo } from "./partnerLogoStyled";

export const PartnerLogo = ({ logoUrl, logoName, wrapperWidth, wrapperHeight, marginLeft, }) => {
  return (
    <Wrapper className={`${wrapperWidth} ${wrapperHeight} ${marginLeft}`}>
      <WrapperLogo className="w-full h-full"></WrapperLogo>
      <Logo
        src={logoUrl}
        alt={logoName}
        className="w-full h-full object-contain opacity-80 hover:opacity-100"
      />
    </Wrapper>
  )
} 