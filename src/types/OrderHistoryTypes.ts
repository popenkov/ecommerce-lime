import { ItemType, LinkType } from "./commonTypes";

export type OrderHistoryType = {
  id: string;
  date: string;
  time: string;
  address: string;
  price: string;
  link: LinkType;
  products: ItemType[];
};
