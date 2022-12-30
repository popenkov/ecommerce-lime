import { flexAlignCenter, font } from '@src/styles/mixins';
import styled, { css } from 'styled-components';

const Container = styled.div`
  ${flexAlignCenter};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Link = styled.a<{ isActive?: boolean }>`
  ${flexAlignCenter};
  margin-right: 37px;
  ${font({ size: '14', lineHeight: '17', fontWeight: '700' })};
  color: ${({ theme }) => theme.color.white};

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.color.green};
    `};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const IconContainer = styled.span`
  margin-right: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = { Container, Link, IconContainer };
