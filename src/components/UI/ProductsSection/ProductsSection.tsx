import { ItemsType, MainPageData } from '@src/mock/MainPageData';
import { FC } from 'react';
import { Styled } from './styles';
import { ReactComponent as ArrowIcon } from '@src/assets/icons/arrow-right.svg';
import { Product } from '@src/components/Product';

type ProductsSectionProps = {
  data: ItemsType;
};

export const ProductsSection: FC<ProductsSectionProps> = ({ data }) => {
  const { title, button, color, items } = data;
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
          return <Product {...item} key={item.id} />;
        })}
      </Styled.ItemsContainer>
    </Styled.Container>
  );
};
