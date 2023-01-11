import { CartItem, CategoryItem } from "@src/mock/CartAside";
import { ItemType } from "@src/mock/MainPageData";
import { FC } from "react";
import { SidebarItem } from "../SidebarItem/SidebarItem";

import { Styled } from "./styles";

type SidebarItemsProps = {
  //   data: CategoryItem[];
  data: ItemType[];
};

export const SidebarItems: FC<SidebarItemsProps> = ({ data }) => {
  console.log(data);
  return (
    <Styled.Container>
      <Styled.ItemsCategory>
        <Styled.Items>
          {data.map((item) => {
            return <SidebarItem {...item} key={item.id} />;
          })}
        </Styled.Items>
      </Styled.ItemsCategory>
    </Styled.Container>
  );
};
