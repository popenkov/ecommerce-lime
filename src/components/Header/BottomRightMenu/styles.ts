import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { flexAlignCenter, font } from "@src/styles/mixins";

const Container = styled.div`
  ${flexAlignCenter};
  margin-left: 34px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: auto;
  }
`;

const IconContainer = styled.span`
  margin-right: 11px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & svg {
      width: 15px;
      height: 15px;
    }
  }
`;

const Link = styled(RouterLink)<{ isUnderlined?: boolean }>`
  position: relative;
  cursor: pointer;
  ${flexAlignCenter};
  margin-right: 20px;

  ${({ isUnderlined }) =>
    isUnderlined &&
    css`
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
    margin-right: 15px;
  }

  &:last-child {
    margin-right: 0;
  }

  /* &:not(:last-child) ${IconContainer} {
    margin-right: 10px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-right: 0px;
    }
  } */
`;

const Text = styled.span`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Styled = { Container, Link, IconContainer, Text };
