import styled, { css } from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const CatalogItem = styled.li<{ isActive?: boolean }>`
  ${flexAlignCenter};
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.color.greyBorderLight};
  padding: 5px 22px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    box-sizing: border-box;
    padding: 2px 15px 3px;

    ${({ isActive }) =>
      isActive &&
      css`
        width: 49px;
        background-color: ${({ theme }) => theme.color.green};
      `};
  }
`;

const CatalogIcon = styled.span`
  margin-right: 15px;
`;

const CatalogName = styled.span<{ isActive?: boolean }>`
  ${font({ size: "14", lineHeight: "17", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};

  ${({ isActive }) =>
    isActive &&
    css`
      @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: none;
      }
    `};
`;

const ShevronIcon = styled.span<{ isActive?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  margin-left: 10px;

  & svg {
    transform: rotateZ(-180deg);
  }
  & path {
    fill: ${({ theme }) => theme.color.greyBg};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    right: 13px;

    ${({ isActive }) =>
      isActive &&
      css`
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
          display: none;
        }
      `};
  }
`;

const DetailedCatalog = styled.div`
  width: 338px;
  height: calc(100vh - 116px);

  position: absolute;
  top: 0;
  left: 302px;
  background-color: ${({ theme }) => theme.color.greyLightBg};
`;

export const Styled = { CatalogItem, CatalogIcon, CatalogName, ShevronIcon, DetailedCatalog };
