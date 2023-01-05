import { MainPageData } from '@src/mock/MainPageData';
import { FC } from 'react';
import { Styled } from './styles';
import { ReactComponent as ArrowIcon } from '@src/assets/icons/arrow-right.svg';
import { NewsItem } from '../NewsItem';

export const News: FC = () => {
  const { title, button, items, color } = MainPageData.news;
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title color={color}>{title}</Styled.Title>
        <Styled.Link href={button.href}>
          {button.text} <ArrowIcon />
        </Styled.Link>
      </Styled.Header>
      <Styled.ItemsContainer>
        {items.map((item) => {
          return <NewsItem {...item} key={item.id} />;
        })}
      </Styled.ItemsContainer>
    </Styled.Container>
  );
};
