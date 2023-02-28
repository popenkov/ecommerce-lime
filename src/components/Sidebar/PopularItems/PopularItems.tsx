import { FC, memo } from "react";

import { ItemType } from "@src/types/commonTypes";

import { PopularItem } from "../PopularItem/PopularItem";
import { Styled } from "./styles";

type PopularItemsProps = {
  data: ItemType[];
};

export const PopularItems: FC<PopularItemsProps> = memo(({ data }) => {
  return (
    <Styled.PopularContainer>
      <Styled.PopularTitle>Вы обычно покупаете:</Styled.PopularTitle>
      <Styled.PopularItems>
        {data.map((item) => {
          return <PopularItem data={item} key={item.id} />;
        })}
      </Styled.PopularItems>
    </Styled.PopularContainer>
  );
});

PopularItems.displayName = "PopularItems";
