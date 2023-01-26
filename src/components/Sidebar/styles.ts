import styled from "styled-components";

import { flexColumnCenter } from "@src/styles/mixins";

const Sidebar = styled.aside`
  ${flexColumnCenter};
  justify-content: flex-start;
  position: sticky;
  z-index: 5;
  width: 321px;
  height: calc(100vh - 116px);

  top: 116px;
  right: 0;
  background-color: ${({ theme }) => theme.color.greyLightBg};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 200px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
    height: calc(100vh - 59px);
    top: 59px;
  }
`;

export const Styled = { Sidebar };
