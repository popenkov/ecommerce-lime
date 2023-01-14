import * as yup from "yup";

export type RequestFormType = {
  name: string;
  phone: string;
  email: string;
  savedAddress: string;
  address: string;
  entrance: string;
  floor: string;
  flat: string;
  time: string;
};

export const validationSchema = yup.object({
  name: yup.string().required("имя"),
  phone: yup.string().required("телефон").min(18, "телефон"),
  email: yup.string().email("почта"),
});
