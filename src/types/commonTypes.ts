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

export type EnergyType = { id: string; name: string; value: number | string };
