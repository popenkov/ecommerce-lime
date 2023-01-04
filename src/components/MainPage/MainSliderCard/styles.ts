import { flexAlignCenter, font } from '@src/styles/mixins';
import styled from 'styled-components';

const Card = styled.div<{ img: string; color: string }>`
  box-sizing: border-box;
  width: calc(100% - 178px);
  max-width: 855px;
  min-height: 361px;
  padding: 62px 50px 39px;
  border-radius: 10px;
  background: ${({ img }) => (img ? `url(${img})` : 'unset')},
    ${({ color, theme }) => (color ? color : theme.color.white)};
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 300px;
`;

const Title = styled.h3`
  margin-bottom: 21px;
  ${font({ size: '42', lineHeight: '51', fontWeight: '700' })};
  color: ${({ theme }) => theme.color.white};
  text-align: left;
`;

const Description = styled.p`
  margin-bottom: 53px;
  ${font({ size: '24', lineHeight: '29', fontWeight: '400' })};
  color: ${({ theme }) => theme.color.white};
  text-align: left;
`;

const Link = styled.a`
  ${flexAlignCenter};
  padding: 10px 13px 10px 23px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  ${font({ size: '12', lineHeight: '15', fontWeight: '700' })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;

  & svg {
    margin-left: 24px;
  }
`;

export const Styled = { Card, Text, Title, Description, Link };
