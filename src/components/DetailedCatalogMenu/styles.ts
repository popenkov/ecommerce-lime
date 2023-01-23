import styled from "styled-components";

import { font } from "@src/styles/mixins";

const DetailedCatalog = styled.div`
  width: 338px;
  height: calc(100vh - 116px);
  padding: 45px 39px;

  position: absolute;
  top: 0;
  left: 302px;
  background-color: ${({ theme }) => theme.color.greyLightBg};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    box-sizing: border-box;
    width: calc(100vw - 49px);
    height: calc(100vh - 58px);
    padding: 70px 25px 32px;
    left: 49px;
  }
`;

const Title = styled.h3`
  padding-bottom: 5px;
  ${font({ size: "14", lineHeight: "17", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  border-bottom: 1px solid ${({ theme }) => theme.color.greyBorderLight};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-bottom: 19px;
  }
`;

const CatalogList = styled.ul`
  padding: 0;
  margin: 0;
`;

const ListItem = styled.a`
  display: block;
  padding: 0;
  margin: 0;
  ${font({ size: "14", lineHeight: "32", fontWeight: "600" })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
`;

export const Styled = { DetailedCatalog, Title, CatalogList, ListItem };
