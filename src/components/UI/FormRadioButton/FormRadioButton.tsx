import { FC, memo } from "react";

import { Styled } from "./styles";

type FormRadioButtonType = {
  name: string;
  id: string;
  text: string;
  value?: string;
  isChecked?: boolean;
};

export const FormRadioButton: FC<FormRadioButtonType> = memo(({ name, id, isChecked, value, text }) => {
  return (
    <Styled.CheckboxWrapper>
      <input type="radio" readOnly checked={isChecked} name={name} value={value} id={id} />
      <Styled.CheckboxLabel htmlFor={id}>{text}</Styled.CheckboxLabel>
    </Styled.CheckboxWrapper>
  );
});

FormRadioButton.displayName = "FormRadioButton";
