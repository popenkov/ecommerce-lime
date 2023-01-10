import styled from "styled-components";

import { box, flexCenter } from "@src/styles/mixins";

const Logo = styled.div`
  ${box(193)};
  ${flexCenter};
  position: absolute;
  box-sizing: border-box;
  left: -35px;
  bottom: -74px;
  z-index: 3;

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

export const Styled = { Logo };
