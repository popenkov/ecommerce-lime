import { Accordion } from "@src/components/UI/Accordion";
import { FormCheckbox } from "@src/components/UI/FormCheckbox";
import { RangeSlider } from "@src/components/UI/RangeSlider";
import { catalogData } from "@src/mock/CatalogData";
import { CheckboxType } from "@src/types/CatalogPageTypes";
import { LinkType } from "@src/types/commonTypes";
import { FC } from "react";

import { ReactComponent as SettingsIcon } from "@src/assets/icons/settings.svg";

import "react-rangeslider/lib/index.css";
import { Styled } from "./styles";

export const Filter: FC = () => {
  const { filters } = catalogData;

  return (
    <>
      <Styled.MobileFilterButton>
        <Styled.MobileButtonIcon>
          <SettingsIcon />
        </Styled.MobileButtonIcon>
        <Styled.MobileButtonText> Фильтр товаров</Styled.MobileButtonText>
        <Styled.MobileButtonAmount>12</Styled.MobileButtonAmount>
      </Styled.MobileFilterButton>
      <Styled.Filter>
        {filters.map((filter) => {
          let renderData;
          const type = filter.type;

          if (type === "links") {
            const data = filter?.items as LinkType[];
            renderData = data.map((link) => {
              return (
                <Styled.FilterLink to={link.href} key={link.id}>
                  {link.text}
                </Styled.FilterLink>
              );
            });
          } else if (type === "range") {
            return (
              <Styled.FilterContainer key={filter.title}>
                <Accordion title={filter.title}>
                  <Styled.RangeSliderContainer key={filter.type}>
                    <RangeSlider
                      min={0}
                      max={1000}
                      onChange={({ min, max }: { min: number; max: number }) =>
                        console.log(`min = ${min}, max = ${max}`)
                      }
                    />
                  </Styled.RangeSliderContainer>
                </Accordion>
              </Styled.FilterContainer>
            );
          } else if (type === "checkboxes") {
            const data = filter?.items as CheckboxType[];
            renderData = data.map((link) => {
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
          }
          return (
            <Styled.FilterContainer key={filter.title}>
              <Accordion title={filter.title}>{renderData}</Accordion>
            </Styled.FilterContainer>
          );
        })}
      </Styled.Filter>
    </>
  );
};
