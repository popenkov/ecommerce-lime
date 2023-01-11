import { CartItem, CategoryItem } from "@src/mock/CartAside";
import { ItemType } from "@src/mock/MainPageData";
import React, { FC, useState } from "react";
import { AmountCounter } from "../AmountCounter";

import { Styled } from "./styles";

type SidebarItemProps = Omit<ItemType, "id">;

export const SidebarItem: FC<SidebarItemProps> = ({ img, amount, title, price, unit }) => {
  const [currentAmount, setCurrentAmount] = useState(amount || 1);
  return (
    <Styled.Item>
      <Styled.Image src={img} alt={title} />
      <AmountCounter value={currentAmount} setValue={setCurrentAmount} />
      <Styled.Description>
        <Styled.Name>{title}</Styled.Name>
        <Styled.PriceContainer>
          <Styled.PriceTitle>{price.price}</Styled.PriceTitle>
          <Styled.PriceValue>{unit}</Styled.PriceValue>
        </Styled.PriceContainer>
      </Styled.Description>
    </Styled.Item>
  );
};
