import { Select } from "@src/components/UI/Select/Select";
import { SelectOptionType } from "@src/components/UI/Select/select.interface";
import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { Styled } from "./styles";

const itemsAmountOptions: SelectOptionType[] = [
  {
    value: "20",
    label: "По 20 товаров",
  },
  {
    value: "40",
    label: "По 40 товаров",
  },
  {
    value: "80",
    label: "По 80 товаров",
  },
];
const sortingOptions: SelectOptionType[] = [
  {
    value: "default",
    label: "По популярности",
  },
  {
    value: "desc",
    label: "По убыванию",
  },
  {
    value: "incr",
    label: "По возрастанию",
  },
];

type FormValues = {
  itemsAmount: string;
  sort: string;
};

export const CatalogSortForm: FC = () => {
  const { handleSubmit, watch, formState, control } = useForm<FormValues>({
    mode: "onChange",
  });
  const handleFormSubmit = (FormValues: FormValues) => {
    console.log("FormValues", FormValues);
  };

  const data = watch();

  useEffect(() => {
    if (formState) {
      handleFormSubmit(data);
    }
  }, [formState, data]);

  return (
    <Styled.Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Styled.SelectsContainer>
        <Styled.SelectItem>
          <Controller
            name="itemsAmount"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Select defaultValue={itemsAmountOptions[0]} error={error} field={field} options={itemsAmountOptions} />
            )}
          />
        </Styled.SelectItem>
        <Styled.SelectItem>
          <Controller
            name="sort"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Select defaultValue={sortingOptions[0]} error={error} field={field} options={sortingOptions} />
            )}
          />
        </Styled.SelectItem>
      </Styled.SelectsContainer>
    </Styled.Form>
  );
};
