import { FC } from "react";

import { Styled } from "./styles";

import { ReactComponent as CheckedIcon } from "@src/assets/icons/checkbox.svg";

type FormCheckboxType = {
  name: string;
  id: string;
  text: string;
  value?: string;
  isChecked?: boolean;
};

export const FormCheckbox: FC<FormCheckboxType> = ({ name, id, isChecked, value, text }) => {
  return (
    <Styled.CheckboxWrapper>
      <Styled.Checkbox>
        <input type="checkbox" defaultChecked={isChecked} name={name} value={value} id={id} />
        <Styled.CheckboxCheck>
          <CheckedIcon />
        </Styled.CheckboxCheck>
      </Styled.Checkbox>
      <Styled.CheckboxLabel htmlFor={id}>{text}</Styled.CheckboxLabel>
    </Styled.CheckboxWrapper>
  );
};
