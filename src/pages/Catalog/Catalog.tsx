import { FC } from "react";

import { Sidebar } from "@src/components";
import { Filter } from "@src/components/Catalog/Filter";
import { Products } from "@src/components/Catalog/Products";
import { Breadcrumbs } from "@src/components/UI/Breadcrumps";
import { Loader } from "@src/components/UI/Loader";
import { useGetCatalogDataQuery } from "@src/store/services";
import { numberDeclination } from "@src/utils/numberDeclination";

import { Styled } from "./styles";

export const Catalog: FC = () => {
  const { data, isLoading } = useGetCatalogDataQuery();

  const getSearchAmountValue = (amount: number) =>
    `${amount} ${numberDeclination(amount, ["товар", "товара", "товаров"])}`;
  return (
    <Styled.PageContainer>
      <Styled.MainContainer>
        <Breadcrumbs />
        {isLoading ? (
          <Loader />
        ) : data ? (
          <>
            <Styled.ResultsHeader>
              <Styled.SearchTitle>{data.searchQuery}</Styled.SearchTitle>
              <Styled.SearchAmount>{getSearchAmountValue(data.searchAmount)}</Styled.SearchAmount>
            </Styled.ResultsHeader>

            <Styled.ResultsContainer>
              {data?.filters && (
                <Styled.FiltersContainer>
                  <Filter filters={data.filters} />
                </Styled.FiltersContainer>
              )}

              <Styled.ProductsContainer>
                <Products />
              </Styled.ProductsContainer>
            </Styled.ResultsContainer>
          </>
        ) : (
          <p>no data available</p>
        )}
      </Styled.MainContainer>
      <Sidebar />
    </Styled.PageContainer>
  );
};
