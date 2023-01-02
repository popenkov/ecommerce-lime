import { box, flexCenter } from '@src/styles/mixins';
import styled from 'styled-components';

const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  ${box(193)};
`;

const Shadow = styled.div`
  position: absolute;
  top: -90px;
  left: -34px;
  ${box(193)};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  clip-path: circle(50% at 30% 10%);
  ${box(193)};
  position: relative;
  z-index: 2;

  display: flex;

  background-color: ${({ theme }) => theme.color.white};

  & svg {
    margin-top: 14px;
    margin-left: 18px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = { LogoContainer, Logo, Shadow };
