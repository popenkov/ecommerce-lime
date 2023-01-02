import { font } from '@src/styles/mixins';
import styled from 'styled-components';

const Container = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 36px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Text = styled.p`
  ${font({ size: '12', lineHeight: '15', fontWeight: '500' })};
  color: ${({ theme }) => theme.color.white};

  opacity: 0.7;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Link = styled.a`
  ${font({ size: '12', lineHeight: '15', fontWeight: '500' })};
  color: ${({ theme }) => theme.color.green};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = {
  Container,
  LogoContainer,
  Text,
  Link,
};
