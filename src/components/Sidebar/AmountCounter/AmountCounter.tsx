import { Dispatch, FC, SetStateAction } from "react";

import { Styled } from "./styles";

type AmountCounterType = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

export const AmountCounter: FC<AmountCounterType> = ({ value, setValue }) => {
  const handleValueIncrease = () => {
    setValue((prev) => prev + 1);
  };
  const handleValueDecrease = () => {
    setValue((prev) => prev - 1);
  };
  return (
    <Styled.Counter>
      <Styled.Increment onClick={handleValueIncrease}>+</Styled.Increment>
      <Styled.Value>{value}</Styled.Value>
      <Styled.Decrement onClick={handleValueDecrease}>-</Styled.Decrement>
    </Styled.Counter>
  );
};
