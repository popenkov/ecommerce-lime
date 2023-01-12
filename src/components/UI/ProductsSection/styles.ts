import styled, { css } from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const Container = styled.section`
  position: relative;
  padding: 0px 20px 16px;
  margin-bottom: 46px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 28px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
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
        bottom: -12px;
        left: 0;
        width: 100%;
        height: 4px;
        border-radius: 10px;
        background: ${color};
      }
    `};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Link = styled.a`
  ${flexAlignCenter};
  margin-top: 15px;
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

  & .swiper {
    width: 100%;
  }
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
