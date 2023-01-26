import { SelectOptionType } from "@src/components/UI/Select/select.interface";
import { FilterType } from "./CatalogPageTypes";
import { ChiefReceiptItemType, ChiefReceiptsType } from "./commonTypes";
import { ShowAllLink } from "./MainPageTypes";

export type ReceiptsType = {
  title: string;
  resultsAmount: number;
  resultWords: string[];
  filters: FilterItemType[];
  mobileFilters: FilterType[];
  receipts: ReceiptsSectionType[];
};

type FilterItemType = {
  id: string;
  title: string;
  items: SelectOptionType[];
};

export type ReceiptsSectionType = {
  title: string;
  color?: string;

  button?: ShowAllLink;
  items: ChiefReceiptItemType[];
  buttonText?: string;
  buttonHref?: string;
  isSmall?: boolean;
  hasAllItemsLink?: boolean;
  isOverflowVisible?: boolean;
};
