import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";
import { SubmitHandler, Controller, useForm } from "react-hook-form";
import { AgreementText, RegisterFormType, validationSchema } from "./utils";

import { Styled } from "./styles";
import { FormInput } from "@src/components/UI/FormInput";
import { FormSubmitBtn } from "@src/components/UI/FormSubmitBtn/FormSubmitBtn";
import { useActions } from "@src/hooks/useActions";
export const RegisterForm: FC = () => {
  const { register: registerDispatch } = useActions();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm<RegisterFormType>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit: SubmitHandler<RegisterFormType> = (data) => {
    reset();
    console.log(data);
    registerDispatch(data);
  };

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit(handleFormSubmit)} id="register-form">
        <Styled.FormTitle>Введите ваши данные</Styled.FormTitle>
        <Styled.InputsContainer>
          <Styled.InputWrapper>
            <FormInput {...register("email")} placeholder={"Ваш email"} error={errors.email} required />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <FormInput {...register("password")} placeholder={"password"} error={errors.password} required />
          </Styled.InputWrapper>
        </Styled.InputsContainer>

        <Styled.SubmitButtonContainer>
          <FormSubmitBtn text="Зарегистрироваться" disabled={!isValid} />
        </Styled.SubmitButtonContainer>

        <Styled.AgreementText dangerouslySetInnerHTML={{ __html: AgreementText }} />
      </Styled.Form>
    </Styled.Container>
  );
};
