import { LinkType } from "@src/types/commonTypes";
import { ACCOUNT_ROUTES } from "@src/utils/Routes";

export const accountNavData: LinkType[] = [
  {
    id: "1",
    text: "Личная информация",
    href: ACCOUNT_ROUTES.ACCOUNT_PERSONAL,
  },
  {
    id: "2",
    text: "Настройки",
    href: ACCOUNT_ROUTES.ACCOUNT_SETTINGS,
  },
  {
    id: "3",
    text: "История покупок",
    href: ACCOUNT_ROUTES.ACCOUNT_HISTORY,
  },
];
