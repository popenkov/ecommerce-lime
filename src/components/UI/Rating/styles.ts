import styled, { css } from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const Rating = styled.div`
  ${flexAlignCenter};
  margin-bottom: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Stars = styled.div`
  ${flexAlignCenter};
  margin-right: 13px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Value = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  Rating,
  Stars,
  Value,
};
