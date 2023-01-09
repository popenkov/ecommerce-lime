import styled from "styled-components";

import { flexAlignCenter } from "@src/styles/mixins";

const HeaderTop = styled.div`
  background-color: ${({ theme }) => theme.color.greyBg};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-color: ${({ theme }) => theme.color.white};
    height: 0px;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  ${flexAlignCenter};
  justify-content: space-between;

  max-width: 1280px;
  padding: 13px 25px;

  margin: 0 auto;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = { HeaderTop, HeaderContainer };
