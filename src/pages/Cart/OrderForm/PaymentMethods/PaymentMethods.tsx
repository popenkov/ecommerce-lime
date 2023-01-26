import { FC } from "react";
import { Control, Controller, FieldErrorsImpl, UseFormRegister } from "react-hook-form";

import { FormInput } from "@src/components/UI/FormInput";
import { FormRadioButton } from "@src/components/UI/FormRadioButton";
import { CartData } from "@src/mock/CartData";

import { RequestFormType } from "../utils";
import { Styled } from "./styles";
type PaymentMethodsProps = {
  control: Control<RequestFormType, any>;
  register: UseFormRegister<RequestFormType>;
  errors: Partial<
    FieldErrorsImpl<{
      [key: string]: string;
    }>
  >;
};

export const PaymentMethods: FC<PaymentMethodsProps> = ({ control, register, errors }) => {
  const { paymentMethods } = CartData;
  return (
    <Styled.PaymentMethods>
      <Styled.SectionTitle>Оплата заказа</Styled.SectionTitle>
      <Styled.InputsContainer>
        {paymentMethods.map((item) => {
          return (
            <Styled.InputWrapper key={item.id}>
              <Controller
                name={item.name as "paymentMethod"}
                control={control}
                defaultValue=""
                render={() => <FormRadioButton name={item.name} id={item.id} value={item.value} text={item.text} />}
              />
            </Styled.InputWrapper>
          );
        })}
      </Styled.InputsContainer>

      <FormInput {...register("comments")} placeholder={"Комментарий к заказу"} error={errors.comments} required />
    </Styled.PaymentMethods>
  );
};
