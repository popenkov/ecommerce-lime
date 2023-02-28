import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";
import { SubmitHandler, Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { FormInput } from "@src/components/UI/FormInput";
import { FormRadioButton } from "@src/components/UI/FormRadioButton";
import { LoyalCard } from "@src/components/UI/LoyalCard";
import { useActions } from "@src/hooks/useActions";
import { AccountData } from "@src/mock/AccountData";

import { Styled } from "./styles";
import { UserForm, validationSchema } from "./utils";
import { useAppSelector } from "@src/hooks/useAppSelector";

export const AccountPersonal: FC = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, defaultValues },
    reset,
  } = useForm<UserForm>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();
  const { userDataMock } = AccountData;
  const { user } = useAppSelector((state) => state.user);
  const { userData } = useAppSelector((state) => state.user);
  const { logout, getUserData } = useActions();

  const getProfileInitialValues = (user: any) => {
    return {
      name: user.name,
      surname: user.lastName,
      fatherName: user.fatherName,
      phone: user?.phone,
      email: user?.email,
      dob: user?.dob,
    };
  };

  useEffect(() => {
    getUserData(user.email);
    const defaultValues = getProfileInitialValues(userData);
    reset(defaultValues);
  }, [user]);

  const handleFormSubmit: SubmitHandler<UserForm> = (data) => {
    reset();
  };

  const handleLogoutClick = () => {
    logout();
    navigate("/");
  };

  return (
    <Styled.PersonalContainer>
      <form onSubmit={handleSubmit(handleFormSubmit)} id="order-form">
        <Styled.FormSection>
          <Styled.SectionTitle>Контактные данные</Styled.SectionTitle>
          <Styled.InputsContainer>
            <Styled.InputWrapper>
              <FormInput
                {...register("name")}
                placeholder={"Ваше имя"}
                touched={!!defaultValues?.name}
                error={errors.name}
                required
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <FormInput
                {...register("surname")}
                touched={!!defaultValues?.surname}
                placeholder={"Фамилия"}
                error={errors.surname}
                required
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <FormInput
                {...register("fatherName")}
                touched={!!defaultValues?.fatherName}
                placeholder={"Отчество"}
                error={errors.name}
              />
            </Styled.InputWrapper>
          </Styled.InputsContainer>
          <Styled.InputsContainer>
            <Styled.InputWrapper>
              <FormInput
                isPhone
                {...register("phone")}
                touched={!!defaultValues?.phone}
                placeholder={"Номер телефона"}
                error={errors.phone}
                required
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <FormInput
                {...register("email")}
                touched={!!defaultValues?.email}
                placeholder={"Ваш e-mail"}
                error={errors.email}
                required
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <FormInput
                {...register("dob")}
                touched={!!defaultValues?.dob}
                placeholder={"Дата рождения"}
                error={errors.dob}
              />
            </Styled.InputWrapper>
          </Styled.InputsContainer>
        </Styled.FormSection>

        <Styled.FormSection>
          <Styled.AddressTitle>Адрес доставки</Styled.AddressTitle>
          {userDataMock.street && (
            <Styled.SavedAddresses>
              <Styled.SavedAddressItem>
                <Controller
                  name="savedAddress"
                  control={control}
                  defaultValue=""
                  render={() => (
                    <FormRadioButton name="savedAddress" id="savedAddress" isChecked text={userDataMock.street} />
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
            <LoyalCard number={userDataMock.cardNumber} />
          </Styled.LoyalCardsContainer>
        </Styled.LoyalCardsSection>
      </form>
      <Styled.LogoutButton onClick={handleLogoutClick}>Выйти из учетной записи</Styled.LogoutButton>
    </Styled.PersonalContainer>
  );
};
