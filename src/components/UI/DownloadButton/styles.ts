import styled from 'styled-components';

import { flexAlignCenter, font } from '@src/styles/mixins';

const Button = styled.button`
  ${flexAlignCenter};
  width: 100%;
  padding: 8px 15px;
  border: 1px solid ${({ theme }) => theme.color.greyBorder};
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 6px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const IconContainer = styled.span`
  margin-right: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Text = styled.span`
  ${font({ size: '14', lineHeight: '32', fontWeight: '500' })};
  color: ${({ theme }) => theme.color.white};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = {
  Button,
  IconContainer,
  Text,
};
