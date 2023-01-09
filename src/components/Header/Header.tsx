import { FC } from "react";

import { HeaderData } from "@src/mock/HeaderData";

import { HeaderBottom } from "./HeaderBottom";
import { HeaderTop } from "./HeaderTop";
import { Styled } from "./styles";

export const Header: FC = () => {
  const data = HeaderData;
  return (
    <Styled.Header>
      <HeaderTop data={data.top} />
      <HeaderBottom data={data.bottomLinks} />
    </Styled.Header>
  );
};
