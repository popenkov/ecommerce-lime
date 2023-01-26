export type paymentMethodType = {
  name: string;
  id: string;
  value: string;
  text: string;
  checked: boolean;
};

export type CardDataType = {
  paymentMethods: paymentMethodType[];
};
