import React, { FC } from "react";

import { ReactComponent as CartIcon } from "@src/assets/icons/cart.svg";

import { Styled } from "./styles";

type AddToCardBtnNewProps = {
  text: string;
  isHovered: boolean;
  isAdded: boolean;
  onClick: () => void;
};

export const AddToCardBtnNew: FC<AddToCardBtnNewProps> = ({ text, isHovered, onClick, isAdded }) => {
  return (
    <Styled.Button onClick={onClick} isAdded={isAdded} isHovered={isHovered}>
      <Styled.IconContainer>
        <CartIcon />
      </Styled.IconContainer>

      <Styled.TextContainer>{text}</Styled.TextContainer>
    </Styled.Button>
  );
};

AddToCardBtnNew.defaultProps = {
  isAdded: false,
};
