import { flexAlignCenter, font } from '@src/styles/mixins';
import styled from 'styled-components';

const Container = styled.div`
  ${flexAlignCenter};
  margin-left: 34px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-left: auto;
  }
`;

const IconContainer = styled.span`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    & svg {
      width: 15px;
      height: 15px;
    }
  }
`;

const Link = styled.a`
  cursor: pointer;
  ${flexAlignCenter};
  margin-right: 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-right: 15px;
  }

  &:last-child {
    margin-right: 0;
  }

  &:not(:last-child) ${IconContainer} {
    margin-right: 10px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      margin-right: 0px;
    }
  }
`;

const Text = styled.span`
  ${font({ size: '14', lineHeight: '17', fontWeight: '700' })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
  }
`;

export const Styled = { Container, Link, IconContainer, Text };
