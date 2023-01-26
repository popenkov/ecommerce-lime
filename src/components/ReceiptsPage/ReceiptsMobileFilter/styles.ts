import styled from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const Container = styled.div``;

const CheckboxContainer = styled.div`
  ${flexAlignCenter}
`;

const CheckboxAmount = styled.span`
  padding-bottom: 5px;
  margin-left: 4px;
  ${font({ size: "12", lineHeight: "32", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.greyFont};
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

export const Styled = {
  Container,
  CheckboxContainer,
  CheckboxAmount,
  FilterContainer,
};
