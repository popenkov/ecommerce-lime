import { FC } from "react";

import { ReviewItem } from "@src/components/ProductPage/ReviewItem";
import { ReceiptDetailedData } from "@src/mock/ReceiptDetailedData";

import { Styled } from "./styles";
export const ReceiptReviews: FC = () => {
  const { filter, reviews } = ReceiptDetailedData.reviews;
  return (
    <Styled.Reviews>
      <Styled.ReviewsFilter>
        {filter.map((item) => {
          return (
            <Styled.FilterItem key={item.id} isActive={item.isActive}>
              {item.text}
            </Styled.FilterItem>
          );
        })}
      </Styled.ReviewsFilter>
      <Styled.ReviewsContainer>
        {reviews.map((item) => {
          return <ReviewItem {...item} key={item.id} />;
        })}
      </Styled.ReviewsContainer>
    </Styled.Reviews>
  );
};
