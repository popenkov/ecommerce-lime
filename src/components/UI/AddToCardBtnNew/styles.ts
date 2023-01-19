import styled, { css } from "styled-components";

import { box, flexAlignCenter, font } from "@src/styles/mixins";

const IconContainer = styled.span`
  margin-right: 13px;

  & svg path {
    fill: ${({ theme }) => theme.color.black};
  }
`;

const TextContainer = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};

  color: ${({ theme }) => theme.color.black};

  box-sizing: border-box;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 27px;
    padding: 6px 11px;
    ${font({ size: "10", lineHeight: "12", fontWeight: "700" })};
    background-color: ${({ theme }) => theme.color.green};
  }
`;

const Button = styled.button<{ isAdded: boolean; isHovered: boolean }>`
  width: 100%;
  height: 36px;
  padding: 7px;
  box-sizing: border-box;
  ${flexAlignCenter};
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.green};
  border-radius: 5px;

  ${({ isHovered }) =>
    isHovered &&
    css`
      border: 1px solid ${({ theme }) => theme.color.green};
      background-color: ${({ theme }) => theme.color.white};

      & ${IconContainer} {
        & svg path {
          fill: ${({ theme }) => theme.color.green};
        }
      }
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  Button,
  IconContainer,
  TextContainer,
};
