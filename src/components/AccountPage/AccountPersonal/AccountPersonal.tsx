import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { SubmitHandler, Controller, useForm } from "react-hook-form";
import { UserForm, validationSchema } from "./utils";

import { Styled } from "./styles";
import { FormInput } from "@src/components/UI/FormInput";
import { FormRadioButton } from "@src/components/UI/FormRadioButton";
import { LoyalCard } from "@src/components/UI/LoyalCard";

const userData = {
  street: "ул.Пимена-панчанки, д. 12, под. 4, кв. 312",
  cardNumber: "2200 8756 8777 3245",
};

export const AccountPersonal: FC = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm<UserForm>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit: SubmitHandler<UserForm> = (data) => {
    reset();
    console.log(data);
  };

  return (
    <Styled.PersonalContainer>
      <form onSubmit={handleSubmit(handleFormSubmit)} id="order-form">
        <Styled.FormSection>
          <Styled.SectionTitle>Контактные данные</Styled.SectionTitle>
          <Styled.InputsContainer>
            <Styled.InputWrapper>
              <FormInput {...register("name")} placeholder={"Ваше имя"} error={errors.name} required />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <FormInput {...register("surname")} placeholder={"Фамилия"} error={errors.surname} required />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <FormInput {...register("fatherName")} placeholder={"Отчество"} error={errors.name} />
            </Styled.InputWrapper>
          </Styled.InputsContainer>
          <Styled.InputsContainer>
            <Styled.InputWrapper>
              <FormInput isPhone {...register("phone")} placeholder={"Номер телефона"} error={errors.phone} required />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <FormInput isPhone {...register("email")} placeholder={"Ваш e-mail"} error={errors.email} required />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <FormInput isPhone {...register("dob")} placeholder={"Дата рождения"} error={errors.dob} />
            </Styled.InputWrapper>
          </Styled.InputsContainer>
        </Styled.FormSection>

        <Styled.FormSection>
          <Styled.AddressTitle>Адрес доставки</Styled.AddressTitle>
          {userData.street && (
            <Styled.SavedAddresses>
              <Styled.SavedAddressItem>
                <Controller
                  name="savedAddress"
                  control={control}
                  defaultValue=""
                  render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <FormRadioButton name="savedAddress" id="savedAddress" isChecked text={userData.street} />
                  )}
                />
              </Styled.SavedAddressItem>

              <Styled.NewAddressButton>
                <Styled.NewAddressPlus>+</Styled.NewAddressPlus>
                <Styled.NewAddressText>Добавить адрес</Styled.NewAddressText>
              </Styled.NewAddressButton>
            </Styled.SavedAddresses>
          )}

          <Styled.NewAddress>
            <Styled.InputsContainer>
              <Styled.InputWrapper width={"49%"}>
                <FormInput
                  {...register("address")}
                  placeholder={"Начните вводить новый адрес"}
                  error={errors.name}
                  required
                />
              </Styled.InputWrapper>
              <Styled.InputWrapper width={"12%"}>
                <FormInput {...register("entrance")} placeholder={"Подъезд"} error={errors.entrance} required />
              </Styled.InputWrapper>
              <Styled.InputWrapper width={"12%"}>
                <FormInput {...register("floor")} placeholder={"Этаж"} error={errors.floor} required />
              </Styled.InputWrapper>
              <Styled.InputWrapper width={"12%"}>
                <FormInput {...register("flat")} placeholder={"Квартира"} error={errors.floor} required />
              </Styled.InputWrapper>
            </Styled.InputsContainer>
          </Styled.NewAddress>
        </Styled.FormSection>

        <Styled.LoyalCardsSection>
          <Styled.AddressTitle>Карта лояльности</Styled.AddressTitle>
          <Styled.LoyalCardsContainer>
            <Styled.AddCardButton>
              <Styled.AddCardPlus>+</Styled.AddCardPlus>
              <Styled.AddCardText>Добавить карту лояльности</Styled.AddCardText>
            </Styled.AddCardButton>
            <LoyalCard number={userData.cardNumber} />
          </Styled.LoyalCardsContainer>
        </Styled.LoyalCardsSection>
      </form>
    </Styled.PersonalContainer>
  );
};
