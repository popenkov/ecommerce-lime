import { useAppSelector } from "@src/hooks/useAppSelector";
import { FC } from "react";

import { Styled } from "./styles";

export const TotalValue: FC = () => {
  const { totalPrice, discountAmount } = useAppSelector((state) => state.cart);

  const priceWithDiscount = totalPrice - discountAmount;

  const dataToDraw = [
    {
      id: "price",
      name: "Стоимость товаров,руб:",
      value: totalPrice,
    },
    {
      id: "discount",
      name: "Сумма скидки,руб:",
      value: discountAmount,
      valueColor: "#FF5C00",
    },
    {
      id: "total",
      name: "Итого,руб:",
      value: priceWithDiscount,
      isAccended: true,
    },
  ];

  return (
    <>
      {totalPrice > 0 && (
        <>
          <Styled.TotalValue>
            <Styled.ValuesContainer>
              {dataToDraw.map((item) => {
                return (
                  <Styled.ItemContainer key={item.id}>
                    <Styled.ItemKey>{item.name}</Styled.ItemKey>
                    <Styled.ItemValue isAccended={item.isAccended} valueColor={item.valueColor}>
                      {item.value}
                    </Styled.ItemValue>
                  </Styled.ItemContainer>
                );
              })}
            </Styled.ValuesContainer>

            <Styled.SubmitButton type="submit" form="order-form">
              Оформить заказ
            </Styled.SubmitButton>
          </Styled.TotalValue>
          <Styled.PromoLink to="#">У меня есть промокод!</Styled.PromoLink>
        </>
      )}
    </>
  );
};
