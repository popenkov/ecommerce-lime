import { FC } from "react";

import { useActions } from "@src/hooks/useActions";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { useHover } from "@src/hooks/useHover";
import { ItemType } from "@src/types/commonTypes";
import { IMAGES } from "@src/utils/ImagesMap";
import { ROUTE } from "@src/utils/Routes";

import {
  handleRemoveFavoritesToastr,
  handleSuccesCartToastr,
  handleSuccesFavoritesToastr,
} from "../Toastrs/CustomTostrs";
import { Rating } from "../UI";
import { AddToCardBtn } from "../UI/AddToCardBtn";
import { FavoritesButton } from "../UI/FavoritesButton/FavoritesButton";
import { Styled } from "./styles";

type ItemDateType = Omit<ItemType, "category">;

export const Product: FC<ItemType> = ({ id, img, rating, isFavorite, title, price, amount, unit, energy, button }) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  const { addItemToCart, addItemToFavorites, removeItemfromFavorites } = useActions();
  const { items } = useAppSelector((state) => state.cart);
  const { items: favoriteItem } = useAppSelector((state) => state.favorites);

  const imageToDraw: string = IMAGES[img as keyof typeof IMAGES];

  const isItemInCart = Boolean(items.find((item) => item.id === id));
  const isItemFavorite = Boolean(favoriteItem.find((item) => item.id === id));

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
      energy,
      button,
    };

    handleSuccesCartToastr("Товар добавлен в корзину");

    addItemToCart(itemDate);
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

    isItemFavorite ? handleRemoveFavoriteItem(id) : handleAddFavoriteItem(itemDate);
  };

  const handleRemoveFavoriteItem = (id: string) => {
    removeItemfromFavorites(id);
    handleSuccesFavoritesToastr("Товар добавлен в избранное");
  };
  const handleAddFavoriteItem = (itemDate: ItemDateType) => {
    addItemToFavorites(itemDate);
    handleRemoveFavoritesToastr("Товар удален из избранных");
  };

  return (
    <Styled.Product ref={hoverRef}>
      <Styled.PhotoContainer>
        <Styled.FavoritesButtonContainer onClick={handleAddToFavoritesClick}>
          <FavoritesButton isFavorite={isFavorite as boolean} isSmall />
        </Styled.FavoritesButtonContainer>
        <Styled.Photo src={imageToDraw} />
      </Styled.PhotoContainer>
      <Styled.LinkContainer to={ROUTE.PRODUCT}>
        <Rating data={rating} />
        <Styled.Title>{title}</Styled.Title>
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
      </Styled.LinkContainer>
      {!isItemInCart ? (
        <AddToCardBtn text="В корзину" onClick={handleAddToCardClick} isHovered={isHovered} isAdded={isItemInCart} />
      ) : (
        <Styled.LinkToCard to={ROUTE.CART}> В корзину</Styled.LinkToCard>
      )}
    </Styled.Product>
  );
};
