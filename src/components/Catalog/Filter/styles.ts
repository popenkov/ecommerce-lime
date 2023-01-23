import { Link } from "react-router-dom";
import styled from "styled-components";

import { box, flexAlignCenter, flexCenter, font } from "@src/styles/mixins";

const Filter = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    z-index: 4;
    inset: 0;
    top: 132px;
    padding: 0 13px;
    padding-bottom: 50px;
    overflow-y: scroll;
    background-color: ${({ theme }) => theme.color.white};
  }
`;

const FilterContainer = styled.div`
  margin-bottom: 26px;
`;

const RangeSliderContainer = styled.div`
  margin: 8px 0 21px;
`;

const FilterLink = styled(Link)`
  display: block;
  ${font({ size: "14", lineHeight: "32", fontWeight: "600" })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.color.green};
  }
`;

const CheckboxContainer = styled.div`
  ${flexAlignCenter}
`;

const CheckboxAmount = styled.span`
  padding-bottom: 5px;
  margin-left: 4px;
  ${font({ size: "12", lineHeight: "32", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.greyFont};
`;

const MobileFilterButton = styled.button`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 26px);
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.green};
    border-radius: 5px;
    margin: 0 auto;
  }
`;

const MobileButtonIcon = styled.span`
  ${box(15)}
`;

const MobileButtonText = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;
const MobileButtonAmount = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
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

export const Styled = {
  MobileFilterButton,
  Filter,
  FilterContainer,
  RangeSliderContainer,
  FilterLink,
  CheckboxContainer,
  CheckboxAmount,
  MobileButtonIcon,
  MobileButtonText,
  MobileButtonAmount,
  MobileFilterButtons,
  MobileCancelButton,
  MobileSubmitButton,
};
