import { FC } from "react";

import { Rating } from "@src/components/UI";
import { CustomersReviewsItemType } from "@src/types/ProductPageTypes";

import { ReviewReaction } from "../ReviewReaction";
import { Styled } from "./styles";

export const ReviewItem: FC<CustomersReviewsItemType> = ({ name, rating, date, text, useFullReactions }) => {
  return (
    <Styled.Review>
      <Styled.Header>
        <Styled.Name>{name}</Styled.Name>
        <Styled.RatingContainer>
          <Rating data={rating} showReviewsValue={false} />
        </Styled.RatingContainer>
        <Styled.Date>{date}</Styled.Date>
      </Styled.Header>
      <Styled.ReviewContainer>{text}</Styled.ReviewContainer>
      <Styled.ReactionContainer>
        <ReviewReaction data={useFullReactions} />
      </Styled.ReactionContainer>
    </Styled.Review>
  );
};
