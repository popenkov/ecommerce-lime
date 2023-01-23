import { FC } from "react";
import ReactSelect, { ActionMeta, MultiValue, SingleValue } from "react-select";
import makeAnimated from "react-select/animated";

import { SelectOptionType, SelectProps } from "./select.interface";
import { Styled } from "./styles";

const animatedComponents = makeAnimated();

export const Select: FC<SelectProps> = ({ defaultValue, options, placeholder, field, error }) => {
  const handleSelectChange = (
    newValue: SingleValue<SelectOptionType> | MultiValue<SelectOptionType>,
    action: ActionMeta<SelectOptionType>
  ): void => {
    field.onChange(newValue);
  };

  return (
    <Styled.SelectContainer>
      <ReactSelect
        defaultValue={defaultValue}
        classNamePrefix="custom-select"
        placeholder={placeholder}
        options={options}
        onChange={handleSelectChange}
        components={animatedComponents}
      />
      {error && <Styled.ErrorMessage>{error.message}</Styled.ErrorMessage>}
    </Styled.SelectContainer>
  );
};
