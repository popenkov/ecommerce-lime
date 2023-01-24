import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { flexCenter, font } from "@src/styles/mixins";

const FilterItem = styled.div<{ isActive?: boolean }>`
  padding: 15px 25px;
  border: 1px solid rgba(51, 51, 51, 0.1);
  border-radius: 5px;

  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
  ${({ isActive }) =>
    isActive &&
    css`
      border: 2px solid ${({ theme }) => theme.color.green};
      padding: 14px 24px;
    `};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  FilterItem,
};
