import styled from "styled-components";

import { font } from "@src/styles/mixins";

const SectionContainer = styled.section`
  width: 100%;
  max-width: 728px;
  margin: 0 auto;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const SortContainer = styled.div``;

const HistoryContainer = styled.section``;

export const Styled = {
  SectionContainer,
  HistoryContainer,
  SortContainer,
};
