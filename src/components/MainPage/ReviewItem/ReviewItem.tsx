import { FC } from "react";

import { ReactComponent as AccountIcon } from "@src/assets/icons/person.svg";
import { ReviewType } from "@src/mock/MainPageData";

import { Styled } from "./styles";
import { Link } from "react-router-dom";

type ReviewItemType = Omit<ReviewType, "id">;

export const ReviewItem: FC<ReviewItemType> = ({ name, text }) => {
  return (
    <Styled.Item>
      <Styled.Name>
        <AccountIcon />
        {name}
      </Styled.Name>
      <Styled.Text>
        {text} <Styled.MoreLink to="/">еще</Styled.MoreLink>
      </Styled.Text>
    </Styled.Item>
  );
};
