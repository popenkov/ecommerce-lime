import styled from "styled-components";

import { width100 } from "../styles/mixins";

export const Container = styled.div`
  ${width100};
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.background};
  background-color: ${({ theme }) => theme.color.white};
`;

export const Content = styled.div`
  margin-top: 117px;
  flex-grow: 1;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 59px;
  }
`;
