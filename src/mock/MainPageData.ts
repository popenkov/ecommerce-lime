import { ReactComponent as ChiefIcon } from "@src/assets/icons/chief.svg";
import { ReactComponent as OrderIcon } from "@src/assets/icons/order.svg";
import { ReactComponent as BellIcon } from "@src/assets/icons/reception-bell.svg";
import { ReactComponent as RecommendIcon } from "@src/assets/icons/recommended.svg";
import imageFirst from "@src/assets/images/main-slider/slider-img-1.png";
import imageSecond from "@src/assets/images/main-slider/slider-img-2.png";
import imageThird from "@src/assets/images/main-slider/slider-img-3.png";
import newsFirst from "@src/assets/images/news/news-1.jpg";
import newsSecond from "@src/assets/images/news/news-2.jpg";
import newsThird from "@src/assets/images/news/news-3.jpg";
import newsFourth from "@src/assets/images/news/news-4.jpg";
import productFirst from "@src/assets/images/products/product-1.jpg";
import productSecond from "@src/assets/images/products/product-2.jpg";

// receipts
import receiptFirst from "@src/assets/images/receipts/barbeque.jpg";
import ingredientFirst from "@src/assets/images/receipts/ingredientFirst.jpg";
import ingredientSecond from "@src/assets/images/receipts/ingredientSecond.jpg";
import ingredientThird from "@src/assets/images/receipts/ingredientThird.jpg";

import { ReactComponent as ClockIcon } from "@src/assets/icons/clock.svg";
import { ReactComponent as PortionIcon } from "@src/assets/icons/portion.svg";
import { FunctionComponent, SVGProps } from "react";

export type SlideType = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  color: string;
  link: {
    title: string;
    href: string;
  };
};

