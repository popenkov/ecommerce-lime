import { SortingType } from "@src/types/sortingTypes";

export const sortData: SortingType = {
  itemsAmountOptions: [
    {
      value: "20",
      label: "По 20 товаров",
    },
    {
      value: "40",
      label: "По 40 товаров",
    },
    {
      value: "80",
      label: "По 80 товаров",
    },
  ],
  sortingOptions: [
    {
      value: "default",
      label: "По популярности",
    },
    {
      value: "desc",
      label: "По убыванию",
    },
    {
      value: "incr",
      label: "По возрастанию",
    },
  ],
};
