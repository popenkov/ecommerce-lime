import styled from "styled-components";

import { flexAlignCenter, flexCenter, font } from "@src/styles/mixins";

const Products = styled.div`
  position: relative;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const SortingContainer = styled.div`
  position: absolute;
  right: -3px;
  top: -45px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
    width: calc(100% - 26px);

    margin: 14px auto 19px;
  }
`;

const TapsContainer = styled.div`
  ${flexAlignCenter}
  gap: 10px;
  margin-bottom: 16px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ItemsContainer = styled.div`
  ${flexAlignCenter}
  flex-wrap: wrap;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 26px);
    margin: 0 auto;
    gap: 7px;
  }
`;

const EmptyContainer = styled.div`
  width: 100%;
  ${flexCenter}

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Styled = {
  Products,
  SortingContainer,
  ItemsContainer,
  EmptyContainer,
};
