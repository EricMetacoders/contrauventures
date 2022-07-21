import styled from "styled-components";

export const Wrapper = styled.div`
  height: 180px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkLogo = styled.a`
  width: ${(props) => props.wrapperWidth};
  height: ${(props) => props.wrapperHeight};
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BackgroundLogo = styled.div`
  background-color: #1c1c1c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.img`
  z-index: 999;
  max-width: 50%;
  max-height: 50%;
  object-fit: contain;
`;
