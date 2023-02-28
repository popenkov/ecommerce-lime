import { FC, memo } from "react";

import { useActions } from "@src/hooks/useActions";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { useHover } from "@src/hooks/useHover";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { theme } from "@src/theme";
import { ItemType } from "@src/types/commonTypes";
import { IMAGES } from "@src/utils/ImagesMap";
import { ROUTE } from "@src/utils/Routes";

import {
  handleRemoveFavoritesToastr,
  handleSuccesCartToastr,
  handleSuccesFavoritesToastr,
} from "../Toastrs/CustomTostrs";
import { Rating } from "../UI";
import { AddToCardBtnNew } from "../UI/AddToCardBtnNew";
import { FavoritesButton } from "../UI/FavoritesButton/FavoritesButton";
import { Styled } from "./styles";

type CatalogProductProps = {
  data: ItemType;
  width?: string;
};

type ItemDateType = Omit<ItemType, "category">;

export const CatalogProduct: FC<CatalogProductProps> = memo(({ width, data }) => {
  const { id, img, rating, isFavorite, title, price, amount, unit, energy, button } = data;
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
    handleSuccesCartToastr("Товар добавлен в корзину");
    addItemToCart(data);
  };

  const handleRemoveFavoriteItem = (id: string) => {
    removeItemfromFavorites(id);
    handleSuccesFavoritesToastr("Товар добавлен в избранное");
  };
  const handleAddFavoriteItem = (data: ItemDateType) => {
    addItemToFavorites(data);
    handleRemoveFavoritesToastr("Товар удален из избранных");
  };

  const handleAddToFavoritesClick = () => {
    isItemFavorite ? handleRemoveFavoriteItem(id) : handleAddFavoriteItem(data);
  };

  return (
    <Styled.Product ref={hoverRef} width={width}>
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
});

CatalogProduct.displayName = "CatalogProduct";
