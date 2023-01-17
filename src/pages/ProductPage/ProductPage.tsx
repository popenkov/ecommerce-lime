import { FC } from "react";

import { Sidebar } from "@src/components";

import { Styled } from "./styles";
import { Breadcrumbs } from "@src/components/UI/Breadcrumps";
import { ProductDetailed } from "@src/components/ProductPage";

export const ProductPage: FC = () => {
  return (
    <Styled.PageContainer>
      <Styled.MainContainer>
        <Breadcrumbs />
        <ProductDetailed />
      </Styled.MainContainer>
      <Sidebar />
    </Styled.PageContainer>
  );
};
