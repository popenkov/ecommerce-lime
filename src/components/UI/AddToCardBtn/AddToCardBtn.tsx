import { FC, memo } from "react";

import { Styled } from "./styles";

type AddToCardBtnProps = {
  text: string;
  isHovered: boolean;
  isAdded: boolean;
  onClick: () => void;
};

export const AddToCardBtn: FC<AddToCardBtnProps> = memo(({ text, isHovered, onClick, isAdded }) => {
  return (
    <Styled.Button onClick={onClick} isAdded={isAdded}>
      <Styled.PlusContainer isHovered={isHovered} isAdded={isAdded}>
        +
      </Styled.PlusContainer>
      <Styled.TextContainer isHovered={isHovered} isAdded={isAdded}>
        {text}
      </Styled.TextContainer>
    </Styled.Button>
  );
});

AddToCardBtn.displayName = "AddToCardBtn";
