import { FC, memo } from "react";

import { Styled } from "./styles";

type FormSubmitBtnProps = {
  text: string;
  disabled: boolean;
};
export const FormSubmitBtn: FC<FormSubmitBtnProps> = memo(({ text, disabled }) => {
  return <Styled.Button disabled={disabled}>{text}</Styled.Button>;
});

FormSubmitBtn.displayName = "FormSubmitBtn";
