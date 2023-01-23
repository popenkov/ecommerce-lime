import { FC, useEffect, useState } from "react";

import { useActions } from "@src/hooks/useActions";

import { Styled } from "./styles";

type AmountCounterType = {
  amount: number;
  id: string;
};

export const AmountCounter: FC<AmountCounterType> = ({ amount, id }) => {
  const { changeItemAmount } = useActions();
  const [currentAmount, setCurrentAmount] = useState(amount || 1);

  const handleItemAmountChange = () => {
    const itemData = {
      id,
      currentAmount,
    };
    changeItemAmount(itemData);
  };

  useEffect(() => {
    handleItemAmountChange();
  }, [currentAmount]);

  const handleValueIncrease = () => {
    setCurrentAmount((prev) => prev + 1);
  };
  const handleValueDecrease = () => {
    currentAmount > 1 && setCurrentAmount((prev) => prev - 1);
  };
  return (
    <Styled.Counter>
      <Styled.Decrement onClick={handleValueDecrease}>-</Styled.Decrement>
      <Styled.Value>{currentAmount}</Styled.Value>

      <Styled.Increment onClick={handleValueIncrease}>+</Styled.Increment>
    </Styled.Counter>
  );
};
