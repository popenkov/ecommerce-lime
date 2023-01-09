import styled from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const Button = styled.button`
  ${flexAlignCenter};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const PercentIcon = styled.span`
  margin-right: 9px;
  padding: 10px 14px;
  background-color: ${({ theme }) => theme.color.yellow};
  ${font({ size: "20", lineHeight: "24", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4px 6px;
  }
`;

const PercentText = styled.span`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ShevronIcon = styled.span`
  margin-left: 10px;
  & svg {
    width: 12px;
    height: 16px;
    transform: rotateZ(-90deg);
  }
  & path {
    fill: ${({ theme }) => theme.color.yellow};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Styled = { Button, PercentIcon, PercentText, ShevronIcon };
