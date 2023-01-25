import { ReceiptStepItemType } from "@src/types/ReceiptDetailedTypes";
import { FC } from "react";

import { Styled } from "./styles";

export const ReceiptStep: FC<ReceiptStepItemType> = ({ id, img, title, text }) => {
  return (
    <Styled.Step>
      <Styled.Img src={img} />
      <Styled.Description>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Text>{text}</Styled.Text>
      </Styled.Description>
    </Styled.Step>
  );
};
