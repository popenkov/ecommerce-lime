import { CartItem } from "@src/mock/CartAside";
import React, { FC, useState } from "react";
import { AmountCounter } from "../AmountCounter";

import { Styled } from "./styles";

type SidebarItemProps = Omit<CartItem, "id">;

export const SidebarItem: FC<SidebarItemProps> = ({ img, amount, name, price, unit }) => {
  const [currentAmount, setCurrentAmount] = useState(amount || 1);
  return (
    <Styled.Item>
      <Styled.Image src={img} alt={name} />
      <AmountCounter value={currentAmount} setValue={setCurrentAmount} />
      <Styled.Description>
        <Styled.Name>{name}</Styled.Name>
        <Styled.PriceContainer>
          <Styled.PriceTitle>{price}</Styled.PriceTitle>
          <Styled.PriceValue>{unit}</Styled.PriceValue>
        </Styled.PriceContainer>
      </Styled.Description>
    </Styled.Item>
  );
};
