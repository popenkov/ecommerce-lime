import { ProductsSection } from "@src/components";
import { CartItem } from "@src/components/CartPage";
import { RecommendatedItems } from "@src/mock/CartAside";
import { MainPageData } from "@src/mock/MainPageData";
import { FC } from "react";
import { OrderForm } from "./OrderForm";
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
        <Styled.Recommendation>
          <ProductsSection data={RecommendatedItems} />
        </Styled.Recommendation>
      </Styled.Items>
      <Styled.Data>
        <OrderForm />
      </Styled.Data>
    </Styled.PageContainer>
  );
};
