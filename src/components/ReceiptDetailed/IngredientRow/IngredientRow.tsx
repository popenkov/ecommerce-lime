import { FC, useState } from "react";

import { AddToCardBtnNew } from "@src/components/UI/AddToCardBtnNew";
import { ReceiptIngredientType } from "@src/types/ReceiptDetailedTypes";

import { Styled } from "./styles";
export const IngredientRow: FC<ReceiptIngredientType> = ({ text, amount, img }) => {
  const [isItemInCart, setIsItemInCart] = useState(false);
  const handleAddToCardClick = () => {
    setIsItemInCart((prev) => !prev);
  };

  return (
    <Styled.Ingredient>
      <Styled.IngredientImage src={img} alt={text} />
      <Styled.IngredientName>{text}</Styled.IngredientName>
      <Styled.Dots />
      <Styled.IngredientAmount>
        {amount.value} {amount.unit}
      </Styled.IngredientAmount>
      <Styled.AddToCartContainer>
        <AddToCardBtnNew onClick={handleAddToCardClick} isAdded={isItemInCart} isSmall />
      </Styled.AddToCartContainer>
    </Styled.Ingredient>
  );
};
