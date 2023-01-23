import { Styled } from "./styles";
import React, { FC } from "react";
import { OrderHistoryType } from "@src/types/OrderHistoryTypes";

type OrderDescriptionType = Omit<OrderHistoryType, "products" | "link">;

export const OrderDescription: FC<OrderDescriptionType> = ({ date, time, address, price }) => {
  return (
    <Styled.OrderDescription>
      <Styled.DateContainer>
        <Styled.Date>{date}</Styled.Date>
        <Styled.Time>{time}</Styled.Time>
      </Styled.DateContainer>
      <Styled.Address>{address}</Styled.Address>

      <Styled.PriceContainer>
        <Styled.PriceText>Итого:</Styled.PriceText>
        <Styled.PriceValue>{price}</Styled.PriceValue>
      </Styled.PriceContainer>
      <Styled.RepeatOrderButton>Повторить заказ</Styled.RepeatOrderButton>
    </Styled.OrderDescription>
  );
};
