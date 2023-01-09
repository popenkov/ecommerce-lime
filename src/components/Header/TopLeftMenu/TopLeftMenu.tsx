import { HeaderLinkType } from '@src/mock/HeaderData';
import { FC } from 'react';

import { Styled } from './styles';

type TopLeftMenuProps = { data: HeaderLinkType[] };

export const TopLeftMenu: FC<TopLeftMenuProps> = ({ data }) => {
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
