import PerfectScrollbar from "react-perfect-scrollbar";
import styled, { css } from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const Container = styled.section`
  padding: 30px 20px 44px;
  padding-right: 0;
  background-color: ${({ theme }) => theme.color.white};

  border-radius: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 17px 13px 36px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 18px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 21px;
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

        @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          height: 2px;
          bottom: -4px;
        }
      }
    `};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  }
`;

const Link = styled.a`
  ${flexAlignCenter};
  margin-top: 23px;
  border-radius: 5px;
  ${font({ size: "14", lineHeight: "12", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }

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

const ItemsMobileContainer = styled(PerfectScrollbar)`
  display: flex;
  gap: 9px;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-bottom: 20px;

  & .ps__rail-x {
    bottom: 0px;
    height: 3px;
    background: #c7c7c7;
    opacity: 0.2;
    border-radius: 5px;
  }

  & .ps__thumb-x {
    cursor: pointer;
    bottom: 0;
    width: 40px;
    height: 3px;
    background: ${({ theme }) => theme.color.black};
    opacity: 0.3;

    border-radius: 5px;
  }

  & .ps__rail-x:hover {
    height: 3px;
    background: #c7c7c7;
    opacity: 0.2;
    border-radius: 5px;
  }
  & .ps__rail-x:hover > .ps__thumb-x {
    width: 40px;
    height: 3px;
    background: ${({ theme }) => theme.color.white};
  }
`;

export const Styled = {
  Container,
  Header,
  Title,
  Link,
  ItemsContainer,
  ItemsMobileContainer,
};
