import { FC } from "react";

import { useGetHeaderDataQuery } from "@src/store/services";

import { HeaderBottom } from "./HeaderBottom";
import { HeaderTop } from "./HeaderTop";
import { Styled } from "./styles";

export const Header: FC = () => {
  const { data } = useGetHeaderDataQuery();
  return (
    <Styled.Header>
      {data && <HeaderTop data={data.top} />}
      {data && <HeaderBottom data={data.bottomLinks} />}
    </Styled.Header>
  );
};
