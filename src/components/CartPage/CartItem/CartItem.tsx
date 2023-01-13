import { useActions } from "@src/hooks/useActions";
import { ItemType } from "@src/mock/MainPageData";
import { IMAGES } from "@src/utils/ImagesMap";
import React, { FC } from "react";
import { AmountCounter } from "../AmountCounter";
import { Styled } from "./styles";

export const CartItem: FC<ItemType> = ({
  id,
  category,
  img,
  energy,
  rating,
  isFavorite,
  title,
  price,
  amount,
  unit,
}) => {
  const { removeItemfromCart } = useActions();
  const imageToDraw: string = IMAGES[img as keyof typeof IMAGES];

  const handleRemoveFromCardClick = () => {
    removeItemfromCart(id);
  };
  return (
    <Styled.Item>
      <Styled.Photo src={imageToDraw} />
      <Styled.Title>{title}</Styled.Title>
      {energy && (
        <Styled.EnergyContainer>
          {energy.map((item) => {
            return (
              <Styled.EnergyItem key={item.name}>
                <Styled.EnergyKey>{item.name}</Styled.EnergyKey>
                <Styled.EnergyValue>{item.value}</Styled.EnergyValue>
              </Styled.EnergyItem>
            );
          })}
        </Styled.EnergyContainer>
      )}
      <AmountCounter amount={amount} id={id} />
      <Styled.Price>
        {!price.oldPrice ? (
          <Styled.CurrentPrice>{price.price} руб.</Styled.CurrentPrice>
        ) : (
          <>
            <Styled.NewPrice>{price.price} руб.</Styled.NewPrice>
            <Styled.OldPrice>{price.oldPrice} руб.</Styled.OldPrice>
          </>
        )}
      </Styled.Price>
    </Styled.Item>
  );
};
