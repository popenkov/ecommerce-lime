import { box, flexAlignCenter, font } from "@src/styles/mixins";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { boolean } from "yup";

const Filter = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
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
};
