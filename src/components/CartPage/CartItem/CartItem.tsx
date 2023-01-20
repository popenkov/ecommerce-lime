import { useActions } from "@src/hooks/useActions";
import { IMAGES } from "@src/utils/ImagesMap";
import { FC } from "react";
import { AmountCounter } from "../AmountCounter";
import { Styled } from "./styles";

import { ReactComponent as FavoritesIcon } from "@src/assets/icons/favorites.svg";
import { ItemType } from "@src/types/commonTypes";

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
      <Styled.PhotoContainer>
        <Styled.Photo src={imageToDraw} />
        {price.discount && <Styled.DiscountPhotoTag>-{price.discount}%</Styled.DiscountPhotoTag>}
      </Styled.PhotoContainer>

      <Styled.DescriptionContainer>
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

        <Styled.CountNPriceContainer>
          <Styled.AmountCounterContainer>
            <AmountCounter amount={amount} id={id} />
          </Styled.AmountCounterContainer>

          <Styled.Price>
            {!price.oldPrice ? (
              <Styled.CurrentPrice>{price.price} руб.</Styled.CurrentPrice>
            ) : (
              <>
                <Styled.OldPrice>{price.oldPrice} руб.</Styled.OldPrice>
                <Styled.NewPrice>{price.price} руб.</Styled.NewPrice>

                <Styled.DiscountTag>-{price.discount}%</Styled.DiscountTag>
              </>
            )}
          </Styled.Price>
        </Styled.CountNPriceContainer>
      </Styled.DescriptionContainer>

      <Styled.FavoritesContainer isFavorite={isFavorite}>
        <FavoritesIcon />
      </Styled.FavoritesContainer>

      <Styled.CloseButton onClick={handleRemoveFromCardClick} />
    </Styled.Item>
  );
};