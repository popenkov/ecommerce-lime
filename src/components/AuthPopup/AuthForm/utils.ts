import * as yup from "yup";

export type AuthFormType = {
  email: string;
  password: string;
};

export const validationSchema = yup.object({
  email: yup.string().required("email").email("wrong email format"),
  password: yup.string(),
});

export const AgreementText = `Мы собираем ваши данные, нажимая кнопку “зарегистрироваться” вы соглашаетесь с нашими правилами -  вы можете ознакомиться со всеми правилами в пункте <a href="#">Политика конфиденциальности</a>`;
