import styled, { keyframes, css } from "styled-components";

import { box, flexCenter } from "@src/styles/mixins";

const fillUp = keyframes`
    0% {
        transform: translate(0, 135px);
    }
    100% {
        transform: translate(0, -135px);
    }
`;

const Loader = styled.div`
  ${flexCenter};
  height: 500px;
  width: 100%;

  background-color: ${({ theme }) => theme.color.white};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background: ${({ theme }) => theme.color.white};
  }
`;
const LogoContainer = styled.div`
  position: relative;

  overflow: hidden;
  width: 202px;
  height: 133px;
  margin: 0 auto;

  background-color: #eee;

  transform: scale(1);

  & svg {
    position: absolute;
    top: -1px;
    left: -1px;
    z-index: 1;

    width: 205px;
    height: 135px;

    fill: ${({ theme }) => theme.color.white};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & svg {
    }
  }
`;

const FillContainer = styled.div`
  width: 205px;
  height: 135px;

  background-color: #7fbc5b;

  animation: ${fillUp} 1.5s ease-in-out infinite;
`;

export const Styled = {
  Loader,
  LogoContainer,
  FillContainer,
};
