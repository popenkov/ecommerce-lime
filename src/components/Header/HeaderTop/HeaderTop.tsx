import { FC } from "react";

import { HeaderLinkType } from "@src/mock/HeaderData";

import { HeaderLogo } from "../HeaderLogo";
import { TopLeftMenu } from "../TopLeftMenu";
import { TopRightMenu } from "../TopRightMenu";
import { Styled } from "./styles";

type HeaderTopProps = {
  data: {
    [key: string]: HeaderLinkType[];
  };
};

export const HeaderTop: FC<HeaderTopProps> = ({ data }) => {
  return (
    <Styled.HeaderTop>
      <Styled.HeaderContainer>
        <HeaderLogo />
        <TopLeftMenu data={data.leftPart} />
        <TopRightMenu data={data.rightPart} />
      </Styled.HeaderContainer>
    </Styled.HeaderTop>
  );
};
