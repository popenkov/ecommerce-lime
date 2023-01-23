export type CatalogChildType = {
  id: string;
  name: string;
  href: string;
};

export type CatalogChildrenType = {
  title: string;
  items: CatalogChildType[];
};
export type CatalogItemType = {
  id: string;
  icon: string;
  name: string;
  href: string;
  children?: CatalogChildrenType;
};

export const CatalogData: CatalogItemType[] = [
  {
    id: "1",
    icon: "GroceriesIcon",
    name: "Акционные товары",
    href: "#",
    children: {
      title: "Акционные товары",
      items: [
        {
          id: "1",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "2",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "3",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "4",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "5",
          name: "Собственное производство ",
          href: "#",
        },
      ],
    },
  },
  {
    id: "2",
    icon: "ChiefIcon",
    name: "Собственное производство ",
    href: "#",
    children: {
      title: "Акционные товары",
      items: [
        {
          id: "1",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "2",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "3",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "4",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "5",
          name: "Собственное производство ",
          href: "#",
        },
      ],
    },
  },
  {
    id: "3",
    icon: "FlourIcon",
    name: "Бакалея",
    href: "#",
    children: {
      title: "Акционные товары",
      items: [
        {
          id: "1",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "2",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "3",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "4",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "5",
          name: "Собственное производство ",
          href: "#",
        },
      ],
    },
  },
  {
    id: "4",
    icon: "SteakIcon",
    name: "Мясо и рыба",
    href: "#",
    children: {
      title: "Акционные товары",
      items: [
        {
          id: "1",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "2",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "3",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "4",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "5",
          name: "Собственное производство ",
          href: "#",
        },
      ],
    },
  },
  {
    id: "5",
    icon: "MilkIcon",
    name: "Молочные продукты",
    href: "#",
    children: {
      title: "Акционные товары",
      items: [
        {
          id: "1",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "2",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "3",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "4",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "5",
          name: "Собственное производство ",
          href: "#",
        },
      ],
    },
  },
  {
    id: "6",
    icon: "SaladIcon",
    name: "Фрукты, овощи",
    href: "#",
    children: {
      title: "Акционные товары",
      items: [
        {
          id: "1",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "2",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "3",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "4",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "5",
          name: "Собственное производство ",
          href: "#",
        },
      ],
    },
  },
  {
    id: "7",
    icon: "DumplingIcon",
    name: "Замороженные продукты",
    href: "#",
    children: {
      title: "Акционные товары",
      items: [
        {
          id: "1",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "2",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "3",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "4",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "5",
          name: "Собственное производство ",
          href: "#",
        },
      ],
    },
  },
  {
    id: "8",
    icon: "WaterIcon",
    name: "Вода, напитки, соки",
    href: "#",
    children: {
      title: "Акционные товары",
      items: [
        {
          id: "1",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "2",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "3",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "4",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "5",
          name: "Собственное производство ",
          href: "#",
        },
      ],
    },
  },
  {
    id: "9",
    icon: "ToastIcon",
    name: "Хлеб, кондитерские изделия",
    href: "#",
    children: {
      title: "Акционные товары",
      items: [
        {
          id: "1",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "2",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "3",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "4",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "5",
          name: "Собственное производство ",
          href: "#",
        },
      ],
    },
  },
  {
    id: "10",
    icon: "ToastIcon",
    name: "Хлеб, кондитерские изделия",
    href: "#",
    children: {
      title: "Акционные товары",
      items: [
        {
          id: "1",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "2",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "3",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "4",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "5",
          name: "Собственное производство ",
          href: "#",
        },
      ],
    },
  },
  {
    id: "11",
    icon: "TeaIcon",
    name: "Чай, кофе",
    href: "#",
    children: {
      title: "Акционные товары",
      items: [
        {
          id: "1",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "2",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "3",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "4",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "5",
          name: "Собственное производство ",
          href: "#",
        },
      ],
    },
  },
  {
    id: "12",
    icon: "GrainIcon",
    name: "Здоровое питание",
    href: "#",
    children: undefined,
  },
  {
    id: "13",
    icon: "GingerbreadIcon",
    name: "Детское питание",
    href: "#",
    children: {
      title: "Акционные товары",
      items: [
        {
          id: "1",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "2",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "3",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "4",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "5",
          name: "Собственное производство ",
          href: "#",
        },
      ],
    },
  },
  {
    id: "14",
    icon: "CookingIcon",
    name: "Товары восточной кухни",
    href: "#",
    children: undefined,
  },
  {
    id: "15",
    icon: "CondimentIcon",
    name: "Бытовая химия, хозтовары",
    href: "#",
    children: {
      title: "Акционные товары",
      items: [
        {
          id: "1",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "2",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "3",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "4",
          name: "Собственное производство ",
          href: "#",
        },
        {
          id: "5",
          name: "Собственное производство ",
          href: "#",
        },
      ],
    },
  },
  {
    id: "16",
    icon: "CondimentIcon",
    name: "Зоотовары",
    href: "#",
    children: undefined,
  },
];
