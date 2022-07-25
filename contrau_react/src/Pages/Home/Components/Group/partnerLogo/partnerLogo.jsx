import { Logo, Wrapper, BackgroundLogo, LinkLogo } from "./partnerLogoStyled";

export const PartnerLogo = ({
  logoUrl,
  logoName,
  wrapperWidth,
  wrapperHeight,
  paddingLeft,
  linkWebsite,
}) => {
  return (
    <Wrapper>
      <div className="pl-[90px]">
        <LinkLogo
          {...{ wrapperWidth, wrapperHeight, paddingLeft, cursor: linkWebsite ? "pointer" : "unset" }}
          href={linkWebsite || undefined}
          target={linkWebsite ? "_blank" : undefined}
        >
          <BackgroundLogo>
            <Logo src={logoUrl} alt={logoName} />
          </BackgroundLogo>
        </LinkLogo>
      </div>
    </Wrapper>
  );
};
