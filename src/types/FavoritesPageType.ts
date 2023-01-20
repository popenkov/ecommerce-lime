import { ItemType, LinkType } from "./commonTypes";

export type CheckboxType = {
  id: string;
  text: string;
  inputName: string;
  inputValue: string;
  amount?: number;
  isChecked?: boolean;
};

type RangeType = {
  minPrice: number;
  maxPrice: number;
};

type FilterType = {
  title: string;
  type: string;
  items?: LinkType[] | CheckboxType[];
  range?: RangeType;
};

export type CatalogBannerType = {
  subtitle: string;
  title: string;
  background: string;
  img: string;
};

export type CatalogDeliveryType = {
  title: string;
  text: string;
  background: string;
  img: string;
  link: LinkType;
};

export type FavoritesPageType = {
  favoritesAmount: number;
  filters: FilterType[];
  products: ItemType[];
};
