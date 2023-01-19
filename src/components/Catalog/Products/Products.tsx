import { CatalogProduct } from "@src/components/CatalogProduct";
import { TapItem } from "@src/components/UI/TapItem";
import { catalogData } from "@src/mock/CatalogData";
import { FC } from "react";
import { CatalogBanner } from "../CatalogBanner";
import { DeliverySection } from "../DeliverySection";

import { Styled } from "./styles";
export const Products: FC = () => {
  const { taps, products, banner, productsSecond, delivery } = catalogData;
  return (
    <Styled.Products>
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
          return <CatalogProduct {...item} key={item.id} />;
        })}
      </Styled.ItemsContainer>

      <Styled.DeliveryContainer>
        <DeliverySection data={delivery} />
      </Styled.DeliveryContainer>
    </Styled.Products>
  );
};
