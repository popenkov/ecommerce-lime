import { FunctionComponent, SVGProps } from "react";

import { ItemType, LargeSliderType, NewsType, SingleNewsType } from "./commonTypes";

export type AdvantageType = {
  id: string;
  icon?: string;
  title: string;
  text: string;
};

export type ItemsType = {
  title: string;
  color: string;
  button: {
    text: string;
    textMobile: string;
    href: string;
  };
  items: ItemType[];
};

export type ReviewType = {
  id: string;
  name: string;
  text: string;
};

export type ReviewsType = {
  title: string;
  button: string;
  items: ReviewType[];
};

export type MainPageDataType = {
  slider: LargeSliderType[];
  advantages: AdvantageType[];
  news: NewsType;
  products: ItemsType[];
  reviews: ReviewsType;
};

export type ChiefReceiptIngredientType = {
  id: string;

  text: string;
  price: string;
  img: string;
};

export type ChiefReceiptTagType = {
  id: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  text: string;
};

export type ShowAllLink = {
  text: string;
  href: string;
};

export type ChiefReceiptItemType = {
  id: string;
  title: string;
  img: string;
  tags: ChiefReceiptTagType[];
  ingredients?: ChiefReceiptIngredientType[];
  button?: ShowAllLink;
};

export type ChiefReceiptsType = {
  title: string;
  subtitle: string;
  button?: ShowAllLink;
  items: ChiefReceiptItemType[];
  buttonText?: string;
  buttonHref?: string;
  isSmall?: boolean;
  hasAllItemsLink?: boolean;
  isOverflowVisible?: boolean;
};
