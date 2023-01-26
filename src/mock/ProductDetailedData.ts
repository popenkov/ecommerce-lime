import { ReactComponent as ClockIcon } from "@src/assets/icons/clock.svg";
import { ReactComponent as PortionIcon } from "@src/assets/icons/portion.svg";
import productMain from "@src/assets/images/product/product-main.jpg";
import productThumb from "@src/assets/images/product/product-thumb.jpg";
import receiptFirst from "@src/assets/images/receipts/barbeque.jpg";
import ingredientFirst from "@src/assets/images/receipts/ingredientFirst.jpg";
import ingredientSecond from "@src/assets/images/receipts/ingredientSecond.jpg";
import ingredientThird from "@src/assets/images/receipts/ingredientThird.jpg";
import { ProductDetailedType } from "@src/types/ProductPageTypes";

export const productDetailedData: ProductDetailedType = {
  sliderImages: {
    main: [
      {
        id: "1",
        text: "test",
        img: productMain,
      },
      {
        id: "2",
        text: "test",
        img: productMain,
      },
      {
        id: "3",
        text: "test",
        img: productMain,
      },
      {
        id: "4",
        text: "test",
        img: productMain,
      },
      {
        id: "5",
        text: "test",
        img: productMain,
      },
      {
        id: "6",
        text: "test",
        img: productMain,
      },
    ],
    thumb: [
      {
        id: "1",
        text: "test",
        img: productThumb,
      },
      {
        id: "2",
        text: "test",
        img: productThumb,
      },
      {
        id: "3",
        text: "test",
        img: productThumb,
      },
      {
        id: "4",
        text: "test",
        img: productThumb,
      },
      {
        id: "5",
        text: "test",
        img: productThumb,
      },
      {
        id: "6",
        text: "test",
        img: productThumb,
      },
    ],
    isFavorite: true,
  },
  overview: {
    title: "Смесь мучная уладар «Мука для блинов плюс»",
    expireDate: "12 дней",
    rating: { value: "4.2", amount: "123231" },
    price: {
      price: 120,
      unit: "450 г.",
    },
    coins: {
      amount: 12,
    },
    energy: [
      {
        id: "1",
        name: "Белки",
        value: 2.5,
      },
      {
        id: "2",
        name: "Жиры",
        value: 20,
      },
      {
        id: "3",
        name: "Углеводы",
        value: 2.9,
      },
      {
        id: "4",
        name: "Эн. цен.",
        value: "200 ккал/ 830кДж",
      },
    ],

    receipts: {
      title: "Рецепты с этим товаром",
      subtitle: "",
      button: {
        text: "Смотреть все",
        href: "#",
      },
      items: [
        {
          id: "1",
          title: "Курочка BARBEQUE",
          img: receiptFirst,
          tags: [
            { id: "1", icon: ClockIcon, text: "15 минут" },
            { id: "2", icon: PortionIcon, text: "4 порции" },
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
        },
        {
          id: "3",
          title: "Курочка BARBEQUE",
          img: receiptFirst,
          tags: [
            { id: "1", icon: ClockIcon, text: "15 минут" },
            { id: "2", icon: PortionIcon, text: "4 порции" },
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
        },
      ],
    },
  },
  descripion: {
    title: "О товаре",
    color: "#A1D214",
    description: [
      {
        id: "1",
        title: "Состав продукта",
        text: "Молоко цельное, молоко обезжиренное, бактериальная закваска молочнокислых микроорганизмов, натуральный молокосвертывающий ферментный препарат микробного происхождения - химозин. Количество молочнокислых микроорганизмов в конце срока годности, КОЕ/г - не 1х10/6.",
      },
      {
        id: "2",
        title: "Производитель",
        text: "ЗАО 'Смолевичи молоко', 222201, Минская обл., г. Смолевичи, ул. Социалистическая, 54Б, Республика Беларусь. ЗАО 'Смолевичи молоко', 222201, Минская обл., г. Смолевичи, ул. Социалистическая, 54Б, Республика Беларусь.",
      },
    ],
  },
  reviews: {
    title: "Отзывы покупателей",
    color: "#A1D214",
    subtitle: { value: 3254, text: "отзывов" },
    filter: [
      {
        id: "1",
        text: "Сначала новые",
        isActive: true,
      },
      { id: "2", text: "По популярности", isActive: false },
    ],

    reviews: [
      {
        id: "1",
        name: "Елена",
        rating: {
          value: "4",
          amount: "123321",
        },
        date: "18 июля 2020 г.",
        text: "Замечательный продукт! Каждый день беру его и едим всей семьей! Мука что надо, булочки пышные!",
        useFullReactions: "2",
      },
      {
        id: "2",
        name: "Елена",
        rating: {
          value: "4",
          amount: "123321",
        },
        date: "18 июля 2020 г.",
        text: "Замечательный продукт! Каждый день беру его и едим всей семьей! Мука что надо, булочки пышные!",
        useFullReactions: "2",
      },
    ],
  },
};
