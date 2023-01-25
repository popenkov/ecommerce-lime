import { Rating } from "@src/components/UI";
import { ReceiptDetailedData } from "@src/mock/ReceiptDetailedData";
import { FC } from "react";
import { ReceiptStep } from "../ReceiptStep/ReceiptStep";

import { Styled } from "./styles";
export const ReceiptSteps: FC = () => {
  const { title, color, rating, text, steps } = ReceiptDetailedData.receiptSteps;
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
