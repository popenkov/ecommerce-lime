import { Link } from "react-router-dom";
import styled from "styled-components";

import { font } from "@src/styles/mixins";

const PageContainer = styled.main`
  display: flex;
  gap: 20px;

  padding-left: 20px;
  max-width: 1673px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 126px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 1280px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    margin-top: 117px;
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

const SectionHeader = styled.div`
  margin-left: 10px;
  margin-top: -12px;
  margin-bottom: 19px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 20px 13px 34px;
  }
`;

const SectionTitle = styled.h2`
  margin-right: 14px;
  margin-top: 37px;
  margin-left: 11px;
  ${font({ size: "24", lineHeight: "29", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 0;
    margin: 0;
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

const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: -13px;
  margin-bottom: 232px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 0;
    margin: 0;
  }
`;

const NewsItemContainer = styled.div`
  width: calc(25% - 26px);

  margin: 19px 13px;
`;

export const Styled = {
  PageContainer,
  MainContainer,
  SectionHeader,
  SectionTitle,
  ContentContainer,
  FilterContainer,
  NewsContainer,
  NewsItemContainer,
};
