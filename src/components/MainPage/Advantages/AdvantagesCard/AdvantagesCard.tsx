import React, { FC } from "react";

import { AdvantageType } from "@src/mock/MainPageData";

import { Styled } from "./styles";

type AdvantagesCardType = Omit<AdvantageType, "id">;
export const AdvantagesCard: FC<AdvantagesCardType> = ({ icon, title, text }) => {
  const Icon = icon;
  return (
    <Styled.Card>
      <Styled.CardHeader>
        <Styled.IconContainer>{/* <Icon /> */}</Styled.IconContainer>
        <Styled.Title>{title}</Styled.Title>
      </Styled.CardHeader>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Card>
  );
};
