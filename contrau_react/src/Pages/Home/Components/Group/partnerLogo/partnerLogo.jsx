import { Logo, Wrapper, BackgroundLogo, LinkLogo } from "./partnerLogoStyled";

export const PartnerLogo = ({ logoUrl, logoName, wrapperWidth, wrapperHeight, paddingLeft, linkWebsite }) => {
  return (
    <Wrapper>
      <div className="pl-[90px]">
        <LinkLogo {...{ wrapperWidth, wrapperHeight, paddingLeft }} href={linkWebsite} target="_blank">
          <BackgroundLogo >
            <Logo
              src={logoUrl}
              alt={logoName}
            />
          </BackgroundLogo>
        </LinkLogo>
      </div>
    </Wrapper>
  )
} 