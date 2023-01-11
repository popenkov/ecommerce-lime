import { useAppSelector } from "@src/hooks/useAppSelector";
import { FC } from "react";
import { AsideEmptyCart } from "./AsideEmptyCart";
import { OrderConfirmation } from "./OrderConfirmation";
import { OrderContent } from "./OrderContent";

import { Styled } from "./styles";

export const Sidebar: FC = () => {
  const { items } = useAppSelector((state) => state.cart);
  const isCartEmpty = !items.length;

  return (
    <Styled.Sidebar>
      {isCartEmpty ? <AsideEmptyCart /> : <OrderContent />}
      {!isCartEmpty && <OrderConfirmation />}
    </Styled.Sidebar>
  );
};
