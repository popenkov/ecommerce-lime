import styled from "styled-components";

import { flexCenter, font } from "@src/styles/mixins";

const PageContainer = styled.main`
  display: flex;
  gap: 20px;

  padding-left: 20px;
  max-width: 1673px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 125px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 1280px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
  }
`;
const MainContainer = styled.div`
  flex: 1;
  width: calc(100% - 341px);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: calc(100% - 220px);
  }

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
    margin: 37px 13px 18px;
    display: flex;
    flex-direction: column;
  }
`;

const SearchTitle = styled.span`
  margin-right: 14px;
  ${font({ size: "24", lineHeight: "29", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;
const SearchAmount = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 0;
    margin: 0;
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const FilterContainer = styled.div`
  width: 98%;
  display: flex;
  gap: 16px;
  margin-bottom: 23px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 0;
    margin: 0;
  }
`;

const ReceiptsContainer = styled.div``;

export const Styled = {
  PageContainer,
  MainContainer,
  ResultsHeader,
  SearchTitle,
  SearchAmount,
  ResultsContainer,
  FilterContainer,
  FiltersContainer,
  ReceiptsContainer,
};
