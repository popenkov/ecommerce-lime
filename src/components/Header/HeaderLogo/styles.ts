import styled from "styled-components";

import { box, flexCenter } from "@src/styles/mixins";

const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  ${box(193)};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: 50%;
    top: -205%;
    transform: translateX(-50%);
    ${box(135)};
  }
`;

const Shadow = styled.div`
  //   position: absolute;
  //   top: -90px;
  //   left: -34px;
  //   ${box(193)};
  //   border-radius: 50%;
  //   background-color: ${({ theme }) => theme.color.white};
  //   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  //   @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  //     ${box(135)};
  //   }
`;

const Logo = styled.div`
  ${box(193)};
  ${flexCenter};
  position: absolute;
  box-sizing: border-box;
  left: -35px;
  bottom: -74px;
  z-index: 2;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  & svg {
    margin-top: 59px;
    margin-left: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${box(135)};

    bottom: -57px;
    left: 50%;
    transform: translateX(-50%);

    & svg {
      margin-top: 21px;
      margin-left: 13px;
    }
  }
`;

export const Styled = { LogoContainer, Logo, Shadow };
