import { ChiefReceiptIngredientType, ChiefReceiptTagType, ShowAllLink } from "./MainPageTypes";

export type ItemType = {
  id: string;
  img: string;
  amount: number;
  category: string;
  rating: RatingType;
  unit: string;
  isFavorite?: boolean;
  title: string;
  price: PriceType;
  energy: EnergyType[];
  button: ButtonType;
};

export type ButtonType = {
  text: string;
  mobileText: string;
};

export type PriceType = {
  price: number;
  oldPrice?: number | null;
  discount?: number | null;
  unit?: string;
};

export type RatingType = {
  value: string;
  amount: string;
};

export type LinkType = {
  text: string;
  href: string;
  id: string;
  icon?: string;
  isActive?: boolean;
  underlined?: boolean;
};

export type ImageType = {
  id: string;
  img: string;
  alt: string;
};

export type LargeSliderType = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  color?: string;
  link: {
    title: string;
    href: string;
  };
};

export type NewsType = {
  title: string;
  color: string;
  button: {
    text: string;
    href: string;
  };
  items: SingleNewsType[];
};

export type SingleNewsType = {
  id: string;
  img: string;
  title: string;
  text: string;
  link: {
    title: string;
    href: string;
  };
};

export type EnergyType = { id: string; name: string; value: number | string };

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
  color?: string;
  subtitle: string;
  button?: ShowAllLink;
  items: ChiefReceiptItemType[];
  buttonText?: string;
  buttonHref?: string;
  isSmall?: boolean;
  hasAllItemsLink?: boolean;
  isOverflowVisible?: boolean;
};
