import { Link as RouterLink } from "react-router-dom";
import styled, { css } from "styled-components";

import { box, flexAlignCenter, flexCenter, font } from "@src/styles/mixins";

const Container = styled.div`
  ${flexAlignCenter};
  margin-left: 34px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: auto;
  }
`;

const IconContainer = styled.span`
  position: relative;
  margin-right: 11px;
  & svg path {
    fill: ${({ theme }) => theme.color.greyIcon};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & svg {
      width: 15px;
      height: 15px;
    }
  }
`;

const MobileCartCounter = styled.span`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${box(14)};
    ${flexCenter};
    position: absolute;
    top: -4px;
    right: -8px;
    box-sizing: border-box;

    padding: 3px;
    background: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.green};
    border-radius: 50%;

    ${font({ size: "8", lineHeight: "10", fontWeight: "400" })};
    color: ${({ theme }) => theme.color.black};
  }
`;

const Link = styled(RouterLink)<{ isUnderlined?: boolean; isCartPage: boolean }>`
  position: relative;
  cursor: pointer;
  ${flexAlignCenter};
  margin-right: 20px;
  text-decoration: none;

  ${({ isUnderlined }) =>
    isUnderlined &&
    css`
      & ${IconContainer} {
        & svg path {
          fill: ${({ theme }) => theme.color.green};
        }
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -23px;
        width: 100%;
        height: 3px;
        background-color: ${({ theme }) => theme.color.green};

        @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          height: 0;
        }
      }
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 0;
    box-sizing: border-box;
    ${box(44)};
    ${flexCenter};
    border-radius: 5px;

    & ${IconContainer} {
      margin: 0;
    }

    ${({ isCartPage }) =>
      isCartPage &&
      css`
        background-color: ${({ theme }) => theme.color.green};
        border-radius: 5px;
        & ${IconContainer} {
          & svg path {
            fill: ${({ theme }) => theme.color.black};
          }
        }
      `};
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Text = styled.span`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Styled = { Container, Link, IconContainer, Text, MobileCartCounter };
