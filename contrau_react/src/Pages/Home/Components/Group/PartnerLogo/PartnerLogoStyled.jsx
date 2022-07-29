import styled from "styled-components";

export const Wrapper = styled.div`
  height: 180px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    height: 80px;
    width: 100px;
  }
`;

export const LinkLogo = styled.a`
  width: ${(props) => props.wrapperWidth};
  height: ${(props) => props.wrapperHeight};
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => props.cursor ? props.cursor : "pointer"};
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
  max-width: 40%;
  max-height: 40%;
  object-fit: contain;
`;
