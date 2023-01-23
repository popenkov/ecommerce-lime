import { CatalogSortForm } from "@src/components/Catalog/CatalogSortForm";
import { FC } from "react";
import { sortData } from "@src/mock/sortingData";

import { Styled } from "./styles";
import { historyData } from "@src/mock/OrdersHistoryData";
import { OrderSection } from "../OrderSection";

export const AccountHistory: FC = () => {
  const data = historyData;
  return (
    <Styled.SectionContainer>
      History
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
