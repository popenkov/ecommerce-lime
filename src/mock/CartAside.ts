import productFirst from "@src/assets/images/products/product-1.jpg";
import productSecond from "@src/assets/images/products/product-2.jpg";
import { ItemsType } from "./MainPageData";

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
    img: "productFirst",
    amount: 0,
    name: "Макаронные изделия Макфа триколлини",
    price: "120 руб.",
    unit: "450г.",
  },
  {
    id: "2",
    img: "productFirst",
    amount: 0,
    name: "Макаронные изделия Макфа триколлини",
    price: "120 руб.",
    unit: "450г.",
  },
  {
    id: "3",
    img: "productFirst",
    amount: 0,
    name: "Макаронные изделия Макфа триколлини",
    price: "120 руб.",
    unit: "450г.",
  },
  {
    id: "4",
    img: "productFirst",
    amount: 0,
    name: "Макаронные изделия Макфа триколлини",
    price: "120 руб.",
    unit: "450г.",
  },
  {
    id: "5",
    img: "productFirst",
    amount: 0,
    name: "Макаронные изделия Макфа триколлини",
    price: "120 руб.",
    unit: "450г.",
  },
];

export const RecommendatedItems: ItemsType = {
  title: "Рекомендуем",
  color: "#FF5C00",
  button: {
    text: "Смотреть все",
    textMobile: "Все",
    href: "#",
  },
  items: [
    {
      id: "45d32341",
      img: "productFirst",
      amount: 1,
      unit: "450г.",
      category: "Бакалея",
      rating: {
        value: "4",
        amount: "3 253",
      },
      isFavorite: true,
      title: "Макаронные изделия Макфа Триколлини свитки",
      price: {
        price: 120,
        oldPrice: 140,
        discount: 15,
      },
      energy: [
        { name: "Б", value: "12" },
        { name: "Ж", value: "33" },
        { name: "У", value: "44" },
      ],
      button: "В корзину",
    },
    {
      id: "1322123",
      img: "productSecond",
      amount: 1,
      unit: "450г.",
      category: "Бакалея",
      rating: {
        value: "4",
        amount: "3 254",
      },
      isFavorite: true,
      title: "Макаронные изделия Макфа Триколлини свитки",
      price: {
        price: 120,
        oldPrice: null,
        discount: null,
      },
      energy: [
        { name: "Б", value: "12" },
        { name: "Ж", value: "33" },
        { name: "У", value: "44" },
      ],
      button: "В корзину",
    },
    {
      id: "211v1",
      img: "productSecond",
      amount: 1,
      unit: "450г.",
      category: "Бакалея",
      rating: {
        value: "4",
        amount: "3 254",
      },
      isFavorite: false,
      title: "Макаронные изделия Макфа Триколлини свитки",
      price: {
        price: 120,
        oldPrice: null,
        discount: null,
      },
      energy: [
        { name: "Б", value: "12" },
        { name: "Ж", value: "33" },
        { name: "У", value: "44" },
      ],
      button: "В корзину",
    },
    {
      id: "33545342334",
      img: "productSecond",
      amount: 1,
      unit: "450г.",
      category: "Бакалея",
      rating: {
        value: "4",
        amount: "3 254",
      },
      isFavorite: false,
      title: "Макаронные изделия Макфа Триколлини свитки",
      price: {
        price: 120,
        oldPrice: null,
        discount: null,
      },
      energy: [
        { name: "Б", value: "12" },
        { name: "Ж", value: "33" },
        { name: "У", value: "44" },
      ],
      button: "В корзину",
    },
    {
      id: "442342234",
      img: "productSecond",
      amount: 1,
      unit: "450г.",
      category: "Бакалея",
      rating: {
        value: "4",
        amount: "3 254",
      },
      isFavorite: false,
      title: "Макаронные изделия Макфа Триколлини свитки",
      price: {
        price: 120,
        oldPrice: null,
        discount: null,
      },
      energy: [
        { name: "Б", value: "12" },
        { name: "Ж", value: "33" },
        { name: "У", value: "44" },
      ],
      button: "В корзину",
    },
    {
      id: "33545sdasd34234",
      img: "productSecond",
      amount: 1,
      unit: "450г.",
      category: "Бакалея",
      rating: {
        value: "4",
        amount: "3 254",
      },
      isFavorite: false,
      title: "Макаронные изделия Макфа Триколлини свитки",
      price: {
        price: 120,
        oldPrice: null,
        discount: null,
      },
      energy: [
        { name: "Б", value: "12" },
        { name: "Ж", value: "33" },
        { name: "У", value: "44" },
      ],
      button: "В корзину",
    },
    {
      id: "4423x34",
      img: "productSecond",
      amount: 1,
      unit: "450г.",
      category: "Бакалея",
      rating: {
        value: "4",
        amount: "3 254",
      },
      isFavorite: false,
      title: "Макаронные изделия Макфа Триколлини свитки",
      price: {
        price: 120,
        oldPrice: null,
        discount: null,
      },
      energy: [
        { name: "Б", value: "12" },
        { name: "Ж", value: "33" },
        { name: "У", value: "44" },
      ],
      button: "В корзину",
    },
  ],
};
