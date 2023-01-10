import productFirst from "@src/assets/images/products/product-1.jpg";
import productSecond from "@src/assets/images/products/product-2.jpg";

export type CategoryItem = {
  title: string;
  items: CartItem[];
};

export type CartItem = {
  id: string;
  img: string;
  amount: number;
  name: string;
  price: string;
  unit: string;
};

export const sidebarItems: CategoryItem[] = [
  {
    title: "Бакалея",
    items: [
      {
        id: "1",
        img: productFirst,
        amount: 2,
        name: "Макаронные изделия Макфа триколлини",
        price: "120 руб.",
        unit: "450г.",
      },
      {
        id: "2",
        img: productFirst,
        amount: 2,
        name: "Макаронные изделия Макфа триколлини",
        price: "120 руб.",
        unit: "450г.",
      },
      {
        id: "3",
        img: productFirst,
        amount: 2,
        name: "Макаронные изделия Макфа триколлини",
        price: "120 руб.",
        unit: "450г.",
      },
    ],
  },
  {
    title: "Вода, напитки",
    items: [
      {
        id: "1",
        img: productSecond,
        amount: 2,
        name: "Макаронные изделия Макфа триколлини",
        price: "120 руб.",
        unit: "450г.",
      },
    ],
  },
  {
    title: "Другие товары",
    items: [
      {
        id: "1",
        img: productSecond,
        amount: 2,
        name: "Пакет-майка Белый Большой",
        price: "120 руб.",
        unit: "450г.",
      },
    ],
  },
];

export const popularItems: CartItem[] = [
  {
    id: "1",
    img: productFirst,
    amount: 0,
    name: "Макаронные изделия Макфа триколлини",
    price: "120 руб.",
    unit: "450г.",
  },
  {
    id: "2",
    img: productFirst,
    amount: 0,
    name: "Макаронные изделия Макфа триколлини",
    price: "120 руб.",
    unit: "450г.",
  },
  {
    id: "3",
    img: productFirst,
    amount: 0,
    name: "Макаронные изделия Макфа триколлини",
    price: "120 руб.",
    unit: "450г.",
  },
  {
    id: "4",
    img: productFirst,
    amount: 0,
    name: "Макаронные изделия Макфа триколлини",
    price: "120 руб.",
    unit: "450г.",
  },
  {
    id: "5",
    img: productFirst,
    amount: 0,
    name: "Макаронные изделия Макфа триколлини",
    price: "120 руб.",
    unit: "450г.",
  },
];
