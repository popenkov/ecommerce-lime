import { ChiefReceiptIngredientType } from "@src/mock/MainPageData";
import { FC } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import { Styled } from "./styles";

type IngredientProps = Omit<ChiefReceiptIngredientType, "id">;

export const Ingredient: FC<ChiefReceiptIngredientType> = ({ id, text, price, img }) => {
  return (
    <Styled.Ingredient>
      <Styled.Img id={`ingredient-item/${id}`} src={img} alt={text} />
      <Tooltip anchorId={`ingredient-item/${id}`}>
        <span className="tooltip-text">{text} </span> <span className="tooltip-price">{price}</span>
      </Tooltip>
    </Styled.Ingredient>
  );
};
