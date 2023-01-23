import * as yup from "yup";

export type UserForm = {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
};

export const validationSchema = yup.object({
  name: yup.string().required("имя"),
  phone: yup.string().required("телефон").min(18, "телефон"),
  email: yup.string().email("почта"),
});
