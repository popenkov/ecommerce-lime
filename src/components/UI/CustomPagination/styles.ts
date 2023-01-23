import styled from "styled-components";

import { box, flexCenter, font } from "@src/styles/mixins";

const PaginationContainer = styled.div`
  & .pagination {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0;
    margin: 0;
  }

  & li {
    list-style: none;
    ${box(29)};
    ${flexCenter};
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    &.active {
      background: ${({ theme }) => theme.color.green};
      border: 1px solid ${({ theme }) => theme.color.green};
    }

    &.disabled {
      background: #e1e1e1;
      border: 1px solid ${({ theme }) => theme.color.green};
    }
  }

  & a {
    ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  PaginationContainer,
};
