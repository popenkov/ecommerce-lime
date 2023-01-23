import { HeaderDataType } from "@src/types/HeaderTypes";

export const HeaderData: HeaderDataType = {
  top: {
    leftPart: [
      {
        id: "phone",
        text: "7756",
        href: "tel: 7756",
        underlined: false,
      },
      {
        id: "delivery",
        text: "Зона доставки",
        href: "/delivery",
        underlined: false,
      },
      {
        id: "time",
        text: "17:00 - 17:45",
        href: "/time",
        underlined: false,
      },
    ],
    rightPart: [
      {
        id: "chief-lime",
        text: "Шеф-лайм",
        href: "/chief-lime",

        underlined: false,
      },
      {
        id: "vacancies",
        text: "Вакансии",
        href: "/vacancies",

        underlined: false,
      },
      {
        id: "faq",
        text: "Вопрос-ответ",
        href: "/faq",

        underlined: false,
      },
      {
        id: "bonuses",
        text: "Бонусная программа",
        href: "/bonuses",

        underlined: true,
      },
    ],
  },
  bottomLinks: [
    {
      id: "account",
      text: "Кабинет",
      href: "/account",
    },
    {
      id: "favorites",
      text: "Избранное",
      href: "/favorites",
    },
    {
      id: "cart",
      text: "Корзина",
      href: "/cart",
    },
  ],
};
