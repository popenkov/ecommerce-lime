import { Styled } from "./styles";
import { FC } from "react";
import { Rating } from "@src/components/UI";
import { ReviewReaction } from "../ReviewReaction";
import { CustomersReviewsItemType } from "@src/types/ProductPageTypes";

export const ReviewItem: FC<CustomersReviewsItemType> = ({ id, name, rating, date, text, useFullReactions }) => {
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
