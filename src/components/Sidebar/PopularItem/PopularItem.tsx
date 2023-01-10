import { CartItem } from "@src/mock/CartAside";
import React, { FC } from "react";

import { Styled } from "./styles";

type PopularItemProps = Omit<CartItem, "id">;

export const PopularItem: FC<PopularItemProps> = ({ img, amount, name, price, unit }) => {
  return (
    <Styled.PopularItem>
      <Styled.Image src={img} alt={name} />
      <Styled.Description>
        <Styled.Name>{name}</Styled.Name>
        <Styled.PriceContainer>
          <Styled.PriceTitle>{price}</Styled.PriceTitle>
          <Styled.PriceValue>{unit}</Styled.PriceValue>
        </Styled.PriceContainer>
        <Styled.AddToCartBtn>+ Добавить</Styled.AddToCartBtn>
      </Styled.Description>
    </Styled.PopularItem>
  );
};
