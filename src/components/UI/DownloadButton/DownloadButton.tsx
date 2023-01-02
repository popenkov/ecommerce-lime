import { LinkType } from '@src/mock/FooterData';
import { FC } from 'react';

import { Styled } from './styles';

type DownloadButtonType = Omit<LinkType, 'id'>;

export const DownloadButton: FC<DownloadButtonType> = ({
  text,
  href,
  icon,
}) => {
  const Icon = icon as React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  return (
    <Styled.Button>
      {icon && (
        <Styled.IconContainer>
          <Icon />
        </Styled.IconContainer>
      )}
      <Styled.Text>{text}</Styled.Text>
    </Styled.Button>
  );
};
