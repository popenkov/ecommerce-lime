import { Link } from "react-router-dom";
import styled from "styled-components";

import { flexCenter, flexColumnCenter, font } from "@src/styles/mixins";

const Container = styled.div`
  ${flexColumnCenter};
  gap: 40px;
`;

const GreetingsContainer = styled.div`
  ${flexColumnCenter};
  width: 100%;
  box-sizing: border-box;
  max-width: 200px;
  padding: 10px 32px;
  border-radius: 0px 0px 10px 10px;
  background-color: ${({ theme }) => theme.color.white};

  ${font({ size: "14", lineHeight: "17", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
`;

const GreetingsName = styled.span`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const EmptyCartContainer = styled.div`
  ${flexColumnCenter};
  padding: 0 14px;
`;

const EmptyCartText = styled.span`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.3;
`;

const CatalogContainer = styled.div`
  ${flexColumnCenter};
  padding: 0 14px;
`;

const CatalogButton = styled(Link)`
  ${flexCenter};
  margin-bottom: 10px;
  padding: 13px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
`;

const CatalogText = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.3;
  text-align: center;
`;

const RecentOrderContainer = styled.div`
  ${flexColumnCenter};
  padding: 0 14px;
`;

const RecentOrderButton = styled(Link)`
  ${flexCenter};
  margin-bottom: 10px;

  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.7;
`;

const RecentOrderText = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.3;
  text-align: center;
`;

export const Styled = {
  Container,
  GreetingsContainer,
  GreetingsName,
  EmptyCartContainer,
  EmptyCartText,
  CatalogContainer,
  CatalogButton,
  CatalogText,
  RecentOrderContainer,
  RecentOrderButton,
  RecentOrderText,
};
