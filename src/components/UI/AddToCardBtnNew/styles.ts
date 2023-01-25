import styled, { css } from "styled-components";

import { box, flexAlignCenter, flexCenter, font } from "@src/styles/mixins";

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
`;

const Button = styled.button<{ isAdded: boolean; isHovered?: boolean; isSmall?: boolean; isLight?: boolean }>`
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

  ${({ isSmall }) =>
    isSmall &&
    css`
      ${box(30)};
      ${flexCenter}
      & ${TextContainer} {
        display: none;
      }
      & ${IconContainer} {
        margin: 0;
      }
    `};
  ${({ isSmall, isAdded }) =>
    isSmall &&
    isAdded &&
    css`
      background: ${({ theme }) => theme.color.white};
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

      & ${TextContainer} {
        display: none;
      }
      & ${IconContainer} {
        margin: 0;
      }
    `};

  ${({ isLight }) =>
    isLight &&
    css`
      ${flexAlignCenter}
      width: auto;
      display: inline-block;
      background: ${({ theme }) => theme.color.white};

      & ${TextContainer} {
      }
      & ${IconContainer} {
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
