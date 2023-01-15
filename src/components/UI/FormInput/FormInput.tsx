import { forwardRef, InputHTMLAttributes, useState, ChangeEvent } from "react";
import { FieldError } from "react-hook-form";

import { Styled } from "./styles";
import { handlePhoneFormat, handlePhoneKeyDown, handlePhonePaste } from "./utils";

interface IFieldProps {
  placeholder?: string;
  error?: FieldError | undefined;
  isPhone?: boolean;
  hasValue?: boolean;
  touched?: boolean;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

interface IField extends TypeInputPropsField {}

export const FormInput = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, hasValue, error, type = "text", required, isPhone, touched, ...rest }, ref) => {
    const [isFilled, setIsFilled] = useState(false);
    const hasError = Boolean(error);
    const minInputLengthPhone = 1;
    const minInputLengthText = 0;
    const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
      const trimmedInputValueLength = evt.target.value.trim().length;
      const minInputLength = !isPhone ? minInputLengthText : minInputLengthPhone;

      if (trimmedInputValueLength > minInputLength) {
        setIsFilled(true);
      } else {
        setIsFilled(false);
      }
    };

    const handlePhoneInput = (evt: ChangeEvent<HTMLInputElement>) => {
      handleInputChange(evt);
      handlePhoneFormat(evt);
    };

    return (
      <Styled.Container>
        <Styled.Label>
          {!isPhone ? (
            <Styled.Input ref={ref} type={type} {...rest} onChange={handleInputChange} hasInputError={hasError} />
          ) : (
            <Styled.Input
              ref={ref}
              type={type}
              maxLength={18}
              onInput={handlePhoneInput}
              onKeyDown={handlePhoneKeyDown}
              onPaste={handlePhonePaste}
              onChange={handlePhoneInput}
              hasInputError={hasError}
              {...rest}
            />
          )}

          <Styled.Placeholder isInputFilled={isFilled || hasValue} touched={touched} isInputRequired={required}>
            {placeholder}
          </Styled.Placeholder>
        </Styled.Label>
        {error && <Styled.ErrorMessage>{error.message}</Styled.ErrorMessage>}
      </Styled.Container>
    );
  }
);

FormInput.displayName = "Field";
