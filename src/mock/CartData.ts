import { CardDataType } from "@src/types/CardDataTypes";

export const CartData: CardDataType = {
  paymentMethods: [
    {
      name: "paymentMethod",
      id: "online",
      value: "online",
      text: "Картой онлайн",
      checked: true,
    },
    {
      name: "paymentMethod",
      id: "online-to-carrier",
      value: "online-to-carrier",
      text: "Картой курьеру",
      checked: false,
    },
    {
      name: "paymentMethod",
      id: "cash",
      value: "cash",
      text: "Наличными курьеру",
      checked: false,
    },
    {
      name: "paymentMethod",
      id: "certificate",
      value: "certificate",
      text: "Сертификатом",
      checked: false,
    },
  ],
};
