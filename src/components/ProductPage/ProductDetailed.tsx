import { FC } from "react";
import { MainDescription } from "./MainDescription";
import { ProductSlider } from "./ProductSlider";
import { Styled } from "./styles";

export const ProductDetailed: FC = () => {
  return (
    <Styled.Product>
      <Styled.ProductTopContainer>
        <ProductSlider />
        <MainDescription />
      </Styled.ProductTopContainer>
    </Styled.Product>
  );
};
