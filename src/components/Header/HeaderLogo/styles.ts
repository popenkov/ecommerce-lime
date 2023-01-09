import styled from "styled-components";

import { box, flexCenter } from "@src/styles/mixins";

const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  ${box(193)};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    left: 50%;
    top: -205%;
    transform: translateX(-50%);
    ${box(135)};
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: -90px;
  left: -34px;
  ${box(193)};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    ${box(135)};
  }
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
    align-items: center;
    justify-content: center;
    clip-path: none;
    ${box(135)};
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    & svg {
      margin-top: 21px;
      margin-left: 13px;
    }
  }
`;

export const Styled = { LogoContainer, Logo, Shadow };
