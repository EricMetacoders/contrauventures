import { Logo, Wrapper, BackgroundLogo, LinkLogo } from "./partnerLogoStyled";

export const PartnerLogo = ({ logoUrl, logoName, wrapperWidth, wrapperHeight, paddingLeft, linkWebsite }) => {
  return (
    <Wrapper>
      <div className="pl-[90px]">
        {
          linkWebsite
          ?
          <LinkLogo
            {...{ wrapperWidth, wrapperHeight, paddingLeft }}
            href={linkWebsite}
            target={linkWebsite}
          >
            <BackgroundLogo >
              <Logo
                src={logoUrl}
                alt={logoName}
              />
            </BackgroundLogo>
          </LinkLogo>
          :
          <LinkLogo {...{ wrapperWidth, wrapperHeight, paddingLeft }}>
            <BackgroundLogo >
              <Logo
                src={logoUrl}
                alt={logoName}
              />
            </BackgroundLogo>
          </LinkLogo>
        }
      </div>
    </Wrapper>
  )
} 