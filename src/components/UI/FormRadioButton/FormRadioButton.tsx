import { FC } from "react";

import { Styled } from "./styles";

type FormRadioButtonType = {
  name: string;
  id: string;
  text: string;
  isChecked?: boolean;
};

export const FormRadioButton: FC<FormRadioButtonType> = ({ name, id, isChecked, text }) => {
  return (
    <Styled.CheckboxWrapper>
      <input type="radio" readOnly checked={isChecked} name={name} id={id} />
      <Styled.CheckboxLabel htmlFor={id}>{text}</Styled.CheckboxLabel>
    </Styled.CheckboxWrapper>
  );
};
