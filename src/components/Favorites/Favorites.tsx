import { CatalogProduct } from "@src/components/CatalogProduct";
import { CustomPagination } from "@src/components/UI/CustomPagination";
// import { Pagination } from "@src/components/UI/Pagination";
import { TapItem } from "@src/components/UI/TapItem";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { catalogData } from "@src/mock/CatalogData";
import { FC, useState } from "react";
import { CatalogSortForm } from "../Catalog/CatalogSortForm";

import { Styled } from "./styles";

export const Favorites: FC = () => {
  const { products } = catalogData;
  const { items: favoriteItems } = useAppSelector((state) => state.favorites);

  return (
    <Styled.Products>
      <Styled.SortingContainer>
        <CatalogSortForm />
      </Styled.SortingContainer>

      {favoriteItems.length ? (
        <Styled.ItemsContainer>
          {products.map((item) => {
            return <CatalogProduct {...item} key={item.id} />;
          })}
        </Styled.ItemsContainer>
      ) : (
        <p>Ничего нет</p>
      )}
    </Styled.Products>
  );
};
