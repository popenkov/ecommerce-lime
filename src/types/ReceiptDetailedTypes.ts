import { SliderImagesType } from "@src/types/ProductPageTypes";
import { ChiefReceiptsType, EnergyType, RatingType } from "@src/types/commonTypes";
import { ChiefReceiptTagType } from "@src/types/MainPageTypes";
import { SelectOptionType } from "@src/components/UI/Select/select.interface";

export type ReceiptIngredientType = {
  id: string;
  text: string;
  amount: {
    value: number;
    unit: string;
  };
  price: string;
  img: string;
  energy: EnergyType[];
};

export type ReceiptDescriptionType = {
  title: string;
  rating: RatingType;
  tags: ChiefReceiptTagType[];
  portions: SelectOptionType[];
  ingredients: ReceiptIngredientType[];
};

export type ReceiptStepItemType = {
  id: string;
  img: string;
  title: string;
  text: string;
};

export type ReceiptStepsType = {
  title: string;
  color: string;
  text: string;
  rating: RatingType;
  steps: ReceiptStepItemType[];
};

export type ReceiptDetailedType = {
  sliderImages: SliderImagesType;
  description: ReceiptDescriptionType;
  receiptSteps: ReceiptStepsType;
  anotherReceipts: ChiefReceiptsType;
};