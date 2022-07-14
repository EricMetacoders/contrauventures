import { Logo, Wrapper, WrapperLogo } from "./partnerLogoStyled";

export const PartnerLogo = ({ logoUrl, logoName, key, wrapperWidth, wrapperHeight, marginLeft, }) => {
  const wrapperClassName = `w-[${wrapperWidth}px] h-[${wrapperHeight}px] ml-[${marginLeft}px]`
  return (
    <Wrapper className={wrapperClassName}>
      <WrapperLogo className="w-full h-full"></WrapperLogo>
      <Logo
        src={logoUrl}
        alt={logoName}
        className="w-full h-full object-contain opacity-80 hover:opacity-100"
        key={key}
      />
    </Wrapper>
  )
} 