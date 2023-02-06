import styled from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

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

const ProductContainer = styled.div`
  margin-bottom: 28px;
`;

const BannerContainer = styled.div`
  margin-bottom: 28px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const PaginationContainer = styled.div`
  ${flexAlignCenter};
  justify-content: space-between;
  margin-bottom: 65px;
  margin-top: -4px;
  margin-top: 26px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    margin-bottom: 30px;
    margin-top: 3px;
  }
`;

const DeliveryContainer = styled.div`
  margin-bottom: 90px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 26px);
    margin: 0 auto;
    margin-bottom: 90px;
  }
`;

const LoadNewItemsBtn = styled.button`
  padding: 6px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 10px;
  }
`;

export const Styled = {
  Products,
  SortingContainer,
  TapsContainer,
  ItemsContainer,
  ProductContainer,
  BannerContainer,
  PaginationContainer,
  LoadNewItemsBtn,
  DeliveryContainer,
};
