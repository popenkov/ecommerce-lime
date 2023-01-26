import styled from "styled-components";

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
    display: block;
    position: fixed;
    inset: 0;
    z-index: 2;
    overflow: hidden;
    background: ${({ theme }) => theme.color.black};
    padding: 25px;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

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
