import { useAppSelector } from "@src/hooks/useAppSelector";
import { sidebarItems, popularItems } from "@src/mock/CartAside";
import { FC } from "react";
import { PopularItems } from "../PopularItems";
import { SidebarItems } from "../SidebarItems";

import { Styled } from "./styles";

export const OrderContent: FC = () => {
  const { items } = useAppSelector((state) => state.cart);

  return (
    <Styled.Content>
      {items && (
        <Styled.AddedItemsContainer>
          <SidebarItems data={items} />
        </Styled.AddedItemsContainer>
      )}
      {popularItems && (
        <Styled.PopularItemsContainer>
          <PopularItems data={popularItems} />
        </Styled.PopularItemsContainer>
      )}
      <Styled.Notification>
        Если товара не будет в наличии, его заменят на идентичный по свойствам и стоимости (с отклонением не более 50% в
        меньшую сторону).
      </Styled.Notification>
    </Styled.Content>
  );
};
