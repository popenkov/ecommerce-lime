import { flexAlignCenter, font } from "@src/styles/mixins";
import styled from "styled-components";

const Products = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const TapsContainer = styled.div`
  ${flexAlignCenter}
  gap: 10px;
  margin-bottom: 16px;
`;

const ItemsContainer = styled.div`
  ${flexAlignCenter}
  flex-wrap: wrap;
`;

const BannerContainer = styled.div`
  margin-bottom: 28px;
`;

const DeliveryContainer = styled.div`
  margin-bottom: 28px;
`;

export const Styled = {
  Products,
  TapsContainer,
  ItemsContainer,
  BannerContainer,
  DeliveryContainer,
};
