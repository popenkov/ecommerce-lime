import { FC } from "react";

import { useAppSelector } from "@src/hooks/useAppSelector";

import { Styled } from "./styles";

export const EnergieCalculator: FC = () => {
  const { energy } = useAppSelector((state) => state.cart);

  return (
    <>
      {energy.length > 0 && (
        <Styled.EnergieCalculator>
          <Styled.Title>Калькулятор БЖУ в корзине</Styled.Title>
          <Styled.ItemsContainer>
            {energy.map((item) => {
              return (
                <Styled.EnergyItem key={item.name}>
                  <Styled.EnergyKey>{item.name}</Styled.EnergyKey>
                  <Styled.EnergyValue>{item.value}</Styled.EnergyValue>
                </Styled.EnergyItem>
              );
            })}
          </Styled.ItemsContainer>
        </Styled.EnergieCalculator>
      )}
    </>
  );
};
