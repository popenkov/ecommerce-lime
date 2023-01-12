import { useActions } from "@src/hooks/useActions";
import { CartItem } from "@src/mock/CartAside";
import { ItemType } from "@src/mock/MainPageData";
import { IMAGES } from "@src/utils/ImagesMap";
import React, { FC } from "react";

import { Styled } from "./styles";

type PopularItemProps = Omit<CartItem, "id">;

export const PopularItem: FC<ItemType> = ({ id, img, title, rating, isFavorite, price, amount, unit }) => {
  const imageToDraw: string = IMAGES[img as keyof typeof IMAGES];

  const { addItemToCart, removeItemfromCart } = useActions();

  const handleAddToCardClick = () => {
    const itemDate = {
      id,
      img,
      rating,
      isFavorite,
      title,
      price,
      amount,
      unit,
    };

    addItemToCart(itemDate);
  };

  return (
    <Styled.PopularItem>
      <Styled.Image src={imageToDraw} alt={title} />
      <Styled.Description>
        <Styled.Name>{title}</Styled.Name>
        <Styled.PriceContainer>
          <Styled.PriceTitle>{price.price} руб</Styled.PriceTitle>
          <Styled.PriceValue>{unit}</Styled.PriceValue>
        </Styled.PriceContainer>
        <Styled.AddToCartBtn onClick={handleAddToCardClick}>+ Добавить</Styled.AddToCartBtn>
      </Styled.Description>
    </Styled.PopularItem>
  );
};
