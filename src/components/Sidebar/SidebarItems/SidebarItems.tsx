import { FC, memo } from "react";

import { ItemType } from "@src/types/commonTypes";

import { SidebarItem } from "../SidebarItem/SidebarItem";
import { Styled } from "./styles";

type SidebarItemsProps = {
  data: ItemType[];
};

export const SidebarItems: FC<SidebarItemsProps> = memo(({ data }) => {
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
});

SidebarItems.displayName = "SidebarItems";
