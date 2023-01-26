import { FC } from "react";

import { ReceiptDetailedData } from "@src/mock/ReceiptDetailedData";

import { ReceiptStep } from "../ReceiptStep/ReceiptStep";
import { Styled } from "./styles";

export const ReceiptSteps: FC = () => {
  const { text, steps } = ReceiptDetailedData.receiptSteps;
  return (
    <Styled.StepsContainer>
      <Styled.Description>{text}</Styled.Description>

      <Styled.StepsItems>
        {steps.map((item) => {
          return <ReceiptStep {...item} key={item.id} />;
        })}
      </Styled.StepsItems>
    </Styled.StepsContainer>
  );
};
