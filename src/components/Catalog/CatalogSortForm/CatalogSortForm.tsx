import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { Select } from "@src/components/UI/Select/Select";
import { SelectOptionType } from "@src/components/UI/Select/select.interface";
import { SortingType } from "@src/types/sortingTypes";

import { Styled } from "./styles";

type FormValues = {
  itemsAmount: string;
  sort: string;
};

type CatalogSortFormProps = {
  sortData: SortingType;
};

export const CatalogSortForm: FC<CatalogSortFormProps> = ({ sortData }) => {
  const { itemsAmountOptions, sortingOptions } = sortData;

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
