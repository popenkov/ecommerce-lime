import React, { FC } from "react";

import { ReactComponent as DietIcon } from "@src/assets/icons/diet.svg";
import { ReactComponent as FavoritesIcon } from "@src/assets/icons/favorites.svg";
import { ROUTE } from "@src/utils/Routes";

import { Styled } from "./styles";

export const EmptyFavorites: FC = () => {
  return (
    <Styled.Container>
      <Styled.IconContainer>
        <DietIcon />
      </Styled.IconContainer>
      <Styled.TextContainer>
        <Styled.Title>Добавьте товары в избранное</Styled.Title>
        <Styled.Text>
          Для того чтобы добавить товары в избранное просто нажмите на значок в углу товара
          <FavoritesIcon />
        </Styled.Text>
        <Styled.CatalogButton to={ROUTE.CATALOG}>Перейти в каталог</Styled.CatalogButton>
      </Styled.TextContainer>
    </Styled.Container>
  );
};
