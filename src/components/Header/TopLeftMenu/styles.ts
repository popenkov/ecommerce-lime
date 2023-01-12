import styled, { css } from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const Container = styled.div`
  ${flexAlignCenter};
  padding-left: 169px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Link = styled.a<{ isPhone?: boolean }>`
  ${flexAlignCenter};
  margin-right: 64px;
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.white};

  ${({ isPhone }) =>
    isPhone &&
    css`
      ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};
    `};

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const IconContainer = styled.span`
  margin-right: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = { Container, Link, IconContainer };
