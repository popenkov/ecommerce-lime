import { flexCenter, flexColumnCenter, font } from "@src/styles/mixins";
import styled from "styled-components";

const Sidebar = styled.aside`
  ${flexColumnCenter};
  position: sticky;
  width: 200px;
  height: calc(100vh - 116px);
  top: 116px;
  right: 0;
  background-color: ${({ theme }) => theme.color.greyLightBg};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
    height: calc(100vh - 59px);
    top: 59px;
  }
`;

export const Styled = { Sidebar };
