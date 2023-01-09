import { FunctionComponent, SVGProps } from "react";

import { ReactComponent as CartIcon } from "@src/assets/icons/cart.svg";
import { ReactComponent as ClockIcon } from "@src/assets/icons/clock.svg";
import { ReactComponent as FavoritesIcon } from "@src/assets/icons/favorites.svg";
import { ReactComponent as PinIcon } from "@src/assets/icons/map-pin.svg";
import { ReactComponent as AccountIcon } from "@src/assets/icons/person.svg";
import { ReactComponent as PhoneIcon } from "@src/assets/icons/phone.svg";

export type HeaderLinkType = {
  id: string;
  text: string;
  href: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  underlined?: boolean;
};

type HeaderLinkContainerType = {
  [key: string]: HeaderLinkType[];
};

type HeaderDataType = {
  top: HeaderLinkContainerType;
  bottomLinks: HeaderLinkType[];
};

export const HeaderData: HeaderDataType = {
  top: {
    leftPart: [
      {
        id: "phone",
        text: "7756",
        href: "tel: 7756",
        icon: PhoneIcon,
        underlined: false,
      },
      {
        id: "delivery",
        text: "Зона доставки",
        href: "/delivery",
        icon: PinIcon,
        underlined: false,
      },
      {
        id: "time",
        text: "17:00 - 17:45",
        href: "/time",
        icon: ClockIcon,
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
      icon: AccountIcon,
      href: "/account",
    },
    {
      id: "favorites",
      text: "Избранное",
      icon: FavoritesIcon,
      href: "/favorites",
    },
    {
      id: "cart",
      text: "Корзина",
      icon: CartIcon,
      href: "/cart",
    },
  ],
};
