import { CartItem } from "@src/mock/CartAside";
import { FC } from "react";
import { PopularItem } from "../PopularItem/PopularItem";
import { Styled } from "./styles";

type PopularItemsProps = {
  data: CartItem[];
};

export const PopularItems: FC<PopularItemsProps> = ({ data }) => {
  return (
    <Styled.PopularContainer>
      <Styled.PopularTitle>Вы обычно покупаете:</Styled.PopularTitle>
      <Styled.PopularItems>
        {data.map((item) => {
          return <PopularItem {...item} key={item.id} />;
        })}
      </Styled.PopularItems>
    </Styled.PopularContainer>
  );
};
