import { FC } from "react";

import { Styled } from "./styles";

const FeedbackData = [
  {
    name: "online",
    title: "Да, легко найти товары",
  },
  {
    name: "local-shop",
    title: "В магазине удобнее",
  },
  {
    name: "site-search",
    title: "Пользуюсь поиском на сайте",
  },
];

export const Feedback: FC = () => {
  return (
    <Styled.Feedback>
      <Styled.Title>ПОМОГИТЕ НАМ СТАТЬ ЛУЧШЕ</Styled.Title>
      <Styled.Form>
        <Styled.FormTitle>Удобно ли вам совершать покупки через наш Онлайн-Каталог?</Styled.FormTitle>
        <Styled.InputsContainer>
          {FeedbackData.map((input) => {
            return (
              <Styled.FormInputContainer key={input.name}>
                <Styled.FormInput name="test" id={input.name} value={input.name} type="radio" />
                <Styled.FormLabel htmlFor={input.name}>{input.title}</Styled.FormLabel>
              </Styled.FormInputContainer>
            );
          })}
        </Styled.InputsContainer>
      </Styled.Form>
    </Styled.Feedback>
  );
};
