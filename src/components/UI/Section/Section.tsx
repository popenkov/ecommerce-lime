import { ItemsType, MainPageData } from '@src/mock/MainPageData';
import { FC } from 'react';
import { Styled } from './styles';
import { ReactComponent as ArrowIcon } from '@src/assets/icons/arrow-right.svg';

type SectionProps = {
  data: ItemsType;
};

export const Section: FC<SectionProps> = ({ data }) => {
  const { title, button, color } = data;
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title color={color}>{title}</Styled.Title>
        <Styled.Link href={button.href}>
          {button.text} <ArrowIcon />
        </Styled.Link>
      </Styled.Header>
      <Styled.ItemsContainer></Styled.ItemsContainer>
    </Styled.Container>
  );
};
