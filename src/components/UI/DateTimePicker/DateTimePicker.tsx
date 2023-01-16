import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import { ReactComponent as CalendarIcon } from "@src/assets/icons/calendar.svg";

import { FC, useEffect, useRef, useState } from "react";
import { FormInput } from "../FormInput";
import { Styled } from "./styles";

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

  return (
    <Styled.Container>
      <FormInput ref={inputRef} touched={touched} placeholder={placeholder} />
      <Styled.IconContainer>
        <CalendarIcon />
      </Styled.IconContainer>
    </Styled.Container>
  );
};
