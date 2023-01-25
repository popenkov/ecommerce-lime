import { box, flexAlignCenter, font } from "@src/styles/mixins";
import styled from "styled-components";

const Ingredient = styled.div`
  ${flexAlignCenter};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const IngredientImage = styled.img`
  ${box(28)};
  object-fit: contain;
  margin-right: 16px;
`;

const IngredientName = styled.span`
  flex-grow: 1;
  white-space: nowrap;
  ${font({ size: "14", lineHeight: "37", fontWeight: "500" })}
  color: ${({ theme }) => theme.color.black};
`;

const Dots = styled.span`
  flex-grow: 1;
  overflow: hidden;

  &::before {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    content: ". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . ";
  }
`;

const IngredientAmount = styled.span`
  white-space: nowrap;
  ${font({ size: "14", lineHeight: "37", fontWeight: "500" })}
  color: ${({ theme }) => theme.color.black};
`;

const AddToCartContainer = styled.span`
  margin-left: 17px;
`;

export const Styled = {
  Ingredient,
  IngredientImage,
  IngredientName,
  IngredientAmount,
  AddToCartContainer,
  Dots,
};
