import { FC } from "react";

import { HeaderLinkType } from "@src/mock/HeaderData";

import { BottomRightMenu } from "../BottomRightMenu";
import { CatalogButton } from "../Catalog/CatalogButton";
import { DiscountButton } from "../DiscountButton";
import { SearchInput } from "../SearchInput";
import { Styled } from "./styles";

type HeaderBottomProps = {
  data: HeaderLinkType[];
};

export const HeaderBottom: FC<HeaderBottomProps> = ({ data }) => {
  return (
    <Styled.HeaderBottom>
      <Styled.HeaderContainer>
        <CatalogButton />
        <SearchInput />
        <DiscountButton />
        <BottomRightMenu data={data} />
      </Styled.HeaderContainer>
    </Styled.HeaderBottom>
  );
};
