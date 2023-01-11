import { FC } from "react";

import { ReactComponent as CartIcon } from "@src/assets/icons/cart.svg";
import { Styled } from "./styles";
import { useAppSelector } from "@src/hooks/useAppSelector";

const data = {
  sum: "120,85",
  amount: "12",
};

export const OrderConfirmation: FC = () => {
  const { items, totalPrice, totalCount } = useAppSelector((state) => state.cart);

  const handleOrderSubmit = () => {
    const order = items.map((item) => item.title).join(", ");
    console.log("Ваш заказ:", order);
  };

  return (
    <Styled.Confirmation>
      <Styled.ConfirmationWrapper>
        <Styled.PriceContainer>
          <Styled.PriceTitle>Итого,руб:</Styled.PriceTitle>
          <Styled.PriceValue>{totalPrice} руб</Styled.PriceValue>
        </Styled.PriceContainer>

        <Styled.OrderButton onClick={handleOrderSubmit}>
          <Styled.OrderIcon>
            <CartIcon />
            <Styled.OrderAmount>{totalCount}</Styled.OrderAmount>
          </Styled.OrderIcon>
          Подтвердить заказ
        </Styled.OrderButton>
      </Styled.ConfirmationWrapper>
    </Styled.Confirmation>
  );
};
