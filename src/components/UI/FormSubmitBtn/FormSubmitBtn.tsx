import { FC } from "react";

import { Styled } from "./styles";

type FormSubmitBtnProps = {
  text: string;
  disabled: boolean;
};
export const FormSubmitBtn: FC<FormSubmitBtnProps> = ({ text, disabled }) => {
  return <Styled.Button disabled={disabled}>{text}</Styled.Button>;
};
