import { LinkType } from "@src/mock/CatalogData";
import { FC } from "react";

import { Styled } from "./styles";

export const TapItem: FC<LinkType> = ({ name, href }) => {
  return (
    <Styled.Tap>
      <Styled.TapText>{name}</Styled.TapText>
    </Styled.Tap>
  );
};
