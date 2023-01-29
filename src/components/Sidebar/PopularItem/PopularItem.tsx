import React, { FC } from "react";

import { useActions } from "@src/hooks/useActions";
import { ItemType } from "@src/types/commonTypes";
import { IMAGES } from "@src/utils/ImagesMap";

import { Styled } from "./styles";
import { toastr } from "react-redux-toastr";
import { handleSuccesCartToastr } from "@src/components/Toastrs/CustomTostrs";

export const PopularItem: FC<ItemType> = ({ id, img, title, rating, isFavorite, price, amount, unit }) => {
  const imageToDraw: string = IMAGES[img as keyof typeof IMAGES];

  const { addItemToCart } = useActions();

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
    handleSuccesCartToastr("Товар добавлен в корзину");
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
