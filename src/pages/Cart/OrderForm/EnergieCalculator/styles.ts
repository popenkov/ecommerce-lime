import styled from "styled-components";

import { font } from "@src/styles/mixins";

const EnergieCalculator = styled.div`
  padding: 16px 26px;
  background-color: ${({ theme }) => theme.color.greyLightBg};
  border-radius: 5px;
`;

const Title = styled.h3`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 18px;
`;

const ItemsContainer = styled.div`
  display: flex;
  gap: 61px;
`;

const EnergyItem = styled.div`
  display: flex;
  flex-direction: column;
  ${font({ size: "14", lineHeight: "14", fontWeight: "400" })};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const EnergyKey = styled.span`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.lightGrey};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const EnergyValue = styled.span`
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  EnergieCalculator,
  Title,
  ItemsContainer,
  EnergyItem,
  EnergyKey,
  EnergyValue,
};
