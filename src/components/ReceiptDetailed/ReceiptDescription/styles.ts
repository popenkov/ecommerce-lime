import styled from "styled-components";

import { flexAlignCenter, flexCenter, font } from "@src/styles/mixins";

const MainDescription = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;
const Description = styled.div`
  box-sizing: border-box;
  margin-bottom: 14px;
  padding: 43px 33px 17px 38px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 15px;
    padding: 8px 11px 11px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 19px;
  }
`;

const Title = styled.h2`
  margin-bottom: 6px;
  ${font({ size: "24", lineHeight: "29", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};
  }
`;

const TagsContainer = styled.div`
  display: inline-block;
  margin-bottom: 18px;
  margin-right: 19px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 12px;
  }
`;

const RatingContainer = styled.div`
  display: inline-block;
  margin-bottom: 18px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 12px;
  }
`;

const SelectContainer = styled.div`
  margin-bottom: 18px;

  & .portions-select {
    &__control {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      min-height: unset;
    }

    &__value-container {
      padding: 3px 10px;
    }

    &__input-container {
      padding: 0;
      margin: 0;
    }

    &__single-value {
      ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
      color: ${({ theme }) => theme.color.black};
    }

    &__indicator {
      padding: 5px;
    }

    &__indicator-separator {
      display: none;
    }

    &__dropdown-indicator {
      & svg {
        fill: ${({ theme }) => theme.color.green};
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 12px;
  }
`;

const IngredientsContainer = styled.div`
  margin-bottom: 18px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 12px;
  }
`;

const AddToCartBtn = styled.button`
  position: relative;
  width: 100%;
  ${flexCenter};
  margin-bottom: 11px;
  padding: 12px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 10px;

  ${font({ size: "16", lineHeight: "20", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const AddToCartIcon = styled.span`
  position: absolute;
  top: 0;
  left: 22px;
`;

const EnergieContainer = styled.div`
  ${flexAlignCenter};
  justify-content: space-between;
  padding: 5px 27px;
  background: #f1f1f1;
  border-radius: 5px;
  margin-bottom: 18px;
`;

const EnergyItem = styled.div`
  ${flexAlignCenter};
  flex-direction: column;
  ${font({ size: "10", lineHeight: "24", fontWeight: "400" })};
`;

const EnergyName = styled.span`
  color: ${({ theme }) => theme.color.lightGrey};
  margin-right: 3px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 3px;
  }
`;

const EnergyValue = styled.span`
  ${font({ size: "16", lineHeight: "24", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
`;

const ReceiptsContainer = styled.div`
  width: 100%;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

const IngredientsCartContainer = styled.div`
  display: flex;
  gap: 14px;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.color.green};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const IngredientsPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IngredientsPriceTitle = styled.span`
  display: inline-block;
  margin-bottom: 3px;
  ${font({ size: "10", lineHeight: "12", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.7;
`;
const IngredientsPriceValue = styled.span`
  ${font({ size: "16", lineHeight: "20", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

export const Styled = {
  MainDescription,
  Description,
  Title,
  RatingContainer,
  TagsContainer,
  SelectContainer,
  IngredientsContainer,
  AddToCartBtn,
  AddToCartIcon,
  EnergieContainer,
  EnergyItem,
  EnergyName,
  EnergyValue,
  ReceiptsContainer,
  IngredientsCartContainer,
  IngredientsPriceContainer,
  IngredientsPriceTitle,
  IngredientsPriceValue,
};
