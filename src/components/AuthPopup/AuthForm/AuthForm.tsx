import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";
import { SubmitHandler, Controller, useForm } from "react-hook-form";

import { FormInput } from "@src/components/UI/FormInput";
import { FormSubmitBtn } from "@src/components/UI/FormSubmitBtn/FormSubmitBtn";
import { useActions } from "@src/hooks/useActions";

import { Styled } from "./styles";
import { AgreementText, AuthFormType, validationSchema } from "./utils";
export const AuthForm: FC = () => {
  const { closeAuthPopup } = useActions();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm<AuthFormType>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const { login } = useActions();

  const handleFormSubmit: SubmitHandler<AuthFormType> = (data) => {
    reset();
    login(data);
    closeAuthPopup();
  };

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit(handleFormSubmit)} id="auth-form">
        <Styled.FormTitle>Введите ваши данные для входа</Styled.FormTitle>
        <Styled.InputsContainer>
          <Styled.InputWrapper>
            <FormInput {...register("email")} placeholder={"email"} error={errors.email} required />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <FormInput
              {...register("password")}
              placeholder={"Введите пароль"}
              error={errors.password}
              type="password"
              required
            />
          </Styled.InputWrapper>
        </Styled.InputsContainer>

        <Styled.SubmitButtonContainer>
          <FormSubmitBtn text="Войти" disabled={!isValid} />
        </Styled.SubmitButtonContainer>

        <Styled.AgreementText dangerouslySetInnerHTML={{ __html: AgreementText }} />
      </Styled.Form>
    </Styled.Container>
  );
};
