import { AccountDataType } from "@src/types/AccountDataTypes";
import { ACCOUNT_ROUTES } from "@src/utils/Routes";

export const AccountData: AccountDataType = {
  userDataMock: {
    street: "ул.Пимена-панчанки, д. 12, под. 4, кв. 312",
    cardNumber: "2200 8756 8777 3245",
  },
  accountNavData: [
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
  ],
};
