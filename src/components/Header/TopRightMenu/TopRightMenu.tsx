import { FC } from "react";

import { HeaderLinkType } from "@src/mock/HeaderData";

import { Styled } from "./styles";

type TopRightMenuProps = { data: HeaderLinkType[] };

export const TopRightMenu: FC<TopRightMenuProps> = ({ data }) => {
  return (
    <Styled.Container>
      {data.map((item) => {
        return (
          <Styled.Link to={item.href} key={item.id} isActive={item.underlined}>
            {item.text}
          </Styled.Link>
        );
      })}
    </Styled.Container>
  );
};
