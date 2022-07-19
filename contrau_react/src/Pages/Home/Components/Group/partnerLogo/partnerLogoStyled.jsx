import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
  height: 100px;
  width: 250px;
`;

export const WrapperLogo = styled.div`
  padding-left: ${props => props.paddingLeft};
`;

export const BackgroundLogo = styled.div`
  background-color: #1c1c1c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.wrapperWidth};
  height: ${props => props.wrapperHeight};
`;

export const LinkLogo = styled.a`
  width: 50%;
  height: 50%;
  object-fit: contain;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export const Logo = styled.img`
  z-index: 999;
  width: 100%
  height: 100%;
  object-fit: contain;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;