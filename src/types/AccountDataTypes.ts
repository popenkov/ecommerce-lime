import { LinkType } from "./commonTypes";

export type AccountDataType = {
  userData: {
    street: string;
    cardNumber: string;
  };
  accountNavData: LinkType[];
};
