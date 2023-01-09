import React, { FC } from "react";

import { Styled } from "./styles";

type AddToCardBtnProps = {
  text: string;
  isHovered: boolean;
  onClick: () => void;
};

export const AddToCardBtn: FC<AddToCardBtnProps> = ({ text, isHovered, onClick }) => {
  console.log(isHovered);
  return (
    <Styled.Button onClick={onClick}>
      <Styled.PlusContainer isHovered={isHovered}>+</Styled.PlusContainer>
      <Styled.TextContainer isHovered={isHovered}>{text}</Styled.TextContainer>
    </Styled.Button>
  );
};
