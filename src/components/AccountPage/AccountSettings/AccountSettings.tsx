import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { SubmitHandler, Controller, useForm } from "react-hook-form";

import { FormCheckbox } from "@src/components/UI/FormCheckbox";
import { FormInput } from "@src/components/UI/FormInput";

import { NotificationsForm, notificationValidationSchema } from "../AccountPersonal/utils";
import { Styled } from "./styles";
import { UserForm, validationSchema } from "./utils";

export const AccountSettings: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<UserForm>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const {
    handleSubmit: handleNotificationsSubmit,
    control: notificationsControl,
    reset: notificationReset,
  } = useForm<NotificationsForm>({
    mode: "onChange",
    resolver: yupResolver(notificationValidationSchema),
  });

  const handleFormSubmit: SubmitHandler<UserForm> = (data) => {
    reset();
    console.log(data);
  };
  const handleNotificationFormSubmit: SubmitHandler<NotificationsForm> = (data) => {
    notificationReset();
    console.log(data);
  };

  const notificationText =
    "Я даю своё согласие получать новости об акциях, скидках и лучших предложениях ООО «ФРЕШМАРКЕТ ЛАЙМ» и привлеченных им партнеров по SMS, Viber и иными доступными способами.";

  return (
    <Styled.PersonalContainer>
      <form onSubmit={handleSubmit(handleFormSubmit)} id="change-password-form">
        <Styled.FormSection>
          <Styled.SectionTitle>Смена пароля</Styled.SectionTitle>
          <Styled.InputsContainer>
            <Styled.InputWrapper>
              <FormInput
                {...register("oldPassword")}
                placeholder={"Старый пароль"}
                error={errors.oldPassword}
                required
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <FormInput
                {...register("newPassword")}
                placeholder={"Новый пароль"}
                error={errors.newPassword}
                required
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <FormInput
                {...register("newPasswordConfirmation")}
                placeholder={"Повторите новый пароль"}
                error={errors.newPasswordConfirmation}
              />
            </Styled.InputWrapper>
          </Styled.InputsContainer>
          <Styled.SavePasswordButton type="submit" form="change-password-form">
            Сменить пароль
          </Styled.SavePasswordButton>
        </Styled.FormSection>
      </form>
      <form onSubmit={handleNotificationsSubmit(handleNotificationFormSubmit)} id="notifications-form">
        <Styled.FormSection>
          <Styled.SectionTitle>Уведомления</Styled.SectionTitle>

          <Styled.CheckboxesContainer>
            <Controller
              name="newsAgreement"
              control={notificationsControl}
              defaultValue=""
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <FormCheckbox
                  id="notification-agreement"
                  text={notificationText}
                  name="notifocation-agreement"
                  value="agreed"
                />
              )}
            />
            <Controller
              name="newsAgreementSecond"
              control={notificationsControl}
              defaultValue=""
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <FormCheckbox
                  id="'notification-agreement'"
                  text={notificationText}
                  name="notifocation-agreement"
                  value="agreed"
                />
              )}
            />
          </Styled.CheckboxesContainer>
        </Styled.FormSection>
      </form>
    </Styled.PersonalContainer>
  );
};
