import { FC, FunctionComponent, ReactNode, SVGProps } from "react";

import { ReactComponent as StarIcon } from "@src/assets/icons/star.svg";
import { RatingType } from "@src/mock/MainPageData";

import { Star } from "../Star";
import { Styled } from "./styles";

type RatingProps = {
  data: RatingType;
};

export const Rating: FC<RatingProps> = ({ data }) => {
  const { value, amount } = data;

  const valueNumber = Number(value);
  const MAX_STAR_AMOUNT = 5;

  return (
    <Styled.Rating>
      <Styled.Stars>
        {[...Array(MAX_STAR_AMOUNT)].map((star, index) => {
          const isActive = index < valueNumber;
          return <Star key={index} isActive={isActive} />;
        })}
      </Styled.Stars>
      <Styled.Value>{amount}</Styled.Value>
    </Styled.Rating>
  );
};