export type AdvantageType = {
  id: string;
  icon?: string;
  //   icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};

export type SingleNewsType = {
  id: string;
  img: string;
  title: string;
  text: string;
  link: {
    title: string;
    href: string;
  };
};

export type NewsType = {
  title: string;
  color: string;
  button: {
    text: string;
    href: string;
  };
  items: SingleNewsType[];
};

export type RatingType = {
  value: string;
  amount: string;
};
export type EnergyType = [
  { name: string; value: string },
  { name: string; value: string },
  { name: string; value: string }
];

export type ItemType = {
  id: string;
  img: string;
  amount: number;
  category: string;
  rating: RatingType;
  unit: string;
  isFavorite?: boolean;
  title: string;
  price: {
    price: number;
    oldPrice: number | null;
    discount: number | null;
  };
  energy: EnergyType;
  button?: string;
};

export type ItemsType = {
  title: string;
  color: string;
  button: {
    text: string;
    textMobile: string;
    href: string;
  };
  items: ItemType[];
};

export type ReviewType = {
  id: string;
  name: string;
  text: string;
};

export type ReviewsType = {
  title: string;
  button: string;
  items: ReviewType[];
};

export type MainPageDataType = {
  slider: SlideType[];
  advantages: AdvantageType[];
  news: NewsType;
  products: ItemsType[];
  reviews: ReviewsType;
};

export const MainPageData: MainPageDataType = {
  slider: [
    {
      id: "1",
      title: "ЛАЙМ ФРЕШ МАРКЕТ",
      subtitle: "Давайте знакомиться!",
      image: "imageFirst",
      color: " linear-gradient(90deg, #E53935 0%, #E35D5B 100%)",
      link: {
        title: "Узнать о нас",
        href: "#",
      },
    },
    {
      id: "2",
      title: "ЛАЙМ ФРЕШ МАРКЕТ",
      subtitle: "Давайте знакомиться!",
      image: "imageFirst",
      color: "linear-gradient(90deg, #1A2980 0%, #26D0CE 100%)",
      link: {
        title: "Узнать о нас",
        href: "#",
      },
    },
    {
      id: "3",
      title: "ЛАЙМ ФРЕШ МАРКЕТ",
      subtitle: "Давайте знакомиться!",
      image: "imageFirst",
      color: "linear-gradient(90deg, #C21500 0%, #FFC500 100%)",
      link: {
        title: "Узнать о нас",
        href: "#",
      },
    },
  ],
  advantages: [
    {
      id: "1",
      icon: "",
      //   icon: ChiefIcon,
      title: "Качество продуктов",
      text: "Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных",
    },
    {
      id: "2",
      icon: "",
      //   icon: OrderIcon,
      title: "Легкий заказ",
      text: "Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных",
    },
    {
      id: "3",
      icon: "",
      //   icon: BellIcon,
      title: "Доставка до двери",
      text: "Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных",
    },
    {
      id: "4",
      icon: "",
      //   icon: RecommendIcon,
      title: "Выбор покупателей",
      text: "Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных",
    },
  ],
  news: {
    title: "Новости Лайма",
    color: "#A1D214",
    button: {
      text: "Смотреть все",
      href: "#",
    },
    items: [
      {
        id: "1",
        img: "newsFirst",
        title: "Открытие нового магазина!",
        text: "Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных",
        link: {
          title: "Читать дальше",
          href: "#",
        },
      },
      {
        id: "2",
        img: "newsSecond",
        title: "Конкурс рецептов Лайма",
        text: "Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных",
        link: {
          title: "Читать дальше",
          href: "#",
        },
      },
      {
        id: "3",
        img: "newsThird",
        title: "Доставка теперь за 45 минут!",
        text: "Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных",
        link: {
          title: "Читать дальше",
          href: "#",
        },
      },
      {
        id: "4",
        img: "newsFourth",
        title: "Теперь и в Деливери!",
        text: "Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных",
        link: {
          title: "Читать дальше",
          href: "#",
        },
      },
    ],
  },
  products: [
    {
      title: "Акционные продукты",
      color: "linear-gradient(90deg, #FFA800 0%, #FFC709 100%), #A1D214;",
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
    },
    {
      title: "Новинки",
      color: " linear-gradient(90deg, #00D1FF 0%, #17BADE 0.01%, #14D28E 100%), #A1D214",
      button: {
        text: "Смотреть все",
        textMobile: "Все",
        href: "#",
      },
      items: [
        {
          id: "45s32341",
          img: "productFirst",
          amount: 1,
          unit: "450г.",
          category: "Бакалея",
          rating: {
            value: "4",
            amount: "3 253",
          },
          isFavorite: false,
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
          id: "1323123",
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
          id: "2111z",
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
          id: "335453242334",
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
          id: "44234234",
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
          id: "4a42334",
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
    },
    {
      title: "Выбор вегана",
      color: " linear-gradient(90deg, #76B852 0%, #8DC26F 100%), #A1D214;",
      button: {
        text: "Смотреть все",
        textMobile: "Все",
        href: "#",
      },
      items: [
        {
          id: "4f532341",
          img: "productFirst",
          amount: 1,
          unit: "450г.",
          category: "Бакалея",
          rating: {
            value: "4",
            amount: "3 253",
          },
          isFavorite: false,
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
          id: "13d2123",
          img: "productSecond",
          amount: 1,
          unit: "450г.",
          category: "Водичка",
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
          id: "2e111",
          img: "productSecond",
          amount: 1,
          unit: "450г.",
          category: "Водичка",
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
          id: "335453423412",
          img: "productSecond",
          amount: 1,
          unit: "450г.",
          category: "Водичка",
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
          id: "44d2334234",
          img: "productSecond",
          amount: 1,
          unit: "450г.",
          category: "Водичка",
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
          category: "Водичка",
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
          id: "44w2334",
          img: "productSecond",
          amount: 1,
          unit: "450г.",
          category: "Водичка",
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
    },
    {
      title: "Популярные товары",
      color: "  linear-gradient(90deg, #FF5C00 0%, #FF9900 100%), #A1D214;",
      button: {
        text: "Смотреть все",
        textMobile: "Все",
        href: "#",
      },
      items: [
        {
          id: "45323a41",
          img: "productFirst",
          amount: 1,
          unit: "450г.",
          category: "Бакалея",
          rating: {
            value: "4",
            amount: "3 253",
          },
          isFavorite: false,
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
          id: "13f2123",
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
          id: "211s1",
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
          id: "33545x34234",
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
          id: "442324234",
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
          id: "4423f34",
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
    },
  ],
  reviews: {
    title: "Отзывы о лайме",
    button: "Написать отзыв",
    items: [
      {
        id: "1",
        name: "Александр Петров",
        text: "Спасибо! Все вовремя, качество хорошее, даже в в пробки привезли в указанный срок...",
      },
      {
        id: "2",
        name: "Александр Петров",
        text: "Спасибо! Все вовремя, качество хорошее, даже в в пробки привезли в указанный срок...",
      },
      {
        id: "3",
        name: "Александр Петров",
        text: "Спасибо! Все вовремя, качество хорошее, даже в в пробки привезли в указанный срок...",
      },
      {
        id: "4",
        name: "Александр Петров",
        text: "Спасибо! Все вовремя, качество хорошее, даже в в пробки привезли в указанный срок...",
      },
      {
        id: "5",
        name: "Александр Петров",
        text: "Спасибо! Все вовремя, качество хорошее, даже в в пробки привезли в указанный срок...",
      },
    ],
  },
};

export type ChiefReceiptIngredientType = {
  id: string;

  text: string;
  price: string;
  img: string;
};
export type ChiefReceiptTagType = {
  id: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  text: string;
};
export type ChiefReceiptItemType = {
  id: string;
  title: string;
  img: string;
  tags: ChiefReceiptTagType[];
  ingredients: ChiefReceiptIngredientType[];
};

export type ChiefReceiptsType = {
  title: string;
  subtitle: string;
  items: ChiefReceiptItemType[];
};

export const ChiefReceiptsData: ChiefReceiptsType = {
  title: "Рецепты от шеф-лайма!",
  subtitle: "Соберите все необходимые продукты в один клик!",
  items: [
    {
      id: "1",
      title: "Курочка BARBEQUE",
      img: receiptFirst,
      tags: [
        { id: "1", icon: ClockIcon, text: "15 минут" },
        { id: "2", icon: PortionIcon, text: "4 порции" },
      ],
      ingredients: [
        {
          id: "1",
          text: "Колбаска",
          price: "5 руб",
          img: ingredientFirst,
        },
        {
          id: "2",
          text: "Маслины без косточки",
          price: "2,54 руб",
          img: ingredientSecond,
        },
        {
          id: "3",
          text: "Хлебушек",
          price: "1 руб",
          img: ingredientThird,
        },
      ],
    },
    {
      id: "2",
      title: "Курочка BARBEQUE",
      img: receiptFirst,
      tags: [
        { id: "1", icon: ClockIcon, text: "15 минут" },
        { id: "2", icon: PortionIcon, text: "4 порции" },
      ],
      ingredients: [
        {
          id: "1",
          text: "Колбаска",
          price: "5 руб",
          img: ingredientFirst,
        },
        {
          id: "2",
          text: "Маслины без косточки",
          price: "2,54 руб",
          img: ingredientSecond,
        },
        {
          id: "3",
          text: "Хлебушек",
          price: "1 руб",
          img: ingredientThird,
        },
      ],
    },
    {
      id: "3",
      title: "Курочка BARBEQUE",
      img: receiptFirst,
      tags: [
        { id: "1", icon: ClockIcon, text: "15 минут" },
        { id: "2", icon: PortionIcon, text: "4 порции" },
      ],
      ingredients: [
        {
          id: "1",
          text: "Колбаска",
          price: "5 руб",
          img: ingredientFirst,
        },
        {
          id: "2",
          text: "Маслины без косточки",
          price: "2,54 руб",
          img: ingredientSecond,
        },
        {
          id: "3",
          text: "Хлебушек",
          price: "1 руб",
          img: ingredientThird,
        },
      ],
    },
    {
      id: "4",
      title: "Курочка BARBEQUE",
      img: receiptFirst,
      tags: [
        { id: "1", icon: ClockIcon, text: "15 минут" },
        { id: "2", icon: PortionIcon, text: "4 порции" },
      ],
      ingredients: [
        {
          id: "1",
          text: "Колбаска",
          price: "5 руб",
          img: ingredientFirst,
        },
        {
          id: "2",
          text: "Маслины без косточки",
          price: "2,54 руб",
          img: ingredientSecond,
        },
        {
          id: "3",
          text: "Хлебушек",
          price: "1 руб",
          img: ingredientThird,
        },
      ],
    },
  ],
};
