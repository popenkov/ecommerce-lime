import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { flexAlignCenter, flexCenter, font } from "@src/styles/mixins";

const Product = styled.div<{ width?: string }>`
  position: relative;
  width: 25%;

  box-sizing: border-box;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;

  ${({ width }) =>
    Boolean(width) &&
    css`
      width: 100%;
      max-width: ${width};
    `};

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(50% - 7px);
    padding: 5px;
  }
`;

const LinkContainer = styled(Link)`
  display: block;
  text-decoration: none;
`;

const PhotoContainer = styled.div`
  position: relative;
`;

const FavoritesButtonContainer = styled.span`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: -4px;
    left: 10px;
  }
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

const EnergieContainer = styled.div`
  ${flexAlignCenter};
  justify-content: space-between;
`;

const EnergyItem = styled.div`
  ${flexAlignCenter};
  ${font({ size: "8", lineHeight: "24", fontWeight: "400" })};
`;

const EnergyName = styled.span`
  color: ${({ theme }) => theme.color.lightGrey};
  margin-right: 3px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 3px;
  }
`;

const EnergyValue = styled.span`
  color: ${({ theme }) => theme.color.black};
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
  text-decoration-color: ${({ theme }) => theme.color.orange};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${font({ size: "8", lineHeight: "10", fontWeight: "500" })};
  }
`;

const LinkToCard = styled(Link)`
  width: 100%;
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
  PhotoContainer,
  FavoritesButtonContainer,
  Photo,
  Title,
  Price,
  CurrentPrice,
  NewPrice,
  OldPrice,
  LinkToCard,
  EnergieContainer,
  EnergyItem,
  EnergyName,
  EnergyValue,
};
