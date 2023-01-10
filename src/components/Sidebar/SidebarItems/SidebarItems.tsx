import { CartItem, CategoryItem } from "@src/mock/CartAside";
import { FC } from "react";
import { SidebarItem } from "../SidebarItem/SidebarItem";

import { Styled } from "./styles";

type SidebarItemsProps = {
  data: CategoryItem[];
};

export const SidebarItems: FC<SidebarItemsProps> = ({ data }) => {
  return (
    <Styled.Container>
      {data.map((item) => {
        return (
          <Styled.ItemsCategory key={item.title}>
            <Styled.Title>{item.title}</Styled.Title>
            <Styled.Items>
              {item.items.map((item) => {
                return <SidebarItem {...item} key={item.id} />;
              })}
            </Styled.Items>
          </Styled.ItemsCategory>
        );
      })}
    </Styled.Container>
  );
};