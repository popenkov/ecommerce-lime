import { useState } from "react";

import { ReactComponent as Shevron } from "@src/assets/icons/shevron-left.svg";
import { productDetailedData } from "@src/mock/ProductDetailedData";

import { ReviewItem } from "../ReviewItem";
import { Styled } from "./styles";

export const ProductPreviews = () => {
  const { color, title, subtitle, filter, reviews } = productDetailedData.reviews;

  const [isFullHeight, setIsFullHeight] = useState(false);

  const onShowMoreClick = () => {
    setIsFullHeight((prev) => !prev);
  };
  return (
    <Styled.ProductPreviews>
      <Styled.Header>
        <Styled.Title color={color}>{title}</Styled.Title>
        <Styled.Subtitle>
          {subtitle.value} {subtitle.text}
        </Styled.Subtitle>
      </Styled.Header>

      <Styled.ReviewsFilter>
        {filter.map((item) => {
          return (
            <Styled.FilterItem key={item.id} isActive={item.isActive}>
              {item.text}
            </Styled.FilterItem>
          );
        })}
      </Styled.ReviewsFilter>
      <Styled.ReviewsContainer isFullHeight={isFullHeight}>
        {reviews.map((item) => {
          return <ReviewItem {...item} key={item.id} />;
        })}
        <Styled.Shadow />
      </Styled.ReviewsContainer>
      <Styled.ShowMoreBtn onClick={onShowMoreClick}>
        Показать полностью <Shevron />
      </Styled.ShowMoreBtn>
    </Styled.ProductPreviews>
  );
};
