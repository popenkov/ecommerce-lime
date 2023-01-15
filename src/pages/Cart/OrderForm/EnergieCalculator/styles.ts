import { font } from "@src/styles/mixins";
import styled from "styled-components";

const EnergieCalculator = styled.div`
  padding: 13px 26px;
  background-color: ${({ theme }) => theme.color.greyLightBg};
  border-radius: 5px;
`;

const Title = styled.h3`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 18px;
`;

const ItemsContainer = styled.div``;

const EnergyItem = styled.div``;

export const Styled = {
  EnergieCalculator,
  Title,
};
