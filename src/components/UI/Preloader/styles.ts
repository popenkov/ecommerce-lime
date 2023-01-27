import styled, { css } from "styled-components";

import { box } from "@src/styles/mixins";

const Preloader = styled.div`
  display: block;
  position: fixed;
  inset: 0;
  z-index: 7;
  overflow: hidden;
  background: ${({ theme }) => theme.color.white};
  padding: 25px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background: ${({ theme }) => theme.color.white};
  }
`;
const LogoContainer = styled.div<{ opacity: number }>`
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  ${({ opacity }) =>
    opacity &&
    css`
      opacity: ${opacity};
    `};

  & svg {
    ${box(300)}
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & svg {
      ${box(110)}
    }
  }
`;
export const Styled = {
  Preloader,
  LogoContainer,
};
