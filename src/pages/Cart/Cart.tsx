import { FC } from "react";

import { ProductsSection } from "@src/components";
import { CartItem } from "@src/components/CartPage";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { RecommendatedItems } from "@src/mock/CartAside";
import { ROUTE } from "@src/utils/Routes";

import { OrderForm } from "./OrderForm";
import { Styled } from "./styles";

export const Cart: FC = () => {
  const { items } = useAppSelector((state) => state.cart);

  return (
    <Styled.PageContainer>
      <Styled.Items>
        <Styled.Title>Оформление заказа</Styled.Title>
        {items.length ? (
          <>
            <Styled.MobileTitle>Товары в корзине</Styled.MobileTitle>
            <Styled.AddedItems>
              {items.map((item) => {
                return <CartItem {...item} key={item.id} />;
              })}
            </Styled.AddedItems>
          </>
        ) : (
          <Styled.EmptyCart>
            Корзина пуста
            <Styled.EmptyCartLink to={ROUTE.HOME}>На главную</Styled.EmptyCartLink>
          </Styled.EmptyCart>
        )}

        <Styled.Recommendation>
          <ProductsSection data={RecommendatedItems} />
        </Styled.Recommendation>
      </Styled.Items>
      {items.length > 0 && (
        <Styled.Data>
          <Styled.MobileTitle>Оформление заказа</Styled.MobileTitle>
          <OrderForm />
        </Styled.Data>
      )}
    </Styled.PageContainer>
  );
};
