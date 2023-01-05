import imageFirst from '@src/assets/images/main-slider/slider-img-1.png';
import imageSecond from '@src/assets/images/main-slider/slider-img-2.png';
import imageThird from '@src/assets/images/main-slider/slider-img-3.png';

import { ReactComponent as ChiefIcon } from '@src/assets/icons/chief.svg';
import { ReactComponent as OrderIcon } from '@src/assets/icons/order.svg';
import { ReactComponent as BellIcon } from '@src/assets/icons/reception-bell.svg';
import { ReactComponent as RecommendIcon } from '@src/assets/icons/recommended.svg';

import newsFirst from '@src/assets/images/news/news-1.jpg';
import newsSecond from '@src/assets/images/news/news-2.jpg';
import newsThird from '@src/assets/images/news/news-3.jpg';
import newsFourth from '@src/assets/images/news/news-4.jpg';

import productFirst from '@src/assets/images/products/product-1.jpg';
import productSecond from '@src/assets/images/products/product-2.jpg';

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
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
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

export type ItemType = {
  id: string;
  img: string;
  rating: RatingType;
  isFavorite: boolean;
  title: string;
  price: {
    price: string;
    oldPrice: string | null;
  };
  button: string;
};

export type ItemsType = {
  title: string;
  color: string;
  button: {
    text: string;
    href: string;
  };
  items: ItemType[];
};

type MainPageDataType = {
  slider: SlideType[];
  advantages: AdvantageType[];
  news: NewsType;
  promoItems: ItemsType;
};

export const MainPageData: MainPageDataType = {
  slider: [
    {
      id: '1',
      title: 'ЛАЙМ ФРЕШ МАРКЕТ',
      subtitle: 'Давайте знакомиться!',
      image: imageFirst,
      color: ' linear-gradient(90deg, #E53935 0%, #E35D5B 100%)',
      link: {
        title: 'Узнать о нас',
        href: '#',
      },
    },
    {
      id: '2',
      title: 'ЛАЙМ ФРЕШ МАРКЕТ',
      subtitle: 'Давайте знакомиться!',
      image: imageFirst,
      color: 'linear-gradient(90deg, #1A2980 0%, #26D0CE 100%)',
      link: {
        title: 'Узнать о нас',
        href: '#',
      },
    },
    {
      id: '3',
      title: 'ЛАЙМ ФРЕШ МАРКЕТ',
      subtitle: 'Давайте знакомиться!',
      image: imageFirst,
      color: 'linear-gradient(90deg, #C21500 0%, #FFC500 100%)',
      link: {
        title: 'Узнать о нас',
        href: '#',
      },
    },
  ],
  advantages: [
    {
      id: '1',
      icon: ChiefIcon,
      title: 'Качество продуктов',
      text: 'Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных',
    },
    {
      id: '2',
      icon: OrderIcon,
      title: 'Легкий заказ',
      text: 'Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных',
    },
    {
      id: '3',
      icon: BellIcon,
      title: 'Доставка до двери',
      text: 'Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных',
    },
    {
      id: '4',
      icon: RecommendIcon,
      title: 'Выбор покупателей',
      text: 'Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных',
    },
  ],
  news: {
    title: 'Новости Лайма',
    color: '#A1D214',
    button: {
      text: 'Смотреть все',
      href: '#',
    },
    items: [
      {
        id: '1',
        img: newsFirst,
        title: 'Открытие нового магазина!',
        text: 'Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных',
        link: {
          title: 'Читать дальше',
          href: '#',
        },
      },
      {
        id: '2',
        img: newsSecond,
        title: 'Конкурс рецептов Лайма',
        text: 'Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных',
        link: {
          title: 'Читать дальше',
          href: '#',
        },
      },
      {
        id: '3',
        img: newsThird,
        title: 'Доставка теперь за 45 минут!',
        text: 'Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных',
        link: {
          title: 'Читать дальше',
          href: '#',
        },
      },
      {
        id: '4',
        img: newsFourth,
        title: 'Теперь и в Деливери!',
        text: 'Выбирайте из 40 000 товаров: у нас есть фрукты и овощи, мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных  мясо и рыба, все для дома и товары для животных',
        link: {
          title: 'Читать дальше',
          href: '#',
        },
      },
    ],
  },
  promoItems: {
    title: 'Акционные продукты',
    color: 'linear-gradient(90deg, #FFA800 0%, #FFC709 100%), #A1D214;',
    button: {
      text: 'Смотреть все',
      href: '#',
    },
    items: [
      {
        id: '1',
        img: productFirst,
        rating: {
          value: '4',
          amount: '3 253',
        },
        isFavorite: false,
        title: 'Макаронные изделия Макфа Триколлини свитки',
        price: {
          price: '120 руб.',
          oldPrice: '140 руб.',
        },
        button: 'В корзину',
      },
      {
        id: '1',
        img: productSecond,
        rating: {
          value: '4',
          amount: '3 254',
        },
        isFavorite: false,
        title: 'Макаронные изделия Макфа Триколлини свитки',
        price: {
          price: '120 руб.',
          oldPrice: null,
        },
        button: 'В корзину',
      },
    ],
  },
};
