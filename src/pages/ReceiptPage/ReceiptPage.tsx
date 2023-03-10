import React from "react";
import { FC } from "react";

import { Sidebar } from "@src/components";
import { ReceiptDetailed } from "@src/components/ReceiptDetailed";
import { Breadcrumbs } from "@src/components/UI/Breadcrumps";

import { Styled } from "./styles";

export const ReceiptPage: FC = () => {
  return (
    <Styled.PageContainer>
      <Styled.MainContainer>
        <Breadcrumbs />
        <ReceiptDetailed />
      </Styled.MainContainer>
      <Sidebar />
    </Styled.PageContainer>
  );
};
