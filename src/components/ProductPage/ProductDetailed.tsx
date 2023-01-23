import { FC } from "react";

import { RecommendatedItems } from "@src/mock/CartAside";

import { ProductsSection } from "../UI";
import { DetailedDescription } from "./DetailedDescription";
import { MainDescription } from "./MainDescription";
import { ProductPreviews } from "./ProductPreviews";
import { ProductSlider } from "./ProductSlider";
import { Styled } from "./styles";

export const ProductDetailed: FC = () => {
  return (
    <Styled.Product>
      <Styled.ProductTopContainer>
        <ProductSlider />
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
