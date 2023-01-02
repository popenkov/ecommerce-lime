import { CopyrightType } from '@src/mock/FooterData';
import { FC } from 'react';
import { Styled } from './styles';
import { ReactComponent as Logo } from '../../../assets/images/footer-logo.svg';

type FooterCopyrightProps = {
  data: CopyrightType;
};
export const FooterCopyright: FC<FooterCopyrightProps> = ({ data }) => {
  const { years, rights, agreement } = data;
  return (
    <Styled.Container>
      <Styled.LogoContainer>
        <Logo />
      </Styled.LogoContainer>

      <Styled.Text>{years}</Styled.Text>
      <Styled.Text>{rights}</Styled.Text>
      <Styled.Link href={agreement.href}>{agreement.text}</Styled.Link>
    </Styled.Container>
  );
};
