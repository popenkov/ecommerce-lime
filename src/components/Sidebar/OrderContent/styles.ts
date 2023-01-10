import { flexCenter, flexColumnCenter, font } from "@src/styles/mixins";
import styled from "styled-components";

const Content = styled.div`
  ${flexColumnCenter};
  padding: 6px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const AddedItemsContainer = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const PopularItemsContainer = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const Notification = styled.div`
  ${font({ size: "6", lineHeight: "7", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
`;

export const Styled = { Content, AddedItemsContainer, PopularItemsContainer, Notification };
