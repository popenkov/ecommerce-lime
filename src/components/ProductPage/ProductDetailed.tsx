import { FC } from "react";

import { RecommendatedItems } from "@src/mock/CartAside";

import { ProductsSection, ThumbSlider } from "../UI";
import { DetailedDescription } from "./DetailedDescription";
import { MainDescription } from "./MainDescription";
import { ProductPreviews } from "./ProductPreviews";

import { Styled } from "./styles";
import { productDetailedData } from "@src/mock/ProductDetailedData";

export const ProductDetailed: FC = () => {
  const { main, thumb, isFavorite } = productDetailedData.sliderImages;

  const sliderData = { main, thumb, isFavorite };
  return (
    <Styled.Product>
      <Styled.ProductTopContainer>
        <ThumbSlider data={sliderData} />
        <MainDescription />
      </Styled.ProductTopContainer>

      <Styled.ProductBottomContainer>
        <DetailedDescription />
        <ProductPreviews />
      </Styled.ProductBottomContainer>

      <Styled.RecommendationsContainer>
        <ProductsSection data={RecommendatedItems} hideLink />
      </Styled.RecommendationsContainer>
    </Styled.Product>
  );
};
