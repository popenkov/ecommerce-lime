import { font } from "@src/styles/mixins";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const IconContainer = styled.div`
  position: absolute;
  right: 7px;
  top: 7px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  Container,
  IconContainer,
};
