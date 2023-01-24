import { FC } from "react";

import { Sidebar } from "@src/components";
import { Filter } from "@src/components/Catalog/Filter";
import { Favorites } from "@src/components/Favorites";
import { EmptyFavorites } from "@src/components/Favorites/EmptyFavorites";
import { Breadcrumbs } from "@src/components/UI/Breadcrumps";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { numberDeclination } from "@src/utils/numberDeclination";

import { Styled } from "./styles";
import { ReceiptsData } from "@src/mock/ReceiptsData";
import { Select } from "@src/components/UI/Select/Select";
import { ReceiptssSection } from "@src/components/ReceiptsPage/ReceiptsSection";

export const ReceiptsPage: FC = () => {
  const { title, resultsAmount, resultWords, filters, receipts } = ReceiptsData;

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
          <Styled.FiltersContainer>
            {filters.map((item) => {
              return (
                <Styled.FilterContainer key={item.id}>
                  <Select defaultValue={item.items[0]} options={item.items} />
                </Styled.FilterContainer>
              );
            })}
          </Styled.FiltersContainer>

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
