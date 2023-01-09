import { FC } from "react";

import { useHover } from "@src/hooks/useHover";
import { ItemType } from "@src/mock/MainPageData";

import { Rating } from "../UI";
import { AddToCardBtn } from "../UI/AddToCardBtn";
import { Styled } from "./styles";

type ProductTypes = Omit<ItemType, "id">;

export const Product: FC<ProductTypes> = ({ img, rating, isFavorite, title, price, button }) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  const handleAddToCardClick = () => {
    console.log("yo");
  };

  return (
    <Styled.Product ref={hoverRef}>
      <Styled.Photo src={img} />
      <Rating data={rating} />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Price>
        {!price.oldPrice ? (
          <Styled.CurrentPrice>{price.price}</Styled.CurrentPrice>
        ) : (
          <>
            <Styled.NewPrice>{price.price}</Styled.NewPrice>
            <Styled.OldPrice>{price.oldPrice}</Styled.OldPrice>
          </>
        )}
      </Styled.Price>
      <AddToCardBtn text="В корзину" onClick={handleAddToCardClick} isHovered={isHovered} />
    </Styled.Product>
  );
};
