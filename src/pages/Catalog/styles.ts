import { font } from "@src/styles/mixins";
import styled from "styled-components";

const PageContainer = styled.main`
  display: flex;
  gap: 20px;

  padding-left: 20px;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
  }
`;
const MainContainer = styled.div`
  flex: 1;
  width: calc(100% - 220px);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100vw;
    overflow-x: hidden;
  }
`;

const ResultsHeader = styled.div`
  margin-left: 10px;
  margin-top: -12px;
  margin-bottom: 16px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const SearchTitle = styled.span`
  margin-right: 14px;
  ${font({ size: "24", lineHeight: "29", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;
const SearchAmount = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
`;

const ResultsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 10px;
`;

const FiltersContainer = styled.div`
  width: 18%;
  max-width: 172px;
`;

const ProductsContainer = styled.div`
  width: 81%;
  max-width: 832px;
`;

export const Styled = {
  PageContainer,
  MainContainer,
  ResultsHeader,
  SearchTitle,
  SearchAmount,
  ResultsContainer,
  FiltersContainer,
  ProductsContainer,
};
