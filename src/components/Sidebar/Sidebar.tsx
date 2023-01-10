import { FC } from "react";
import { AsideEmptyCart } from "./AsideEmptyCart";
import { OrderConfirmation } from "./OrderConfirmation";
import { OrderContent } from "./OrderContent";

import { Styled } from "./styles";

export const Sidebar: FC = () => {
  const cartIsEmpty = false;

  return (
    <Styled.Sidebar>
      {cartIsEmpty ? <AsideEmptyCart /> : <OrderContent />}
      <OrderConfirmation />
    </Styled.Sidebar>
  );
};
