import { TapItem } from "@src/components/UI/TapItem";
import { catalogData } from "@src/mock/CatalogData";
import { FC } from "react";

import { Styled } from "./styles";
export const Products: FC = () => {
  const { taps } = catalogData;
  return (
    <Styled.Products>
      Products
      <Styled.TapsContainer>
        {taps.map((item) => {
          return <TapItem {...item} key={item.id} />;
        })}
      </Styled.TapsContainer>
    </Styled.Products>
  );
};
