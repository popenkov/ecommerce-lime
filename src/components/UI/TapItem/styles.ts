import { font } from "@src/styles/mixins";
import styled from "styled-components";

const Tap = styled.div`
  background-color: ${({ theme }) => theme.color.greyLightBg};
  border-radius: 5px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const TapText = styled.span`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  Tap,
  TapText,
};
