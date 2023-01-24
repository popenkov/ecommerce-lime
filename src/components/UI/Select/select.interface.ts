import { ControllerRenderProps, FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { Options } from "react-select";

export interface IFieldProps {
  placeholder: string;
  // error?: FieldError | undefined;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

export interface SelectOptionType {
  label: string;
  value: string;
}

export interface ISelect extends IFieldProps {
  options: Options<SelectOptionType>;
  isMulti?: boolean;
  field: ControllerRenderProps<any, any>;
  isLoading?: boolean;
}

export type SelectProps = {
  field?: any;
  error?: any;
  getSelectedValue?: any;
  placeholder?: string;
  defaultValue?: SelectOptionType;
  options: SelectOptionType[];
};
