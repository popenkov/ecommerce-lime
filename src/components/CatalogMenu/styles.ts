import { font } from "@src/styles/mixins";
import styled, { css } from "styled-components";

const CatalogBackground = styled.div`
  position: fixed;
  z-index: 2;
  top: 116px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.popupBackground};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 59px;
  }
`;

const Catalog = styled.div<{ isSubcategoryShown?: boolean }>`
  width: 302px;
  height: calc(100vh - 116px);

  position: absolute;

  left: 0;
  background-color: ${({ theme }) => theme.color.white};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: calc(100vh - 39px);
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 100%;

    ${({ isSubcategoryShown }) =>
      isSubcategoryShown &&
      css`
        width: 49px;
      `};
  }
`;

const CatalogTitle = styled.h3<{ isSubcategoryShown?: boolean }>`
  padding: 16px 18px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  text-align: right;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 38px 18px 14px;
    text-align: left;

    ${({ isSubcategoryShown }) =>
      isSubcategoryShown &&
      css`
        color: ${({ theme }) => theme.color.white};
      `};
  }
`;

const CatalogList = styled.ul`
  height: 88%;
  padding: 0;
  margin: 0;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: calc(100vh - 148px);
  }
`;

export const Styled = { CatalogBackground, Catalog, CatalogTitle, CatalogList };
