import * as yup from "yup";

export type AuthFormType = {
  password: string;
  phone: string;
};

export const validationSchema = yup.object({
  password: yup.string().required("имя"),
  phone: yup.string().required("телефон").min(18, "телефон"),
});

export const AgreementText = `Мы собираем ваши данные, нажимая кнопку “зарегистрироваться” вы соглашаетесь с нашими правилами -  вы можете ознакомиться со всеми правилами в пункте <a href="#">Политика конфиденциальности</a>`;
