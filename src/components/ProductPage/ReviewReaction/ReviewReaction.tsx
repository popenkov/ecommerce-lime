import React, { FC } from "react";

import { ReactComponent as ThumbUpIcon } from "@src/assets/icons/thumb-up.svg";

import { Styled } from "./styles";

type ReviewReactionType = {
  data: string;
};

export const ReviewReaction: FC<ReviewReactionType> = ({ data }) => {
  return (
    <Styled.Reaction>
      <Styled.Text>Отзыв был вам полезен?</Styled.Text>
      <Styled.ReactionButton>
        <ThumbUpIcon />
        <Styled.Value>{data}</Styled.Value>
      </Styled.ReactionButton>
    </Styled.Reaction>
  );
};
