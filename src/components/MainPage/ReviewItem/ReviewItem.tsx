import { FC } from 'react';

import { ReactComponent as AccountIcon } from '@src/assets/icons/person.svg';
import { Styled } from './styles';
import { ReviewType } from '@src/mock/MainPageData';

type ReviewItemType = Omit<ReviewType, 'id'>;

export const ReviewItem: FC<ReviewItemType> = ({ name, text }) => {
  return (
    <Styled.Item>
      <Styled.Name>
        <AccountIcon />
        {name}
      </Styled.Name>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Item>
  );
};
