import { FC } from "react";
import { ChiefInterview } from "./ChiefInterview";
import { ChiefReceipts } from "./ChiefReceipts";

import { Styled } from "./styles";

export const ChiefSection: FC = () => {
  return (
    <Styled.Container>
      <ChiefInterview />
      <ChiefReceipts />
    </Styled.Container>
  );
};
