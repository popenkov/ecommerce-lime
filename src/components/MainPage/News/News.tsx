import { FC } from "react";

import { ReactComponent as ArrowIcon } from "@src/assets/icons/arrow-right.svg";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { theme } from "@src/theme";

import { NewsItem } from "../NewsItem";
import { Styled } from "./styles";
import { NewsType } from "@src/types/commonTypes";

type NewsProps = {
  data: NewsType;
};

export const News: FC<NewsProps> = ({ data }) => {
  const { title, button, items, color } = data;

  const isAdaptive = useMediaQuery(theme.breakpoints.tablet);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title color={color}>{title}</Styled.Title>
        <Styled.Link href={button.href}>
          {button.text} <ArrowIcon />
        </Styled.Link>
      </Styled.Header>
      {!isAdaptive ? (
        <Styled.ItemsContainer>
          {items.map((item) => {
            return <NewsItem {...item} key={item.id} />;
          })}
        </Styled.ItemsContainer>
      ) : (
        <Styled.ItemsMobileContainer>
          {items.map((item) => {
            return <NewsItem {...item} key={item.id} />;
          })}
        </Styled.ItemsMobileContainer>
      )}
    </Styled.Container>
  );
};
