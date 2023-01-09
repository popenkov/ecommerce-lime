import { FC } from 'react';

import { ReactComponent as Shevron } from '@src/assets/icons/shevron-left.svg';
import { Styled } from './styles';

export const DiscountButton: FC = () => {
  return (
    <Styled.Button>
      <Styled.PercentIcon>%</Styled.PercentIcon>
      <Styled.PercentText>Скидки</Styled.PercentText>
      <Styled.ShevronIcon>
        <Shevron />
      </Styled.ShevronIcon>
    </Styled.Button>
  );
};
