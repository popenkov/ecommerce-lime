import { FC } from "react";

import { HeaderData } from "@src/mock/HeaderData";

import { HeaderBottom } from "./HeaderBottom";
import { HeaderTop } from "./HeaderTop";
import { Styled } from "./styles";
import { useGetHeaderDataQuery } from "@src/store/services";

export const Header: FC = () => {
  //   const data = HeaderData;
  const { data, isLoading, isSuccess } = useGetHeaderDataQuery();
  return (
    <Styled.Header>
      {data && <HeaderTop data={data.top} />}
      {data && <HeaderBottom data={data.bottomLinks} />}
    </Styled.Header>
  );
};
