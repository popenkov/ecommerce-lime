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
  const { addItemToCart, removeItemfromCart } = useActions();
  const { items } = useAppSelector((state) => state.cart);

  const imageToDraw: string = IMAGES[img as keyof typeof IMAGES];

  const isItemInCart = Boolean(items.find((item) => item.id === id));
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

  const isAdaptive = useMediaQuery(theme.breakpoints.large);

  const buttonText = !isAdaptive ? button?.text : button?.mobileText;

  return (
    <Styled.Product ref={hoverRef}>
      <Styled.LinkContainer to={ROUTE.PRODUCT}>
        <Styled.PhotoContainer>
          <Styled.FavoritesButtonContainer>
            <FavoritesButton isFavorite={isFavorite as boolean} isSmall />
          </Styled.FavoritesButtonContainer>
          <Styled.Photo src={imageToDraw} />
        </Styled.PhotoContainer>
        <Rating data={rating} showStarsValue showReviewsValue={false} />
        <Styled.Title>{title}</Styled.Title>

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
      </Styled.LinkContainer>
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
