import { flexAlignCenter, font } from '@src/styles/mixins';
import styled from 'styled-components';

const Container = styled.div`
  width: 243px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Title = styled.h3`
  margin-bottom: 4px;
  ${font({ size: '14', lineHeight: '32', fontWeight: '500' })};
  color: ${({ theme }) => theme.color.white};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Phone = styled.a`
  ${flexAlignCenter};
  margin-right: 37px;
  margin-bottom: 25px;
  ${font({ size: '14', lineHeight: '17', fontWeight: '700' })};
  color: ${({ theme }) => theme.color.black};

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const IconContainer = styled.span`
  &:not(:last-child) {
    margin-right: 23px;
  }

  & svg {
    width: 26px;
    height: 26px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const PhoneNumber = styled.span`
  ${font({ size: '42', lineHeight: '51', fontWeight: '700' })};
  color: ${({ theme }) => theme.color.white};

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

  &:not(:last-child) {
    margin-right: 11px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const DownloadsContainer = styled.div`
  margin-bottom: 32px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const SocialsContainer = styled.div`
  ${flexAlignCenter};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = {
  Container,
  Title,
  Phone,
  IconContainer,
  PhoneNumber,
  Text,
  Link,
  DownloadsContainer,
  SocialsContainer,
};
