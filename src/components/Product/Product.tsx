import { FC } from "react";

import { useHover } from "@src/hooks/useHover";
import { ItemType } from "@src/mock/MainPageData";

import { Rating } from "../UI";
import { AddToCardBtn } from "../UI/AddToCardBtn";
import { Styled } from "./styles";
import { useActions } from "@src/hooks/useActions";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { IMAGES } from "@src/utils/ImagesMap";

export const Product: FC<ItemType> = ({
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

  const handleRemoveFromCardClick = () => {
    removeItemfromCart(id);
  };

  return (
    <Styled.Product ref={hoverRef}>
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
      {!isItemInCart ? (
        <AddToCardBtn text="В корзину" onClick={handleAddToCardClick} isHovered={isHovered} isAdded={isItemInCart} />
      ) : (
        <Styled.LinkToCard to="/cart"> В корзину</Styled.LinkToCard>
      )}
    </Styled.Product>
  );
};
