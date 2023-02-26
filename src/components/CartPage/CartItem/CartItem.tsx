import { FC } from "react";

import { ReactComponent as FavoritesIcon } from "@src/assets/icons/favorites.svg";
import { handleRemoveFavoritesToastr, handleSuccesFavoritesToastr } from "@src/components/Toastrs/CustomTostrs";
import { useActions } from "@src/hooks/useActions";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { ItemType } from "@src/types/commonTypes";
import { IMAGES } from "@src/utils/ImagesMap";

import { AmountCounter } from "../AmountCounter";
import { Styled } from "./styles";

type CartItemProps = { data: ItemType };

export const CartItem: FC<CartItemProps> = ({ data }) => {
  const { id, img, rating, energy, isFavorite, title, price, amount, unit, button } = data;
  const { removeItemfromCart, addItemToFavorites, removeItemfromFavorites } = useActions();
  const imageToDraw: string = IMAGES[img as keyof typeof IMAGES];

  const handleRemoveFromCardClick = () => {
    removeItemfromCart(id);
  };

  const { items: favoriteItem } = useAppSelector((state) => state.favorites);

  const isItemFavorite = Boolean(favoriteItem.find((item) => item.id === id));

  const handleRemoveFavoriteItem = (id: string) => {
    removeItemfromFavorites(id);
    handleSuccesFavoritesToastr("Товар добавлен в избранное");
  };
  const handleAddFavoriteItem = (itemData: ItemType) => {
    addItemToFavorites(itemData);
    handleRemoveFavoritesToastr("Товар удален из избранных");
  };

  const handleAddToFavoritesClick = () => {
    const itemDate = {
      id,
      img,
      rating,
      isFavorite,
      title,
      price,
      amount,
      unit,
      energy,
      button,
    };

    isItemFavorite ? handleRemoveFavoriteItem(id) : handleAddFavoriteItem(data);
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

      <Styled.FavoritesButton isFavorite={isItemFavorite} onClick={handleAddToFavoritesClick}>
        <FavoritesIcon />
      </Styled.FavoritesButton>

      <Styled.CloseButton onClick={handleRemoveFromCardClick} />
    </Styled.Item>
  );
};
