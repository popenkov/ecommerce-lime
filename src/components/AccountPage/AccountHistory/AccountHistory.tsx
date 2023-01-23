import { FC } from "react";

import { CatalogSortForm } from "@src/components/Catalog/CatalogSortForm";
import { historyData } from "@src/mock/OrdersHistoryData";
import { sortData } from "@src/mock/sortingData";

import { OrderSection } from "../OrderSection";
import { Styled } from "./styles";

export const AccountHistory: FC = () => {
  const data = historyData;
  return (
    <Styled.SectionContainer>
      <Styled.SortContainer>
        <CatalogSortForm sortData={sortData} />
      </Styled.SortContainer>
      <Styled.HistoryContainer>
        {data.map((item) => {
          return <OrderSection {...item} key={item.id} />;
        })}
      </Styled.HistoryContainer>
    </Styled.SectionContainer>
  );
};
