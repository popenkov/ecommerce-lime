import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

import { FC, useEffect, useRef, useState } from "react";
import { FormInput } from "../FormInput";

type CustomDateTimePickerType = {
  placeholder: string;
};

export const CustomDateTimePicker: FC<CustomDateTimePickerType> = ({ placeholder }) => {
  const inputRef = useRef<any>();
  const datePickerRef = useRef<any>();
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      datePickerRef.current = new AirDatepicker(inputRef.current, {
        timepicker: true,

        onSelect({ date }) {
          if (date) setTouched(true);
        },
      });
    }
  }, []);

  return <FormInput ref={inputRef} touched={touched} placeholder={placeholder} />;
};
