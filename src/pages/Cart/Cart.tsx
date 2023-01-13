import { CartItem } from "@src/components/CartPage";
import { MainPageData } from "@src/mock/MainPageData";
import { FC } from "react";
import { Styled } from "./styles";

export const Cart: FC = () => {
  const mockItems = MainPageData.products[0].items;
  return (
    <Styled.PageContainer>
      <Styled.Items>
        <Styled.Title>Оформление заказа</Styled.Title>
        <Styled.AddedItems>
          {mockItems.map((item) => {
            return <CartItem {...item} key={item.id} />;
          })}
        </Styled.AddedItems>
      </Styled.Items>
      <Styled.Data></Styled.Data>
    </Styled.PageContainer>
  );
};
