import { LinksType } from '@src/mock/FooterData';
import { FC } from 'react';
import { Styled } from './styles';

type FooterLinksType = {
  data: LinksType;
};

export const FooterLinksWrapper: FC<FooterLinksType> = ({ data }) => {
  return (
    <Styled.Container>
      <Styled.Title>{data.title}</Styled.Title>
      {data.items.map((item) => {
        return (
          <Styled.Link href={item.href} key={item.id}>
            {item.text}
          </Styled.Link>
        );
      })}
    </Styled.Container>
  );
};
