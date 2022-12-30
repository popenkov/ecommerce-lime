import { flexAlignCenter } from '@src/styles/mixins';
import styled from 'styled-components';

const HeaderBottom = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  ${flexAlignCenter};

  max-width: 1280px;
  padding: 13px 25px;
  padding-left: 166px;

  margin: 0 auto;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = { HeaderBottom, HeaderContainer };
