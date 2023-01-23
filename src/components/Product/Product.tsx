import { FC } from "react";

import { useActions } from "@src/hooks/useActions";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { useHover } from "@src/hooks/useHover";
import { ItemType } from "@src/types/commonTypes";
import { IMAGES } from "@src/utils/ImagesMap";
import { ROUTE } from "@src/utils/Routes";

import { Rating } from "../UI";
import { AddToCardBtn } from "../UI/AddToCardBtn";
import { Styled } from "./styles";

export const Product: FC<ItemType> = ({ id, img, rating, isFavorite, title, price, amount, unit, energy }) => {
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

  return (
    <Styled.Product ref={hoverRef}>
      <Styled.LinkContainer to={ROUTE.PRODUCT}>
        <Styled.Photo src={imageToDraw} />
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
