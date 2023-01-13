import styled from "styled-components";

import { flexAlignCenter } from "@src/styles/mixins";

const HeaderBottom = styled.div`
  background-color: ${({ theme }) => theme.color.white};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  ${flexAlignCenter};
  box-sizing: border-box;
  max-width: 1280px;
  padding: 13px 25px;
  padding-left: 158px;

  margin: 0 auto;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 7px 13px 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const Styled = { HeaderBottom, HeaderContainer };
