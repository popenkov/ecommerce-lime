import { FC } from "react";

import { ReactComponent as AccountIcon } from "@src/assets/icons/person.svg";
import { ReviewType } from "@src/mock/MainPageData";

import { Styled } from "./styles";

type ReviewItemType = Omit<ReviewType, "id">;

export const ReviewItem: FC<ReviewItemType> = ({ name, text }) => {
  return (
    <Styled.Item>
      <Styled.Name>
        <AccountIcon />
        {name}
      </Styled.Name>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Item>
  );
};
