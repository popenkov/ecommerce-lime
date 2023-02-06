import { FC, useEffect } from "react";
import { useNavigate } from "react-router";

import { ReactComponent as CartIcon } from "@src/assets/icons/cart.svg";
import { useActions } from "@src/hooks/useActions";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { useAuth } from "@src/hooks/useAuth";

import { Styled } from "./styles";

export const OrderConfirmation: FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { items, totalPrice, totalCount } = useAppSelector((state) => state.cart);
  const { openAuthPopup } = useActions();

  const handleOrderSubmit = () => {
    if (!user) {
      openAuthPopup();
      return;
    }
    navigate("/cart");
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
