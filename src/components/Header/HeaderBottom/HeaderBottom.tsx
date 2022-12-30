import { HeaderLinkType } from '@src/mock/Header';
import { FC } from 'react';
import { BottomRightMenu } from '../BottomRightMenu';
import { CatalogButton } from '../Catalog/CatalogButton';

import { SearchInput } from '../SearchInput';

import { Styled } from './styles';

type HeaderBottomProps = {
  data: HeaderLinkType[];
};

export const HeaderBottom: FC<HeaderBottomProps> = ({ data }) => {
  return (
    <Styled.HeaderBottom>
      <Styled.HeaderContainer>
        <CatalogButton />
        <SearchInput />
        <BottomRightMenu data={data} />
      </Styled.HeaderContainer>
    </Styled.HeaderBottom>
  );
};
