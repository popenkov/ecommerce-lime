import styled, { css } from "styled-components";

import { flexCenter, font } from "@src/styles/mixins";
import { Link } from "react-router-dom";

const Product = styled.div`
  position: relative;
  width: 142px;
  padding: 10px;

  background-color: ${({ theme }) => theme.color.white};

  border-radius: 10px;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 115px;
    padding: 5px;
  }
`;

const LinkContainer = styled(Link)`
  display: block;
  text-decoration: none;
`;

const Photo = styled.img`
  width: 100%;
  height: 134px;
  margin-bottom: -5px;
  object-fit: contain;
  box-sizing: border-box;
  padding: 0 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 106px;
    margin-bottom: -7px;
  }
`;

const Title = styled.h2<{ color?: string }>`
  margin-bottom: 4px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: -1px;
    ${font({ size: "10", lineHeight: "12", fontWeight: "500" })};
  }
`;

const Price = styled.div`
  margin-bottom: 7px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const CurrentPrice = styled.span`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "11", lineHeight: "13", fontWeight: "700" })};
  }
`;

const NewPrice = styled.span`
  margin-right: 5px;
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.orange};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "11", lineHeight: "13", fontWeight: "700" })};
  }
`;

const OldPrice = styled.span`
  ${font({ size: "10", lineHeight: "12", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
  text-decoration: line-through;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "8", lineHeight: "10", fontWeight: "500" })};
  }
`;

const LinkToCard = styled(Link)`
  box-sizing: border-box;
  ${flexCenter};
  height: 34px;
  padding: 10px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.green};
  border-radius: 5px;
  text-decoration: none;
`;

export const Styled = {
  Product,
  LinkContainer,
  Photo,
  Title,
  Price,
  CurrentPrice,
  NewPrice,
  OldPrice,
  LinkToCard,
};
