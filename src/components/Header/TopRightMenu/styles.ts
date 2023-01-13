import styled, { css } from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";
import { Link as RouterLink } from "react-router-dom";

const Container = styled.div`
  ${flexAlignCenter};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Link = styled(RouterLink)<{ isActive?: boolean }>`
  ${flexAlignCenter};
  margin-left: 37px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.white};

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.color.green};
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const IconContainer = styled.span`
  margin-right: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = { Container, Link, IconContainer };
