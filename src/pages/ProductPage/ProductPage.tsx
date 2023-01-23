import { FC } from "react";

import { Sidebar } from "@src/components";
import { ProductDetailed } from "@src/components/ProductPage";
import { Breadcrumbs } from "@src/components/UI/Breadcrumps";

import { Styled } from "./styles";

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
