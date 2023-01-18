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
    padding: 0px 15px 16px;
    margin-bottom: 21px;
    box-shadow: unset;
  }
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 28px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 19px;
  }
`;

const Title = styled.h2<{ color?: string; hideLink?: boolean }>`
  position: relative;
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};

  ${({ hideLink }) =>
    hideLink &&
    css`
      @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
      }
    `};

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

        @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          height: 2px;
          bottom: -8px;
        }
      }
    `};
`;

const Link = styled.a<{ hideLink?: boolean }>`
  ${flexAlignCenter};
  margin-top: 15px;
  border-radius: 5px;
  ${font({ size: "14", lineHeight: "12", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 16px;
    ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};

    ${({ hideLink }) =>
      hideLink &&
      css`
        display: none;
      `};
  }

  & svg {
    margin-left: 16px;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-left: 6px;
    }
  }
`;

const ItemsContainer = styled.div`
  position: relative;
  display: flex;
  gap: 13px;

  & .swiper {
    width: 100%;
  }
  & .swiper-slide {
    width: 142px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 115px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Shadow = styled.div`
  position: absolute;
  z-index: 1;
  right: -1px;
  top: 0;
  width: 142px;
  height: 100%;
  background: linear-gradient(270deg, #ffffff 27.68%, rgba(255, 255, 255, 0) 100%);
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Styled = {
  Container,
  Header,
  Title,
  Link,
  ItemsContainer,
  Shadow,
};
