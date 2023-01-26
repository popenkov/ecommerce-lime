import styled, { css } from "styled-components";

import { flexAlignCenter, flexCenter, font } from "@src/styles/mixins";

const Reviews = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const ReviewsFilter = styled.div`
  position: relative;
  ${flexAlignCenter};
  gap: 16px;
  margin-bottom: 26px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 40px;
  }
`;

const FilterItem = styled.button<{ isActive: boolean }>`
  ${font({ size: "12", lineHeight: "24", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.5;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      text-decoration: underline;
    `};
`;

const ReviewsContainer = styled.div`
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  Reviews,
  ReviewsFilter,
  FilterItem,
  ReviewsContainer,
};
