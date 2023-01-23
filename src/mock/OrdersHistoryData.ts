import { OrderHistoryType } from "@src/types/OrderHistoryTypes";

export const historyData: OrderHistoryType[] = [
  {
    id: "1",
    date: "12.03.2020",
    time: "12:45",
    address: "ул.Пимена-панчанки, д. 12, под. 4, кв. 312",
    price: "956 руб",
    link: {
      text: "Смотреть все",
      href: "#",
      id: "#",
    },
    products: [
      {
        id: "2341",
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
        id: "123",
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
        id: "2v1",
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
  },
  {
    id: "2fds",
    date: "12.03.2020",
    time: "12:45",
    address: "ул.Пимена-панчанки, д. 12, под. 4, кв. 312",
    price: "956 руб",
    link: {
      text: "Смотреть все",
      href: "#",
      id: "#",
    },
    products: [
      {
        id: "2341",
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
        id: "d",
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
        id: "2fv1",
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
        id: "2z341",
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
        id: "1v23",
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
        id: "2qwv1",
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
        id: "22341",
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
        id: "17h",
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
        id: "2vds1",
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
  },
];
