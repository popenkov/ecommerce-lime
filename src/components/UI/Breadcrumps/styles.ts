import styled from "styled-components";

import { font } from "@src/styles/mixins";

const Breadcrumbs = styled.div`
  width: calc(100% - 25px);
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 12px 0px 4px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 31px;
    padding: 17px 0px 4px;
  }
`;

const BreadcrumbsContainer = styled.div`
  display: flex;
  align-items: center;

  & a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;

    ${font({ size: "10", lineHeight: "12", fontWeight: "700" })};
    color: ${({ theme }) => theme.color.black};

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    }
  }
`;

const BreadcrumbsDivider = styled.span`
  display: inline-block;
  width: 12px;
  height: 1px;
  margin: 0 16px;

  ${font({ size: "16", lineHeight: "24", fontWeight: "400" })};
  background-color: ${({ theme }) => theme.color.greyBg};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0 12px;
  }
`;

export const Styled = { Breadcrumbs, BreadcrumbsContainer, BreadcrumbsDivider };
