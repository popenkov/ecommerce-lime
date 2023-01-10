import styled from "styled-components";

import { width100 } from "../styles/mixins";

export const Container = styled.div`
  ${width100};
  min-height: 100vh;

  margin: 0 auto;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.background};
`;

export const Content = styled.div`
  margin-top: 116px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 59px;
  }
`;
