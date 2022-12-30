import { HeaderLinkType } from '@src/mock/Header';
import { FC } from 'react';

import { Styled } from './styles';

type BottomRightMenuProps = { data: HeaderLinkType[] };

export const BottomRightMenu: FC<BottomRightMenuProps> = ({ data }) => {
  return (
    <Styled.Container>
      {data.map((item) => {
        const Icon = item.icon || null;
        return (
          <Styled.Link key={item.id}>
            {Icon && (
              <Styled.IconContainer>
                <Icon />
              </Styled.IconContainer>
            )}
            {item.text}
          </Styled.Link>
        );
      })}
    </Styled.Container>
  );
};
