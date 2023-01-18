import { FC } from "react";

import { Sidebar } from "@src/components";

import { Styled } from "./styles";
import { Breadcrumbs } from "@src/components/UI/Breadcrumps";
import { catalogData } from "@src/mock/CatalogData";
import { numberDeclination } from "@src/utils/numberDeclination";
import { Filter } from "@src/components/Catalog/Filter";
import { Products } from "@src/components/Catalog/Products";

export const Catalog: FC = () => {
  const { searchAmount, searchQuery } = catalogData;
  const searchAmountValue = `${searchAmount} ${numberDeclination(searchAmount, ["товар", "товара", "товаров"])}`;
  return (
    <Styled.PageContainer>
      <Styled.MainContainer>
        <Breadcrumbs />
        <Styled.ResultsHeader>
          <Styled.SearchTitle>{searchQuery}</Styled.SearchTitle>
          <Styled.SearchAmount>{searchAmountValue}</Styled.SearchAmount>
        </Styled.ResultsHeader>

        <Styled.ResultsContainer>
          <Styled.FiltersContainer>
            <Filter />
          </Styled.FiltersContainer>

          <Styled.ProductsContainer>
            <Products />
          </Styled.ProductsContainer>
        </Styled.ResultsContainer>
      </Styled.MainContainer>
      <Sidebar />
    </Styled.PageContainer>
  );
};
