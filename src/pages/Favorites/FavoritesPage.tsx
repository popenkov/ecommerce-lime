import { FC } from "react";

import { Sidebar } from "@src/components";
import { Filter } from "@src/components/Catalog/Filter";
import { Favorites } from "@src/components/Favorites";
import { EmptyFavorites } from "@src/components/Favorites/EmptyFavorites";
import { Breadcrumbs } from "@src/components/UI/Breadcrumps";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { useGetCatalogDataQuery } from "@src/store/services";
import { numberDeclination } from "@src/utils/numberDeclination";

import { Styled } from "./styles";

export const FavoritesPage: FC = () => {
  const { totalCount: favoritesItemsAmount, items: favoriteItems } = useAppSelector((state) => state.favorites);
  const { data } = useGetCatalogDataQuery();

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
            {data?.filters && (
              <Styled.FiltersContainer>
                <Filter filters={data.filters} />
              </Styled.FiltersContainer>
            )}

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
