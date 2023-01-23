import { FC } from "react";

import { Sidebar } from "@src/components";
import { Filter } from "@src/components/Catalog/Filter";
import { Favorites } from "@src/components/Favorites";
import { EmptyFavorites } from "@src/components/Favorites/EmptyFavorites";
import { Breadcrumbs } from "@src/components/UI/Breadcrumps";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { numberDeclination } from "@src/utils/numberDeclination";

import { Styled } from "./styles";

export const FavoritesPage: FC = () => {
  const { totalCount: favoritesItemsAmount, items: favoriteItems } = useAppSelector((state) => state.favorites);

  const favoritesItems = `${favoritesItemsAmount} ${numberDeclination(favoritesItemsAmount, [
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
          <Styled.SearchAmount>{favoritesItems}</Styled.SearchAmount>
        </Styled.ResultsHeader>
        {favoriteItems.length ? (
          <Styled.ResultsContainer>
            <Styled.FiltersContainer>
              <Filter />
            </Styled.FiltersContainer>

            <Styled.ProductsContainer>
              <Favorites />
            </Styled.ProductsContainer>
          </Styled.ResultsContainer>
        ) : (
          <Styled.EmptyContainer>
            <EmptyFavorites />
          </Styled.EmptyContainer>
        )}
      </Styled.MainContainer>
      <Sidebar />
    </Styled.PageContainer>
  );
};
