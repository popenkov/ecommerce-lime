import { flexAlignCenter, font } from '@src/styles/mixins';
import styled, { css } from 'styled-components';

const Rating = styled.div`
  ${flexAlignCenter};
  margin-bottom: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Stars = styled.div`
  ${flexAlignCenter};
  margin-right: 13px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Value = styled.span`
  ${font({ size: '12', lineHeight: '15', fontWeight: '500' })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = {
  Rating,
  Stars,
  Value,
};
