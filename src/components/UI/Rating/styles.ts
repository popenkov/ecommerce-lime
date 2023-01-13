import styled, { css } from "styled-components";

import { box, flexAlignCenter, font } from "@src/styles/mixins";

const Rating = styled.div`
  ${flexAlignCenter};
  margin-bottom: 4px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 3px;
  }
`;

const Stars = styled.div`
  ${flexAlignCenter};
  margin-right: 13px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 3px;
    margin-right: 10px;
    & svg {
      ${box(9)}
    }
  }
`;

const Value = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "9", lineHeight: "11", fontWeight: "500" })};
    color: ${({ theme }) => theme.color.black};
    opacity: 0.5;
    margin-top: 5px;
  }
`;

export const Styled = {
  Rating,
  Stars,
  Value,
};
