import { flexAlignCenter, font } from '@src/styles/mixins';
import styled from 'styled-components';

const Container = styled.div`
  ${flexAlignCenter};
  margin-left: 166px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Link = styled.a`
  ${flexAlignCenter};
  margin-right: 37px;
  ${font({ size: '14', lineHeight: '17', fontWeight: '700' })};
  color: ${({ theme }) => theme.color.black};

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const IconContainer = styled.span`
  margin-right: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = { Container, Link, IconContainer };
