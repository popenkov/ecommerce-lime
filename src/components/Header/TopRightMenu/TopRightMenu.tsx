import { HeaderLinkType } from '@src/mock/Header';
import { FC } from 'react';

import { Styled } from './styles';

type TopRightMenuProps = { data: HeaderLinkType[] };

export const TopRightMenu: FC<TopRightMenuProps> = ({ data }) => {
  return (
    <Styled.Container>
      {data.map((item) => {
        return (
          <Styled.Link key={item.id} isActive={item.underlined}>
            {item.text}
          </Styled.Link>
        );
      })}
    </Styled.Container>
  );
};
