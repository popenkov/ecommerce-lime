import { ChiefReceiptsData } from "@src/mock/MainPageData";
import { FC } from "react";
import { ChiefInterview } from "./ChiefInterview";
import { ChiefReceipts } from "./ChiefReceipts";

import { Styled } from "./styles";

export const ChiefSection: FC = () => {
  const { title, subtitle, items } = ChiefReceiptsData;
  console.log(items);
  return (
    <Styled.Container>
      <ChiefInterview />
      <Styled.ReceiptsContainer>
        <ChiefReceipts title={title} subtitle={subtitle} items={items} />
      </Styled.ReceiptsContainer>
    </Styled.Container>
  );
};
