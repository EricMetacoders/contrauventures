import { Logo, Wrapper, BackgroundLogo, WrapperLogo, LinkLogo } from "./partnerLogoStyled";

export const PartnerLogo = ({ logoUrl, logoName, wrapperWidth, wrapperHeight, paddingLeft, linkWebsite }) => {
  return (
    <Wrapper>
      <WrapperLogo paddingLeft={paddingLeft}>
        <BackgroundLogo {...{ wrapperWidth, wrapperHeight }} >
          <LinkLogo href={linkWebsite} target="_blank">
            <Logo
              src={logoUrl}
              alt={logoName}
            />
          </LinkLogo>
        </BackgroundLogo>
      </WrapperLogo>
    </Wrapper>
  )
} 