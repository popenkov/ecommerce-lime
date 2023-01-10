import { sidebarItems, popularItems } from "@src/mock/CartAside";
import { FC } from "react";
import { PopularItems } from "../PopularItems";
import { SidebarItems } from "../SidebarItems";

import { Styled } from "./styles";

export const OrderContent: FC = () => {
  return (
    <Styled.Content>
      {sidebarItems && (
        <Styled.AddedItemsContainer>
          <SidebarItems data={sidebarItems} />
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
