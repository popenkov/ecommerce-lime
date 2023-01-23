import { FC } from "react";

import { CatalogProduct } from "@src/components/CatalogProduct";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { sortData } from "@src/mock/sortingData";

import { CatalogSortForm } from "../Catalog/CatalogSortForm";
import { Styled } from "./styles";

export const Favorites: FC = () => {
  const { items: favoriteItems } = useAppSelector((state) => state.favorites);
  const sorting = sortData;

  return (
    <Styled.Products>
      <Styled.SortingContainer>
        <CatalogSortForm sortData={sorting} />
      </Styled.SortingContainer>

      {favoriteItems.length && (
        <Styled.ItemsContainer>
          {favoriteItems.map((item) => {
            return <CatalogProduct {...item} key={item.id} />;
          })}
        </Styled.ItemsContainer>
      )}
    </Styled.Products>
  );
};
