import React, { FC } from "react";
import { Styled } from "./styles";

const energieData = [
  {
    name: "Белки",
    value: "550.5 г",
  },
  {
    name: "Жиры",
    value: "2000 г",
  },
  {
    name: "Углеводы",
    value: "900.9 г",
  },
];

export const EnergieCalculator: FC = () => {
  return (
    <Styled.EnergieCalculator>
      EnergieCalculator
      <Styled.Title>Калькулятор БЖУ в корзине</Styled.Title>
    </Styled.EnergieCalculator>
  );
};
