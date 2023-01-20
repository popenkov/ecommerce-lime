import { FC } from "react";

import { useHover } from "@src/hooks/useHover";

import { Rating } from "../UI";
import { Styled } from "./styles";
import { useActions } from "@src/hooks/useActions";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { IMAGES } from "@src/utils/ImagesMap";
import { ROUTE } from "@src/utils/Routes";
import { ItemType } from "@src/types/commonTypes";
import { AddToCardBtnNew } from "../UI/AddToCardBtnNew";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { theme } from "@src/theme";
import { FavoritesButton } from "../UI/FavoritesButton/FavoritesButton";

export const CatalogProduct: FC<ItemType> = ({
  id,
  category,
  img,
  rating,
  isFavorite,
  title,
  price,
  amount,
  unit,
  energy,
  button,
}) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  const { addItemToCart, addItemToFavorites, removeItemfromFavorites } = useActions();
  const { items: cartItem } = useAppSelector((state) => state.cart);
  const { items: favoriteItem } = useAppSelector((state) => state.favorites);

  const imageToDraw: string = IMAGES[img as keyof typeof IMAGES];

  const isItemInCart = Boolean(cartItem.find((item) => item.id === id));
  const isItemFavorite = Boolean(favoriteItem.find((item) => item.id === id));

  const isAdaptive = useMediaQuery(theme.breakpoints.large);

  const buttonText = !isAdaptive ? button?.text : button?.mobileText;

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
    };

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
    };

    console.log(isItemFavorite);

    isItemFavorite ? removeItemfromFavorites(id) : addItemToFavorites(itemDate);
  };

  return (
    <Styled.Product ref={hoverRef}>
      <Styled.PhotoContainer>
        <Styled.FavoritesButtonContainer onClick={handleAddToFavoritesClick}>
          <FavoritesButton isFavorite={isFavorite as boolean} isSmall />
        </Styled.FavoritesButtonContainer>
        <Styled.Photo src={imageToDraw} />
      </Styled.PhotoContainer>
      <Rating data={rating} showStarsValue showReviewsValue={false} />
      <Styled.LinkContainer to={ROUTE.PRODUCT}>
        <Styled.Title>{title}</Styled.Title>
      </Styled.LinkContainer>

      {energy && (
        <Styled.EnergieContainer>
          {energy.map((item) => {
            return (
              <Styled.EnergyItem key={item.id}>
                <Styled.EnergyName>{item.name}</Styled.EnergyName>
                <Styled.EnergyValue>{item.value}</Styled.EnergyValue>
              </Styled.EnergyItem>
            );
          })}
        </Styled.EnergieContainer>
      )}
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

      {!isItemInCart ? (
        <AddToCardBtnNew
          text={buttonText}
          onClick={handleAddToCardClick}
          isHovered={isHovered}
          isAdded={isItemInCart}
        />
      ) : (
        <Styled.LinkToCard to={ROUTE.CART}> В корзину</Styled.LinkToCard>
      )}
    </Styled.Product>
  );
};
