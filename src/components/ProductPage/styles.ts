import styled, { css } from "styled-components";

import { flexCenter, font } from "@src/styles/mixins";
import { Link } from "react-router-dom";

const Product = styled.section`
  width: calc(100% - 27px);
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const ProductTopContainer = styled.div`
  display: flex;
`;

export const Styled = {
  Product,
  ProductTopContainer,
};
