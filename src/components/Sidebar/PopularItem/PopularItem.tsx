import React, { FC, memo } from "react";
import { toastr } from "react-redux-toastr";

import { handleSuccesCartToastr } from "@src/components/Toastrs/CustomTostrs";
import { useActions } from "@src/hooks/useActions";
import { ItemType } from "@src/types/commonTypes";
import { IMAGES } from "@src/utils/ImagesMap";

import { Styled } from "./styles";

type PopularItemProps = {
  data: ItemType;
};

export const PopularItem: FC<PopularItemProps> = memo(({ data }) => {
  const { img, title, price, unit } = data;

  const imageToDraw: string = IMAGES[img as keyof typeof IMAGES];

  const { addItemToCart } = useActions();

  const handleAddToCardClick = () => {
    handleSuccesCartToastr("Товар добавлен в корзину");
    addItemToCart(data);
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
});

PopularItem.displayName = "PopularItem";
