import { FC } from "react";

import { ReactComponent as AccountIcon } from "@src/assets/icons/person.svg";
import { ReviewType } from "@src/types/MainPageTypes";

import { Styled } from "./styles";

type ReviewItemProps = Omit<ReviewType, "id">;

export const ReviewItem: FC<ReviewItemProps> = ({ name, text }) => {
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
