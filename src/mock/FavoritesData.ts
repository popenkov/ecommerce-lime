import { CatalogPageType } from "@src/types/CatalogPageTypes";

import bannerImg from "@src/assets/images/catalog/banner-img.png";
import deliveryImg from "@src/assets/images/catalog/delivery-img.png";
import { FavoritesPageType } from "@src/types/FavoritesPageType";

export const FavoritesData: FavoritesPageType = {
  favoritesAmount: 128,
  filters: [
    {
      title: "Категории",
      type: "links",
      items: [
        {
          id: "1",
          text: "Кексы",
          href: "#",
        },
        {
          id: "2",
          text: "Пироги",
          href: "#",
        },
        {
          id: "3",
          text: "сладости  ",
          href: "#",
        },
        {
          id: "4",
          text: "Круассаны",
          href: "#",
        },
        {
          id: "5",
          text: "Печенье",
          href: "#",
        },
        {
          id: "6",
          text: "Сдобы",
          href: "#",
        },
        {
          id: "7",
          text: "Слойки",
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
          amount: 12,
        },
        {
          id: "2",
          text: "Пироги",
          inputName: "brands",
          inputValue: "pirogi",
          amount: 432,
        },
        {
          id: "3",
          text: "Сладости",
          inputName: "brands",
          inputValue: "vostok-sladosti",
          amount: 54,
        },
        {
          id: "4",
          text: "Круассаны",
          inputName: "brands",
          inputValue: "cruassans",
          amount: 14,
          isChecked: true,
        },
        {
          id: "5",
          text: "Печенье",
          inputName: "brands",
          inputValue: "cookies",
          amount: 12,
        },
        {
          id: "6",
          text: "Сдобы",
          inputName: "brands",
          inputValue: "sdoby",
          amount: 2,
        },
        {
          id: "7",
          text: "Слойки",
          inputName: "brands",
          inputValue: "sloyki",
          amount: 16,
        },
      ],
    },
  ],
  products: [
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
        { id: "proteins", name: "Белки", value: 12 },
        { id: "fats", name: "Жиры", value: 23 },
        { id: "carbohydrate", name: "Углеводы", value: 12 },
      ],
      button: { text: "Добавить в корзину", mobileText: "В корзину" },
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
        { id: "proteins", name: "Белки", value: 12 },
        { id: "fats", name: "Жиры", value: 23 },
        { id: "carbohydrate", name: "Углеводы", value: 12 },
      ],
      button: { text: "Добавить в корзину", mobileText: "В корзину" },
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
        { id: "proteins", name: "Белки", value: 12 },
        { id: "fats", name: "Жиры", value: 23 },
        { id: "carbohydrate", name: "Углеводы", value: 12 },
      ],
      button: { text: "Добавить в корзину", mobileText: "В корзину" },
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
        { id: "proteins", name: "Белки", value: 12 },
        { id: "fats", name: "Жиры", value: 23 },
        { id: "carbohydrate", name: "Углеводы", value: 12 },
      ],
      button: { text: "Добавить в корзину", mobileText: "В корзину" },
    },
  ],
};
