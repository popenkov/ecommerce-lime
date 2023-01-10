import { CatalogChildrenType } from "@src/mock/CatalogMenuData";
import { FC } from "react";

import { Styled } from "./styles";

type DetailedCatalogMenuProps = Omit<CatalogChildrenType, "id">;

export const DetailedCatalogMenu: FC<DetailedCatalogMenuProps> = ({ title, items }) => {
  return (
    <Styled.DetailedCatalog>
      <Styled.Title>{title}</Styled.Title>
      <Styled.CatalogList>
        {items.map((item) => {
          return (
            <Styled.ListItem href={item.href} key={item.id}>
              {item.name}
            </Styled.ListItem>
          );
        })}
      </Styled.CatalogList>
    </Styled.DetailedCatalog>
  );
};
