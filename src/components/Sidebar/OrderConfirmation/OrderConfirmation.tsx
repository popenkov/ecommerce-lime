import { FC, useEffect } from "react";

import { ReactComponent as CartIcon } from "@src/assets/icons/cart.svg";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { useAuth } from "@src/hooks/useAuth";

import { Styled } from "./styles";
import { useActions } from "@src/hooks/useActions";

export const OrderConfirmation: FC = () => {
  const { user } = useAuth();
  const { items, totalPrice, totalCount } = useAppSelector((state) => state.cart);
  const { openAuthPopup } = useActions();

  const handleOrderSubmit = () => {
    if (!user) {
      openAuthPopup();
      return;
    }
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
