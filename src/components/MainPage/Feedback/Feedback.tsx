import { FC } from "react";

import QuestionImg from "@src/assets/images/question-bg.png";

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
      <Styled.Header>
        <Styled.Title>ПОМОГИТЕ НАМ СТАТЬ ЛУЧШЕ</Styled.Title>
        <Styled.MobileTitle>Удобно ли вам совершать покупки через наш Онлайн-Каталог?</Styled.MobileTitle>
      </Styled.Header>
      <Styled.Form>
        <Styled.FormTitle>Удобно ли вам совершать покупки через наш Онлайн-Каталог?</Styled.FormTitle>
        <Styled.InputsContainer>
          {FeedbackData.map((input) => {
            return (
              <Styled.FormInputContainer key={input.name}>
                <Styled.FormInput name="test" id={input.name} value={input.name} type="radio" />
                <Styled.FormShadow />
                <Styled.FormLabel htmlFor={input.name}>{input.title}</Styled.FormLabel>
              </Styled.FormInputContainer>
            );
          })}
        </Styled.InputsContainer>
      </Styled.Form>
      <Styled.QuestionImg src={QuestionImg} />
    </Styled.Feedback>
  );
};
