import { FC } from "react";
import { ReactComponent as Logo } from "@src/assets/images/header-logo.svg";
import { Styled } from "./styles";

type LoyalCardType = {
  number: string;
};

export const LoyalCard: FC<LoyalCardType> = ({ number }) => {
  return (
    <Styled.Card>
      <Styled.LogoContainer>
        <Logo />
      </Styled.LogoContainer>
      <Styled.CardNumber>{number}</Styled.CardNumber>
    </Styled.Card>
  );
};
