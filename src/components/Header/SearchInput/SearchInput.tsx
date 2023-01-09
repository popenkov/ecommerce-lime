import { FC } from "react";

import { ReactComponent as LoupeIcon } from "../../../assets/icons/loupe.svg";
import { Styled } from "./styles";

export const SearchInput: FC = () => {
  return (
    <Styled.Container>
      <Styled.Input />
      <Styled.IconContainer>
        <LoupeIcon />
      </Styled.IconContainer>
    </Styled.Container>
  );
};
