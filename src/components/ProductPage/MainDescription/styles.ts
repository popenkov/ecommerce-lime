import { flexAlignCenter, flexCenter, font } from "@src/styles/mixins";
import styled, { css } from "styled-components";

const MainDescription = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const Description = styled.div`
  box-sizing: border-box;
  margin-bottom: 24px;
  padding: 28px 62px 17px 22px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Title = styled.h2`
  margin-bottom: 6px;
  ${font({ size: "24", lineHeight: "29", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const ExpireDate = styled.div`
  ${flexAlignCenter};
  ${font({ size: "10", lineHeight: "24", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const ExpireDateTitle = styled.span`
  color: ${({ theme }) => theme.color.lightGrey};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const ExpireDateValue = styled.span`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const RatingContainer = styled.div`
  margin-bottom: 18px;
`;

const PriceContainer = styled.div`
  width: 100%;
  ${flexAlignCenter}
  margin-bottom: 18px;
`;

const Price = styled.div`
  width: 100%;
`;

const PriceValue = styled.span`
  margin-right: 18px;
  ${font({ size: "24", lineHeight: "29", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const PriceUnit = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
`;

const CoinsContainer = styled.div``;

const AddToCartBtn = styled.button`
  position: relative;
  width: 100%;
  ${flexCenter};
  margin-bottom: 11px;
  padding: 12px;
  background: ${({ theme }) => theme.color.green};
  border-radius: 10px;

  ${font({ size: "16", lineHeight: "20", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const AddToCartPlus = styled.span`
  position: absolute;
  top: 0;
  left: 22px;

  ${font({ size: "36", lineHeight: "44", fontWeight: "400" })};
`;

const EnergieContainer = styled.div`
  ${flexAlignCenter};
  justify-content: space-between;
`;

const EnergyItem = styled.div`
  ${flexAlignCenter};
  ${font({ size: "10", lineHeight: "24", fontWeight: "400" })};
`;

const EnergyName = styled.span`
  color: ${({ theme }) => theme.color.lightGrey};
`;

const EnergyValue = styled.span`
  color: ${({ theme }) => theme.color.black};
`;

const ReceiptsContainer = styled.div`
  width: 100%;
  max-width: 454px;
`;

export const Styled = {
  MainDescription,
  Description,
  Title,
  ExpireDate,
  ExpireDateTitle,
  ExpireDateValue,
  RatingContainer,
  PriceContainer,
  Price,
  PriceValue,
  PriceUnit,
  CoinsContainer,
  AddToCartBtn,
  AddToCartPlus,
  EnergieContainer,
  EnergyItem,
  EnergyName,
  EnergyValue,
  ReceiptsContainer,
};
