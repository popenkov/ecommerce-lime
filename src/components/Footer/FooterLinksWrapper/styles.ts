import styled from "styled-components";

import { font } from "@src/styles/mixins";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Title = styled.h3`
  margin-bottom: 17px;
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.white};
  opacity: 0.3;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Link = styled.a`
  display: block;
  ${font({ size: "14", lineHeight: "32", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  Container,
  Title,
  Link,
};
