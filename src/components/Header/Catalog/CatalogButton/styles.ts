import { flexAlignCenter, font } from '@src/styles/mixins';
import styled from 'styled-components';

const Button = styled.button`
  height: 45px;
  margin-right: 15px;
  padding: 13px 18px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.green};

  ${font({ size: '14', lineHeight: '17', fontWeight: '700' })};
  color: ${({ theme }) => theme.color.black};

  & svg {
    margin-right: 15px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = { Button };
