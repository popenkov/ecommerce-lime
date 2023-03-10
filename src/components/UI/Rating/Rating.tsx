import { FC, memo } from "react";

import { RatingType } from "@src/types/commonTypes";

import { Star } from "../Star";
import { Styled } from "./styles";

type RatingProps = {
  data: RatingType;
  showStarsValue?: boolean;
  showReviewsValue?: boolean;
};

export const Rating: FC<RatingProps> = memo(({ data, showStarsValue, showReviewsValue }) => {
  const { value, amount } = data;

  const valueNumber = Math.floor(Number(value));
  const MAX_STAR_AMOUNT = 5;

  return (
    <Styled.Rating>
      <Styled.Stars>
        {[...Array(MAX_STAR_AMOUNT)].map((star, index) => {
          const isActive = index < valueNumber;
          return <Star key={index} isActive={isActive} />;
        })}
      </Styled.Stars>
      {showStarsValue && <Styled.StarsValue>{value}</Styled.StarsValue>}
      {showReviewsValue && <Styled.Value>{amount}</Styled.Value>}
    </Styled.Rating>
  );
});

Rating.displayName = "Rating";

Rating.defaultProps = {
  showStarsValue: false,
  showReviewsValue: true,
};
