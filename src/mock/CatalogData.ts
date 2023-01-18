export type LinkType = {
  id: string;
  name: string;
  href: string;
  isActive?: boolean;
};

export type CheckboxType = {
  id: string;
  text: string;
  inputName: string;
  inputValue: string;
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

type CatalogType = {
  searchQuery: string;
  searchAmount: number;
  filters: FilterType[];
  taps: LinkType[];
};

export const catalogData: CatalogType = {
  searchQuery: "Питьевая вода",
  searchAmount: 128,
  filters: [
    {
      title: "Категории",
      type: "links",
      items: [
        {
          id: "1",
          name: "Кексы",
          href: "#",
        },
        {
          id: "2",
          name: "Пироги",
          href: "#",
        },
        {
          id: "3",
          name: "Восточные сладости  ",
          href: "#",
        },
        {
          id: "4",
          name: "Круассаны",
          href: "#",
          isActive: true,
        },
        {
          id: "5",
          name: "Печенье",
          href: "#",
        },
        {
          id: "6",
          name: "Сдобы",
          href: "#",
        },
        {
          id: "7",
          name: "Слойки",
          href: "#",
        },
      ],
    },
    {
      title: "Диапазон цен",
      type: "range",
      range: { minPrice: 0, maxPrice: 9999 },
    },
    {
      title: "Брэнды",
      type: "checkboxes",
      items: [
        {
          id: "1",
          text: "Кексы",
          inputName: "brands",
          inputValue: "keksy",
        },
        {
          id: "2",
          text: "Пироги",
          inputName: "brands",
          inputValue: "pirogi",
        },
        {
          id: "3",
          text: "Восточные сладости",
          inputName: "brands",
          inputValue: "vostok-sladosti",
        },
        {
          id: "4",
          text: "Круассаны",
          inputName: "brands",
          inputValue: "cruassans",
          isChecked: true,
        },
        {
          id: "5",
          text: "Печенье",
          inputName: "brands",
          inputValue: "cookies",
        },
        {
          id: "6",
          text: "Сдобы",
          inputName: "brands",
          inputValue: "sdoby",
        },
        {
          id: "7",
          text: "Слойки",
          inputName: "brands",
          inputValue: "sloyki",
        },
      ],
    },
  ],
  taps: [
    {
      id: "1",
      name: "5 — 12 руб",
      href: "#",
    },
    {
      id: "2",
      name: "Кексы",
      href: "#",
    },
    {
      id: "3",
      name: "5 — 12 руб",
      href: "#",
    },
    {
      id: "4",
      name: "Кексы",
      href: "#",
    },
  ],
};
