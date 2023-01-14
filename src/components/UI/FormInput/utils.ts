import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface InputPhoneProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  placeholder?: string;
  icon?: string;
  error?: FieldError | undefined;
  name?: string;
  type?: string;
  required?: boolean;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & InputPhoneProps;

export interface InputPhoneInterface extends TypeInputPropsField {}

export const PATTERN = /\D/g;

export const getInputNumbersValue = (value: string) => {
  return value.replace(PATTERN, "");
};

export const handlePhoneFormat = (event: React.ChangeEvent<HTMLInputElement>) => {
  const input = event.target;
  let inputNumbersValue = getInputNumbersValue(input.value);
  let formattedInputValue = "";
  const selectionStart = input.selectionStart;

  if (!inputNumbersValue) {
    return (input.value = "");
  }

  if (input.value.length !== selectionStart) {
    return;
  }

  if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
    // Russian phone number
    if (inputNumbersValue[0] === "9") {
      inputNumbersValue = "7" + inputNumbersValue;
    }

    const firstSymbols = inputNumbersValue[0] === "8" ? "+7" : "+7";
    formattedInputValue = firstSymbols + " ";

    if (inputNumbersValue.length > 1) {
      formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
    }
  } else {
    // Not Russian phone number
    formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
  }

  input.value = formattedInputValue;
};

export const handlePhoneKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const input = event.target as HTMLInputElement;
  if (event.key === "Backspace" && getInputNumbersValue(input.value).length === 1) {
    input.value = "";
  }

  return input;
};

export const handlePhonePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
  const pasted = event.clipboardData ?? window.Clipboard;
  const input = event.target as HTMLInputElement;
  const inputNumbersValue = getInputNumbersValue(input.value);

  if (pasted) {
    const pastedText = pasted.getData("Text");
    if (PATTERN.test(pastedText)) {
      input.value = inputNumbersValue;
    }
  }
};
