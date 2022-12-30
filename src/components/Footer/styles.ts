import styled from 'styled-components';

import { absolutePseudoEl, box, flexCenter, font } from '@src/styles/mixins';

const Footer = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = { Footer };
