import styled from "styled-components";

import { box, flexAlignCenter, flexCenter, font } from "@src/styles/mixins";

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
    margin-top: 111px;
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
    margin: -21px 10px 15px;
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
  gap: 16px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
  }
`;

const MobileFiltersContainer = styled.div`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: block;
    position: fixed;
    z-index: 6;
    inset: 0;
    top: 78px;
    padding: 13px 13px 50px;
    overflow-y: scroll;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.color.white};
  }
`;

const FilterContainer = styled.div`
  width: 98%;
  display: flex;
  flex: 1;

  margin-bottom: 23px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 6px;
  }
`;

const MobileFilterButton = styled.button`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: calc(100% - 26px);
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: 26px;
    padding: 6px 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
    color: ${({ theme }) => theme.color.black};
  }
`;

const ShevronIcon = styled.span`
  margin-left: 10px;
  & svg {
    width: 6px;
    height: 10px;
    transform: rotateZ(-90deg);
  }
  & path {
    fill: ${({ theme }) => theme.color.green};
  }
`;

const MobileButtonText = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const MobileFilterButtons = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    top: auto;

    max-width: 320px;
    margin: 0 auto;
    display: flex;
    gap: 11px;
    align-items: center;
    justify-content: space-between;
  }
`;

const MobileCancelButton = styled.button`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${box(40)};
    ${flexCenter};
    box-sizing: border-box;

    background-color: ${({ theme }) => theme.color.orange};
    color: ${({ theme }) => theme.color.white};
    ${font({ size: "26", lineHeight: "34", fontWeight: "400" })};
    border-radius: 5px;
    margin: 0 auto;
  }
`;

const MobileSubmitButton = styled.button`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 1;
    ${flexCenter};
    width: auto;
    box-sizing: border-box;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.green};
    border-radius: 5px;
    margin: 0 auto;
  }
`;

const ReceiptsContainer = styled.div``;

const CheckboxContainer = styled.div`
  ${flexAlignCenter}
`;

const CheckboxAmount = styled.span`
  padding-bottom: 5px;
  margin-left: 4px;
  ${font({ size: "12", lineHeight: "32", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.greyFont};
`;

export const Styled = {
  PageContainer,
  MainContainer,
  ResultsHeader,
  SearchTitle,
  SearchAmount,
  ResultsContainer,
  FilterContainer,
  MobileFiltersContainer,
  FiltersContainer,
  ReceiptsContainer,
  MobileSubmitButton,
  MobileCancelButton,
  MobileFilterButtons,
  MobileButtonText,
  MobileFilterButton,
  CheckboxContainer,
  CheckboxAmount,
  ShevronIcon,
};
