import { FC } from "react";

import { Accordion } from "@src/components/UI";
import { FormCheckbox } from "@src/components/UI/FormCheckbox";
import { CheckboxType, FilterType } from "@src/types/CatalogPageTypes";

import { Styled } from "./styles";

type ReceiptsMobileFilterTypes = {
  data: FilterType[];
};
export const ReceiptsMobileFilter: FC<ReceiptsMobileFilterTypes> = ({ data }) => {
  return (
    <>
      {data.map((filter) => {
        const data = filter?.items as CheckboxType[];
        const renderData = data.map((link) => {
          return (
            <Styled.CheckboxContainer key={link.id}>
              <FormCheckbox
                text={link.text}
                id={link.inputValue}
                name={link.inputName}
                value={link.inputValue}
                isChecked={link.isChecked}
              />
              <Styled.CheckboxAmount>{link.amount}</Styled.CheckboxAmount>
            </Styled.CheckboxContainer>
          );
        });

        return (
          <Styled.FilterContainer key={filter.title}>
            <Accordion title={filter.title}>{renderData}</Accordion>
          </Styled.FilterContainer>
        );
      })}
    </>
  );
};
