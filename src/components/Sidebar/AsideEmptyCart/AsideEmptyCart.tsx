import { FC, memo } from "react";

import { ReactComponent as DietIcon } from "@src/assets/icons/diet.svg";

import { Styled } from "./styles";
import { useAuth } from "@src/hooks/useAuth";

const data = {
  name: "Tony",
};

export const AsideEmptyCart: FC = memo(() => {
  const { user } = useAuth();
  return (
    <Styled.Container>
      <Styled.GreetingsContainer>
        Здравствуйте
        {user && <Styled.GreetingsName>{data.name}!</Styled.GreetingsName>}
      </Styled.GreetingsContainer>

      <Styled.EmptyCartContainer>
        <DietIcon />
        <Styled.EmptyCartText>Ваша корзина пуста</Styled.EmptyCartText>
      </Styled.EmptyCartContainer>

      <Styled.CatalogContainer>
        <Styled.CatalogButton to="/catalog">Перейти в каталог</Styled.CatalogButton>
        <Styled.CatalogText>Выбирайте из более чем 1000 свежих товаров!</Styled.CatalogText>
      </Styled.CatalogContainer>

      <Styled.RecentOrderContainer>
        <Styled.RecentOrderButton to="/account/history">Повторить прошлый заказ</Styled.RecentOrderButton>
        <Styled.RecentOrderText>Вы можете быстро добавить в корзину ваши предыдущие покупки</Styled.RecentOrderText>
      </Styled.RecentOrderContainer>
    </Styled.Container>
  );
});

AsideEmptyCart.displayName = "AsideEmptyCart";
