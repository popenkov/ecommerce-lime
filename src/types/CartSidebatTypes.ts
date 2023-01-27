import { ItemsType } from "@src/types/MainPageTypes";
import { SidebarItem, SidebarItemsSection } from "@src/types/SidebarCartTypes";

export type CartAsideType = {
  sidebarItems: SidebarItemsSection[];
  popularItems: SidebarItem[];
  recommendatedItems: ItemsType;
};
