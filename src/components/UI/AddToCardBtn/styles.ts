import styled, { css } from "styled-components";

import { box, font } from "@src/styles/mixins";

const Button = styled.button<{ isAdded: boolean }>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  ${font({ size: "10", lineHeight: "12", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};

  ${({ isAdded }) =>
    isAdded &&
    css`
      border: 1px solid ${({ theme }) => theme.color.green};
      border-radius: 5px;
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const PlusContainer = styled.span<{ isHovered: boolean; isAdded: boolean }>`
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

  ${({ isAdded }) =>
    isAdded &&
    css`
      background-color: ${({ theme }) => theme.color.white};
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const TextContainer = styled.span<{ isHovered: boolean; isAdded: boolean }>`
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

  ${({ isAdded, isHovered }) =>
    isAdded &&
    isHovered &&
    css`
      background-color: ${({ theme }) => theme.color.white};
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  Button,
  PlusContainer,
  TextContainer,
};
