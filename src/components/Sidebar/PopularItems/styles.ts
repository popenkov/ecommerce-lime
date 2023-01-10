import { flexCenter, flexColumnCenter, font } from "@src/styles/mixins";
import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

const PopularContainer = styled.div`
  margin-bottom: 10px;
`;

const PopularTitle = styled.h3`
  margin-bottom: 8px;
  ${font({ size: "6", lineHeight: "7", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const PopularItems = styled(PerfectScrollbar)`
  display: flex;
  gap: 4px;
  flex-wrap: nowrap;
  overflow-x: scroll;
  width: 200px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = { PopularContainer, PopularItems, PopularTitle };
