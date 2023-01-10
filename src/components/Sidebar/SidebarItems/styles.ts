import { flexCenter, flexColumnCenter, font } from "@src/styles/mixins";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 10px;
`;

const ItemsCategory = styled.div``;

const Title = styled.h3`
  margin-bottom: 8px;
  ${font({ size: "6", lineHeight: "7", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Items = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = { Container, ItemsCategory, Items, Title };
