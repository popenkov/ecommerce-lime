import { FC } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import { Styled } from "./styles";
import { ChiefReceiptIngredientType } from "@src/types/MainPageTypes";

export const Ingredient: FC<ChiefReceiptIngredientType> = ({ id, text, price, img }) => {
  const tooltipId = `ingredient-item/${id}/${Math.random()}`;
  return (
    <Styled.Ingredient>
      <Styled.Img id={tooltipId} src={img} alt={text} />
      <Tooltip anchorId={tooltipId}>
        <span className="tooltip-text">{text} </span> <span className="tooltip-price">{price}</span>
      </Tooltip>
    </Styled.Ingredient>
  );
};
