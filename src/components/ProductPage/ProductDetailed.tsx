import { FC } from "react";

import { CartAsideData } from "@src/mock/CartAside";
import { productDetailedData } from "@src/mock/ProductDetailedData";

import { ProductsSection, ThumbSlider } from "../UI";
import { FavoritesButton } from "../UI/FavoritesButton/FavoritesButton";
import { DetailedDescription } from "./DetailedDescription";
import { MainDescription } from "./MainDescription";
import { ProductPreviews } from "./ProductPreviews";
import { Styled } from "./styles";

export const ProductDetailed: FC = () => {
  const { main, thumb, isFavorite } = productDetailedData.sliderImages;

  const { recommendatedItems } = CartAsideData;

  const sliderData = { main, thumb };
  return (
    <Styled.Product>
      <Styled.ProductTopContainer>
        <Styled.ThumbSliderContainer>
          <ThumbSlider data={sliderData} />

          <Styled.FavoritesButtonContainer>
            <FavoritesButton isFavorite={isFavorite} />
          </Styled.FavoritesButtonContainer>
        </Styled.ThumbSliderContainer>
        <MainDescription />
      </Styled.ProductTopContainer>

      <Styled.ProductBottomContainer>
        <DetailedDescription />
        <ProductPreviews />
      </Styled.ProductBottomContainer>

      <Styled.RecommendationsContainer>
        <ProductsSection data={recommendatedItems} hideLink />
      </Styled.RecommendationsContainer>
    </Styled.Product>
  );
};
