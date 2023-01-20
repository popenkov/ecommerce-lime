import { FC } from "react";

import { Sidebar } from "@src/components";

import { Styled } from "./styles";
import { Breadcrumbs } from "@src/components/UI/Breadcrumps";
import { numberDeclination } from "@src/utils/numberDeclination";
import { Filter } from "@src/components/Catalog/Filter";
import { FavoritesData } from "@src/mock/FavoritesData";
import { Favorites } from "@src/components/Favorites";
import { useAppSelector } from "@src/hooks/useAppSelector";

export const FavoritesPage: FC = () => {
  const { totalCount: favoritesItemsAmount } = useAppSelector((state) => state.favorites);
  const searchAmountValue = `${favoritesItemsAmount} ${numberDeclination(favoritesItemsAmount, [
    "товар",
    "товара",
    "товаров",
  ])}`;
  return (
    <Styled.PageContainer>
      <Styled.MainContainer>
        <Breadcrumbs />
        <Styled.ResultsHeader>
          <Styled.SearchTitle>Избранное</Styled.SearchTitle>
          <Styled.SearchAmount>{favoritesItemsAmount}</Styled.SearchAmount>
        </Styled.ResultsHeader>

        <Styled.ResultsContainer>
          <Styled.FiltersContainer>
            <Filter />
          </Styled.FiltersContainer>

          <Styled.ProductsContainer>
            <Favorites />
          </Styled.ProductsContainer>
        </Styled.ResultsContainer>
      </Styled.MainContainer>
      <Sidebar />
    </Styled.PageContainer>
  );
};
