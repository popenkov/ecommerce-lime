import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { SubmitHandler, Controller, useForm } from "react-hook-form";

import { CustomDateTimePicker } from "@src/components/UI/DateTimePicker";
import { FormInput } from "@src/components/UI/FormInput";
import { FormRadioButton } from "@src/components/UI/FormRadioButton";

import { EnergieCalculator } from "./EnergieCalculator";
import { PaymentMethods } from "./PaymentMethods";
import { Styled } from "./styles";
import { TotalValue } from "./TotalValue";
import { RequestFormType, validationSchema } from "./utils";

export const OrderForm: FC = () => {
  const savedText = "ул.Пимена-панчанки, д. 12, под. 4, кв. 312";
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm<RequestFormType>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit: SubmitHandler<RequestFormType> = (data) => {
    reset();
    console.log(data);
  };

  return (
    <Styled.Container>
      <form onSubmit={handleSubmit(handleFormSubmit)} id="order-form">
        <Styled.Contacts>
          <Styled.SectionTitle>Контактные данные</Styled.SectionTitle>
          <Styled.InputsContainer>
            <Styled.InputWrapper>
              <FormInput {...register("name")} placeholder={"Ваше имя"} error={errors.name} required />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <FormInput isPhone {...register("phone")} placeholder={"Номер телефона"} error={errors.phone} required />
            </Styled.InputWrapper>
          </Styled.InputsContainer>
          <FormInput {...register("email")} placeholder={"Ваш e-mail"} error={errors.email} />
        </Styled.Contacts>

        <Styled.AddressSection>
          <Styled.AddressTitle>Адрес доставки</Styled.AddressTitle>
          <Styled.SavedAddresses>
            <Controller
              name="savedAddress"
              control={control}
              defaultValue=""
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <FormRadioButton name="savedAddress" id="savedAddress" isChecked text={savedText} />
              )}
            />
          </Styled.SavedAddresses>

          <Styled.NewAddress>
            <Styled.InputWrapper>
              <FormInput
                {...register("address")}
                placeholder={"Начните вводить новый адрес"}
                error={errors.name}
                required
              />
            </Styled.InputWrapper>

            <Styled.InputsContainer>
              <Styled.InputWrapper>
                <FormInput {...register("entrance")} placeholder={"Подъезд"} error={errors.entrance} required />
              </Styled.InputWrapper>
              <Styled.InputWrapper>
                <FormInput {...register("floor")} placeholder={"Этаж"} error={errors.floor} required />
              </Styled.InputWrapper>
              <Styled.InputWrapper>
                <FormInput {...register("flat")} placeholder={"Квартира"} error={errors.floor} required />
              </Styled.InputWrapper>
            </Styled.InputsContainer>

            <Controller
              control={control}
              name="time"
              rules={{ required: true }} //optional
              render={({
                field: { onChange, name, value },
                fieldState: { invalid, isDirty }, //optional
                formState: { errors }, //optional, but necessary if you want to show an error message
              }) => (
                <>
                  <CustomDateTimePicker placeholder={"Выберите дату и время доставки"} />
                  {errors && errors[name] && errors[name]?.type === "required" && <span>your error message !</span>}
                </>
              )}
            />
          </Styled.NewAddress>
        </Styled.AddressSection>

        <Styled.PaymentMethods>
          <PaymentMethods control={control} register={register} errors={errors} />
        </Styled.PaymentMethods>

        <Styled.EnergyContainer>
          <EnergieCalculator />
        </Styled.EnergyContainer>

        <Styled.TotalValueContainer>
          <TotalValue />
        </Styled.TotalValueContainer>
        <Styled.SubmitButton type="submit">Submit</Styled.SubmitButton>
      </form>
    </Styled.Container>
  );
};
