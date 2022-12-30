import { FC } from 'react';
import { ReactComponent as CatalogIcon } from '../../../../assets/icons/catalog.svg';

import { Styled } from './styles';

export const CatalogButton: FC = () => {
  return (
    <Styled.Button>
      <CatalogIcon />
      Каталог
    </Styled.Button>
  );
};
