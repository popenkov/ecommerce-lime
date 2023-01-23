import styled from "styled-components";

import { flexAlignCenter, font } from "@src/styles/mixins";

const PopularItem = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 126px;
  padding: 4px 10px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
`;

const Image = styled.img`
  width: 29px;
  min-width: 29px;
  height: 50px;
  margin-right: 8px;
  object-fit: contain;
  object-position: center;
`;

const Description = styled.div``;

const Name = styled.h3`
  ${font({ size: "8", lineHeight: "10", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.7;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  box-orient: vertical;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const PriceTitle = styled.span`
  ${font({ size: "10", lineHeight: "12", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const PriceValue = styled.span`
  ${font({ size: "8", lineHeight: "10", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.5;
`;

const AddToCartBtn = styled.button`
  ${flexAlignCenter};
  padding: 2px 12px;
  background-color: ${({ theme }) => theme.color.green};
  border-radius: 10px;

  white-space: nowrap;
  ${font({ size: "8", lineHeight: "10", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

export const Styled = { PopularItem, Image, Description, Name, PriceContainer, PriceTitle, PriceValue, AddToCartBtn };
