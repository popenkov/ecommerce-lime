import React, { FC } from "react";

import { ReactComponent as CartIcon } from "@src/assets/icons/cart.svg";
import { ReactComponent as CheckIcon } from "@src/assets/icons/checkbox.svg";

import { Styled } from "./styles";

type AddToCardBtnNewProps = {
  text?: string;
  isHovered?: boolean;
  isSmall?: boolean;
  isLight?: boolean;
  isAdded: boolean;
  onClick: () => void;
};

export const AddToCardBtnNew: FC<AddToCardBtnNewProps> = ({ text, isHovered, onClick, isAdded, isSmall, isLight }) => {
  const isSmallAndAdded = isAdded && isSmall;
  return (
    <Styled.Button onClick={onClick} isAdded={isAdded} isHovered={isHovered} isSmall={isSmall} isLight={isLight}>
      <Styled.IconContainer>{!isSmallAndAdded ? <CartIcon /> : <CheckIcon />}</Styled.IconContainer>

      <Styled.TextContainer>{text}</Styled.TextContainer>
    </Styled.Button>
  );
};

AddToCardBtnNew.defaultProps = {
  isAdded: false,
};
