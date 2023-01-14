import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Styled } from "./styles";
import { RequestFormType, validationSchema } from "./utils";
import { FormInput } from "@src/components/UI/FormInput";
import { FormRadioButton } from "@src/components/UI/FormRadioButton";

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
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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
          <Styled.SectionTitle>Контактные данные</Styled.SectionTitle>
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
                <FormInput {...register("floor")} placeholder={"Подъезд"} error={errors.floor} required />
              </Styled.InputWrapper>
              <Styled.InputWrapper>
                <FormInput {...register("flat")} placeholder={"Квартира"} error={errors.floor} required />
              </Styled.InputWrapper>
            </Styled.InputsContainer>
            <FormInput {...register("time")} placeholder={"Выберите дату и время доставки"} error={errors.time} />
            <Controller
              as={
                <ReactDatePicker
                  dateFormat="d MMM yyyy"
                  minDate={new Date()}
                  selected={new Date()}
                  showTimeSelect={false}
                  todayButton="Today"
                  customInput={
                    <FormInput
                      {...register("time")}
                      placeholder={"Выберите дату и время доставки"}
                      error={errors.time}
                    />
                  }
                  dropdownMode="select"
                  isClearable
                  placeholderText="Click to select time"
                  shouldCloseOnSelect
                />
              }
              errors={errors}
              //   name="expiryAt"
              onChange={([selected] as  any) => {
                return { value: selected };
              }}
              //   required
            />
          </Styled.NewAddress>
        </Styled.AddressSection>
      </form>
    </Styled.Container>
  );
};
