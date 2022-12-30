import styled from 'styled-components';

import { width100 } from '../styles/mixins';

export const Container = styled.div`
  ${width100};
  min-height: 100vh;
  overflow-x: hidden;
  margin: 0 auto;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.background};
`;
