import { FunctionComponent, SVGProps } from "react";

import { ReactComponent as AppStoreIcon } from "@src/assets/icons/app-store.svg";
import { ReactComponent as FacebookIcon } from "@src/assets/icons/facebook.svg";
import { ReactComponent as PhoneIcon } from "@src/assets/icons/phone.svg";
import { ReactComponent as PlayMarketIcon } from "@src/assets/icons/play-market.svg";
import { ReactComponent as YoutubeIcon } from "@src/assets/icons/youtube.svg";

export type CopyrightType = {
  years: string;
  rights: string;
  agreement: {
    text: string;
    href: string;
  };
};

export type LinkType = {
  id: string;
  text: string;
  href: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
};

export type LinksType = {
  title: string;
  items: LinkType[];
};

export type ContactsType = {
  title: string;
  phone: LinkType;
  app: LinkType[];
  social: LinkType[];
};

type FooterDataType = {
  copyright: CopyrightType;
  links: LinksType[];

  contacts: ContactsType;
};

export const FooterData: FooterDataType = {
  copyright: {
    years: "© 2001–2021 ООО «Лайм»",
    rights: "Все права защищены. «Лайм» является зарегистрированным товарным знаком Lime Holding SA.",
    agreement: {
      text: "Политика Конфиденциальности",
      href: "/#",
    },
  },

  links: [
    {
      title: "О компании",
      items: [
        { id: "1", text: "Доставка и оплата", href: "#" },
        { id: "2", text: "Вопрос-ответ", href: "#" },
        { id: "3", text: "Поставщикам", href: "#" },
        { id: "4", text: "Контакты", href: "#" },
        { id: "5", text: "Новости", href: "#" },
        { id: "6", text: "Политика", href: "#" },
      ],
    },
    {
      title: "Покупателям",
      items: [
        { id: "1", text: "Бонусная система", href: "#" },
        { id: "2", text: "Как вернуть", href: "#" },
        { id: "3", text: "Как заказать", href: "#" },
        { id: "4", text: "Программа лояльности", href: "#" },
        { id: "5", text: "Акции", href: "#" },
        { id: "6", text: "Шеф-лайм", href: "#" },
      ],
    },
  ],

  contacts: {
    title: "Круглосуточная поддержка",
    phone: {
      id: "1",
      icon: PhoneIcon,
      text: "7756",
      href: "tel: 7756",
    },
    app: [
      {
        id: "1",
        icon: AppStoreIcon,
        text: "Скачать в AppStore",
        href: "#",
      },
      {
        id: "2",
        icon: PlayMarketIcon,
        text: "Скачать в Play Market",
        href: "#",
      },
    ],
    social: [
      {
        id: "1",
        icon: FacebookIcon,
        text: "",
        href: "#",
      },
      {
        id: "2",
        icon: YoutubeIcon,
        text: "",
        href: "#",
      },
      {
        id: "3",
        icon: FacebookIcon,
        text: "",
        href: "#",
      },
    ],
  },
};
