import { font } from "@src/styles/mixins";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { boolean } from "yup";

const Filter = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const FilterContainer = styled.div``;

const FilterLink = styled(Link)<{ isActive?: boolean }>`
  display: block;
  ${font({ size: "14", lineHeight: "32", fontWeight: "600" })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: underline;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.color.green};
    `}; ;
`;

export const Styled = {
  Filter,
  FilterContainer,
  FilterLink,
};
