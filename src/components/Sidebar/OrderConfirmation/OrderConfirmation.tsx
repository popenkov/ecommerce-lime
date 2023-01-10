import { FC } from "react";

import { ReactComponent as CartIcon } from "@src/assets/icons/cart.svg";
import { Styled } from "./styles";

const data = {
  sum: "120,85",
  amount: "12",
};

export const OrderConfirmation: FC = () => {
  return (
    <Styled.Confirmation>
      <Styled.ConfirmationWrapper>
        <Styled.PriceContainer>
          <Styled.PriceTitle>Итого,руб:</Styled.PriceTitle>
          <Styled.PriceValue>{data.sum}</Styled.PriceValue>
        </Styled.PriceContainer>

        <Styled.OrderButton>
          <Styled.OrderIcon>
            <CartIcon />
            {data.amount && <Styled.OrderAmount>{data.amount}</Styled.OrderAmount>}
          </Styled.OrderIcon>
          Подтвердить заказ
        </Styled.OrderButton>
      </Styled.ConfirmationWrapper>
    </Styled.Confirmation>
  );
};
