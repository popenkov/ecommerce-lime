import styled, { css } from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const Container = styled.div`
  position: relative;
  padding: 30px 20px;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 28px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Title = styled.h2<{ color?: string }>`
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
        background: ${color};
      }
    `};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Link = styled.a`
  ${flexAlignCenter};
  padding: 10px 13px 10px 23px;
  border-radius: 5px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;

  & svg {
    margin-left: 24px;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  gap: 13px;

  & .swiper {
    width: 100%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = {
  Container,
  Header,
  Title,
  Link,
  ItemsContainer,
};
