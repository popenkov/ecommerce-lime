import { useActions } from "@src/hooks/useActions";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import { Styled } from "./styles";

type AmountCounterType = {
  //   value: number;
  //   setValue: Dispatch<SetStateAction<number>>;
  amount: number;
  id: string;
};

// export const AmountCounter: FC<AmountCounterType> = ({ value, setValue }) => {
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
      <Styled.Increment onClick={handleValueIncrease}>+</Styled.Increment>
      <Styled.Value>{currentAmount}</Styled.Value>
      <Styled.Decrement onClick={handleValueDecrease}>-</Styled.Decrement>
    </Styled.Counter>
  );
};
