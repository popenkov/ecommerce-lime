import { flexAlignCenter, font } from "@src/styles/mixins";
import styled from "styled-components";

const Products = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const TapsContainer = styled.div`
  ${flexAlignCenter}
  gap: 10px;
`;

export const Styled = {
  Products,
  TapsContainer,
};
