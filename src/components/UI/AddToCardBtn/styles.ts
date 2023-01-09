import styled, { css } from "styled-components";

import { box, font } from "@src/styles/mixins";

const Button = styled.button`
  height: 34px;
  display: flex;
  justify-content: center;
  ${font({ size: "10", lineHeight: "12", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const PlusContainer = styled.span<{ isHovered: boolean }>`
  ${box(34)};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${font({ size: "24", lineHeight: "29", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.green};
  border-radius: 5px;
  ${({ isHovered }) =>
    isHovered &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const TextContainer = styled.span<{ isHovered: boolean }>`
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  height: 34px;
  padding: 10px;
  box-sizing: border-box;

  ${({ isHovered }) =>
    isHovered &&
    css`
      background-color: ${({ theme }) => theme.color.green};
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = {
  Button,
  PlusContainer,
  TextContainer,
};
