import { FC, useEffect, useState } from "react";

import { ReactComponent as Shevron } from "@src/assets/icons/shevron-left.svg";
import { Sidebar } from "@src/components";
import { ReceiptsMobileFilter } from "@src/components/ReceiptsPage/ReceiptsMobileFilter";
import { ReceiptssSection } from "@src/components/ReceiptsPage/ReceiptsSection";
import { Breadcrumbs } from "@src/components/UI/Breadcrumps";
import { Select } from "@src/components/UI/Select/Select";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { ReceiptsData } from "@src/mock/ReceiptsData";
import { theme } from "@src/theme";
import { numberDeclination } from "@src/utils/numberDeclination";

import { Styled } from "./styles";

export const ReceiptsPage: FC = () => {
  const { title, resultsAmount, resultWords, filters, mobileFilters, receipts } = ReceiptsData;

  const isAdaptive = useMediaQuery(theme.breakpoints.medium);

  const [isFilterShown, setIsFilterShown] = useState(false);

  useEffect(() => {
    if (isFilterShown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFilterShown]);

  const isFilterToShowOnMobile = isAdaptive && isFilterShown;
  const isFilterToShow = isFilterToShowOnMobile || !isAdaptive;

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

  const resultValueText = `${resultsAmount} ${numberDeclination(resultsAmount, resultWords)}`;
  return (
    <Styled.PageContainer>
      <Styled.MainContainer>
        <Breadcrumbs />
        <Styled.ResultsHeader>
          <Styled.SearchTitle>{title}</Styled.SearchTitle>
          <Styled.SearchAmount>{resultValueText}</Styled.SearchAmount>
        </Styled.ResultsHeader>

        <Styled.ResultsContainer>
          <Styled.MobileFilterButton onClick={handleFilterMenuOpen}>
            <Styled.MobileButtonText> Фильтр рецептов</Styled.MobileButtonText>
            <Styled.ShevronIcon>
              <Shevron />
            </Styled.ShevronIcon>
          </Styled.MobileFilterButton>

          <Styled.FiltersContainer>
            {filters.map((item) => {
              return (
                <Styled.FilterContainer key={item.id}>
                  <Select defaultValue={item.items[0]} options={item.items} />
                </Styled.FilterContainer>
              );
            })}
          </Styled.FiltersContainer>

          {isFilterToShow && (
            <Styled.MobileFiltersContainer>
              <ReceiptsMobileFilter data={mobileFilters} />

              {isFilterToShowOnMobile && (
                <Styled.MobileFilterButtons>
                  <Styled.MobileCancelButton onClick={handleFilterReset}>x</Styled.MobileCancelButton>
                  <Styled.MobileSubmitButton onClick={handleFilterSubmit}>Применить фильтр</Styled.MobileSubmitButton>
                </Styled.MobileFilterButtons>
              )}
            </Styled.MobileFiltersContainer>
          )}

          <Styled.ReceiptsContainer>
            {receipts.map((item) => {
              return <ReceiptssSection data={item} key={item.title} />;
            })}
          </Styled.ReceiptsContainer>
        </Styled.ResultsContainer>
      </Styled.MainContainer>
      <Sidebar />
    </Styled.PageContainer>
  );
};
