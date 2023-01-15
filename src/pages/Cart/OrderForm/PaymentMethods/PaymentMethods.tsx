import { FormInput } from "@src/components/UI/FormInput";
import { FormRadioButton } from "@src/components/UI/FormRadioButton";
import { FC } from "react";
import { Control, Controller, FieldErrorsImpl, UseFormRegister } from "react-hook-form";
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

const PaymentMethodsData = [
  {
    name: "paymentMethod",
    id: "online",
    value: "online",
    text: "Картой онлайн",
    checked: true,
  },
  {
    name: "paymentMethod",
    id: "online-to-carrier",
    value: "online-to-carrier",
    text: "Картой курьеру",
    checked: false,
  },
  {
    name: "paymentMethod",
    id: "cash",
    value: "cash",
    text: "Наличными курьеру",
    checked: false,
  },
  {
    name: "paymentMethod",
    id: "certificate",
    value: "certificate",
    text: "Сертификатом",
    checked: false,
  },
];

export const PaymentMethods: FC<PaymentMethodsProps> = ({ control, register, errors }) => {
  return (
    <Styled.PaymentMethods>
      {PaymentMethodsData.map((item) => {
        return (
          <Controller
            key={item.id}
            name={item.name as "paymentMethod"}
            control={control}
            defaultValue=""
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <FormRadioButton name={item.name} id={item.id} value={item.value} text={item.text} />
            )}
          />
        );
      })}

      <Styled.InputWrapper>
        <FormInput {...register("comments")} placeholder={"Комментарий к заказу"} error={errors.comments} required />
      </Styled.InputWrapper>
    </Styled.PaymentMethods>
  );
};
