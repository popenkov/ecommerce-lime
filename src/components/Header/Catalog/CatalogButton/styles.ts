import { flexAlignCenter, font } from '@src/styles/mixins';
import styled from 'styled-components';

const Button = styled.button`
  height: 45px;
  margin-right: 15px;
  padding: 13px 18px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.green};

  & svg {
    margin-right: 15px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      display: none;
      margin-right: 0;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 24px;
    padding: 0;
    background-color: ${({ theme }) => theme.color.white};
  }
`;

const MobileLine = styled.span`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: block;
    position: relative;
    width: 25px;
    min-width: 25px;
    height: 3px;
    box-sizing: content-box;
    background-color: ${({ theme }) => theme.color.green};
    border-radius: 100px;

    &::before {
      content: '';
      width: 25px;
      min-width: 25px;
      height: 3px;
      background-color: ${({ theme }) => theme.color.green};
      position: absolute;
      top: -10px;
      left: 0;
    }

    &::after {
      content: '';
      width: 25px;
      min-width: 25px;
      height: 3px;
      background-color: ${({ theme }) => theme.color.green};
      position: absolute;
      top: 10px;
      left: 0;
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

export const Styled = { Button, Text, MobileLine };
