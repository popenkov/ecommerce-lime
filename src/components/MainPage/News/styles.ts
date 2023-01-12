import styled, { css } from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const Container = styled.section`
  padding: 30px 20px 44px;
  padding-right: 0;
  background-color: ${({ theme }) => theme.color.white};

  border-radius: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 18px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Title = styled.h2<{ color?: string }>`
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  position: relative;
  ${({ color }) =>
    color &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 100%;
        height: 4px;
        border-radius: 10px;
        background-color: ${color};
      }
    `};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Link = styled.a`
  ${flexAlignCenter};
  margin-top: 23px;
  border-radius: 5px;
  ${font({ size: "14", lineHeight: "12", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;

  & svg {
    margin-left: 16px;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  gap: 13px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  Container,
  Header,
  Title,
  Link,
  ItemsContainer,
};
