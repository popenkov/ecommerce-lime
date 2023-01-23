import * as yup from "yup";

export type UserForm = {
  name: string;
  surname: string;
  fatherName: string;
  phone: string;
  email: string;
  dob: string;
  savedAddress: string;
  address: string;
  entrance: string;
  floor: string;
  flat: string;
};

export type NotificationsForm = {
  newsAgreement: string;
  newsAgreementSecond: string;
};

export const validationSchema = yup.object({
  name: yup.string().required("имя"),
  phone: yup.string().required("телефон").min(18, "телефон"),
  email: yup.string().email("почта"),
});
export const notificationValidationSchema = yup.object({
  name: yup.string().required("имя"),
  phone: yup.string().required("телефон").min(18, "телефон"),
  email: yup.string().email("почта"),
});
