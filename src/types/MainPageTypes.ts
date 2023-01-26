import { FunctionComponent, SVGProps } from "react";

import { ItemType, LargeSliderType, NewsType } from "./commonTypes";

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
