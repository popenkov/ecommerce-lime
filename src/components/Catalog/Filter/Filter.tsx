import { FC, useEffect, useState } from "react";

import { ReactComponent as SettingsIcon } from "@src/assets/icons/settings.svg";
import { Accordion } from "@src/components/UI/Accordion";
import { FormCheckbox } from "@src/components/UI/FormCheckbox";
import { RangeSlider } from "@src/components/UI/RangeSlider";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { catalogData } from "@src/mock/CatalogData";
import { theme } from "@src/theme";
import { CheckboxType } from "@src/types/CatalogPageTypes";
import { LinkType } from "@src/types/commonTypes";

import { Styled } from "./styles";

export const Filter: FC = () => {
  const { filters } = catalogData;

  const isAdaptive = useMediaQuery(theme.breakpoints.tablet);

  const [isFilterShown, setIsFilterShown] = useState(false);

  useEffect(() => {
    if (isFilterShown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFilterShown]);

  const handleFilterMenuOpen = () => {
    setIsFilterShown(true);
  };
  const handleFilterMenuClose = () => {
    setIsFilterShown(false);
  };

  const handleFilterReset = () => {
    handleFilterMenuClose();
  };
  const handleFilterSubmit = () => {
    handleFilterMenuClose();
  };

  const isFilterToShowOnMobile = isAdaptive && isFilterShown;
  const isFilterToShow = isFilterToShowOnMobile || !isAdaptive;

  return (
    <>
      <Styled.MobileFilterButton>
        <Styled.MobileButtonIcon>
          <SettingsIcon />
        </Styled.MobileButtonIcon>
        <Styled.MobileButtonText onClick={handleFilterMenuOpen}> Фильтр товаров</Styled.MobileButtonText>
        <Styled.MobileButtonAmount>12</Styled.MobileButtonAmount>
      </Styled.MobileFilterButton>
      {isFilterToShow && (
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

          {isFilterToShowOnMobile && (
            <Styled.MobileFilterButtons>
              <Styled.MobileCancelButton onClick={handleFilterReset}>x</Styled.MobileCancelButton>
              <Styled.MobileSubmitButton onClick={handleFilterSubmit}>Применить фильтр</Styled.MobileSubmitButton>
            </Styled.MobileFilterButtons>
          )}
        </Styled.Filter>
      )}
    </>
  );
};
