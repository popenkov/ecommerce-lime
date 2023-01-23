import { FC } from "react";

import { CatalogProduct } from "@src/components/CatalogProduct";
import { CustomPagination } from "@src/components/UI/CustomPagination";
import { TapItem } from "@src/components/UI/TapItem";
import { catalogData } from "@src/mock/CatalogData";
import { sortData } from "@src/mock/sortingData";

import { CatalogBanner } from "../CatalogBanner";
import { CatalogSortForm } from "../CatalogSortForm";
import { DeliverySection } from "../DeliverySection";
import { Styled } from "./styles";

export const Products: FC = () => {
  const { taps, products, banner, productsSecond, delivery } = catalogData;
  const sorting = sortData;

  const lastPage = 20;
  const maxLength = 7;

  const handlePageChange = (value: number) => {
    console.log(`current page is ${value}`);
  };

  const handleLoadNewItemsClick = () => {
    console.log("new items loaded");
  };

  return (
    <Styled.Products>
      <Styled.SortingContainer>
        <CatalogSortForm sortData={sorting} />
      </Styled.SortingContainer>

      <Styled.TapsContainer>
        {taps.map((item) => {
          return <TapItem {...item} key={item.id} />;
        })}
      </Styled.TapsContainer>

      <Styled.ItemsContainer>
        {products.map((item) => {
          return <CatalogProduct {...item} key={item.id} />;
        })}
      </Styled.ItemsContainer>

      <Styled.BannerContainer>
        <CatalogBanner data={banner} />
      </Styled.BannerContainer>

      <Styled.ItemsContainer>
        {productsSecond.map((item) => {
          return (
            // <Styled.ProductContainer key={item.id}>
            <CatalogProduct {...item} key={item.id} />
            // </Styled.ProductContainer>
          );
        })}
      </Styled.ItemsContainer>

      <Styled.PaginationContainer>
        <Styled.LoadNewItemsBtn onClick={handleLoadNewItemsClick}> Загрузить еще товары</Styled.LoadNewItemsBtn>
        <CustomPagination lastPage={lastPage} maxLength={maxLength} onPageChange={handlePageChange} />
      </Styled.PaginationContainer>

      <Styled.DeliveryContainer>
        <DeliverySection data={delivery} />
      </Styled.DeliveryContainer>
    </Styled.Products>
  );
};
